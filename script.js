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