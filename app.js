
function onType(textarea) {
    textarea.value = textarea.value.replace(/[^0-9\n]/g, '');

    document.getElementById('img').src = spiders[parseInt(textarea.value,10)%spiders.length]["image"]
}