'use client'

import { useEffect, useState } from 'react'

export default function TokenTable({
  data,
  onDeleteClick,
}: {
  data: string[]
  onDeleteClick: (ids: string[]) => void
}) {
  const [tokens, setTokens] = useState<
    {
      token: string
      selected: boolean
    }[]
  >([])

  useEffect(
    () =>
      setTokens(
        data.map((token) => ({
          token,
          selected: false,
        })),
      ),
    [data],
  )

  return (
    <div className='block'>
      <button
        className='btn btn-red'
        onClick={() => {
          onDeleteClick(tokens.filter((t) => t.selected).map((t) => t.token))
        }}
      >
        Delete
      </button>
      <table className='table table-zebra'>
        <thead>
          <tr>
            <th>
              <input
                type='checkbox'
                onChange={(e) => {
                  setTokens(
                    tokens.map((token) => ({
                      ...token,
                      selected: e.target.checked,
                    })),
                  )
                }}
              />
            </th>
            <th>Token</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token.token}>
              <td>
                <input
                  type='checkbox'
                  checked={token.selected}
                  onChange={(e) => {
                    setTokens(
                      tokens.map((t) =>
                        t.token === token.token
                          ? {
                              ...t,
                              selected: e.target.checked,
                            }
                          : t,
                      ),
                    )
                  }}
                />
              </td>
              <td>{token.token}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
