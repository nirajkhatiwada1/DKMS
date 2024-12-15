document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('keyForm');
    const keyList = document.getElementById('keyList');

    // Array to store keys
    let keys = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const keyInput = document.getElementById('keyInput');

        const keyName = keyInput.value.trim();
        if (keyName && !keys.includes(keyName)) {
            keys.push(keyName);
            renderKeys();
            keyInput.value = '';
        } else {
            alert("Key is either duplicate or invalid.");
        }
    });

    function renderKeys() {
        keyList.innerHTML = '';
        keys.forEach(key => {
            const li = document.createElement('li');
            li.textContent = key;
            keyList.appendChild(li);
        });
    }
});