

function crea_lista_probabilita(mode = 'normal'){


    if (mode == 'normal'){
        

        return crea_lista_probabilita_normale();


    } else if (mode == 'inverse'){

        
        return crea_lista_probabilita_inversa();



    } else if (mode == 'linear'){

        return crea_lista_probabilita_lineare();

    }

}


