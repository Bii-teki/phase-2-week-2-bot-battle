import React, {useEffect, useState} from 'react';
import BotList from './componenets/BotList';
import Search from './componenets/Search';
import './App.css';
import BotArmy from './componenets/BotArmy';





function App() {
 
  const [theme, setTheme] = useState("light")
  const [query, setQuery] = useState("")
  const [bots, setBots] = useState([])
  const [army, setArmy] = useState([]);
  

  useEffect(()=>{
   fetch(" http://localhost:3000/bots?q="+ query)
   .then(r=>r.json())
   .then(data=>setBots(data))  
  },[query])



function handleSearch(e) {
    setQuery(e.target.value)
  }

 function handleTheme(e) {
  e.preventDefault()
  if(theme=== "light"){setTheme("dark")}
  else{
    setTheme("light")
  }

  
 }
 useEffect(()=>{
document.body.className =theme;

 }, [theme])

 function onDeleteBots(id){
  const updateBots = bots.filter(transa=>
    transa.id !==id      
  )
  setBots(updateBots)

}


 const addBotToArmy = (bot) => {
   if (!army.some((b) => b.id === bot.id || b.bot_class===bot.bot_class)) {
     setArmy([...army, bot]);
     alert("Hello! You have added successfully!");
   }
   else{
    alert("Already exist or you are trying to add bot from the same class!")
   }
 };

 const releaseBot = (botId) => {
   const updatedArmy = army.filter((bot) => bot.id !== botId);
   setArmy(updatedArmy);
 };

 const dischargeBot = (botId) => {
   const updatedArmy = army.filter((bot) => bot.id !== botId);
   setArmy(updatedArmy);

  
 };


  return (

    <div className={`App ${theme}`}>

     
    <button onClick={handleTheme}>Dark</button>
       <Search handleSearch={handleSearch} />
       
       <BotArmy army={army}  releaseBot={releaseBot} dischargeBot={dischargeBot} />
       <BotList bots={bots} onDeleteBots ={onDeleteBots} addBotToArmy={addBotToArmy} />
     
     
   
    </div>
   
  );
}

export default App;
