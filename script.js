function contar() {
    //var num1 = Number (document.getElementById("txtin1").value);
    var num1 = document.getElementById('txtn1');
    var num2 = document.getElementById("txtn2");
    var passo = document.getElementById("txtn3");
    var res = document.querySelector("div#res");

    if (num1.value.length == 0 || num2.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível Contar!`

    } else {
        res.innerHTML = `Contando: <br>`;
        var i = Number(num1.value);
        var f = Number(num2.value);
        var p = Number(passo.value);
        if (p <= 0) {
            window.alert(`Passo inválido, considerando PASSO 1`);
            p = 1;
        }
        if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }

        } else{
            //contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `

            }
        }
        res.innerHTML += `\u{1F3C1}`

    }
}

/*var temp = num1;
 if (num1 <=0){
     res.innerHTML = `Impossível contar!`
 }else if (passo == "" || passo == 0){
     window.alert ("[ERRO]: Passo Inválido, considerando PASSO 1")
     passo = 1;
 }else{
   while (temp <= num2){
     res.innerHTML += `Contando: ${temp} ->`
 temp += passo
}
}
}



/*
if (fano.value.length == 0 || Number(fano.value) > ano){
 window.alert("[ERRO] Verifique os dados e tente novamente.")
} else{
 var fsex = document.getElementsByName("radsex");
 var idade = ano - Number(fano.value);
 var img = document.createElement ('img')
 img.setAttribute('id', 'foto');
 var genero = "";

 if (fsex[0].checked) {
     genero = "Homem";
     if (idade >= 0 && idade < 10){
     //Criancah
     img.setAttribute('src', 'criancah.png')
     }   else if (idade < 21){
     //Jovem
     img.setAttribute('src', 'menino.png')
     }   else if (idade < 50){
     //Adulto
     img.setAttribute('src', 'homem.png')
     }   else {
     //Idoso
     img.setAttribute('src', 'idoso.png')
     }

 } else if (fsex[1].checked){
     genero = "Mulher"
     if (idade >= 0 && idade < 10){
         //Criançam
         img.setAttribute('src', 'criancam.png')
         }   else if (idade < 21){
         //Jovem
         img.setAttribute('src', 'menina.png')
         }   else if (idade < 50){
         //Adulto
         img.setAttribute('src', 'mulher.png')
         }   else {
         //Idosa
         img.setAttribute('src', 'idosa.png')
         }
 }
 res.style.textAlign = 'center'
 res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
 res.appendChild(img)
}

 
}

*/