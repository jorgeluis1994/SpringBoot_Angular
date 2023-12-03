package com.example.peticiones.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.peticiones.Models.Usuario;
import com.example.peticiones.Repository.UsuarioRepository;
@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository= usuarioRepository;
    }

    public List<Usuario> ObtenerUsuario() {
       return usuarioRepository.SelectUser();
    } 

    public Usuario saveUsuario(Usuario user) {
        return usuarioRepository.save(user);
        
    } 
}
