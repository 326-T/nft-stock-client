export default function StickyHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='
        sticky top-[65px]
        z-10
        w-full py-2
        bg-white border-b-2
      '
    >
      {children}
    </div>
  )
}
