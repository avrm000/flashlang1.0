



function modifica_probabilita_parola(){
    
    if (inp.value.trim().toLowerCase() == lista_parole_tedesche[indice_flashcard_attuale]){
        
        console.log('corretto');
        console.log(lista_probabilita_flashcards[indice_flashcard_attuale]);

        lista_probabilita_flashcards[indice_flashcard_attuale] /= 50;


        console.log(lista_probabilita_flashcards[indice_flashcard_attuale]);

    } else {
        
        console.log('sbagliato');
        console.log(lista_probabilita_flashcards[indice_flashcard_attuale]);

        lista_probabilita_flashcards[indice_flashcard_attuale] *= 100;


        console.log(lista_probabilita_flashcards[indice_flashcard_attuale]);

    }


}