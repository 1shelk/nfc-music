window.addEventListener('load', async () => {
    const player = document.getElementById('player');
    
    try {
        // Инициализация аудиоконтекста после взаимодействия
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();
        
        // Запуск при первом клике (требуется для iOS)
        document.body.addEventListener('click', async () => {
            await audioContext.resume();
            await player.play();
            document.body.innerHTML = '<h1>Playing...</h1>';
        }, { once: true });

        // Показываем подсказку
        document.body.innerHTML = '<h1>Tap to start</h1>';
        
    } catch (error) {
        alert('Error: ' + error.message);
    }
});

// Регистрация PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}
