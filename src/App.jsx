import { useState } from 'react'
import './App.css'

function App() {
  const [starCount,setStarCount]=useState(0)
  return (
    <>
      <div className='flex justify-center flex-col items-center mt-8 text-2xl h-[100vh]'>
         <div className='text-[4rem] mb-7'>Star Rating</div>
        <div className="stars">
          {
            [...Array(5)].map((_,index)=>{
             return <span key={index}
             className={`cursor-pointer text-4xl ${index+1<=starCount ? 'text-orange-600':''}`}
             onClick={()=>setStarCount(index+1)}
             onMouseOver={()=>{setStarCount(index+1)}}
             onMouseDown={()=>{setStarCount(index+1)}}
             >&#9733;</span>
            })
          }
            
           
        </div>
        <div className='mt-3'>Rating count {starCount}</div>
      </div>
    </>
  )
}

export default App
