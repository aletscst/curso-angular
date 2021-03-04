import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  public displayedColumns: string[] = ['id', 'name', 'last_name', 'email', 'address', 'type', 'opcs'];
  public users:User[] = [];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(user:User){
    if(!confirm(`Desea eliminar a ${user.name} ?`)) return;
    
    this.userService.deleteUser(user.id).subscribe(resp => {
      alert(resp.message);
      this.getUsers();
    });
  }

}
