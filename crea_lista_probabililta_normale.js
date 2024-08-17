



function crea_lista_probabilita_normale(){

    var lista_probabilita_flashcards = [];

        for (var x = 0; x < 1000; x++) {
            


            lista_probabilita_flashcards.push(1/(Math.exp(x/200)));

        }


    return lista_probabilita_flashcards;


}