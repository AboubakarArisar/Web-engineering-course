import React from "react";

const App = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col bg-black text-white'>
      <nav className='h-20 w-full bg-gray-800 flex justify-center items-center font-bold'>
        <h1>Web Engineering Class</h1>
      </nav>

      <main className='w-full h-screen font-bold flex justify-center items-center gap-4'>
        <h2>Hello, it is presentation day</h2>
        <img
          src='https://images.news18.com/ibnlive/uploads/2024/11/whatsapp-image-2024-11-25-at-4.17.12-pm-2024-11-22ee49e2a3d7b9d02a3dea1775ac03ff.jpeg?impolicy=website&width=360&height=270'
          alt=''
          className='rounded-xl'
        />
      </main>
      <footer className='w-full h-20 font-bold flex justify-center items-center bg-gray-800'>
        <p className='text-center'>Made with love by Pindari</p>
      </footer>
    </div>
  );
};

export default App;
