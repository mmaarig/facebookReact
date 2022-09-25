import { FaRegThumbsUp, FaRegCommentAlt, FaShare } from "react-icons/fa";
import moment from 'moment';

let Post = ({ profilePhoto, name, postDate, postText, postImage }) => (
  <div className='post'>
    <div className='postHeader'>
      <img className='profilePhoto' src={profilePhoto} alt="profile" />
      <div>
        {name} <br />
        {moment(postDate).fromNow()}
      </div>
    </div>

    <div className='postText'>
      {postText}
    </div>

    <img className='postImage' src={postImage} alt="post" />

    <hr />
    <div className='postFooter'>
      <div><FaRegThumbsUp className="post-icon" />like </div>
      <div><FaRegCommentAlt className="post-icon" />comment</div>
      <div><FaShare className="post-icon" />share</div>
    </div>
    <hr />

  </div>
);


const content = () => {
  return (
    <div className='page'>

      <Post
        name="Hamza Zahid"
        profilePhoto="./imgs/cp-1_28x28.jpg"
        postDate="10 sep 2022"
        postImage="./imgs/post1.jfif"
        postText="No Comments "
      />
      <Post
        name="Jamal Khan"
        profilePhoto="./imgs/cp-3_28x28.jpg"
        postDate="15 sep 2022"
        postImage="./imgs/post2.jpg"
        postText="And look what have we got"
      />
      <Post
        name="Muhammad Junaid"
        profilePhoto="./imgs/cp-2_28x28.jpg"
        postDate="11 sep 2022"
        postImage="./imgs/post3.jpg"
        postText="Really?"
      />
      <Post
        name="Hamza Zahid"
        profilePhoto="./imgs/cp-1_28x28.jpg"
        postDate="14 Sep 2022"
        postImage="./imgs/post4.jpeg"
        postText="Don't you agree"
      />


    </div>
  );
}



export default content;