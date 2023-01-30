const Card = ({ post }) => {

  return (
    <div className="card">

      <p className="title">{post.title}</p>

      <p className="description">{post.description}</p>

      <p className="control">
        <span className="author">{post.author.email}</span>
      </p>

    </div>
  )

};

export default Card;