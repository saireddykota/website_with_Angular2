import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostajobComponent } from './postajob/postajob.component';
import { Routes, RouterModule } from '@angular/router';
import { NewseventsComponent } from './newsevents/newsevents.component';
import { PublicheaderComponent } from './publicheader.component';
import { PublicfooterComponent } from './publicfooter.component';
import { AdminfooterComponent } from './adminfooter.component';
import { AdminheaderComponent } from './adminheader.component';
import { ResumeComponent } from './resume/resume.component';

import { BrowseajobComponent } from './browseajob/browseajob.component';
import { JobdescriptionComponent } from './jobdescription/jobdescription.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NewseventslistComponent } from './newsevents/newseventslist/newseventslist.component';
import { NewseventsdetailComponent } from './newsevents/newseventsdetail/newseventsdetail.component';

import { AppConfig } from './app.config';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { LcaComponent }     from './lca/lca.component';


const appRoutes : Routes = [
    { path: '', component: AppComponent},
  { path: 'postajob', component: PostajobComponent, canActivate: [AuthGuard]},
  { path: 'newsevents', component: NewseventsComponent, canActivate: [AuthGuard]},
  { path: 'newseventslist', component: NewseventslistComponent},
  { path: 'newseventsdetail/:id', component: NewseventsdetailComponent},
  { path: 'resume', component: ResumeComponent},
   { path: 'lca', component: LcaComponent, canActivate: [AuthGuard]},

  
  { path: 'itjobs', component: BrowseajobComponent },
  { path: 'desc', component: JobdescriptionComponent },
  { path: 'contactus', component: ContactusComponent},

 { path: 'adminhome', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'adminlogin', component: LoginComponent },
    { path: 'createadminuser', component: RegisterComponent,canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: 'adminhome', redirectTo: 'adminhome' }

];
@NgModule({
  declarations: [
    AppComponent,
    PostajobComponent,
    NewseventsComponent,
    PublicheaderComponent,
    PublicfooterComponent,
    AdminfooterComponent,
    AdminheaderComponent,
    ResumeComponent,
    BrowseajobComponent,
    JobdescriptionComponent,
    ContactusComponent,
    NewseventslistComponent,
    NewseventsdetailComponent,
    LcaComponent,
         AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
   AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
