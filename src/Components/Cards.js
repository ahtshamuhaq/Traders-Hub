import React, { useState, useEffect } from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '-50% 0px', threshold: 0 }
    );

    const cardsElement = document.getElementById('cards');
    if (cardsElement) {
      observer.observe(cardsElement);
    }

    return () => {
      if (cardsElement) {
        observer.unobserve(cardsElement);
      }
    };
  }, []);

  return (
    <div className="w-full py-[13rem] px-4 bg-transparent " id="cards">
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12">
        <div
          className={`bg-white w-full shadow-xl flex flex-col p-4 my-4  hover:bg-purple-800 hover:text-white hover:scale-105 duration-300 rounded-lg transition-transform ${
            isInView ? 'translate-x-0' : '-translate-x-full'
          } duration-1000`}
        >
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Premium Discord</h2>
          <p className="text-center text-4xl font-bold">$20</p>
          <div className="text-center font-bold">
            <p className="py-2 border-b mx-8 mt-8">Trade setups</p>
            <p className="py-2 border-b mx-8">Market Updates</p>
            <p className="py-2 border-b mx-8">Learning material</p>
            <p className="py-2 border-b mx-8">Like minded Community</p>
          </div>
          <button className= " hover:bg-white hover:text-black bg-purple-500 w-[200px] text-white  rounded-md font-bold my-6 mx-auto px-6 py-3">
            Get Started
          </button>
        </div>

        <div
          className={`bg-white hover:bg-purple-800 hover:text-white   w-full shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-300 rounded-lg transition-transform ${
            isInView ? 'translate-x-0' : 'translate-x-full'
          } duration-1000`}
        >
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Live Batches</h2>
          <p className="text-center text-4xl font-bold">$50</p>
          <div className="text-center font-bold">
            <p className="py-2 border-b mx-8 mt-8">Technical analysis</p>
            <p className="py-2 border-b mx-8">Fundamental analysis</p>
            <p className="py-2 border-b mx-8">Fibonacci, Harmonics and smc</p>
            <p className="py-2 border-b mx-8">Everything from basic to advance</p>
          </div>
          <button className="bg-purple-500 w-[200px] hover:text-black hover:bg-white text-white rounded-md font-bold my-6 mx-auto px-6 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
