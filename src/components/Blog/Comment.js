import React from 'react'

function Comment(props) {
  const {comment} = props
  return (
    <div style={{border: "1px dashed #555555", marginBottom: 5, padding: 10}}>
      <p style={{font: "12px/15px Georgia, serif"}}>{comment.body}</p>
      <div>
        <span
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontStyle: "oblique",
            fontWeight: "bold"
          }}
        >Commented By: </span>
        <span style={{
          fontStretch: "condensed",
          fontStyle: "italic",
          color: "red"
        }}>{comment.name} </span>
        <span style={{
          color: "#777777"
        }}>({comment.email})</span>
      </div>
      {comment.name}
    </div>
  )
}

export default Comment
