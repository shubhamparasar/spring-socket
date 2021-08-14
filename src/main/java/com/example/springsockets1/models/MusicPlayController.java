package com.example.springsockets1.models;


import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MusicPlayController {

    @MessageMapping("/play")
    @SendTo("/instruments/play")
    public PlayMessage playInstrument(PlayMessage playMessage){
        System.out.println("playing" + playMessage);
        return playMessage;
    }
}
