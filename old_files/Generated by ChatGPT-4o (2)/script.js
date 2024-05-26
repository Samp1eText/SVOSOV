document.addEventListener("DOMContentLoaded", () => {
    const svoEditable = document.getElementById('svo-sentence');
    const sovEditable = document.getElementById('sov-sentence');

    const svoIndexInput = document.getElementById('svo-index-input');
    const setSvoIndexButton = document.getElementById('set-svo-index');

    const sovIndexInput = document.getElementById('sov-index-input');
    const setSovIndexButton = document.getElementById('set-sov-index');

    const svoCodeOutput = document.getElementById('svo-code-output');
    const sovCodeOutput = document.getElementById('sov-code-output');

    let selectedRange;

    function setIndex(editableDiv, indexInput, codeOutput) {
        const indexValue = indexInput.value;
        if (selectedRange && indexValue) {
            const selectedText = window.getSelection();
            selectedText.removeAllRanges();
            selectedText.addRange(selectedRange);

            const selectedContent = selectedRange.extractContents();
            const span = document.createElement('span');
            span.appendChild(selectedContent);
            span.className = `data-index_${indexValue}`;
            selectedRange.insertNode(span);

            selectedText.removeAllRanges();
            selectedRange = null;  // Clear the selection range after applying the index
            updateCodeOutput(editableDiv, codeOutput);
        }
    }

    function handleTextSelection(event) {
        const selectedText = window.getSelection();
        if (selectedText.rangeCount > 0 && !selectedText.isCollapsed) {
            selectedRange = selectedText.getRangeAt(0);
        }
    }

    function updateCodeOutput(editableDiv, codeOutput) {
        codeOutput.textContent = editableDiv.innerHTML;
    }

    svoEditable.addEventListener('mouseup', handleTextSelection);
    sovEditable.addEventListener('mouseup', handleTextSelection);

    setSvoIndexButton.addEventListener('click', () => setIndex(svoEditable, svoIndexInput, svoCodeOutput));
    setSovIndexButton.addEventListener('click', () => setIndex(sovEditable, sovIndexInput, sovCodeOutput));

    // Initial code output
    updateCodeOutput(svoEditable, svoCodeOutput);
    updateCodeOutput(sovEditable, sovCodeOutput);

    // Update code output on content change
    svoEditable.addEventListener('input', () => updateCodeOutput(svoEditable, svoCodeOutput));
    sovEditable.addEventListener('input', () => updateCodeOutput(sovEditable, sovCodeOutput));
});