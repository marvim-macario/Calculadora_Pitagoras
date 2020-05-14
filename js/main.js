// variáveis globais
const form = document.getElementById('form');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // capturando dados inseridos pelo Usuário
    let data = {
        cat_adj: parseInt(document.getElementById("ladoA").value),
        cat_op: parseInt(document.getElementById("ladoB").value)
    };

    validar(data);
    // usando a API
    const URL = 'https://atlas-231814.appspot.com/calcula'
    fetch(URL, {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function (response) {
            response.json().then(function (data) {
                document.getElementById("resultado").innerHTML = data.hip

            });
        })
        .catch(function (err) {
            console.error('Failed retrieving information', err);
        });


});

// verificando se as entradas estão corretas 
const validar = (data) => {
    if (isNaN(data['cat_adj']) || isNaN(data['cat_op'])) {
        swal("Erro", "todos os campos precisam ser preenchidos corretamente.", "error")
        console.log(data)
    }
};

// configurar botao reset
form.addEventListener("reset", () => {
    window.location.href = window.location.href
})