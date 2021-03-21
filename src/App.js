import React from 'react';
import Profile from './Components/Profile/Profile';
import user from './user.json';

const App = () =>{
    return(
        <Profile  name={user.name}
                  tag={user.tag}
                  location={user.location}
                  avatar={user.avatar}
                  stats={user.stats} />
    )

};
//<Profile user={user} - not working />

export default App;