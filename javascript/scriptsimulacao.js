var divuni = document.getElementById('unicast')
var divmult = document.getElementById('multicast')
var divbroad = document.getElementById('broadcast')
var divany = document.getElementById('anycast')
var diva1 = document.getElementById('area1')
var diva2 = document.getElementById('area2')
var diva3 = document.getElementById('area3')
var diva4= document.getElementById('area4')
var diva5 = document.getElementById('area5')
var diva6 = document.getElementById('area6')
divuni.addEventListener('click', clicarunicast)
divmult.addEventListener('click', clicarmulticast)
divany.addEventListener('click', clicaranycast)
divbroad.addEventListener('click', clicarbroadcast)

    function clicarunicast(){
        diva2.innerText = 'Receptor 1'
        diva2.style.background = 'rgb(36, 110, 194)' //blue
        diva2.style.color = 'white'
        diva3.innerText = 'Receptor 2'
        diva3.style.background = 'rgb(36, 110, 194)' //blue
        diva4.innerText = 'Unicast'
        diva4.style.background = 'rgb(13, 14, 13)' //black
        diva5.innerText = 'Receptor 4'
        diva5.style.background = 'rgb(36, 110, 194)' //blue
        diva6.innerText = 'Receptor 5'
        diva6.style.background = 'rgb(36, 110, 194)' //blue
    }

    function clicarmulticast(){
        diva2.innerText = 'Multicast'
        diva2.style.background = 'rgb(212, 14, 14)' //red
        diva2.style.color = 'white'
        diva3.innerText = 'Multicast'
        diva3.style.background = 'rgb(212, 14, 14)' //red
        diva4.innerText = 'Receptor 3'
        diva4.style.background = 'rgb(36, 110, 194)' //blue
        diva5.innerText = 'Multicast'
        diva5.style.background = 'rgb(212, 14, 14)' //red
        diva6.innerText = 'Receptor 5'
        diva6.style.background = 'rgb(36, 110, 194)' //blue
    }

    
    function clicaranycast(){
        diva2.innerText = 'Anycast'
        diva2.style.background = 'rgb(228, 231, 25)' //yellow
        diva2.style.color = 'black'
        diva3.innerText = 'Receptor 2'
        diva3.style.background = 'rgb(212, 14, 14)' //red
        diva4.innerText = 'Receptor 3'
        diva4.style.background = 'rgb(36, 110, 194)' //blue
        diva5.innerText = 'Receptor 4'
        diva5.style.background = 'rgb(212, 14, 14)' //red
        diva6.innerText = 'Receptor 5'
        diva6.style.background = 'rgb(36, 110, 194)' //blue
    }

        function clicarbroadcast(){
            diva2.innerText = 'Broadcast'
            diva2.style.background = 'rgb(43, 165, 12)' //green
            diva2.style.color = 'white'
            diva3.innerText = 'Broadcast'
            diva3.style.background = 'rgb(43, 165, 12)' //green
            diva4.innerText = 'Broadcast'
            diva4.style.background = 'rgb(43, 165, 12)' //green
            diva5.innerText = 'Broadcast'
            diva5.style.background = 'rgb(43, 165, 12)' //green
            diva6.innerText = 'Broadcast'
            diva6.style.background = 'rgb(43, 165, 12)' //green
        }