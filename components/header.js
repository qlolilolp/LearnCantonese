const path = window.location.pathname;
const currentFile = path.split('/').pop();

let lang = 'en';
if (path.includes('/tc/')) lang = 'tc';
if (path.includes('/sc/')) lang = 'sc';

const isEn = lang === 'en' ? 'active' : '';
const isTc = lang === 'tc' ? 'active' : '';
const isSc = lang === 'sc' ? 'active' : '';

const translations = {
    en: {
        title: "Learn Cantonese",
        subtitle: "Interactive Learning Platform",
        phonetic: "Phonetic Chart",
        game: "Matching Game",
        builder: "Sentence Builder",
        quiz: "Listening Quiz",
        lookup: "Jyutping Lookup",
        speech: "Speech Practice"
    },
    tc: {
        title: "粵語學習",
        subtitle: "互動學習平台",
        phonetic: "拼音表",
        game: "配對遊戲",
        builder: "造句練習",
        quiz: "聽力測試",
        lookup: "粵拼查詢",
        speech: "口語練習"
    },
    sc: {
        title: "粤语学习",
        subtitle: "互动学习平台",
        phonetic: "拼音表",
        game: "配对游戏",
        builder: "造句练习",
        quiz: "听力测试",
        lookup: "粤拼查询",
        speech: "口语练习"
    }
};


const t = translations[lang];

const headerHTML = `
    <div id="header">
        <div class="header-container">
            <div class="logo-title">
                <a href="./index.html">
                    <img src="../logo.png" alt="Learn Cantonese" width="60" height="60">
                </a>
                <div class="title-group">
                    <h1>${t.title}</h1>
                    <p>${t.subtitle}</p>
                </div>
            </div>
            <nav class="nav-menu">
                <a href="./phonetic_chart.html" class="nav-button">${t.phonetic}</a>
                <a href="./matching_game.html" class="nav-button">${t.game}</a>
                <a href="./sentence_builder.html" class="nav-button">${t.builder}</a>
                <a href="./listening_quiz.html" class="nav-button">${t.quiz}</a>
                <a href="./jyutping_lookup.html" class="nav-button">${t.lookup}</a>
                <a href="./speech_practice.html" class="nav-button">${t.speech}</a>
            </nav>
			
			<div class="lang-switch">
                <a href="../en/${currentFile}" class="lang-btn ${isEn}">English</a>
                <a href="../tc/${currentFile}" class="lang-btn ${isTc}">繁體</a>
                <a href="../sc/${currentFile}" class="lang-btn ${isSc}">简体</a>
            </div>
        </div>
    </div>
	<div style="margin-top: 50px"></div>
`;

function setBodyPadding() {
    const header = document.getElementById('header');
    if (header) {
        const headerHeight = header.offsetHeight;
        document.body.style.paddingTop = headerHeight + 'px';
    }
}

function handleResize() {
    setBodyPadding();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
        setBodyPadding();
        
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav-button');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
        
        window.addEventListener('resize', handleResize);
    });
} else {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    setBodyPadding();
    
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-button');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    window.addEventListener('resize', handleResize);
}