import { useState } from 'react'


export default function Header() {
    const [modeLight, setModeLight] = useState(true)

    const handleThemeChange = () => {
        setModeLight(!modeLight)
        if (modeLight) {
            document.body.classList.add('light')
        } else {
            document.body.classList.remove('light')
        }
    }
    return (
        <header className=' light:bg-light-TopBGPattern light:text-light-text bg-VeryDarkBlueTopBGPattern text-white px-5 pb-24 rounded-b-3xl lg:h-[250px]'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center max-w-6xl mx-auto'>
            <div className='mt-8'>
                <h1 className='font-bold text-[30px] text-WhiteText light:text-DarkTextlight'>Social Media Dashboard</h1>
                <p className='font-bold text-DesaturatedBlueTextdark light:text-light-text'>Total Followers: 23,004</p>
                <div className='border-b-1 border-DesaturatedBlueTextdark light:border-DarkTextlight w-full mb-4 mt-6 md:hidden'></div>
            </div>
            <div className='flex justify-between md:gap-4'>
                <p className='font-bold text-DesaturatedBlueTextdark light:text-light-text'>Dark Mode</p>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" value="" onChange={handleThemeChange} />
                    <div
                        className="group peer bg-linear-to-r from-toggle-dark to-toggle-dark-1 rounded-full duration-300 w-16 h-8 
    after:duration-300 after:bg-DarkDesaturatedBlueCardBG peer-checked:after:bg-white peer-checked:bg-Toggle-light peer-checked:bg-none 
    after:rounded-full after:absolute after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"
                    ></div>
                </label>

            </div>
            </div>
            
        </header>
    )
}
