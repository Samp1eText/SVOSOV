document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('modal');
    const indexInput = document.getElementById('index-input');
    const setIndexButton = document.getElementById('set-index');
    const svoChangeButton = document.getElementById('svo');
    const sovChangeButton = document.getElementById('sov');
    let selectedRange;
    let selectedElement;

    document.addEventListener('mouseup', (event) => {
        const selectedText = window.getSelection();
        if (selectedText.rangeCount > 0 && !selectedText.isCollapsed) {
            selectedRange = selectedText.getRangeAt(0);
            const rect = selectedRange.getBoundingClientRect();
            modal.style.top = `${rect.top + window.scrollY + rect.height}px`;
            modal.style.left = `${rect.left + window.scrollX}px`;
            modal.style.display = 'block';

            // Check if the selection is within an existing span with data-index
            selectedElement = selectedRange.startContainer.parentElement;
            if (selectedElement.tagName === 'SPAN' && selectedElement.hasAttribute('data-index')) {
                indexInput.value = selectedElement.getAttribute('data-index');
            } else {
                indexInput.value = '';
            }
        } else {
            modal.style.display = 'none';
        }
    });

    setIndexButton.addEventListener('click', () => {
        if (selectedRange) {
            if (selectedElement && selectedElement.tagName === 'SPAN' && selectedElement.hasAttribute('data-index')) {
                // Update existing span
                selectedElement.setAttribute('data-index', indexInput.value);
            } else {
                // Create new span
                const selectedContent = selectedRange.extractContents();
                const span = document.createElement('span');
                span.appendChild(selectedContent);
                span.setAttribute('data-index', indexInput.value);
                selectedRange.insertNode(span);
            }
            window.getSelection().removeAllRanges();
            modal.style.display = 'none';
        }
    });

    svoChangeButton.addEventListener('click', () => {
        const svoNewContent = document.getElementById('svo_text').value;
        const svoRange = document.getElementById('svo-sentence');
        svoRange.innerText=svoNewContent;
    });

    sovChangeButton.addEventListener('click', () => {
        const svoNewContent = document.getElementById('sov_text').value;
        const svoRange = document.getElementById('sov-sentence');
        svoRange.innerText=svoNewContent;
    });
});
