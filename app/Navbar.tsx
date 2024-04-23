'use client'
import React from 'react'
import Link from 'next/link'
import { Bug } from 'lucide-react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const currentPath = usePathname();
  
    const links = [{id:1, label:'Dashboard', href:'/dashboard'}, {id:2, label:'Issues', href:'/issues/view'}]
  return (
    <header className='mx-4 border-b py-2'>
        <nav className='flex gap-4 items-center'>
        <Link href="/"><Bug /></Link>

        <ul className='flex items-center gap-4'>
        {links.map((item)=>(
            <li key={item.id}><Link href={item.href} className={classNames({
                "text-gray-900": currentPath === item.href,
                "text-gray-500":currentPath !== item.href,
                "hover:text-purple-800 transition-all": true
            })}>{item.label}</Link></li>
        ))}
        </ul>
        </nav> 
    </header>
  )
}

export default Navbar