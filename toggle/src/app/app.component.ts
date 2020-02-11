import {AfterViewInit, Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'toggle';
  formGroup: FormGroup;

  value: any;

  constructor(private fb: FormBuilder){
    this.formGroup = fb.group({
      developer: ['yes', Validators.required],
      startup: ['yes', Validators.required]
    });

    this.formGroup.valueChanges.subscribe(
      value => {
        console.log(value);
        this.value = value;
      }
    );
  }

  ngAfterViewInit(): void {

  }
}
