const sentences = [
    {
        "sEN": "<span class=\"word1\">I</span> <span class=\"word2\">am</span> <span class=\"word3\">a web developer</span> <span class=\"word4\">and</span> <span class=\"word5\">a programmer</span> <span class=\"word6\">who</span> <span class=\"word7\">enjoys</span> <span class=\"word8\">creating</span> <span class=\"word9\">websites</span> <span class=\"word10\">and</span> <span class=\"word11\">application</span><span class=\"word12\">.</span>",
        "sKR": "<span class=\"word1\">나는</span> <span class=\"word9\">웹사이트</span><span class=\"word10\">와</span> <span class=\"word11\">어플리케이션</span> <span class=\"word8\">만들기를</span> <span class=\"word7\">즐기</span><span class=\"word6\">는</span> <span class=\"word3\">웹 개발자</span><span class=\"word4\">이자</span> <span class=\"word5\">프로그래머</span><span class=\"word2\">입니다</span><span class=\"word12\">.</span>",
        "sSource": "Nowhere"
    },
    {
        
    }
];

function randomSentence() {
    const sENElements = document.querySelectorAll('.sEN');
    const sKRElements = document.querySelectorAll('.sKR');
    const sSourceElements = document.querySelectorAll('.sSource');

    const randomIndex = Math.floor(Math.random() * sentences.length);

    sENElements.forEach(element => {
        element.innerHTML = sentences[randomIndex].sEN;
    });

    sKRElements.forEach(element => {
        element.innerHTML = sentences[randomIndex].sKR;
    });

    sSourceElements.forEach(element => {
        element.innerHTML = "Source: " + sentences[randomIndex].sSource;
    });
    
    for (let i = 1; i <= 1000; i++) {
        const wordSpans = document.querySelectorAll(`span.word${i}`);
    
        wordSpans.forEach(span => {
            span.addEventListener('mouseover', () => {
                wordSpans.forEach(span => {
                    span.classList.add('highlight');
                });
            });
    
            span.addEventListener('mouseout', () => {
                wordSpans.forEach(span => {
                    span.classList.remove('highlight');
                });
            });
        });
    }
}