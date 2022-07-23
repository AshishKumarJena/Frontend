import { Component, OnInit } from '@angular/core';
import { ListUserService } from 'src/app/services/list-user.service';
import { AppUser } from 'src/app/app-user';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-app-user-list',
  templateUrl: './app-user-list.component.html',
  styleUrls: ['./app-user-list.component.css']
})
export class AppUserListComponent implements OnInit {

  users: AppUser[] = [];

  constructor(private listuser:ListUserService,private authService:AuthenticationService) { 
   
  }
  user:any=[]

  getUserList(){

  }

  ngOnInit(): void {
    this.listuser.getUser().subscribe(reponce=>{
      this.user.push(...reponce)},error=>this.handleError(error))
  }
  AuthError:boolean=false
  errorMsg:String=''
  handleError(errorText:any){
    this.errorMsg=errorText.error.message
        if(this.errorMsg==='[403] during [GET] to [http://localhost:8084/api/auth/validate] [AuthenticationFeignClient#verifyToken(String)]: []'){
      this.errorMsg='Session Expired..Login Again'
      this.authService.sessionExpired()
    }
    this.AuthError=true
    console.log(errorText.error)
  }
  closeErrorBox(){
    this.AuthError=false
  }
   /* this.users =[{
      "id":1,
      "name":"rahul",
      "mailId":"rahulmail",
      "password":"123pass",
      "mobile":354264646,
      "regDate":
  },
  {
    "id":2,
    "name":"sakshi",
    "password":"123pass",
    "mailId":"sakshimail",
    "mobile":38989646,
    "Date":"twenty"
}
];*/
}

