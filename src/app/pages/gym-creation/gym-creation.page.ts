import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GymService } from '../../services/gym-api.service'
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  // selector: 'app-buyer-list',
  templateUrl: './gym-creation.page.html',
  styleUrls: ['./gym-creation.page.scss'],
})
export class GymCreationPage implements OnInit {
  registerForm: FormGroup;
  // loginForm: FormGroup;

  @ViewChild('flipcontainer', { static: false }) flipcontainer: ElementRef;

  constructor(
              private afAuth: AngularFireAuth,
              private fb: FormBuilder,
              private authService: AuthService,
              private gymService: GymService,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private alertCtrl: AlertController,
              private router: Router
  ) {}

  ngOnInit() {
    const id = this.afAuth.auth.currentUser.uid
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      admins: [id, Validators.required]
      // hours: ['', Validators.required]
    });
  }

  navigateByName(name) {
    if (name !== undefined) {
      this.router.navigateByUrl('/user/gym');
    }
  }

  // async login() {
  //   const loading = await this.loadingCtrl.create({
  //     message: 'Loading...'
  //   });
  //   await loading.present();

  //   this.authService.signIn(this.loginForm.value).subscribe(user => {
  //     loading.dismiss();
  //     console.log('after login: ', user);
  //     this.navigateByRole(user['role']);
  //   },
  //   async err => {
  //     loading.dismiss();

  //     let alert = await this.alertCtrl.create({
  //       header: 'Error',
  //       message: err.message,
  //       buttons: ['OK']
  //     });
  //     alert.present();
  //   })
  // }

  async register() {
    let loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();

    this.gymService.createGym(this.registerForm.value).then(async res => {
      await loading.dismiss();

      let toast = await this.toastCtrl.create({
        duration: 3000,
        message: 'Successfully created a Gym!'
      });
      toast.present();
      console.log('finished: ', res);

      this.navigateByName(this.registerForm.value['name']);

    }, async err => {
      await loading.dismiss();

      let alert = await this.alertCtrl.create({
        header: 'Error',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    });
  }

  // toggleRegister() {
  //   this.flipcontainer.nativeElement.classList.toggle('flip');
  // }

}



