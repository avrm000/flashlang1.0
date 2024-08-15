



function mostra_parola_corretta_nella_casella_dinput(controller_elementi_DOM){



    var casella_di_input = controller_elementi_DOM.configurazione_controller.inp;
    var lista_parole_tedesche = controller_elementi_DOM.configurazione_controller.lista_parole_tedesche;
    var indice_attivo = controller_elementi_DOM.indice_attivo;

    casella_di_input.value = lista_parole_tedesche[indice_attivo];



}