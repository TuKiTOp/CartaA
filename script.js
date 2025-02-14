function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const carta = document.querySelector('.carta');

    envelope.classList.toggle('open'); // Abre o cierra el sobre

    if (envelope.classList.contains('open')) {
        carta.style.transform = 'translate(-50%, -65%) scale(1)';
    } else {
        carta.style.transform = 'translate(-50%, 0%) scale(0)';
    }
}