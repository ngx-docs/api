// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// @ngx
import { PrismModule } from '@ngx-prism/rxjs';
import { MarkdownModule } from '@ngx-markdown/core';
import { DocsApiComponent } from './docs-api.component';

/**
 * @export
 * @class DocsApiModule
 */
@NgModule({
  declarations: [
    DocsApiComponent
  ],
  exports: [
    DocsApiComponent
  ],
  imports: [
    // external
    CommonModule,

    // @ngx
    MarkdownModule.forChild()
  ]
})
export class DocsApiModule { }
