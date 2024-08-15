



class Controller_elementi_DOM{
    
    constructor(configurazione_controller){

        this.configurazione_controller = configurazione_controller;

        this.indice_attivo = null;
        this.parola_italiana_attiva = null;
        this.parola_tedesca_attiva = null;


        

        this.prossima_flashcard();



    }



    controlla_se_input_corretto(){


        var casella_di_input = this.configurazione_controller.inp;
        var lista_parole_tedesche = this.configurazione_controller.lista_parole_tedesche;
        var indice_attivo = this.indice_attivo;

        modifica_probabilita_parola_in_base_alla_correttezza(this);
    
        mostra_parola_corretta_nella_casella_dinput(this);
    
        setTimeout(() => {

            this.prossima_flashcard();
    
        }, 800);
    
    
    }



    prossima_flashcard(){

        var casella_di_input = this.configurazione_controller.inp;
        var lista_parole_italiane = this.configurazione_controller.lista_parole_italiane;
        var lista_probabilita_flashcards = this.configurazione_controller.lista_probabilita_flashcards;
        var display = this.configurazione_controller.display;


        casella_di_input.value = '';
    
        var indice_e_parola_italiana_nuova_flashcard = weighted_random_choice_from_list_function(lista_parole_italiane, lista_probabilita_flashcards);
    
        display.textContent = indice_e_parola_italiana_nuova_flashcard[1];
    
        this.indice_attivo = indice_e_parola_italiana_nuova_flashcard[0];
    
    
    }

}