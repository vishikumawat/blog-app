import React, {useState} from 'react';
import Blog from '../../Blog/Blog';
import { Typography, Row, Input } from 'antd';
import {useSelector} from 'react-redux';
import { Helmet } from 'react-helmet'

const { Title } = Typography
const { Search } = Input;

function Blogs() {
  const [filter, setFilter] = useState("");
  const blogs = useSelector(state => state.blogs);
  
  const onSearch = value => setFilter(value);

  function optimizedFilter(value, delay){
    let timer;
    return function(){
      clearTimeout(timer);
      timer = setTimeout(()=>{
        setFilter(value)
      }, delay)
    }
  }

  function handleSearch(event){
    const filterValue = event.target.value;
    optimizedFilter(filterValue, 300)();
  }
  const filteredBlogs = blogs.filter(blog=> blog.title.includes(filter))
  console.log(filter)
  return (
    <>
      <Helmet>
        <title>{`Blogs`}</title>
      </Helmet>
      <div style={{ width: '85%', margin: '3rem auto' }}>
        <div style={{display: "flex", flexDirection: "row"}}>
          <Title level={2}> Blogs </Title>
          <Search
            placeholder="blog search"
            onSearch={onSearch}
            onKeyUp={handleSearch}
            style={{
              width: 500,
              marginLeft: "auto"
            }}
          />
        </div>
        <Row gutter={[32, 16]}>
          {filteredBlogs && filteredBlogs.map(blog => (
            <Blog key={blog.id} blog={blog} col={3}/>
          ))}
        </Row>
      </div>
    </>
  )
}

export default Blogs