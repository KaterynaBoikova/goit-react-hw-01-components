import React from 'react';
import Profile from './Components/Profile/Profile';
import user from './user.json';
import statisticalData from './statistical-data.json';
import Statistics from './Components/Statistics/Statistics'


const App = () =>{
    return(
      <>
        <Profile  name={user.name}
                  tag={user.tag}
                  location={user.location}
                  avatar={user.avatar}
                  stats={user.stats} />

        <Statistics title="Upload stats"  stats={statisticalData}/>
        </>
    )

};


export default App;