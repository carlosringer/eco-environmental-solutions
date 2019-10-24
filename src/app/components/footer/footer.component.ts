import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  localLinks = [
    {
      heading: 'Site Links',
      links: [
        {
          text: 'About Us',
          href: '#about-us'
        },
        {
          text: 'Press',
          href: 'https://www.modeldmedia.com/features/detroit-firefighter-takes-on-blight.aspx'
        }
      ]
    }
  ];

  socialLinks = [
    // {
    //   href: '/icons-1',
    //   icon: 'facebook-two-color',
    //   iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
    //   analytics: 'link-1',
    //   iconScreenReaderText: 'facebook'
    // },
    // {
    //   href: '/icons-2',
    //   icon: 'instagram-two-color',
    //   iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
    //   analytics: 'link-2',
    //   iconScreenReaderText: 'instagram'
    // },
    // {
    //   href: '/icons-3',
    //   icon: 'twitter-two-color',
    //   iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
    //   analytics: 'link-3',
    //   iconScreenReaderText: 'twitter'
    // }
    {}
  ];

  ngOnInit() {
  }

}
