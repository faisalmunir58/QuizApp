import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  public teacherpage = [
    {
      title: "Home",
      url: "home",
      icon: "moon"
    },
    {
      title: "View",
      url: "view",
      icon: "create"
    },
    {
      title: "Add",
      url: "add",
      icon: "create"
    },
    {
      title: "Edit",
      url: "edit",
      icon: "create"
    },
    


  ];

  constructor() { }

  ngOnInit() {
  }

}
