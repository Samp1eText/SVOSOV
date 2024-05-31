const sentences = [
    {
        "svo_sentence": "<span class=\"data-index_1\">I</span> <span class=\"data-index_2\">am</span> <span class=\"data-index_3\">a web developer</span> <span class=\"data-index_4\">and</span> <span class=\"data-index_5\">a programmer</span> <span class=\"data-index_6\">who</span> <span class=\"data-index_7\">enjoys</span> <span class=\"data-index_8\">creating</span> <span class=\"data-index_9\">websites</span> <span class=\"data-index_10\">and</span> <span class=\"data-index_11\">application</span><span class=\"data-index_12\">.</span>",
        "sov_sentence": "<span class=\"data-index_1\">저는</span> <span class=\"data-index_9\">웹사이트</span><span class=\"data-index_10\">와 </span><span class=\"data-index_11\">어플리케이션</span> <span class=\"data-index_8\">만들기를</span> <span class=\"data-index_7\">즐기</span><span class=\"data-index_6\">는</span> <span class=\"data-index_3\">웹 개발자</span><span class=\"data-index_4\">이자</span> <span class=\"data-index_5\">프로그래머</span><span class=\"data-index_2\">입니다</span><span class=\"data-index_12\">.</span>",
        "source": "Nowhere"
    },
];

function randomSentence() {
    const sENElements = document.querySelectorAll('.sEN');
    const sKRElements = document.querySelectorAll('.sKR');
    const sSourceElements = document.querySelectorAll('.sSource');

    const randomIndex = Math.floor(Math.random() * sentences.length);

    sENElements.forEach(element => {
        element.innerHTML = sentences[randomIndex].svo_sentence;
    });

    sKRElements.forEach(element => {
        element.innerHTML = sentences[randomIndex].sov_sentence;
    });

    sSourceElements.forEach(element => {
        element.innerHTML = "Source: " + sentences[randomIndex].source;
    });
    
    for (let i = 1; i <= 1000; i++) {
        const wordSpans = document.querySelectorAll(`span.data-index_${i}`);
    
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