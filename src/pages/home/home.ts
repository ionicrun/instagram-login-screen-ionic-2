import { Component, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { FormGroup, AbstractControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {

  // global from group object
  public loginForm: FormGroup;

  // input controls
  public password: AbstractControl;
  public email: AbstractControl;


  constructor(

    public fb: FormBuilder,
    private alertCtrl: AlertController

  ) { }


  public ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });

    // to get a direct handle to the AbstractControl, use "email" in the View
    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];

  }


  public login() {

    if (!this.loginForm.valid) {

      return;
    }

    this.alertCtrl.create({

      title: 'Success',
      message: 'Implement your logic here, a code snippet can be seen in the source.',
      buttons: ['OK']

    }).present();

    // example login procedure...

    // this
    //   .authService
    //   .signInWithEmailAndPassword(this.email.value, this.password.value)
    //   .catch((error: Error) => {

    //    there you have it a generic way of catching errors, for more details see:
    //    https://www.ionicrun.com/http-error-handling-informing-the-user-in-an-ionic-2-app/

    //     this
    //       .events
    //       .publish(ENV.EVENTS.ERROR, error);

    //   });

  }


  public signUp(): void {
    // this.navCtrl.push(...);
  }


  public recoverPassword(): void {
    // this.navCtrl.push(...);
  }


  public changeLanguage(): void {

    this.alertCtrl.create({

      title: 'Language',
      message: 'Intention to change the language. You could use for example the PopoverController to present a list.',
      buttons: ['OK']

    }).present();

  }


}  
