



class Controller_elementi_DOM{
    
    constructor(configurazione_controller){

        this.configurazione_controller = configurazione_controller;

        this.indice_attivo = null;
        this.parola_italiana_attiva = null;
        this.parola_tedesca_attiva = null;


        

        this.prossima_flashcard();



    }


    prima_flashcard_allavvio(){


        var indice_e_flashcard_random = weighted_random_choice_from_list_function(

            this.configurazione_controller.lista_parole_italiane,
            this.configurazione_controller.lista_probabilita_flashcards

        );


        this.indice_attivo = indice_e_flashcard_random[0];
        this.parola_italiana_attiva = indice_e_flashcard_random[1];
        this.parola_tedesca_attiva = this.configurazione_controller.lista_parole_tedesche[this.indice_attivo];
        this.configurazione_controller.display.textContent = this.parola_italiana_attiva;


    }


    controlla_se_input_corretto(){


        var casella_di_input = this.configurazione_controller.inp;
        var lista_parole_tedesche = this.configurazione_controller.lista_parole_tedesche;
        var indice_attivo = this.indice_attivo;

        modifica_probabilita_parola(this);
    
        
        casella_di_input.value = lista_parole_tedesche[indice_attivo];
    
        setTimeout(() => {

            this.prossima_flashcard();
            casella_di_input.value = '';
    
        }, 800);
    
    
    }



    prossima_flashcard(){


        var lista_parole_italiane = this.configurazione_controller.lista_parole_italiane;
        var lista_probabilita_flashcards = this.configurazione_controller.lista_probabilita_flashcards;
        var display = this.configurazione_controller.display;

    
        var indice_e_parola_italiana_nuova_flashcard = weighted_random_choice_from_list_function(lista_parole_italiane, lista_probabilita_flashcards);
    
        display.textContent = indice_e_parola_italiana_nuova_flashcard[1];
    
        this.indice_attivo = indice_e_parola_italiana_nuova_flashcard[0];
    
    
    }

}