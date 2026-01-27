import { Link } from "react-router-dom";
import Container from "./Container";
import { useState } from "react";
import { HomeIcon, Menu, XIcon } from "lucide-react";

function NavItem({ children }) {
  return(
    <li className="border border-amber-50 py-4 px-4 border-b border-b-indigo-200 hover:scale-105 hover:bg-indigo-400 hover:text-fuchsia-50">
      {children}
    </li>
  )
}
export default function MainLayout({ children }) {
  const [isClose , setIsClose] = useState(true)

  return (
    <main className="bg-bg">
      <nav className="w-full bg-primary text-text-inverse text-xl flex items-center capitalize">
        <Container className="flex justify-between w-full">

          <button className="capitalize" onClick={()=>setIsClose(!isClose)}>
            <Menu/>
          </button>
          <section hidden={isClose} className="absolute z-10 top-0 bottom-0 left-0 transition w-10/12 bg-gray-50 text-indigo-950 text-[18px] font-bold shadow-2xs border-e-gray-200 border-e overflow-hidden">
            <span onClick={()=>setIsClose(!isClose)}>
              <XIcon></XIcon>
            </span>
            <ul className="flex flex-col h-full">
              <NavItem><Link to="/"><HomeIcon></HomeIcon> home</Link></NavItem>
            </ul>
          </section>



          <div className="flex gap-4">
            <Link to="/Cart">cart</Link>
            <Link to="/shop">shop</Link>
          </div>
        </Container>
      </nav>
      <Container className="py-20">
        {children}
      </Container>
    </main>
  )
}