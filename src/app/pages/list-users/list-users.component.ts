import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  
listUsers:User[]=[];

  constructor(private _router: Router,private _userService:UserService) {
  }

  ngOnInit(): void {
  
    this._userService.fetchUsers().subscribe({
      next:(data)=>this.listUsers=data as User[],
      error:(err)=>console.log(err),
      complete:()=>console.log('completede')
      
    })
    console.log("im mounted");
  }
/*
  calculer(){
    console.log(
     // this.listUsers=this._userService.fetchNbInList(this.listUsers, "accountCategory", "Customer"),
      this.listUsers=this._userService.fetchNbInList(this.listUsers, "accountCategory", "Customer")
    );
    
  
   

  }
  
 result="";
 calculer(){
  this.result=this._userService.fetchNbInList(this.listUsers, "accountCategory", "Customer");
 }
 */
 result="";
  
 calculer() {
  this.result = this._userService.fetchNbInList(
    this.listUsers,
    'email',
    'mila@kunis.com'
  );
}



/*
  deleteUser(user: User) {
    // Vous pouvez implémenter ici la logique de suppression de l'utilisateur
    // Par exemple, vous pouvez utiliser la méthode filter pour supprimer l'utilisateur de la liste
  this.listUsers = this.listUsers.filter(u => u !== user);
  }
  */
  //searchCategories="";
/*
  Onsearchat(){
    this.listUsers= this.listUsers.filter((p) => p.accountCategory == this.searchCategories);
  }
  */

  ToDetails(id: number) {
    this._userService.fetchUsersById(id).subscribe({
      next: (user: any) => {
        this.listUsers = [user];
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteUser(id:number) {
    // Vous pouvez implémenter ici la logique de suppression de l'utilisateur
    // Par exemple, vous pouvez utiliser la méthode filter pour supprimer l'utilisateur de la liste
  this._userService.deleteUsers(id).subscribe( {
      next:()=>this.listUsers=this.listUsers.filter((e)=>e.id!=id)
    } );

  }
  

}
