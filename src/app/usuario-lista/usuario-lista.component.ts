import { Component } from '@angular/core';
import {Usuarios} from '../usuarios';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-usuario-lista',
  standalone: false,

  templateUrl: './usuario-lista.component.html',
  styleUrl: './usuario-lista.component.css'
})
export class UsuarioListaComponent {
  usuarios!: Usuarios[];
  constructor(private usuarioService: UsuarioService) { }
  ngOnInit() {
    this.obtenerUsuarios();
  }
  private obtenerUsuarios(){
    this.usuarioService.obtenerUsuarios().subscribe((datos)=>{
      this.usuarios = datos.data;
    })
  }
}
