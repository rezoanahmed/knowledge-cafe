import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog";

const Blogs = ({addToBookmark}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(element => <Blog key={element.id} blog={element} addToBookmark={addToBookmark}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    blogs: PropTypes.object.isRequired,
    addToBookmark: PropTypes.func,
}

export default Blogs;