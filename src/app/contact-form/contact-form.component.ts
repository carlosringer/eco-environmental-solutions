import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  constructor() {}

  public name: string;
  public email: string;
  public phone: number;
  public message: string;
  public textInput: string;

  submitted = false;

  onSubmit() {
    this.submitted = true;
    const contactPayload = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message,
    };
    console.log(contactPayload);

    const data = JSON.stringify(contactPayload);
    // fs.writeFileSync('`../submissions/${this.name}.json`', data);
  }

  toggleInfoModal($event) {
    console.log($event);
  }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

}
