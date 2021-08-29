import React from 'react';
import Comment from '../../Blog/Comment';
import { Typography } from 'antd';
import {useSelector} from 'react-redux';

const { Title } = Typography

function Comments() {
  const comments = useSelector(state => state.comments);
  return (
    <div style={{ width: '100%' }}>
      <Title level={4} style={{textAlign: "center", borderBottom: "1px dashed #cccccc", paddingTop: 20}}> Comments </Title>
      <div>
        {comments && comments.map(comment => (
          <Comment key={comment.id} comment={comment} col={3}/>
        ))}
      </div>
    </div>
  )
}

export default Comments