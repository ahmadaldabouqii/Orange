const PostLists = ({ BlogPosts }) => {
  return (
    <ul>
      {BlogPosts.map(({ id, title }) => (
        <li key={id}>
          <h3>{title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default PostLists;
