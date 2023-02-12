import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: "app-menu-lateral",
  templateUrl: "./menu-lateral.component.html",
  styleUrls: ["./menu-lateral.component.css"]
})
export class MenuLateralComponent implements OnInit {
  mobileQuery: MediaQueryList ;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;
  usuarioSession:any
  constructor(private MatButtonModule:MatButtonModule,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher
    ) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
     }

     ngOnDestroy(): void {
      this.usuarioSession = sessionStorage.getItem('roles')
      console.log("data de session::", this.usuarioSession)
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  ngOnInit(): void {
  }

}
