import React  from 'react'
import Bot from './Bot'

function BotList({bots, addBotToArmy, onDeleteBots}) {
 return(
  <div className='grid grid-cols-5'>
          
{bots.map((bot)=>(
 
  <Bot key={bot.id}   bot={bot} onDeleteBots={onDeleteBots} onAddToArmy={() => addBotToArmy(bot)} />
  
))
} 
   </div>
 )
 }

export default BotList
