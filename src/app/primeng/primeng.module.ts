import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    FormsModule,
    AutoCompleteModule,
    InputTextModule,
    SliderModule,
    TooltipModule,
    DialogModule,
    ButtonModule,
    ChipsModule,
    DropdownModule,
    SplitButtonModule,
  ],
})
export class PrimengModule {}
