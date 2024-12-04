import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { HomeRoutingModule } from './home-routing.module';

// Pages
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
