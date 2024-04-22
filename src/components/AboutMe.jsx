import '../styles/common.css';

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

function AboutMe() {
    const lines = [
        <div><span className="red">import</span> 정다희, &#123; 웹 퍼블리셔 &#125; from '경력';  </div>,
        "// <!-- 💌 Contact & Channel 📞 -->",
        <div><span className="red">import</span> <span className="brown">Email</span> <span className="red">from</span> '<span className="navy">79ptke@gmail.com</span>';</div>,
        <div><span className="red">import</span> <span className="brown">GitHub</span> <span className="red">from</span> '<span className="navy">https://github.com/79ptke</span>';</div>,
        <div><span className="red">import</span> <span className="brown">알고리즘 공부 저장소</span> <span className="red">from</span> '<span className="navy">https://github.com/79ptke/frontend_study/tree/master/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%20%EA%B3%B5%EB%B6%80/LV.0</span>';</div>,
        <div><span className="red">import</span> <span className="brown">Blog</span> <span className="red">from</span> '<span className="navy">https://velog.io/@79ptke</span>';</div>,
        "",
        <div>function About ( ) &#123; </div>,
        <div className='padding4'>return (</div>,
        <div className='padding8'> <span className="blue">&lt;<span className="green">div</span> className='<span className="navy">About me</span>'&gt;</span></div>,
        <div className='padding12'> <span className="blue">&lt;<span className="green">header</span> className='<span className="navy">자기소개</span>📢'&gt;</span></div>,
        <div className='padding16'> <span className="blue">&lt;<span className="green">h1</span>&gt;</span></div>,
        <div className="padding20">😀 안녕하세요, 빠르게 변화하는 기술에 맞춰 사용자 친화적인 웹 경 험을 만들기 위해 끊임없이 노력하는 <b>웹 퍼블리셔 정다희</b>라고 합니다.</div>,
        <div className='padding16'> <span className="blue">&lt;/<span className="green">h1</span>&gt;</span></div>,
        <div className='padding16'> <span className="blue">&lt;<span className="green">pre</span>&gt;</span></div>,
        <div className="padding20">다양한 기술 스택을 활용한 복잡하고 동적인 웹사이트 배포와 개 선 분야에서 높은 역량을 보유하고 있습니다.</div> ,
        <div className="padding20">HTML, CSS, JS와 함 께, React와 Bootstrap을 포함한 여러 API를 자유롭게 이용함으로 써, 사용자에게 접근성 높고 유연한 웹 경험을 제공했습니다.</div>,
        "",
        <div className="padding20">퍼블리셔로서의 경력을 시작한 후로, jQuery와 Vanilla JavaScript 에 대한 전문지식을 확립하기 위해 작은 기능부터 Vanilla JS로 구현해 감으로써 개발에 대한 흥미를 자연스럽게 발견하였고, 이것이 저를 퍼블리셔로서 한 걸음 더 나아가게끔 도왔습니다.</div>,
        "",
        <div className="padding20">단순히 문제 해결에 그치지않고, 실수나 새로운 기능 구현 요청의 발생 상황을 체계적으로 기록함으로써, 배운 점들을 더 심층적으 로 이해하는 데 큰 도움이 되었습니다. 이런 기록들은 결국 제 문제 해결 능력을 향상하고, 지속적인 업무 개선과 웹사이트 완성도 향상에 대한 비결이 되었습니다.</div>,
        "",
        <div className="padding20">끊임없는 학습, 의지, 그리고 전문성을 바탕으로 발전하는 것을 목표로 삼아, 항상 발전하는 퍼블리셔가 되려는 열망과 전문성을 가지고 있습니다. 이러한 저의 능력과 경험을 활용하여, 제게 주어질 모든 기회에서 맡은 역할을 최상의 수준으로 수행하겠습니다.</div>,
        "",
        <div className="padding20">더불어, 프론트엔드 개발 분야에서도 성장하고자 하는 열망이 있습니다. 따라서, 저는 퍼블리싱 능력을 바탕으로 프론트엔드 개발자로서의 경험을 쌓아나가는 것을 목표로 삼고 있습니다. 이를 위해 지속적인 학습과 실전 경험을 통해 전문성을 키워가겠습니다.</div>,
        <div className='padding16'> <span className="blue">&lt;/<span className="green">pre</span>&gt;</span></div>,
        <div className='padding12'> <span className="blue">&lt;/<span className="green">header</span>&gt;</span></div>,
        <div className='padding12'> <span className="blue">&lt;<span className="green">main</span> className='<span className="navy">개인정보</span>👩‍💼'&gt;</span></div>,
        <div className='padding16'> <span className="blue">&lt;<span className="green">pre</span>&gt;</span></div>,
        <div className='padding20'> <b>Date of birth</b> : 1997.11.04 (만 26세)</div>,
        <div className='padding20'> <b>Phone</b> : 010-2442-8379</div>,
        <div className='padding20'> <b>E-mail</b> : 79ptke@gmail.com</div>,
        <div className='padding20'> <b>GitHub</b> : <span className="blue"><a href="https://github.com/79ptke" target="_blank" rel="noopener noreferrer">https://github.com/79ptke</a></span></div>,
        <div className='padding20'> <b>Blog</b> : <span className="blue"><a href="https://velog.io/@79ptke" target="_blank" rel="noopener noreferrer">https://velog.io/@79ptke</a></span></div>,
        <div className='padding20'> <b>Education</b> : 한성대학교 한디원 시각디자인학과 / sbs아카데미컴퓨터아트학원 (2021.04 ~07)</div>,
        <div className='padding20'> <b>Certificate</b> : GTQ포토샵 자격증 1급, 컬리리스트 산업기사</div>,
        <div className='padding16'> <span className="blue">&lt;/<span className="green">pre</span>&gt;</span></div>,
        <div className='padding12'> <span className="blue">&lt;/<span className="green">main</span>&gt;</span></div>,
        <div className='padding12'> <span className="blue">&lt;<span className="green">footer</span> className='<span className="navy">기술 및 경험, 공부중인 것들</span>💻︎'&gt;</span></div>,
        <div className='padding16'> <span className="blue">&lt;<span className="green">pre</span>&gt;</span></div>,
        <div className='padding20'> <span className="blue">&lt;<span className="green">h1</span>&gt;</span> <b className="highlight">Tool</b> <span className="blue">&lt;/<span className="green">h1</span>&gt;</span></div>,
        <div className='padding20'> - <b>Visual Studio Code</b> : 내장되어 있는 Git을 사용하여 변경사항을 스테이징하고 커밋하며, 브랜치를 관리하고 원격 저장소와 통합할 수 있습니다.</div>,
        <div className='padding20'> - <b>Git</b> : 새로운 저장소를 만들고 파일을 추적하고 변경사항을 커밋, 푸시하거나 가져올 수 있습니다.</div>,
        <div className='padding20'> - <b>Putty</b> : ppk 키로 접속해 서버를 재시동시킬 수 있습니다.</div>,
        "",
        <div className='padding20'> <span className="blue">&lt;<span className="green">h1</span>&gt;</span> <b className="highlight">Stack</b> <span className="blue">&lt;/<span className="green">h1</span>&gt;</span></div>,
        <div className='padding20'> - <b>HTML5</b> : 기본 구문 및 태그 이해가 있으며, 시멘틱 마크업을 통해 구조화된 HTML 요소를 사용하여 웹 페이지를 작성할 수 있습니다.</div>,
        <div className='padding20'> - <b>CSS3</b> : 다양한 화면 크기와 디바이스에 대응하는 반응형 웹 디자인을 구현할 수 있습니다. 미디어 쿼리를 사용하여 레이아웃을 조정하고, Flexbox나 CSS Grid를 활용하여 유동적인 레이아웃을 구성할 수 있습니다. </div>,
        <div className='padding20'> - <b>JS(ES6)</b> : 기본적인 JavaScript 문법과 DOM 조작에 대한 이해가 있습니다.</div>,
        <div className='padding20'> - <b>Jquery</b> : jQuery를 활용하여 스크립트를 짤 수 있습니다.</div>,
        <div className='padding20'> - <b>React</b> : 리액트 Hook을 적절히 활용할 수 있으며 재사용 가능한 컴포넌트를 만들 수 있습니다. </div>,
        <div className='padding20'> - <b>TypeScript</b> : 타입스크립트의 장단점을 알고 공부중입니다.</div>,
        <div className='padding20'> - <b>Three.js(일부구현)</b> : 화면에 3D 파일을 불러오고 크기 및 배치를 조정할 수 있습니다.</div>,
        "",
        <div className='padding20'> <span className="blue">&lt;<span className="green">h1</span>&gt;</span> <b className="highlight">Collaboration</b> <span className="blue">&lt;/<span className="green">h1</span>&gt;</span></div>,
        <div className='padding20'> - <b>Slack</b></div>,
        <div className='padding20'> - <b>Figma</b></div>,
        "",
        <div className='padding20'> <span className="blue">&lt;<span className="green">h1</span>&gt;</span> <b className="highlight">공부중</b> <span className="blue">&lt;/<span className="green">h1</span>&gt;</span></div>,
        <div className='padding20'> - <b>TypeScript</b></div>,
        <div className='padding20'> - <b>Sass</b></div>,
        <div className='padding20'> - <b>Figma, github 연동</b></div>,
        <div className='padding16'> <span className="blue">&lt;/<span className="green">pre</span>&gt;</span></div>,
        <div className='padding12'> <span className="blue">&lt;/<span className="green">footer</span>&gt;</span></div>,
        <div className='padding8'> <span className="blue">&lt;/<span className="green">div</span>&gt;</span></div>,
        <div className='padding4'>);</div>,
        <div>&#125;</div>,
        ""
    ];

    return (
        <div className="about">
            {lines.map((line, index) => (
              <Line key={index + 1} lineNumber={index + 1} text={line} />
            ))}
        </div>
    );
}

export default AboutMe;