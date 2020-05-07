import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  registerForm: FormGroup;
  loginForm: FormGroup;

  @ViewChild('flipcontainer', { static: false }) flipcontainer: ElementRef;

  constructor(
              private fb: FormBuilder,
              private authService: AuthService,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private alertCtrl: AlertController,
              private router: Router,
              private db: AngularFirestore,
              private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      role: ['BUYER', Validators.required]
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  navigateByRole(role) {
    if (role === 'USER') {
      this.router.navigateByUrl('/user/profile');
    }
  }

  async login() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();

    this.authService.signIn(this.loginForm.value).subscribe(user => {
      loading.dismiss();
      console.log('after login: ', user);
      this.navigateByRole(user['role']);
    },
    async err => {
      loading.dismiss();

      let alert = await this.alertCtrl.create({
        header: 'Error',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    })
  }

  async register() {
    let loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();

    this.authService.signUp(this.registerForm.value).then(async res => {
      await loading.dismiss();

      let toast = await this.toastCtrl.create({
        duration: 3000,
        message: 'Successfully created new Account!'
      });
      toast.present();
      console.log('finished: ', res);
      this.createFriendsTable();

      this.navigateByRole(this.registerForm.value['role']);

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

  toggleRegister() {
    this.flipcontainer.nativeElement.classList.toggle('flip');
  }

  createFriendsTable() {
    const id = this.afAuth.auth.currentUser.uid;
    // this.db.doc('friends').ref.update(id);
    // this.db.collection('friends').add(id);
    const myobj = {Friends: []};
    this.db.collection('friends').doc(id).set(myobj);
  }
}



