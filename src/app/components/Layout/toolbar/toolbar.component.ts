import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SessionService } from '../../../auth/service/session.service';
import { User } from '../../../models/users.module';
import { Router } from '@angular/router';

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnDestroy {
  usuarioSession:any;

  @Output() toggleSidebar = new EventEmitter();
  public user:any
  private destroyed$ = new Subject();

  constructor(private SessionService: SessionService,
    private router:Router) { 
    this.SessionService.user$
    .pipe(takeUntil(this.destroyed$))
    .subscribe((user)=>{
      // Console.log("dato user:::",user)
      // if(user){ this.user= `${user.nombre} ${user.apellidos}`;
      this.user= localStorage.getItem('usuario')
      if(user){ ;
      console.log("SSSS:::",user)
      }
    })
  }
  ngOnDestroy(): void {
    this.destroyed$.next(true)
    this.usuarioSession = sessionStorage.getItem('roles')
  }

  logout(){
    this.usuarioSession = 0
    localStorage.removeItem('usuario');
    sessionStorage.removeItem('roles');
    this.router.navigate(['login'])
  }
}
