// La parola che vuoi trasformare in voce



function text_to_speach(parola) {

    const utterance = new SpeechSynthesisUtterance(parola);

    utterance.lang = 'sl-SI'; 

    // Puoi impostare la velocità della voce (opzionale)
    utterance.rate = 1; 

    // Avvia il text-to-speech
    window.speechSynthesis.speak(utterance);

}