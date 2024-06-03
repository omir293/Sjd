const audiciones = [
    {
        titulo: "Nocturno",
        autor: "Frédéric Chopin",
        genero: "Instrumental profano",
        forma: "Nocturno",
        instrumentacion: "Piano",
        audio: "ruta_al_audio_nocturno.mp3"
    },
    {
        titulo: "La trucha",
        autor: "Schubert",
        genero: "Profana vocal",
        forma: "Lied",
        instrumentacion: "Voz y piano",
        audio: "ruta_al_audio_la_trucha.mp3"
    },
    // Añade aquí el resto de las audiciones
];

function crearJuego() {
    const container = document.getElementById('audiciones-container');

    audiciones.forEach((audicion, index) => {
        const audicionDiv = document.createElement('div');
        audicionDiv.classList.add('audicion');

        const audioElement = document.createElement('audio');
        audioElement.src = audicion.audio;
        audioElement.id = `audio-${index}`;
        
        const previewButton = document.createElement('button');
        previewButton.textContent = 'Preview Audición';
        previewButton.onclick = () => {
            audioElement.currentTime = 0;
            audioElement.play();
            setTimeout(() => audioElement.pause(), 15000);
        };
        
        const tituloInput = document.createElement('input');
        tituloInput.placeholder = 'Título';
        
        const autorInput = document.createElement('input');
        autorInput.placeholder = 'Autor';
        
        const generoInput = document.createElement('input');
        generoInput.placeholder = 'Género';
        
        const formaInput = document.createElement('input');
        formaInput.placeholder = 'Forma';
        
        const instrumentacionInput = document.createElement('input');
        instrumentacionInput.placeholder = 'Instrumentación';

        audicionDiv.appendChild(audioElement);
        audicionDiv.appendChild(previewButton);
        audicionDiv.appendChild(tituloInput);
        audicionDiv.appendChild(autorInput);
        audicionDiv.appendChild(generoInput);
        audicionDiv.appendChild(formaInput);
        audicionDiv.appendChild(instrumentacionInput);
        
        container.appendChild(audicionDiv);
    });
}

document.addEventListener('DOMContentLoaded', crearJuego);
