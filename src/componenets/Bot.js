import React, {useState} from 'react'


function Bot({ bot, onAddToArmy, onRelease, onDischarge, onDeleteBots }) {

  const [state, setState] = useState(false)
  const [selected, setSelected]= useState([])

  function handleS(e) {
    e.preventDefault()
    const id = parseInt(e.target.id)

     fetch(`https://bot-yv0d.onrender.com/bots/${id}`)
     .then(r=>r.json())
     .then(data=>setSelected(data)    
      
     
     )
     setState(true)
     
    
    
   }
function setStator(e) {
  e.preventDefault()
  setState(false)
  
}




  function handleView(e) {

     e.preventDefault()
     const id = parseInt(e.target.id)

     fetch(`https://bot-yv0d.onrender.com/bots/${id}`,
     {
      method:"DELETE"
    })
    
    onDeleteBots(id)
    alert("Hello, you have deleted!")
   
   }
  
    if(state){

      return(
        <>
  
  <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
   	<div className="absolute bg-black opacity-80 inset-0 z-0"></div>
    <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">    
      <div className="">       
               <div className="text-center p-5 flex-auto justify-center">
                    <img src={selected.avatar_url} alt={selected.name} />
                    
                          <h2 className="text-xl font-bold py-4 ">Name: {selected.name}</h2>
                          <p className="text-sm text-gray-500 px-8">Health: {selected.health}</p>  
                          <p className="text-sm text-gray-500 px-8">Damage: {selected.damage}</p>  
                          <p className="text-sm text-gray-500 px-8">Bot Class: {selected.bot_class}</p>
                          <p className="text-sm text-gray-500 px-8">catchphrase: {selected.catchphrase}</p>
                     </div>
       <div className="p-3  mt-2 text-center space-x-4 md:block">
          <button onClick={setStator} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">Close</button> 
             </div>
        </div>
      </div>
    </div>
       
        </>
      )
     }
     else{

    return (
      
<>
<div className="grid lg:grid-cols-4">
    <div className="w-full p-6 lg:w-96">
        <div className="p-12 bg-white rounded shadow-md">
     <img className="w-full" src={bot.avatar_url} alt={bot.name} />
     <div className="px-6 py-4">
       <div className="font-bold text-xl mb-2">{bot.name}</div>
       <p className="text-gray-700 text-base">
       Health: {bot.health}
        </p>
        <p className="text-gray-700 text-base">
       Damage: {bot.damage}
        </p>
        <p className="text-gray-700 text-base">
       Bot class: {bot.bot_class}
        </p>      
      
     </div>
     <div className="px-6 pt-4 pb-2">
     {onAddToArmy && <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={onAddToArmy}>Add to Army</button>}
     {onRelease &&  <button className='bg-red-500 hover:bg-black-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={onRelease}>Release</button>}
     {onAddToArmy && <button className='bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' id={bot.id} onClick={handleS}>View</button>}
      {onAddToArmy && <button className='bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' id={bot.id} onClick={handleView}>Delete</button>}
     {onDischarge && <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={onDischarge}>Remove</button>}
     </div>
   </div>

   </div>
   
   
   </div>
  

  


        </>
      );
 } };
    

export default Bot
