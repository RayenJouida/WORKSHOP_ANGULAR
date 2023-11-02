import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  id: number = 0;

 // id:string |null="";
  listUsers:User[]=[];
  user : User= new User();

  //injection depandencies 
  //ena be3th parametre houni n7ebo naaml recupertation lel param 

//paramMaps (taati info lkol )
//params ken edheka {id: '1'}  pointe just objet edheka directement 

  constructor(private _activated:ActivatedRoute,private _userService:UserService){
    this._activated.params.subscribe(params=>{
      console.log(params['id']);
      console.log(params['name']);
    });

    
    console.log(this._activated.snapshot.paramMap.get('id'));
    console.log(this._activated.snapshot.paramMap.get('name'));
    console.log(this._activated.snapshot.params['id']); 
    console.log(this._activated.snapshot.params['name']); 

//   query param exemple http://localhost:4200/user/1/test?min=5
    this._activated.queryParamMap.subscribe(params=>{
      console.log(params.get('min'));
      
    });
    this._userService.fetchUsersById(this.id).subscribe({
      next : (data)=> {this.user = data as User}
    })

  }

}
