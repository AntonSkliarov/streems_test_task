import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPosts } from '../../api/posts';
import { Post } from '../Post/Post';

export function UserPosts({ userId }) {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requestedPosts = await getPosts(userId);

      setUserPosts(requestedPosts);
    }

    fetchData();
  }, [userId]);

  return (
    <div className="userPosts">
      <ul>
        {userPosts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
}

UserPosts.propTypes = {
  userId: PropTypes.number.isRequired,
};
