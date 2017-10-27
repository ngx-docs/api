import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  description = `This is api description **table**, also with markdown.`;
  header = [
    'Name', 'Description'
  ];
  body: any = [
    {
      name: `markdown`,
      description: `You can use markdown code here like **bold** *italic*`
    }
  ];


  submit(form) {
    this.description = form.description.value;
    this.title = form.title.value;
    return false;
  }

  submitBody(form) {
    const p = {};
    this.header.forEach(element => {
      const key = element.toLowerCase();
      if (form[key].value) {
        p[key] = form[key].value;
      }
    });
    const newArray = [];
    this.body.forEach(element => {
      newArray.push(element);
    });
    newArray.push(p);
    this.body = newArray;
    console.log(p, form);
    return false;
  }

  submitHeader(form) {
    this.header.push(form.header.value);
    return false;
  }
}
