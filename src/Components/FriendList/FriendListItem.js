import React from 'react'
import PropTypes from "prop-types";
import styles from './FriendList.module.css';
import defaultImage from '../Profile/defaultImage.jpeg';

const FriendListItem = ({avatar, name, isOnline, id})=>(
  <li className={styles.item} key={id}>
    <span className={styles.status} style={{backgroundColor: isOnline? 'green':'red'}}></span>
    <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);
FriendListItem.defaultProps = {
  avatar: defaultImage,
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf(['true', 'false']),
}
export default FriendListItem;

