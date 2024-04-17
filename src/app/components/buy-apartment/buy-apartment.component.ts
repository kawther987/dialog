import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from './../../interfaces/user';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-buy-apartment',
  templateUrl: './buy-apartment.component.html',
  styleUrls: ['./buy-apartment.component.scss'],
})
export class BuyApartmentComponent implements OnInit {
  formGroup: FormGroup | undefined;
  rangeValue: number = 55;
  maxWidth = 1000; // Set the maximum width for chips container
  chips_values: string[] | undefined;
  max = 3;

  ngOnInit() {
    this.formGroup = new FormGroup({
      input_text: new FormControl<string | null>(null),
    });
  }
}
