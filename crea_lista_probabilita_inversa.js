



function crea_lista_probabilita_inversa(){

    var lista_probabilita_flashcards = [];

        for (var x = 0; x < 1000; x++) {
            


            lista_probabilita_flashcards.push((Math.exp(x/200))/1000000000);

        }

    return lista_probabilita_flashcards;


}