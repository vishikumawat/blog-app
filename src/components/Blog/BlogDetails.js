import React, { useState } from 'react'
import { Typography } from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import { fetchBlogs, fetchComments } from "../../app/actions";
import Comments from "../layouts/Comments";
import { Helmet } from 'react-helmet'

const { Title } = Typography;

function BlogDetails({match}) {
  const dispatch = useDispatch()
  dispatch(fetchBlogs());
  const [loadComments, setLoadComments] = useState(false);
  const blogTitle = match.params.title
  const blogID = +match.params.id
  const blogs = useSelector(state => state.blogs);
  const blog = blogs.filter(blog => blog.id === blogID)[0];

  function getComments() {
    !loadComments && dispatch(fetchComments(blogID))
    setLoadComments(!loadComments)
  }
  return (
    <>
      <Helmet>
        <title>{`Blog | ${blogTitle}`}</title>
      </Helmet>
      <div style={{ width: '80%', margin: '2rem auto', color: "#000", border: '1px solid', padding: "20px"}}>
        <Title level={2}>{blogTitle}</Title>
        <br />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Title level={4}>{`User ID: ${blog.userId}`}</Title>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.body }} />
        <div
          style={{
            float: "right",
            cursor: "pointer",
            color: "blue"
          }}
          onClick={getComments}
        >
          View Comment
        </div>
        {loadComments && (
          <Comments />
        )}
      </div>
    </>
  )
}

export default BlogDetails