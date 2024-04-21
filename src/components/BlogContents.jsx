import blogData from "../data/blog.json";
import "../styles/blog.css";


function BlogContents() {
    return (
        <ul className="blog_contents">
            {blogData.blogs.map(blog => (
                <li key={blog.id} className="blog_content">
                    <a href={blog.link} target="_blank" rel="noopener noreferrer">
                        <div className="blog_img">
                            <img src={blog.img} alt="블로그 썸네일 이미지" />
                        </div>
                        <h4 className="blog_title">{blog.title}</h4>
                        <p className="blog_description">{blog.description}</p>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default BlogContents;

