var comutacao = document.getElementById('divcomutacao')
var tipos = document.getElementById('divtipos')
var uni = document.getElementById('divtipouni')
var multi = document.getElementById('divtipomulti')
var any = document.getElementById('divtipoany')
var broad = document.getElementById('divtipobroad')

comutacao.addEventListener('mouseenter', entrarcomutacao)
tipos.addEventListener('click', clicartipos)
tipos.addEventListener('mouseenter', entrartipos)
uni.addEventListener('mouseenter', entrartipouni)
uni.addEventListener('mouseout', sairtipouni)
multi.addEventListener('mouseenter', entrartipomulti)
multi.addEventListener('mouseout', sairtipomulti)
any.addEventListener('mouseenter', entrartipoany)
any.addEventListener('mouseout', sairtipoany)
broad.addEventListener('mouseenter', entrartipobroad)
broad.addEventListener('mouseout', sairtipobroad)

function entrarcomutacao(){
    comutacao.innerText = 'A comutação refere-se a destinação de recursos de rede para a transmissão pelos diversos dispositivos conectados a mesma.'
}

function entrartipos(){
    tipos.innerText = 'A transmissão de dados podem ser feitas em quatro formas.'
}

function clicartipos(){
    uni.style.background = 'rgb(13, 14, 13)' //black
    uni.innerText = 'Unicast'
    multi.style.background = 'rgb(212, 14, 14)' //red
    multi.innerText = 'Multicast'
    any.style.background = 'rgb(228, 231, 25)' // yellow
    any.innerText = 'Anycast'
    broad.style.background = 'rgb(43, 165, 12)' //green
    broad.innerText = 'Broadcast'
}

function entrartipouni(){
    tipos.style.background = 'rgb(13, 14, 13)' //black
    tipos.innerText = 'Unicast: Transmissão um para um'
}

function sairtipouni(){
    tipos.style.background = 'rgb(36, 110, 194)' // blue
    tipos.innerText = 'A transmissão de dados podem ser feitas em quatro formas.'
}

function entrartipomulti(){
    tipos.style.background =  'rgb(212, 14, 14)' //red
    tipos.innerText = 'Multicast: Transmissão um para alguns (Um grupo).'
}

function sairtipomulti(){
    tipos.style.background = 'rgb(36, 110, 194)' // blue
    tipos.innerText = 'A transmissão de dados podem ser feitas em quatro formas.'
}

function entrartipoany(){
    tipos.style.background =  'rgb(228, 231, 25)' // yellow
    tipos.innerText = 'Anycast: Transmissão para o mais próximo de um grupo.'
    tipos.style.color = 'black'
}

function sairtipoany(){
    tipos.style.background = 'rgb(36, 110, 194)' // blue
    tipos.innerText = 'A transmissão de dados podem ser feitas em quatro formas.'
    tipos.style.color = 'white'
}

function entrartipobroad(){
    tipos.style.background =  'rgb(43, 165, 12)' //green
    tipos.innerText = 'Broadcast: Trasnmissão um para todos.'
}

function sairtipobroad(){
    tipos.style.background = 'rgb(36, 110, 194)' // blue
    tipos.innerText = 'A transmissão de dados podem ser feitas em quatro formas.'
}