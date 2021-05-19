import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/more/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { StatsComponent } from './components/stats/stats.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { ClubsComponent } from './components/clubs/clubs.component';
import { AddClubComponent } from './components/add-club/add-club.component';
import { ParentSpaceComponent } from './components/parent-space/parent-space.component';
import {ClubAddService} from './components/club-add.service';
import { ShowClubsComponent } from './components/show-clubs/show-clubs.component';
import { ModifyClubComponent } from './components/modify-club/modify-club.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { NbThemeModule, NbChatModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { MailComponent } from './components/mail/mail.component';
import { AdminspaceComponent } from './components/adminspace/adminspace.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActivityComponent } from './components/activity/activity.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationService } from './components/notification/notification.service';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';  
import { ActivityService } from './components/activity/activity.service';
import { ChatSocketioComponent } from './components/chat-socketio/chat-socketio.component';

import { SpaceKinderOwnerComponent } from './components/space-kinder-owner/space-kinder-owner.component';
import { SListPostsComponent } from './components/s-list-posts/s-list-posts.component';


import { NgxChartsModule } from '@swimlane/ngx-charts';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent,
    FeedbackComponent,
    FooterComponent,
    NotfoundComponent,
    StatsComponent,
    ChartsComponent,

    ClubsComponent,
    AddClubComponent,
    ParentSpaceComponent,
    ShowClubsComponent,
    ModifyClubComponent,

    ChatbotComponent,
    MailComponent,
    AdminspaceComponent,
    DashboardComponent,
    ActivityComponent,
    NotificationComponent,
    ChatSocketioComponent,
    SpaceKinderOwnerComponent,
    SListPostsComponent,
    
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule ,
    RouterModule,
    ChartsModule ,

    ChartsModule,
    HttpClientModule,
    FormsModule,

    RouterModule ,
    ChartsModule ,
    NbThemeModule.forRoot(),
    NbChatModule ,
    NgxChartsModule ,
   
    BrowserAnimationsModule ,
    MatToolbarModule ,
    MatSidenavModule ,
    MatButtonModule ,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatSelectModule ,
    MatSnackBarModule ,
    MatDialogModule ,
    MatProgressSpinnerModule ,
    MatTableModule ,
    MatCardModule ,
    MatFormFieldModule ,
    MatProgressSpinnerModule ,
    MatInputModule  ,
    MatPaginatorModule ,
    MatDatepickerModule ,
    MatSelectModule,
    LayoutModule,
    MatListModule,
    OverlayModule ,
    CdkTreeModule ,
    PortalModule ,
    MatAutocompleteModule ,
    MatButtonToggleModule ,
    MatCheckboxModule ,
    MatChipsModule ,
    MatExpansionModule ,
    MatRippleModule ,
    MatMenuModule ,
    MatSortModule  ,
    MatTreeModule  ,
    MatBadgeModule ,
    MatGridListModule ,
    MatRadioModule ,
    MatTooltipModule ,
    ReactiveFormsModule ,
    HttpClientModule ,
   FormsModule ,
  
  ],

  providers: [NotificationService , ActivityService ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
