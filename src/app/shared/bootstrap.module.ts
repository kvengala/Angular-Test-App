import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [
    ],
    imports: [
        BsDropdownModule,
        TooltipModule,
        ModalModule
    ],
    exports: [
        BsDropdownModule,
        TooltipModule,
        ModalModule
    ]
})
export class BootstrapAppModule { }
