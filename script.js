window.onload = function() {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play-button');
    const songTitle = "Não Temas";
    const artistName = "Shirley Carvalhaes, Elisrael";

    // Solicitar permissão para enviar notificações
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            showNotification();
        }
    });

    // Tocar música automaticamente
    audio.play().catch(error => {
        console.error("Erro ao tentar tocar a música:", error);
    });

    // Alternar play/pause
    playButton.onclick = function() {
        if (audio.paused) {
            audio.play().catch(error => {
                console.error("Erro ao tentar tocar a música:", error);
            });
            playButton.textContent = '⏸️'; // Ícone de pausa
            showNotification(); // Mostrar notificação ao retomar
        } else {
            audio.pause();
            playButton.textContent = '▶️'; // Ícone de play
        }
    };

    // Repetir a música
    audio.onended = function() {
        audio.currentTime = 0; // Volta ao início
        audio.play(); // Recomeça a tocar
    };

    function showNotification() {
        const notification = new Notification("Música Tocando!", {
            body: `${songTitle} - ${artistName}`,
            icon: "NÃO TEMAS_.jpg"
        });

        // Fechar a notificação após 5 segundos
        setTimeout(() => {
            notification.close();
        }, 5000);
    }
};

