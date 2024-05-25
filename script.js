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

function koreanTranslateCheckbox() {
    const koreanCheckbox = document.getElementById('krTranslate');
    const koreanSentences = document.querySelectorAll('.sKR');
    koreanCheckbox.addEventListener('change', () => {
        if (koreanCheckbox.checked) {
            koreanSentences.forEach(sentence => {
                sentence.style.display = 'block';
            });
        } else {
            koreanSentences.forEach(sentence => {
                sentence.style.display = 'none';
            });
        }
    });
}