import {computedFrom} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';


export class Welcome{
  static inject() { return [Validation]; }
  constructor(validation){
    this.heading = 'App template with Aurelia and Bootstrap !';
    this.firstName = 'John';
    this.lastName = 'Doe';

    this.validation = validation.on(this)
      .ensure('firstName')
        .isNotEmpty()
        .hasMinLength(3)
        .hasMaxLength(10)
      .ensure('lastName')
        .isNotEmpty()
        .hasMinLength(3)
        .hasMaxLength(10);
  }

  previousValue = this.fullName;

  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  @computedFrom('firstName', 'lastName')
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  attached()
  {
    this.validation.validate()
  }

  submit(){
    this.validation.validate() //the validate will fulfil when validation is valid, and reject if not
      .then( () => {
        this.previousValue = this.fullName;
        alert(`Welcome, ${this.fullName}! `);
      });
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}