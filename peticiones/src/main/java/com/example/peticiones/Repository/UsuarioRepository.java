package com.example.peticiones.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.peticiones.Models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

    @Query( value = "SELECT id, nombre, apellido, cargo, correo, edad FROM public.usuario;",nativeQuery = true)
    List<Usuario> SelectUser();
    
}
