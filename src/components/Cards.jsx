import React from 'react';

const Cards = () => {
    const handleClick1 = () =>{
        window.location.href = "https://ochi-jatin.vercel.app/";
    };

    const handleClick2 = () => {
        window.location.href = "https://jatinkunvar.vercel.app/";
    };
    return (
        <><div className='max-md:flex max-md:flex-col max-md:h-full  bg-orange-300'>
            <div className='bg-gray-400 transition-all hover:shadow-xl  brightness-50 hover:brightness-100 cursor-pointer' onClick={handleClick1}>
                <div className='h-[60vh] w-[35vw] rounded-[20px] absolute  my-[7vh] mx-32  max-md:w-[90vw] max-md:object-cover max-md:overflow-visible  max-md:mx-7  object-cover object-center   overflow-hidden'>
                    <img src="https://res.cloudinary.com/dkgv8ynjp/image/upload/v1723088230/drq8m5hjdym2unvdhvdy.jpg" alt="" className='max-md:h-[30vh] h-[60vh] w-full max-md:px-[1vw] object-cover border-2 rounded-[20px] border-gray-700 object-center' />
                </div>
                <div className=' w-[38vw] mx-[9vw] my-[68vh] max-sm:w-[80vw] max-md:my-[39vh] absolute'>
                    <h1 className='text-[4vw] max-md:text-5xl'>Ochi Clone</h1>
                    <h3 className='text-[20px] max-md:my-3'>Website, React, Tailwind CSS,Framer Motion, GSAP, and Locomotive Scroll</h3>
                </div>
            </div>

            <div className='bg-gray-400 transition-all  hover:shadow-xl brightness-50 max- hover:brightness-100 cursor-pointer' onClick={handleClick2}>
                <div className='h-[60vh] w-[35vw]  my-[55vh] flex justify-center items-center  absolute mx-[55vw] max-md:my-[70vh] max-md:h-[39vh] max-md:w-[90vw] max-md:mx-7  rounded-[20px] border-2  border-gray-700 bg-black'>
                    <h1 className='font-extralight text-[20vh] absolute '>JK</h1>


                </div>
                <div className=' w-[38vw] mx-[55vw] my-[116vh] max-md:my-[112vh] max-md:mx-7  max-md:w-[80vw] absolute'>
                    <h1 className='text-[4vw] max-md:text-5xl'>Portfolio</h1>
                    <h3 className='text-[20px] max-md:my-3'>Website, React, Tailwind CSS,Framer Motion, GSAP, and Locomotive Scroll</h3>
                </div>
            </div>
        </div>

        </>
    );
}

export default Cards;
