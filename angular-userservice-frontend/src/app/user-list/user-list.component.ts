import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  firstName: any;
  p: number = 1;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  search(){
    if(this.firstName == ""){
      this.ngOnInit;
    }else{
      this.users = this.users.filter(res => {
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }

  }

  key: string ='id';
  reverse : boolean = false;
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }

  private getUsers() {
    this.userService.getUserList().subscribe(data => {
      this.users = data;
    });
  }

  userDetails(id: number){
    this.router.navigate(['user-details', id]);
  }

  updateUser(id: number){ 
    this.router.navigate(['update-user', id]);
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(data =>{
      console.log(data);
      this.getUsers();
    })
  }

  

}
