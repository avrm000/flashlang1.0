
let lista_probabilita_flashcards = crea_lista_probabilita();



const display = document.getElementById('display');
const inp = document.getElementById('inp');
const button = document.getElementById('bottone');




let configurazione_controller = new Config_class_controller_elementi_DOM(
    display, 
    inp, 
    button, 
    lista_parole_italiane, 
    lista_parole_tedesche, 
    lista_probabilita_flashcards
);

let controller_elementi_DOM = new Controller_elementi_DOM(configurazione_controller);








