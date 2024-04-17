import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  media: User[] | undefined;
  selectedMedia: User | undefined;

  project: User[] | undefined;
  selectedProject: User | undefined;

  ngOnInit() {
    this.media = [
      { name: 'الفيسبوك', image: '../../../assets/images/facebook.png' },
      {
        name: 'الإنستجرام',
        image: '../../../assets/images/instagram.png',
      },
      { name: 'لينكدان', image: '../../../assets/images/linkedin.png' },
      { name: 'واتساب', image: '../../../assets/images/whatsapp.png' },
      { name: 'تلجرام', image: '../../../assets/images/telegram.png' },
      { name: 'يوتيوب', image: '../../../assets/images/youtube.png' },
      { name: 'توتير', image: '../../../assets/images/twitter.png' },
    ];
    this.project = [
      { name: 'مشروع 1', image: '../../../assets/images/verified.png' },
      {
        name: 'مشروع 2',
        image: '../../../assets/images/idea.png',
      },
      { name: 'مشروع 3', image: '../../../assets/images/planning.png' },
      { name: 'مشروع 4', image: '../../../assets/images/team-meeting.png' },
      { name: 'مشروع 5', image: '../../../assets/images/project.png' },
      {
        name: 'مشروع 6',
        image: '../../../assets/images/project-management.png',
      },
      { name: 'مشروع 7', image: '../../../assets/images//manager.png' },
    ];
  }
}
