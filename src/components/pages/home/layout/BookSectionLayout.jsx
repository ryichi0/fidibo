export default function BookSectionLayout({ data, children }) {
  return (
    <div className="">
      <header className="flex flex-col gap-2 mb-6">
        <h2 className="text-xl md:text-2xl text-text">{data?.title}</h2>
        <p className="text-sm text-text-secondary font-light">{data?.subtitle}</p>
      </header>
      {children}
    </div>
  )
}