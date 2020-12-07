import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPosts } from '../../api/posts';
import { Post } from '../Post/Post';
import './UserPosts.scss';

export function UserPosts({ userId, setDisplayedPost, postId }) {
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
            <ol className="user-posts__list">
              {userPosts.map(post => (
                <Post
                  post={post}
                  key={post.id}
                  setDisplayedPost={setDisplayedPost}
                  postId={postId}
                />
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
  postId: PropTypes.number.isRequired,
  setDisplayedPost: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};
