import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'komponents-toggle',
  templateUrl: './komp-toggle.component.html',
  styleUrls: ['./komp-toggle.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => KompToggleComponent),
    multi: true
  }]
})
export class KompToggleComponent implements OnInit, ControlValueAccessor {
  @Input('valueTrue') valueOn: any = true;
  @Input('valueFalse') valueOff: any = false;

  disabled: boolean = false;
  checked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    if(this.disabled)
      return;

    this.checked = !this.checked;
    this.onChange(this.checked ? this.valueOn : this.valueOff);
    this.onTouch(this.checked ? this.valueOn : this.valueOff);
  }

  value(){
    return this.checked ? this.valueOn : this.valueOff;
  }

  // control value accessor
  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(obj: any): void {
    // the parent component passes a value and not the state of this component
    this.checked = obj == this.valueOn;
    this.onChange(obj);
    this.onTouch(obj);
  }

  registerOnChange(fn: any): void {
    // register change function
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // register touch function
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // parent can disable the form
    this.disabled = isDisabled;
  }

}
