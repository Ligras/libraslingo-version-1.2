package br.edu.ifsp.bra.libraslingo_LTP_Spring_JPA.controllers;

import br.edu.ifsp.bra.libraslingo_LTP_Spring_JPA.model.Jogador;
import br.edu.ifsp.bra.libraslingo_LTP_Spring_JPA.repository.JogadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jogadores")
public class JogadorController {

    @Autowired
    private JogadorRepository jogadorRepository; 

    // GET sem id
    @GetMapping
    public List<Jogador> listarJogadores() {
        return (List<Jogador>) jogadorRepository.findAll(); 
    }

    // GET com id
    @GetMapping("/{id}")
    public Jogador obterJogador(@PathVariable Long id) {
        return jogadorRepository.findById(id).orElse(null); 
    }

    // POST
    @PostMapping("/criarJogador")
    public Jogador criarJogador(@RequestBody Jogador jogador) {
        return jogadorRepository.save(jogador); 
    }

    // PUT
    @PutMapping("/atualizar/{id}")
    public Jogador atualizarJogador(@PathVariable Long id, @RequestBody Jogador jogador) {
        if (jogadorRepository.existsById(id)) {
            jogador.setId(id);
            return jogadorRepository.save(jogador);
        }
        return null;
    }

    // DELETE
    @DeleteMapping("/remover/{id}")
    public String deletarJogador(@PathVariable Long id) {
        if (jogadorRepository.existsById(id)) {
            jogadorRepository.deleteById(id);
            return "O jogador foi removido com sucesso.";
        } else {
            return "Não foi possível encontrar um jogador com este id.";
        }
    }
}
