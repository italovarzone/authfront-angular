import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { MessageBoxComponent } from './message-box/message-box.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MessageBoxService } from './message-box/message-box.service';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [LayoutComponent, MessageBoxComponent, DialogComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  exports: [LayoutComponent, MessageBoxComponent, DialogComponent],
  providers: [MessageBoxService],
})
export class SharedModule {}
