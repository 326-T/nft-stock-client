export default function ResponsiveContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='
        w-full py-5 px-5
        md:p-10
        lg:px-20
        xl:px-32
      '
    >
      {children}
    </div>
  )
}
