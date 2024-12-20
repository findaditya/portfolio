import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';

export const HeroSection = () => {
  console.log(ArrowDown);
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`,
      }}></div>
      <div className="hero-ring size-[620px]"></div>
      <div className="hero-ring size-[820px]"></div>
      <div className="hero-ring size-[1020px]"></div>
      <div className="hero-ring size-[1220px]"></div>
      <div className="container">
        <div className="flex flex-col items-center">
        <Image src={memojiImage} className="size-[100px]" alt='Person peeking form behind laptop' />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full"></div>
          <div className="text-sm font-medium">Available for new projects</div>
        </div>
        </div>
        <div className="max-w-lg mx-auto">
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-center mt-8 tracking-wide">
          Building Exceptional User Experiences
        </h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">I specialize in transforming designs into functional, high-performming web applications. Let&#39;s discuss your enxt project.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work </span>
            <ArrowDown className="size-4"/>
          </button>
          <button className="inline-flex items-center gap-2 border border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&#39;s Connect</span>
          </button>
        </div>
      </div>
    </div>);
};
