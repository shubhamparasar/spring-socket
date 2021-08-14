let btn1= document.getElementById('btn1')
let btn2= document.getElementById('btn2')
let btn3= document.getElementById('btn3')
let btn4= document.getElementById('btn4')

let aud1=document.getElementById('aud1')
let aud2=document.getElementById('aud2')
let aud3=document.getElementById('aud3')
let aud4=document.getElementById('aud4')

let sock;
let client;

window.onload= function (){
    sock= new SockJS('/music-mania') // creates a websocket connection
    client= Stomp.over(sock) //wraps socket into stomp object

    client.connect({},function (){
        client.subscribe('/instruments/play',function (data){
            let body = JSON.parse(data.body)
            document.getElementById(body.instrument).play()
        })
    })

}



btn1.onclick = function (){
    client.send(
        '/app/play',
        {},
        JSON.stringify({instrument:'aud1'})
    )
}
btn2.onclick = function (){
    client.send(
        '/app/play',
        {},
        JSON.stringify({instrument:'aud2'})
    )
}

btn3.onclick = function (){
    client.send(
        '/app/play',
        {},
        JSON.stringify({instrument:'aud3'})
    )
}

btn4.onclick = function (){
    client.send(
        '/app/play',
        {},
        JSON.stringify({instrument:'aud4'})
    )
}


