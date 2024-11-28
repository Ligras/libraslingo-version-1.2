package com.ifsp.bra.libraslingo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ifsp.bra.libraslingo.model.Jogador;
import com.ifsp.bra.libraslingo.repository.JogadorRepository;

@RestController
@RequestMapping("/api/ranking")
@CrossOrigin(origins = "*") // Permitir acessos externos
public class RankingController {

    @Autowired
    private JogadorRepository jogadorRepository;

    // Endpoint para buscar o ranking
    @GetMapping
    public List<Jogador> getRanking() {
        return jogadorRepository.findRanking();
    }
}

