import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, Line, ColorMapping, Editor } from './pages';
import './App.css';

const app = () => {
    let activeMenu = true;

  return (
    <div>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
                    <TooltipComponent content="Settings" position="Top">
                        <button type='buttoon' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background: "blue", borderRadius: "50%"}}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                { activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        Sidebar
                    </div>
                ) : (
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        Sidebar 
                    </div>
                )}
                <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        Navbar
                    </div>
                </div>


                <div>
                    <Routes>
                        {/* Dashboard */}
                        <Route path="/" element={<Ecommerce />} />
                        <Route path="/ecommerce" element={<Ecommerce />} />

                        {/* Pages */}
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/employees" element={<Employees />} />
                        <Route path="/customers" element={<Customers />} />

                        {/* Apps */}
                        <Routes path="/kanbar" element={<Kanban />} />
                        <Routes path="/editor" element={<Editor />} />
                        <Routes path="/calender" element={<Calendar />} />
                        <Routes path="/color-picker" element={<ColorPicker />} />

                        {/* Charts */}
                        <Routes path="/line" element={<Line />} />
                        <Routes path="/area" element={<Area />} />
                        <Routes path="/bar" element={<Bar />} />
                        <Routes path="/pie" element={<Pie />} />
                        <Routes path="/financial" element={<Financial />} />
                        <Routes path="/color-mapping" element={<ColorMapping />} />
                        <Routes path="/pyramid" element={<Pyramid />} />
                        <Routes path="/stacked" element={<Stacked />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default app