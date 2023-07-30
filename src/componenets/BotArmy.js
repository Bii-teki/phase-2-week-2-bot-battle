import React from 'react'
import Bot from './Bot';
function BotArmy({army, releaseBot, dischargeBot}) {
 
  return (
    <div className='bg-green-500 grid lg:grid-cols-4'>
     
      {army.map((bot) => (
        <Bot
          key={bot.id}
          bot={bot}
          onRelease={() => releaseBot(bot.id)}
          onDischarge={() => dischargeBot(bot.id)}
        />
      ))}
    </div>
  );
};
  


export default BotArmy
