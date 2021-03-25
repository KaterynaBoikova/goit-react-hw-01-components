import React from 'react'
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';
import PropTypes from "prop-types";



const FriendList = ({friends})=>(
  <ul className={styles.friendlist}>
    {friends.map((friend)=>
      <FriendListItem
        avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} id={friend.id}
      />
    )}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({

    })).isRequired,
};
export default FriendList;