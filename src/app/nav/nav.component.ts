import { Component, OnInit, Inject} from '@angular/core';
import { RegisterComponent } from '../component/register/register.component';
import { MatDialog } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  constructor(private dialog:MatDialog){
    
  }
  ngOnInit():void{

  }
  register(){
      this.dialog.open(RegisterComponent, {
        width: '50%',
        height: '60%'
      });
  }
}
