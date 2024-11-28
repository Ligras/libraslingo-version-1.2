package com.ifsp.bra.libraslingo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ifsp.bra.libraslingo.model.Jogador;

@Repository
public interface JogadorRepository extends JpaRepository<Jogador, Long> {

    // Consulta ordenada pela pontuação em ordem decrescente
    @Query("SELECT j FROM Jogador j ORDER BY j.pontuacaoRanking DESC")
    List<Jogador> findRanking();
}
