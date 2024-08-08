import React from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import Magnetic from './Magnetic';
import '../App.css';

export default function Content() {
    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (1000 / 15); // Adjust 300 for the duration and 15 for the smoothness
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    return (
        <div className='bg-[#2D2D2D] h-full w-full flex'>
            <div className='h-full py-20 text-white w-[70vw] max-md:w-[62vw]'  style={{ borderRight: '3px solid #484848' }}>
                <div className='flex w-full '>
                    <div className='h-[60vh] px-6 w-[35vw] max-md:text-6xl max-md:w-[10vw]   text-9xl flex flex-col'>
                        <h1>Let's</h1>
                        <h1>work</h1>
                        <h1>together</h1>
                    </div>
                    <div className='w-full flex justify-end max-md:my-[27vh] '>
                        <div className='w-[160px] text-right px-2 text-3xl  flex flex-col  gap-3'>
                            <Magnetic>
                                <h1 className='cursor-pointer interactive'>
                                    <a href="https://www.linkedin.com/in/jatinkunvar/" target="_blank" rel="noopener noreferrer">
                                        LINKEDIN
                                    </a>
                                </h1>
                            </Magnetic>
                            <Magnetic>
                                <h1 className='cursor-pointer interactive'><a href="https://t.me/Jatin0083">TELEGRAM</a></h1>
                            </Magnetic>
                            <Magnetic>
                                <h1 className='cursor-pointer'>
                                    <a href="https://github.com/Jatin083" target="_blank" rel="noopener noreferrer">
                                        GITHUB
                                    </a>
                                </h1>
                            </Magnetic>
                            <Magnetic>
                                <h1 className='cursor-pointer'>
                                    <a href="mailto:jatinsingh32063@gmail.com">
                                        EMAIL ME
                                    </a>
                                </h1>
                            </Magnetic>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row relative max-md:absolute justify-between h-[30vh] '>
                    <div className='w-[30vw] text-2xl max-lg:my-0 relative my-32 px-6 h-10'>
                        <h1 className='absolute bottom-0'>Copyright ©2024 Jk</h1>
                    </div>
                    <div className='w-[30vw] text-3xl relative text-right flex justify-end my-32  max-lg:my-5 px-6 h-10'>
                        <h1 className='absolute bottom-0 px-14  '>MADE WITH 💝 IN </h1>
                        <div className='w-12'>
                            <img src="https://res.cloudinary.com/dkgv8ynjp/image/upload/v1723088120/reedb4ctodxwelykxvh9.png" alt="India Flag" />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='h-full w-[30vw]  flex flex-col'>
                <div
                    className='h-[50vh] text-[25vw] flex text-white  max-md:w-[40vw]  font-normal justify-center items-center cursor-pointer'
                    style={{ borderBottom: '3px solid #484848' }}
                    onClick={scrollToTop}
                >
                    <IoIosArrowRoundUp />
                </div>
                <div className='flex justify-center items-center max-md:px-5 max-md:w-[40vw] h-full'>
                    <div
                        style={{ border: '3px solid #484848' }}
                        className='h-[35vh] w-[35vh] rounded-full overflow-hidden max-md:h-[15vh] max-md:w-[50vw] bg-[#29272C] flex justify-center items-center'
                    >
                        <video
                            src="https://res.cloudinary.com/dkgv8ynjp/video/upload/v1723088174/dd5fggyyt3zxjferpyzd.mp4"
                            className='w-full h-full object-cover mix-blend-normal'
                            muted
                            loop
                            autoPlay
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
