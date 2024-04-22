import React, { useState } from 'react';
import MyProjectContents from './MyProjectContents';
import companyData from '../data/projectCompany.json';
import personalData from '../data/projectPersonal.json';
import '../styles/common.css';
import "../styles/project.css";

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

function MyProject() {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const lines = [
        <div className='contents_title_wrapper flex'><h1 className='contents_title'>{toggle ? "MY PROJECT ✨":"WORK EXPERIENCE 🏙"}</h1><button className={`toggle_button ${toggle ? 'on' : 'off'}`} onClick={handleToggle}> <span>{toggle ? "회사 프로젝트 보러가기" : "개인 프로젝트 보러가기"}</span> <span className='arrow'>&#10095;</span></button></div>,
        "",
        "",
        toggle ?  <div>주로 리액트 위주의 개인 작업물입니다.</div> : <div><h2>집쇼코리아 (2021.08 ~ 2023.11)</h2></div>,
        toggle ?  null : <div>웹 퍼블리셔</div>,
        toggle ?  null : "",
        toggle ?  null : "",
        toggle ?  null : <div><h3>주요 업무 프로젝트</h3></div>,
        toggle ?  null : "",
        toggle ?  null : <div>- html, css, js, react, Bootstrap, api을 사용한 반응형 웹사이트 및 CMS 구축 웹 프로젝트에 참여. 일부 기획 및 구현, 하드 코딩된 코드를 React로 고도화</div>,
        toggle ?  null : "",
        toggle ?  null : <div>- 웹사이트, 키오스크, 미디어 월 등 반응형 및 모바일 최적화, 크로스 브라우징, Android와 iOS 플랫폼 등다중 플랫폼 지원</div>,
        toggle ?  null : "",
        toggle ?  null : <div>- matterport, krpano MXL, 3dvista를 활용하여 웹 페이지 구축</div>,
        toggle ?  null : "",
        toggle ?  null : "",
        toggle ?  null : <div><h3>주요 성과</h3></div>,
        toggle ?  null : "",
        toggle ?  null : <div>- 키오스트에서 유저들이 불편함을 호소. 사용자의 불편함을 개선하기 위하여,디자이너와 협업하여 화면 기획. 인터페이스의 복잡성을 간소화하여 정보의 시각적 가시성을 높이고, 사용자가 필요로 하는 터치 횟수를 최소화하여 키오스크 사용 경험을 개선하여 사용자 편의 성을 높임.</div>,
        toggle ?  null : "",
        toggle ?  null : <div>- 3d 가상공간에서 무분별한 태그 사용으로 인한 사용감 저하. 이미지, 동영상, 텍스트, 언어 구분이 모두 분리되어 있는 문제 발견. 분리되어 있는 정보를 효과적으로 합쳐 하나의 팝업으로 제작. 하나의 유물에 기본 5개 이상의 태그가 필요하던 것을 태그 하나로 해결.</div>,
        toggle ?  null : "",
        toggle ?  null : <div>- 팀원 간 코드 스타일 일관성 부족 및 공유가 안되는 문제. 지속적인 회의를 통한 코드리뷰 프로세스 제안 및 코드 스타일 가이드 수립. 팀원 간 코드 이해도 향상, 코드 품질 및 일관성을 지속해서 개선.</div>,
        toggle ?  null : "",
        toggle ?  null : "",
    ];

    return (
        <div className="myProject">
            {lines.map((line, index) => (
                line !== null &&  <Line key={index + 1} lineNumber={index + 1} text={line} />
            ))}
            <div className="MyProject_contents_wrapper">
            {toggle ? (
                    <MyProjectContents projects={personalData.projectPersonal} />
                ) : (
                    <MyProjectContents projects={companyData.projectCompany} />
                )}
            </div>
        </div>
    );
}

export default MyProject;