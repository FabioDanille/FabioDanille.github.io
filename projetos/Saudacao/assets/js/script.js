function load(){
    const msg = window.document.querySelector('#msg')
    const img = window.document.querySelector('#imagem')
    const date = new Date()
    const hous = date.getHours()

    msg.innerHTML = `<strong>Agora são ${hous} horas</strong>`
    if (hous >= 6 && hous < 12){
        msg2.innerHTML = `Bom dia`
        img.src = './assets/img/bomdia.jpg'
        document.body.style.background = 'gray'
    }
    else if (hous >= 12 && hous <= 18 ){
        msg2.innerHTML = `Boa tarde`
        img.src = './assets/img/boatarde.jpg'
        document.body.style.background = 'brown'
    }
    else if (hous > 18){
        msg2.innerHTML = 'Boa Noite'
        img.src = './assets/img/boanoite.jpg'
        document.body.style.background = 'blue'
    }
    else {
        msg2.innerHTML = 'Boa Madrugada'
        img.src = './assets/img/boamadrugada.jpg'
        document.body.style.background = 'black'
    }
  
}
