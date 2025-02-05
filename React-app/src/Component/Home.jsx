import React from 'react'
import Footer from './Day2/Footer'
const Home = () => {
  return (
    <>
<div className="min-h-screen bg-gray-700 text-gray-100  flex flex-col items-center justify-center">
    <div>
    <h1 className="text-4xl font-bold flex-gap-3.5">Dive Into Endless Fun with Social Casino Games Today</h1>
    <p className='text-light to-blue-400'>Embark on an unforgettable adventure where excitement knows no limits! With a vast
     of social games at your fingertips, you can experience the thrill of
    spinning the reels, testing your luck at the tables, and much more—all completely free.
    Whether you are a seasoned player or new to the world of video games, there
    something here for everyone. Join us today and dive into a world of fun, excitement,
    and endless possibilities. Your ultimate gaming journey starts now—play for the joy of it!</p>
    </div>
    <div >
    <button className="w-40 h-20 bg-blue-500 text-white font-semibold text-center rounded-lg shadow-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 text-2xl" >
    Start Playing
    </button>
    <img src="https://socialgameshouse.com/assets/Image/about.png" className ="w-150 h-150"/>
    </div>
    
    <h2 className="text-4xl font-bold flex-gap-3.5">Why Choose Us ?</h2><br></br>
<div className="flex flex-wrap justify-center gap-4">
<div className="bg-yellow-300 rounded-lg p-6 w-80 shadow-md">
  <h3 className="text-xl font-semibold mb-2">Endless Free Fun</h3>
  <p className="text-gray-800">Enjoy a vast selection of social casino games—absolutely free! Play as much as you want, whenever you want, with no strings attached.</p>
</div>

<div className="bg-yellow-300 rounded-lg p-6 w-80 shadow-md">
  <h3 className="text-xl font-semibold mb-2">Wide Variety of Games</h3>
  <p className="text-gray-800">We offer a diverse collection of games to suit every players taste. From novice to expert, there's something for everyone to enjoy!</p>
</div>

<div className="bg-yellow-300 rounded-lg p-6 w-80 shadow-md">
  <h3 className="text-xl font-semibold mb-2">Play Anytime, Anywhere</h3>
  <p className="text-gray-800">Our platform is designed for mobile devices, allowing you to play on the go. Wherever you are, you can experience the fun whenever the mood strikes.</p>
</div>
    <p className="text-gray-100 text-sm mb-4">
    <br></br>
    Our platform is designed for easy access, allowing you to play on any device. Wherever you are, you can dive into the fun whenever the mood strikes.
    </p>
    </div>
    </div>
    <Footer/>
    </>    
  )
}


export default Home