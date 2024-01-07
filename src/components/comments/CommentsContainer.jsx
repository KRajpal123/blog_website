import React, { useEffect, useState } from 'react'
import CommentForm from './CommentForm'
import { getCommentsData } from '../../data/comments'
import IndividualComments from './IndividualComments';


const CommentsContainer = ({ className, logginedUserId }) => {
  const [comments, setComments] = useState([]);
  const [affectedComment, setAffectedComment] = useState(null)
  const mainComments = comments.filter((comment) => comment.parent === null);

  console.log("comments", comments)
  useEffect(() => {
    //IIFE the fn calls itself.
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })()
  }, []);

  // adding comments 
  const addCommentsHandler = (value, parent = null, replyOnUser = null) => {
    console.log("value", value)
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toISOString(),
    };
    setComments((currState) => {
      return [newComment, ...currState]
    }
    );
    setAffectedComment(null);
  }
  // update fn
  const updateCommentHandler = ({ value, commentId }) => {
    // console.log("commentId:", commentId);
    // console.log("value:", value);
    const updatedComment = comments.map((comment) => {
      // console.log(comment)
      if (comment._id === commentId) {
        return { ...comment, desc: value }
      }
      return comment;
    });
    setComments(updatedComment);
    setAffectedComment(null)
  }

  // deleting fn 
  const deleteComment = (commentId) => {
    const updatedComments = comments.filter((comment) => {
      return comment._id !== commentId
    });
    setComments(updatedComments)
  }

  // handle replying comments 
  const getRepliesComment = (commentId) => {
    return comments.filter((comment) => comment.parent === commentId)
      .sort((a, b) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      });
  }

  return (
    <div className={`${className}`}>
      <CommentForm btnLable={"Send"}
        formSubmitHandler={(value) => addCommentsHandler(value)} />
      <div className=' space-y-4  mt-8'>
        {
          mainComments.map((comment) => {
            return <IndividualComments
              comment={comment}
              logginedUserId={logginedUserId}
              affectedComment={affectedComment}
              setAffectedComment={setAffectedComment}
              addComment={addCommentsHandler}
              key={comment._id}
              updateComment={updateCommentHandler}
              deleteComment={deleteComment}
              replies={getRepliesComment(comment._id)}
            />
          })
        }
      </div>
    </div>
  )
}

export default CommentsContainer