



class Controller_elementi_DOM{
    
    constructor(configurazione_controller){

        this.configurazione_controller;

        this.indice_attivo = null;
        this.parola_italiana_attiva = null;
        this.parola_tedesca_attiva = null;

        this.prima_flashcard_allavvio();

    }


    prima_flashcard_allavvio(){

        //mostra una carta casuale
        var indice_e_flashcard_random = weighted_random_choice_from_list_function(

            this.configurazione_controller.lista_parole_italiane,
            this.configurazione_controller.lista_probabilita_flashcards

        );

        this.indice_attivo = indice_e_flashcard_random[0];
        this.parola_italiana_attiva = indice_e_flashcard_random[1];
        this.parola_tedesca_attiva = this.configurazione_controller.lista_parole_tedesche[this.indice_attivo];


        this.configurazione_controller.display.textContent = this.parola_italiana_attiva;
        //salva l'indice della carta e la risposta corretta


    }


}