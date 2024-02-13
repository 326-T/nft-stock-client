export default function ResponsiveContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='
        w-full px-5
        md:px-10
        lg:px-20
        xl:px-32
      '
    >
      {children}
    </div>
  )
}
