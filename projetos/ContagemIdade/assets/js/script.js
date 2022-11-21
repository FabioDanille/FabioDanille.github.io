function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res') // document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''


        
        // já foi ensinado como por imagem via HTML
        // agora é a maneira dinâmica
        var img = document.createElement('img')
        img.setAttribute('id','foto')





        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 5){
                //baby
                img.setAttribute('src','./assets/img/baby-h.png')
                res.innerHTML = `Detectamos um bebê <strong>${gênero}</strong> com ${idade} anos`
            } else if (idade <= 12){
                //criança
                img.setAttribute('src','./assets/img/criança-h.png')
                res.innerHTML = `Detectamos uma criança <strong>${gênero}</strong> com ${idade} anos`
            } else if (idade < 18){
                //adolescente
                img.setAttribute('src','./assets/img/ado-h.png')
                res.innerHTML = `Detectamos um adolescente <strong>${gênero}</strong> com ${idade} anos`
            } else if (idade <= 35){
                //jovem
                img.setAttribute('src','./assets/img/jovem-h2.png')
                res.innerHTML = `Detectamos um jovem <strong>${gênero}</strong> com ${idade} anos`
            } else if (idade < 60){
                //adulto
                img.setAttribute('src','./assets/img/adulto-h.png')
                res.innerHTML = `Detectamos um adulto <strong>${gênero}</strong> com ${idade} anos`
            } else if (idade >= 60){
                //idoso
                img.setAttribute('src','./assets/img/idoso-h.png')
                res.innerHTML = `Detectamos um idoso <strong>${gênero}</strong> com ${idade} anos`
            }



        }
        else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 5){
                //baby
                img.setAttribute('src','./assets/img/baby-m.png')
                res.innerHTML = `Detectamos uma bebê <strong>${gênero}</strong> com ${idade} anos`
            } else if (idade <= 12){
                //criança
                img.setAttribute('src','./assets/img/criança-m.png')
                res.innerHTML = `Detectamos uma criança <strong>${gênero}</strong> com ${idade} anos`
            } else if (idade < 18){
                //adolescente
                img.setAttribute('src','./assets/img/ado-m.png')
                res.innerHTML = `Detectamos uma adolescente <strong>${gênero}</strong> com ${idade} anos`
            } else if (idade <= 35){
                //jovem
                img.setAttribute('src','./assets/img/jovem-m2.png')
                res.innerHTML = `Detectamos uma jovem <strong>${gênero}</strong> com ${idade} anos`
            } else if (idade < 60){
                //adulto
                img.setAttribute('src','./assets/img/adulto-m.png')
                res.innerHTML = `Detectamos uma adulta <strong>${gênero}</strong> com ${idade} anos`
            } else if (idade >= 60){
                //idoso
                img.setAttribute('src','./assets/img/idoso-m.png')
                res.innerHTML = `Detectamos uma idosa <strong>${gênero}</strong> com ${idade} anos`
            }
        }
        res.style.textAlign = 'center' //maneira de alinhar diferente do css, diretamente pelo JS
        res.appendChild(img) // pra fazer a imagem aparecer
    }
}