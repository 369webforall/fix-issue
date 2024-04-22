import React from 'react'
import Link from 'next/link'
import { Bug } from 'lucide-react'
const Navbar = () => {
    const links = [{id:1, label:'Dashboard', href:'/dashboard'}, {id:2, label:'Issues', href:'/issues/view'}]
  return (
    <header className='mx-4 border-b py-2'>
        <nav className='flex gap-4 items-center'>
        <Link href="/"><Bug /></Link>

        <ul className='flex items-center gap-4'>
        {links.map((item)=>(
            <li key={item.id}><Link href={item.href}>{item.label}</Link></li>
        ))}
        </ul>
        </nav>
    </header>
  )
}

export default Navbar