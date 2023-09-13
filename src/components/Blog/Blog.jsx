import PropTypes from 'prop-types'; // ES6
import {FaBookmark} from 'react-icons/fa'
const Blog = ({ blog }) => {
    const { blog_title, posted_date,hashtags, blog_cover, reading_time, author_name, author_img } = blog;
    // console.log(blog);
    return (
        <div className='my-10 space-y-3 p-4'>
            <img src={blog_cover} alt="" className='w-full rounded-lg'/>
            <div className='flex items-center gap-4'>

                <img src={author_img} alt="" className='h-[50px] w-[50px] rounded-full' />
                <div className='flex w-full justify-between items-center'>
                    <div>
                        <h3 className='font-semibold text-2xl'>{author_name}</h3>
                        <p className='text-gray-500'>{posted_date}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='text-gray-500'>{reading_time} Minutes</p>
                        <button><FaBookmark></FaBookmark></button>
                    </div>
                </div>
            </div>
            <h2 className='font-bold text-4xl'>{blog_title}</h2>
            <p className='text-gray-500'>{
                hashtags.map((key)=> `${key} `)
            }</p>
            <a href="#" className='underline text-blue-400'>Mark as read</a>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;