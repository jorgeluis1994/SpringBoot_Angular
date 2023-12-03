package com.example.peticiones.Controller;

import java.util.ArrayList;
import java.util.List;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.peticiones.Models.Usuario;
import com.example.peticiones.Service.UsuarioService;

@RestController
@RequestMapping("/api/usuario")
@CrossOrigin("http://localhost:4200")

public class UsuarioController {
    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
      this.usuarioService = usuarioService;
    }

    @GetMapping("obtener")
    public List<Usuario> getAllProducts() {
        List<Usuario> listUsuario = new ArrayList<>();
        listUsuario=usuarioService.ObtenerUsuario();
        return listUsuario;
    }
    @PostMapping("agregar")
    public  Usuario saveAllProducts(@RequestBody Usuario user) {

        
       return usuarioService.saveUsuario(user);
        
        
    }
    
    
    
}
