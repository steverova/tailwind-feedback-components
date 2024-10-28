import { useState, useEffect } from 'react'
import { Pointer, BookOpen, Wrench } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Home } from 'lucide-react'
import Button from '../Button/Button'

const style = 'text-slate-200 group-hover:text-white transition-colors duration-300' // Añadida transición
const size = 20

const MenuItem = ({ icon, name, path, isActive, onClick }) => {
  return (
    <div
      key={name}
      className={`group hover:bg-emerald-800/90 rounded-[18px] p-2 min-w-16 transition-all duration-300 ${
        isActive ? 'bg-emerald-800/90' : ''
      }`}> {/* Transición agregada para cambiar de fondo */}
      <a
				href={path}
        type='button'
        className='flex flex-col items-center group'
        onClick={onClick}>
        {icon}
        <small
          className={`text-slate-200 font-semibold group-hover:text-white text-xs transition-colors duration-300 ${
            isActive ? 'text-white' : ''
          }`}> {/* Transición añadida para el cambio de color del texto */}
          {name}
        </small>
      </a>
    </div>
  )
}

const FloatMenu = () => {
  const [activeMenu, setActiveMenu] = useState('Menu')
  const navigate = useNavigate()

  const navigation = [
    {
      name: 'Home',
      path: '/',
      icon: (
        <Home
          size={size}
          className={style}
        />
      )
    },
    {
      name: 'Demo',
      path: '/pages/notification#demo',
      sectionId: 'demo',
      icon: (
        <Pointer
          size={size}
          className={style}
        />
      )
    },
    {
      name: 'Usage',
      path: '/pages/notification#usage',
      sectionId: 'usage',
      icon: (
        <Wrench
          size={size}
          className={style}
        />
      )
    },
    {
      name: 'Docs',
      path: '/pages/notification#documentation',
      sectionId: 'documentation',
      icon: (
        <BookOpen
          size={size}
          className={style}
        />
      )
    }
  ]

  const handleScroll = () => {
    const sections = document.querySelectorAll('section')

    window.onscroll = () => {
      const top = window.scrollY

      for (const section of sections) {
        const offset = section.offsetTop - 100
        const height = section.offsetHeight
        const id = section.getAttribute('id')

        if (top >= offset && top < offset + height) {
          const activeItem = navigation.find((item) => item.sectionId === id)
          if (activeItem) {
            setActiveMenu(activeItem.name)
          }
        }
      }
    }
  }

  useEffect(() => {
    handleScroll()
  }, [])

  const handleMenuClick = (name, path) => {
    setActiveMenu(name)
    navigate(path)
  }

  return (
    <>
      <nav
        className='~pb-6/10 pointer-events-none fixed bottom-2 left-0 z-10 w-full pt-12 mx-1'
        id='nav'>
        <div className='bg-mask-white dark:bg-mask-zinc-950 absolute bottom-0 left-0 right-0 h-[13rem] w-full ' />
        <div className='flex justify-center'>
          <div className='max-w-full rounded-[1.375rem] inset-0 bg-black bg-opacity-50 backdrop-blur-md'>
            <div className='scrollbar-none pointer-events-auto overflow-x-auto scroll-smooth rounded-[inherit] p-1.5'>
              <div className='flex gap-3'>
                {navigation.map((item) => (
                  <MenuItem
                    key={item.name}
                    path={item.path}
                    name={item.name}
                    icon={item.icon}
                    isActive={activeMenu === item.name}
                    onClick={() => handleMenuClick(item.name, item.path)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default FloatMenu
