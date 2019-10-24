import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  links = [
    {
      text: 'Navigation Item',
      href: '/icons',
      active: false
    },
    {
      text: 'Your Item',
      active: false,
      subNav: [
        {
          text: 'Work With Us',
          href: '/links'
        },
        {
          text: 'Our Misson',
          href: '#nogo'
        },
        {
          text: 'Item 3',
          href: '#nogo'
        }
      ]
    },
    {
      text: 'Nav Item',
      href: '#nogo',
      active: false,
      leadingIcon: 'settings'
    },
    {
      text: 'Navigation Item',
      href: '#nogo',
      leadingIcon: 'chat-online',
      subNav: [
        {
          text: 'Carlos',
          href: '#nogo'
        },
        {
          text: 'Item 2',
          href: '#nogo'
        },
        {
          text: 'Item 3',
          href: '#nogo'
        }
      ]
    },
    {
      text: 'Item',
      href: '#nogo',
      active: false,
      leadingIcon: 'chat-online'
    }
  ];

  defaultNarrowLinks = [
    {
      text: 'Our Mission',
      href: '#about-us',
      active: true,
      // subNav: [
      //   {
      //     text: 'Item 1',
      //     href: '/links'
      //   },
      //   {
      //     text: 'Item 2',
      //     href: '/links'
      //   },
      //   {
      //     text: 'Item 3',
      //     href: '/links'
      //   }
      // ]
    },
    {
      text: 'Services',
      href: '/#services',
    },
    {
      text: 'Press',
      href: 'https://www.modeldmedia.com/features/detroit-firefighter-takes-on-blight.aspx',
    },
    {
      text: '(313) 544-8414',
      href: '#nogo',
      active: false,
      leadingIcon: 'landline'
    }
  ];

  siteDropdownChoices = [
    {
      content: {
        title: 'Choice Title',
        infoLine1: 'Information about this choice',
        infoLine2: 'More Information'
      },
      value: 'Choice Title 1',
      active: false
    },
    {
      content: {
        title: 'Choice Title',
        infoLine1: 'Information about this choice',
        infoLine2: 'More Information'
      },
      value: 'Choice Title 2',
      active: true
    }
  ];

  simpleChoices = [
    {
      text: 'Change Username',
      value: 'change-username'
    },
    {
      text: 'Change Password',
      value: 'change-password'
    },
    {
      text: 'Sign Out',
      value: 'sign-out'
    }
  ];
  ngOnInit() {
  }

}
