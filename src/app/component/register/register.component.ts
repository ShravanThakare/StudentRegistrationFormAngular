// import { Component, OnInit, importProvidersFrom } from '@angular/core';
// import { FormvalidationService } from '../../service/formvalidation.service';
// import { NetworkcallService } from '../../service/networkcall.service';
// import { Studentregister } from '../../model/studentregister';
// // import { MatDialogRef } from '@angular/material/dialog';
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css',
//   // providers: [MatDialogRef]
// })
// export class RegisterComponent implements OnInit{
//   userRegistrationModel:Studentregister=new Studentregister();
  
//   constructor(public formvalidservice: FormvalidationService, 
//      public urlservice: NetworkcallService,
//     // public dialogreference:MatDialogRef<RegisterComponent>
//     ){
//   }
//   ngOnInit():void{

//   }

// submitdata(){
//   this.urlservice.createstudentreg(this.userRegistrationModel).
//   subscribe(
//     data => {
//       console.log(data);
//     } 
//   );
//   // this.onClose();
// }
// // onClose(){
// //   this.dialogreference.close()
// // }
// }

import { Component, OnInit } from '@angular/core';
import { FormvalidationService} from '../../service/formvalidation.service';
import { NetworkcallService } from '../../service/networkcall.service';
import { Studentregister } from '../../model/studentregister';
import { subscribe } from 'diagnostics_channel';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  userRegistrationModel:Studentregister=new Studentregister();
  constructor(public formvalidservice: FormvalidationService,
    public urlservice:NetworkcallService,
    public dialogreference:MatDialogRef<RegisterComponent>) {}
  ngOnInit(): void {}


submitdata(){
  this.urlservice.createstudentreg(this.userRegistrationModel).subscribe(data=>{

  });
  this.onClose();
  }
onClose(){
this.dialogreference.close()
}

}
