'use client'

import { ResumeRequest, resumeRequestInit } from '@/types/resume'
import { useEffect, useState } from 'react'
import TextArea from '@/components/TextArea'
import { getMine, patchResume, postResume } from '@/services/resumeApi'
import Image from 'next/image'
import { PiUserSquareDuotone } from 'react-icons/pi'
import { ethers } from "ethers"

export default function EntryForm() {
  const [resumeRequest, setResumeRequest] = useState<ResumeRequest>(resumeRequestInit)
  const [isFirstPost, setIsFirstPost] = useState<boolean>(true)

  const issueRecruitRight = async () => {
    // const apiKey = process.env.REACT_APP_SEPOLIA_API_KEY_URL
    const apiKey = "https://eth-sepolia.g.alchemy.com/v2/WSFIHmg3YapiAmqPMNdPbURMhUio2AFc"
    const sepoliaProvider = new ethers.JsonRpcProvider(apiKey)
    const contractAddress = "0x7328a0952BE679C17B83050B5edF407F7efc507c"
    
    const abi = [
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "_price",
                  "type": "uint256"
              }
          ],
          "name": "issueRecruitRight",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      }
    ];

    // const privateKey = process.env.REACT_APP_WALLET_PRIVATE_KEY
    const privateKey = "[ウォレットの秘密鍵]"
    if (!privateKey) {
      console.error('Error: PRIVATE_KEY is missing')
      return
    }

    const signer = new ethers.Wallet(privateKey, sepoliaProvider)

    // Connect to the deployed contract with a signer (which will allow state-changing operations like "send")
    const contract = new ethers.Contract(contractAddress, abi, signer)

    // Define value of _price
    const _price = ethers.parseUnits('0.01', 'ether')

    // Call issueRecruitRight function from the contract
    const tx = await contract.issueRecruitRight(_price)
    console.log(tx)

    const receipt = await tx.wait()
    console.log(receipt)
  }

  const postResumeRequest = () => {
    issueRecruitRight()
    isFirstPost
      ? postResume(resumeRequest)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      : patchResume(resumeRequest)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
  }

  useEffect(() => {
    getMine().then((res) => {
      if (res.data[0]) {
        setResumeRequest(res.data[0])
        setIsFirstPost(false)
      }
    })
  }, [])

  useEffect(() => {
    console.log('resumeRequest', resumeRequest)
  }, [resumeRequest])

  return (
    <div className='block'>
      <div className='block md:flex justify-center w-full'>
        <div
          className='
            w-full md:w-1/4
            py-5 px-10 md:py-10
            space-y-5 md:space-y-10
          '
        >
          <div className='flex w-full justify-center'>
            {resumeRequest.picture ? (
              <Image
                src={resumeRequest.picture}
                alt={''}
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
              />
            ) : (
              <PiUserSquareDuotone
                width={0}
                height={0}
                size='100vw'
                style={{ width: '100%', height: 'auto' }}
              />
            )}
          </div>
          <div className='flex justify-center'>
            <input type='file' className='file-input w-full max-w-xs' />
          </div>
        </div>
        <div
          className='
            w-full md:w-2/4
            py-5 px-10 md:py-10
            space-y-5 md:space-y-10
          '
        >
          <TextArea
            label='経歴'
            value={resumeRequest.education}
            setValue={(value) => setResumeRequest((prev) => ({ ...prev, education: value }))}
          />
          <TextArea
            label='経験'
            value={resumeRequest.experience}
            setValue={(value) => setResumeRequest((prev) => ({ ...prev, experience: value }))}
          />
          <TextArea
            label='スキル・資格'
            value={resumeRequest.skills}
            setValue={(value) => setResumeRequest((prev) => ({ ...prev, skills: value }))}
          />
          <TextArea
            label='興味・関心'
            value={resumeRequest.interests}
            setValue={(value) => setResumeRequest((prev) => ({ ...prev, interests: value }))}
          />
          <TextArea
            label='参照URL'
            value={resumeRequest.urls}
            setValue={(value) => setResumeRequest((prev) => ({ ...prev, urls: value }))}
          />
        </div>
      </div>
      <div
        className='
          fixed bottom-0 md:static
          md:flex md:justify-center
          w-full
        '
      >
        <button
          className='
            btn
            rounded-none md:rounded-full
            w-full md:w-1/5
          '
          onClick={postResumeRequest}
        >
          <p className='title-small'>募集開始</p>
        </button>
      </div>
    </div>
  )
}
