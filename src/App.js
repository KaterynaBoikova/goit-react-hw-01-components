import React from 'react';
import Profile from './Components/Profile/Profile';
import user from './user.json';
import statisticalData from './statistical-data.json';
import Statistics from './Components/Statistics/Statistics';
import friends from './friends.json';
import FriendList from './Components/FriendList/FriendList';

const App = () =>{
    return(
      <>
        <Profile  name={user.name}
                  tag={user.tag}
                  location={user.location}
                  avatar={user.avatar}
                  stats={user.stats} />

        <Statistics title="Upload stats"  stats={statisticalData}/>
        <FriendList friends={friends}/>
        </>
    )

};


export default App;