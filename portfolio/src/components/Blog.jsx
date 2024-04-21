import BlogContents from './BlogContents';
import '../styles/common.css';
import "../styles/blog.css";

function Line({ lineNumber, text }) {
    return (
        <div>
            <div className='lineArea grid'>
                <div className="lineNumber">{lineNumber}</div>
                <div className=''>{text}</div>
            </div>
        </div>
    );
}

function Blog() {
    const lines = [
        <div><h1 className="contents_title">My development blog 🌐</h1></div>,
        "",
        "",
        <div>.<span className="blue">Blog</span> &#123;</div>,
        <div className="padding4"><span className="blue">블로그</span>: <span className="blue"> <a href="https://velog.io/@79ptke" target="_blank" rel="noopener noreferrer">https://velog.io/@79ptke</a></span>;</div>,
        <div className="padding4"><span className="blue">목적</span>: <span className="blue">새로 배운 것이나 실수했던 것을 잊지 않기 위해서.</span></div>,
        <div className="padding4"><span className="blue">시리즈</span>: <span className="blue">알고리즘, 오답노트, 개발지식, 코드리뷰, 팀원으로 일하는 방법, 자바스크립트, 타입스크립트</span></div>,
        <div>&#125;</div>,
        "",
        "",
    ];

    return (
        <div className="blog">
            {lines.map((line, index) => (
                <Line key={index + 1} lineNumber={index + 1} text={line} />
            ))}
            <div className="blog_contents_wrapper">
                <BlogContents />
            </div>
        </div>
    );
}

export default Blog;