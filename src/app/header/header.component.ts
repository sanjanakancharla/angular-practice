import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() customeve = new EventEmitter();

  message="passing a message from child comp to parent comp"
  
  passtoParent(){
    this.customeve.emit(this.message);
  }


}
