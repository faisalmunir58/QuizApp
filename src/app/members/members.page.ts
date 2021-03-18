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
      url: "/members/teacher/home",
      icon: "moon"
    },
    {
      title: "Quiz",
      url: "/members/teacher/quiz/add",
      icon: "create"
    },
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
