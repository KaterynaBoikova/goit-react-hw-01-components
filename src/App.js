import React from 'react';
//components
import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';
import FriendList from './Components/FriendList/FriendList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import Layout from './Components/Layout/Layout';
//json
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () =>{
    return(
      <Layout>
        <Profile  name={user.name}
                  tag={user.tag}
                  location={user.location}
                  avatar={user.avatar}
                  stats={user.stats} />

        <Statistics title="Upload stats"  stats={statisticalData}/>
        <FriendList friends={friends}/>
        <TransactionHistory items={transactions}/>
      </Layout>

    )

};


export default App;