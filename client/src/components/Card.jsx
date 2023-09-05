import { useState } from "react";

/* eslint-disable react/prop-types */
const Card = ({ post, socket, user }) => {
  const [isLiked, setIsLiked] = useState(false)

  const handleNotification = () => {
    setIsLiked(true)
  }
  
  return (
    <div className="Card">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="d-flex align-items-center justify-content-between">
              <span>
                <img src={post.userImage} alt="" />
              </span>
              <h5>{post.fullname}</h5>
            </div>
            <div className="postimage">
              <img src={post.postImage} alt="" />
            </div>
            {isLiked ? <b className="text-danger">LIKED</b> : <b onClick={handleNotification} className="text-gray">LIKED</b>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
