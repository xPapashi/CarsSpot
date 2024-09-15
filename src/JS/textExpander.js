document.addEventListener('DOMContentLoaded', function() {
    var maxLength = 178;

    var textBlocks = document.querySelectorAll('.seo-text');
    var buttons = document.querySelectorAll('.toggle-btn');

    textBlocks.forEach(function(textBlock, index) {
        var fullText = textBlock.textContent.trim();
        var isExpanded = false;

        if (fullText.length > maxLength) {
            var truncatedText = fullText.slice(0, maxLength) + '...';
            textBlock.textContent = truncatedText;

            buttons[index].addEventListener('click', function() {
                if (isExpanded) {
                    textBlock.textContent = truncatedText;
                    buttons[index].querySelector('span:first-child').textContent = 'Rozwiń';
                } else {
                    textBlock.textContent = fullText;
                    buttons[index].querySelector('span:first-child').textContent = 'Zwiń';
                }
                isExpanded = !isExpanded;
            });
        }
    });
});