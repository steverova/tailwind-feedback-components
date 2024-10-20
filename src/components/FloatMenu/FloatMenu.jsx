import { useState, useEffect } from 'react'
import { House, Menu, Pointer, BookOpen, Wrench } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const style = 'text-slate-200 group-hover:text-white'
const size = 20

const MenuItem = ({ icon, name, path, isActive, onClick }) => {
  return (
    <div
      key={name}
      className={`group hover:bg-emerald-800/90 rounded-[18px] p-2 min-w-16 ${
        isActive ? 'bg-emerald-800/90' : ''
      }`}>
      <a
        href={path}
        type='button'
        className='flex flex-col items-center group'
        onClick={onClick}>
        {icon}
        <small
          className={`text-slate-200 font-semibold group-hover:text-white text-xs ${
            isActive ? 'text-white' : ''
          }`}>
          {name}
        </small>
      </a>
    </div>
  )
}

const FloatMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [activeMenu, setActiveMenu] = useState(
    localStorage.getItem('activeMenu') || 'Menu'
  )
  const navigate = useNavigate()

  const navigation = [
    {
      name: 'Menu',
      icon: (
        <Menu
          size={size}
          className={style}
        />
      )
    },
    {
      name: 'Demo',
      path: '/pages/notification#demo',
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
      icon: (
        <BookOpen
          size={size}
          className={style}
        />
      )
    }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  // Función para manejar el cambio de menú
  const handleMenuClick = (name) => {
    setActiveMenu(name)
    localStorage.setItem('activeMenu', name) // Guardar en localStorage
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
                    isActive={activeMenu === item.name} // Comparar con el estado actual
                    onClick={() => handleMenuClick(item.name)} // Cambiar menú activo
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
