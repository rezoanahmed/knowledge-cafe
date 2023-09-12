import PropTypes from 'prop-types'; // ES6

const Blog = ({blog}) => {
    return (
        <div>
            <h2>{blog}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;