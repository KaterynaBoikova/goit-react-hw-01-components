import React from 'react'
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';


const FriendList = ({friends})=>(
  <ul className={styles.friendlist}>
    {friends.map((friend)=>
      <FriendListItem
        avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} id={friend.id}
      />
    )}
  </ul>
);

export default FriendList;