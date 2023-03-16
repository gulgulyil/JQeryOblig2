

function formatere(data){
    let ut="<table class=\"table table-striped table-bordered\"><tr>"+
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon Nr</th><th>Epost</th>"+
        "</tr>";
    for(let b of data){
        ut+="<tr>";
        ut+="<td>" +b.velgFilm+"</td><td>"+b.antall+"</td><td>"+b.fornavn+"</td><td>"+b.etternavn+"</td><td>"+ b.telefonnr + "</td><td>"+b.epost+"</td>";
        ut+="</tr>";
    }
    $("#biletter").html(ut);
}

function bilettRegister() {
    let velgFilm = $("#velgFilm").val();
    const antall = $("#antall").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefonnr = $("#telefonnr").val();
    const epost = $("#epost").val();

    let feilTall = 0;
    if (velgFilm === "") {
        feilTall++;
    }
    if (isNaN(Number(antall)) || antall === "") {
        $("#feilAntall").html("Må skrive noe inn i tall");
        feilTall++;
    } else {
        $("#feilAntall").html("");
    }

    if (fornavn === "") {
        $("#feilFornavn").html("Må skrive noe inn i fornavnet");
        feilTall++;
    } else {
        $("#feilFornavn").html("");
    }

    if (etternavn === "") {
        $("#feilEtternavn").html("Må skrive noe inn i etternavnet");
        feilTall++;
    } else {
        $("#feilEtternavn").html("");
    }

    if (telefonnr === "") {
        $("#feilTelefonnr").html("Må skrive noe inn i telefonnr");
        feilTall++;
    } else {
        $("#feilTelefonnr").html("");
    }

    if (epost === "") {
        $("#feilEpost").html("Må skrive noe inn i epost")
        feilTall++;
    } else {
        $("#feilEpost").html("");
    }


    const bilett = {
        velgFilm: velgFilm,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    };

    if (feilTall === 0) {
        $.post('/lagreBilett', bilett, function () {
            hentAlle()
        });
        $("#velgFilm").val("");
        $('input').val('');

    }
}

  function hentAlle(){
  $.get('/hentAlleBiletter', function (data){
      formatere(data);
  });
    }

    function slettBilettene(){
        $.get('/slettBilettene',function(){
            hentAlle();
        });
    }





