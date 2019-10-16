import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }


globalLinks = [
  {
  text: 'Lorem ipsum dolor sit amet, consectetur.',
  href: '/global-1',
  icon: 'auto-loans',
  iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--stroke-current-color',
  analytics: 'link-1',
  iconScreenReaderText: 'cats'
  },
  {
  text: 'Lorem ipsum dolor sit amet, consectetur.',
  href: '/global-2',
  imgSrc:
  'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
  imgCSS: 'sprk-u-Width-20',
  imgAlt: 'Foo',
  analytics: 'link-2'
  },
  {
  text: 'Lorem ipsum dolor sit amet, consectetur.',
  href: '/global-3',
  imgSrc:
  'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
  imgCSS: 'sprk-u-Width-20',
  imgAlt: 'Foo',
  analytics: 'link-2'
  },
  {
  text: 'Lorem ipsum dolor sit amet, consectetur.',
  href: '/global-4',
  icon: 'auto-loans',
  iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--stroke-current-color',
  analytics: 'link-1',
  iconScreenReaderText: 'cats'
  },
  {
  text: 'Lorem ipsum dolor sit amet, consectetur.',
  href: '/global-5',
  icon: 'payment-center',
  iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--stroke-current-color',
  analytics: 'link-1',
  iconScreenReaderText: 'cats'
  }
  ];
  
  localLinks = [
  {
  heading: 'Site Links',
  links: [
  {
  text: 'About This',
  href: '/about-this',
  analyticsString: 'Link to Sub Item 1'
  },
  {
  text: 'About This Other Thing',
  href: '/about-this-other-thing'
  },
  {
  text: 'About That',
  href: '/about-that'
  },
  {
  text: 'Link Item',
  href: '/link-item',
  analyticsString: 'Link to Sub Item 1'
  },
  {
  text: 'This Link Item',
  href: '/this-link-item',
  analyticsString: 'Link to Sub Item 1'
  }
  ]
  },
  {
  heading: 'Learn More',
  links: [
  {
  text: 'About This Other Thing',
  href: '/learn-more-1'
  },
  {
  text: 'About This',
  href: '/learn-more-2'
  },
  {
  text: 'About That',
  href: '/learn-more-3'
  },
  {
  text: 'Link Item',
  href: '/learn-more-4',
  analyticsString: 'Link to Sub Item 1'
  }
  ]
  },
  {
  heading: 'Support',
  links: [
  {
  text: 'Share Your Screen',
  href: '/share-screen',
  analyticsString: 'Link to Sub Item 1'
  },
  {
  text: 'Opt Out',
  href: '/opt-out'
  },
  {
  text: 'About That',
  href: '/about-that'
  },
  {
  text: 'Disclosures and Other Things',
  href: '/things',
  analyticsString: 'Link to Sub Item 1'
  },
  {
  text: 'We Want Your Feedback',
  href: '/feedback',
  analyticsString: 'Link to Sub Item 1'
  }
  ]
  }
  ];
  
  socialLinks = [
  {
  href: '/icons-1',
  icon: 'facebook-two-color',
  iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
  analytics: 'link-1',
  iconScreenReaderText: 'facebook'
  },
  {
  href: '/icons-2',
  icon: 'instagram-two-color',
  iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
  analytics: 'link-2',
  iconScreenReaderText: 'instagram'
  },
  {
  href: '/icons-3',
  icon: 'twitter-two-color',
  iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
  analytics: 'link-3',
  iconScreenReaderText: 'twitter'
  },
  {
  href: '/icons-4',
  icon: 'youtube-two-color',
  iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
  analytics: 'link-4',
  iconScreenReaderText: 'youtube'
  },
  ];
  
  badgeLinks = [
  {
  href: '/badge-1',
  icon: 'townhouse',
  iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
  analytics: 'link-1',
  iconScreenReaderText: 'townhouse'
  },
  {
  href: '/badge-2',
  icon: 'townhouse',
  iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
  analytics: 'link-2',
  iconScreenReaderText: 'townhouse'
  },
  {
  href: '/badge-3',
  icon: 'townhouse',
  iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
  analytics: 'link-3',
  iconScreenReaderText: 'townhouse'
  }
  ];
  
  awards = [
  {
  href: '/awards-1',
  imgSrc:
  'https://www.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
  imgCSS: 'drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large',
  imgAlt: 'placeholder',
  analytics: 'link-1'
  },
  {
  href: '/awards-2',
  imgSrc:
  'https://www.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
  imgCSS: 'drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large',
  imgAlt: 'placeholder',
  analytics: 'link-2'
  }
  ];
  
  disclaimerToggle = [
  {
  title: 'My Award Disclaimer',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante.',
  analytics: 'disclaimer'
  }
  ];
  
  disclaimerText = [
  {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
  text: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
  text: 'Lorem ipsum dolor sit amet, consectetur.'
  },
  {
  text: 'Lorem ipsum dolor sit amet, consectetur.'
  },
  ];

  ngOnInit() {
  }

}
