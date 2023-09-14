
const Bookmark = ({bookmark}) => {
    const {blog_title} = bookmark;
    return (
        <div>
            <h2 className="text-3xl">{blog_title}</h2>
        </div>
    );
};

export default Bookmark;