export function LogoCard({ logo }) {
  return (
    <div className="shrink-0 flex flex-col lg:flex-row gap-1 items-center justify-center px-6 py-2 xl:flex-1 bg-bg-muted rounded-md snap-start">
      <img className="w-8 rounded-xl object-contain" src={logo?.icon} alt="" />
      <h4 className="text-md font-bold">{logo?.title}</h4>
    </div>
  )
}