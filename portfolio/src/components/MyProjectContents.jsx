import React from 'react';

function MyProjectContents({ projects }) {
    return (
        <ul className="project_contents">
            {projects.map((project, index) => (
                <li className="project_content" key={index}>
                    <div className="txtArea">
                        <h3 className="project_title">{project.title} <span>{project.date}</span> </h3>
                        <ul className="txtWrapper">
                            {project.description.map((desc, index) => (
                                <li key={index} className="project_description">&bull; {desc}</li>
                            ))}
                        </ul>
                        <div className="flex linkBtn_wrapper">
                            {project.link && (
                                <a className="linkBtn" href={project.link} target="_blank" rel="noopener noreferrer">사이트 바로가기</a>
                            )}
                            {project.site && (
                                <a className="linkBtn linkBtn02" href={project.site} target="_blank" rel="noopener noreferrer">코드 보러가기</a>
                            )}
                        </div>
                        </div>
                    <div className="imgArea">
                        <img src={project.img} alt="프로젝트 썸네일 이미지" />
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default MyProjectContents;


