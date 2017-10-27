# @ngx-docs/api

Angular 2+ components to create documentation on Angular Material.

Pros:
* Component changeDetection is set to `OnPush`, it gives better overall performance.
* Body `key` is header value, so it is possible to dynamically change table structure.

Cons:
* Need to change `@Input()` instance to have changes visible on template.
* Tests are not ready yet.

----

## Table of contents
* [Demonstration](#demonstration)
* [Installation](#installation)
* [Usage](#usage)
* [Style guide](#style-guide)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)
* [Donate](#donate)

----

## Demonstration

Go to `demo` folder and opening your command line and do the following:

```bash
npm i && npm start
```

Open http://localhost:4200/ in your browser.



## Installation

To install, run:

```bash
npm install @ngx-docs/api --save
```

## Usage

In your component file:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  description = `Markdown here is **working** too`;
  header = [
    'Name', 'Description'
  ];
  body: any = [
    {
      name: `markdown`,
      description: `You can use markdown code here like **bold** *italic*`
    }
  ];
}
```

In `app.component.html` write the following code:

```html
<ngx-docs-api
  [title]="title"
  [description]="description"
  [header]="header"
  [body]="body"
></ngx-docs-api>
```

## Style guide

[Angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html) 

## GIT

### Commit
- AngularJS Git Commit Message Conventions https://gist.github.com/stephenparish/9941e89d80e2bc58a153
- http://karma-runner.github.io/0.10/dev/git-commit-msg.html

### Versioning
Semantic Versioning 2.0.0 http://semver.org/

**Given a version number MAJOR.MINOR.PATCH, increment the:**   
MAJOR version when you make incompatible API changes,  
MINOR version when you add functionality in a backwards-compatible manner, and  
PATCH version when you make backwards-compatible bug fixes.  
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**   
How should I deal with revisions in the 0.y.z initial development phase?  
>The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

>If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.


## License

MIT © ngx-docs

## Donate

[Click to donate](https://donorbox.org/help-creating-open-source-software)
