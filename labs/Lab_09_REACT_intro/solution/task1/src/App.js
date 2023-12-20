
import './App.css';
import React, { useState } from 'react';

function App() {

   const [count, setCount] = useState(0);
   const [posts, setPosts] = useState([
     { id: 1, username: 'user1', text: 'Post 1', likes: 0, tags: ['tag1', 'tag3'] },
     { id: 2, username: 'starosta042', text: 'Поставьте success по-братски', likes: 0, tags: ['importante','labs', 'web'] },
     { id: 3, username: 'decanat', text: 'всех ждём на старостат', likes: 0, tags: ['starostat','decanat'] },
    ]);
   const [newPost, setNewPost] = useState({ username: '', text: '', tags: [] });
   const [selectedTags, setSelectedTags] = useState([]);
   const [showAllPosts, setShowAllPosts] = useState(true);

   // Event handlers
   const handleDec = () => setCount(count - 1);
   const handleInc = () => setCount(count + 1);

   const handleLike = (postId) => {
     setPosts((prevPosts) =>
       prevPosts.map((post) =>
         post.id === postId
           ? {
               ...post,
               likes: post.liked ? post.likes - 1 : post.likes + 1,
               liked: !post.liked,
             }
           : post
       )
     );
   };

   const handleAddPost = () => {
     if (newPost.username && newPost.text) {
       const updatedPosts = [
         ...posts,
         {
           id: posts.length + 1,
           username: newPost.username,
           text: newPost.text,
           likes: 0,
           tags: newPost.tags,
         },
       ];
       setPosts(updatedPosts);
       setNewPost({ username: '', text: '', tags: [] });
     }
   };

   const handleDeletePost = (postId) => {
     setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
   };

   const handleTagClick = (tag) => {
     const updatedTags = selectedTags.includes(tag)
       ? selectedTags.filter((selectedTag) => selectedTag !== tag)
       : [...selectedTags, tag];

     setSelectedTags(updatedTags);
     setShowAllPosts(false);
   };

   const handleShowAllPosts = () => {
     setSelectedTags([]);
     setShowAllPosts(true);
   };


   const uniqueTags = Array.from(new Set(posts.flatMap((post) => post.tags)));


   const filteredPosts = showAllPosts
     ? posts
     : posts.filter((post) => post.tags.some((tag) => selectedTags.includes(tag)));

   return (
     <div className='counter'>
       <div className='count'>
         <div>{count}</div>
         <button onClick={handleDec}>-</button>
         <button onClick={handleInc}>+</button>
       </div>
       <div className='post'>
         <h2>Посты</h2>
         {filteredPosts.map((post) => (
           <div key={post.id}>
             <p>{post.username}</p>
             <p>{post.text}</p>
             <p>Тэги: {post.tags.join(', ')}</p>
             <button onClick={() => handleLike(post.id)}>
               {post.liked ? '❤️' : '💔'} ({post.likes})
             </button>
             <button onClick={() => handleDeletePost(post.id)}>Delete</button>
           </div>
         ))}
       </div>
       <div className='createPost'>
         <h2>Добавить запись</h2>
         <label>Username:</label><br />
         <input
           type='text'
           name='user'
           placeholder='Username'
           value={newPost.username}
           onChange={(e) => setNewPost({ ...newPost, username: e.target.value })}
         /><br />
         <label>Post Description:</label><br />
         <input
           type='text'
           name='post'
           placeholder='Post Description'
           value={newPost.text}
           onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
         /><br />
         <label>Tags (comma-separated):</label><br />
         <input
           type='text'
           name='tags'
           placeholder='Tags'
           value={newPost.tags.join(',')}
           onChange={(e) => setNewPost({ ...newPost, tags: e.target.value.split(',') })}
         /><br />
         <button onClick={handleAddPost}>Submit</button>
       </div>
       <div className='tags'>
         <h2>Tags</h2>
         <button onClick={handleShowAllPosts} className={showAllPosts ? 'selected' : ''}>
           Все посты
         </button>
         {uniqueTags.map((tag) => (
           <button
             key={tag}
             onClick={() => handleTagClick(tag)}
             className={selectedTags.includes(tag) ? 'selected' : ''}
           >
             {tag}
           </button>
         ))}
       </div>
     </div>
   );
}

export default App;
