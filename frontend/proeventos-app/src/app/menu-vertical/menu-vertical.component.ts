import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.scss']
})
export class MenuVerticalComponent {

  isVisible: boolean = false;

  ngOnInit(): void {
    this.isVisible = false;
  }

  public menuShow(){
    this.isVisible = !this.isVisible;
  }
}
