



function modifica_probabilita_parola(controller_elementi_DOM){

    var input_dellutente = controller_elementi_DOM.configurazione_controller.inp.value;
    var lista_parole_tedesche = controller_elementi_DOM.configurazione_controller.lista_parole_tedesche;
    var indice_attivo = controller_elementi_DOM.indice_attivo;
    var lista_probabilita_flashcards = controller_elementi_DOM.configurazione_controller.lista_probabilita_flashcards;
    
    if (input_dellutente.trim().toLowerCase() == lista_parole_tedesche[indice_attivo]){
        
        console.log('corretto');
        console.log(lista_probabilita_flashcards[indice_attivo]);

        lista_probabilita_flashcards[indice_attivo] /= 50;


        console.log(lista_probabilita_flashcards[indice_attivo]);

    } else {
        
        console.log('sbagliato');
        console.log(lista_probabilita_flashcards[indice_attivo]);

        lista_probabilita_flashcards[indice_attivo] *= 100;


        console.log(lista_probabilita_flashcards[indice_attivo]);

    }


}