import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPosts } from '../../api/posts';
import { Post } from '../Post/Post';
import './UserPosts.scss';

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
    <div className="user-posts">
      {userPosts.length
        ? (
          <>
            <h2>User Posts</h2>
            <ol>
              {userPosts.map(post => (
                <Post post={post} key={post.id} />
              ))}
            </ol>
          </>
        )
        : <h2>User has no posts</h2>
      }
    </div>
  );
}

UserPosts.propTypes = {
  userId: PropTypes.number.isRequired,
};
