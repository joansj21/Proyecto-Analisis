import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMenuModule} from '@angular/material/menu';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatTableModule} from '@angular/material/table';








@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatCardModule, MatDialogModule,
    MatFormFieldModule, MatGridListModule, MatIconModule,
    MatInputModule, MatListModule, MatSelectModule,
    MatSidenavModule,MatTabsModule, MatToolbarModule,MatDatepickerModule,MatMenuModule,MatInputModule,
    TextFieldModule,MatTableModule

  ],
  exports: [
    MatButtonModule, MatCardModule, MatDialogModule,
    MatFormFieldModule, MatGridListModule, MatIconModule,
    MatInputModule, MatListModule, MatSelectModule,
    MatSidenavModule,MatTabsModule, MatToolbarModule,MatDatepickerModule,MatMenuModule,MatInputModule,
    TextFieldModule,MatTableModule
  ]
})
export class AppMaterialModule { }
