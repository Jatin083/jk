import React, { useState } from 'react';
import AnimatedText from './AnimatedText'; // Adjust the path as necessary

const Header = () => {
    const [showDeveloperText, setShowDeveloperText] = useState(false);

    const handleComplete = () => {
        setShowDeveloperText(true);
    };

    return (
        <div className='h-[89vh] w-full  flex justify-center'>
            <div className='h-80 w-full  max-lg:my-[28vh] lg:w-[50vw] my-[13%]'>
                <div>
                    <div className='max-lg:h-[13vh] h-[17vh] items-baseline   mx-[15vw] max-lg:text-[10vh] lg:text-start max-lg:h-22   text-[1vw] lg:text-[7vw] flex justify-center  w-auto lg:w-[16vw]'>
                        <AnimatedText phrases={["Jatin"]} onComplete={handleComplete} />
                    </div>
                </div>
                <div className='mx-auto lg:mx-[22vw] justify-items-start h-[17vh]  items-center max-lg:px-[30vw] max-lg:text-[8vh]  max-lg:h-[10vh] text-[7vw] lg:text-[7vw] flex flex-nowrap px-5  w-auto lg:w-[23vw]'>
                    <h1 className='interactive'>
                        <AnimatedText phrases={["Kunvar"]} onComplete={handleComplete} />
                    </h1>
                </div>
                <div>
                    <div className='w-auto lg:w-[12vw]  max-lg my-2 max-lg:px-[38vw] mx-auto  lg:mx-[23vw] font-thin'>
                        {showDeveloperText && <AnimatedText phrases={["Front-End Developer"]} animationDirection="left" />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
