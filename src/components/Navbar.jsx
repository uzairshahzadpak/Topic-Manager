import Link from "next/link"

export default function Navbar () {
  return(
    <nav className="flex justify-between items-center 
    bg-slate-800 px-8 py-3">
      <Link href='/' className="text-white font-bold">Gt Coding</Link>
      <Link href='/addtopic' className="bg-white text-black p-2">Add Topic</Link>

    </nav>
  )
}
