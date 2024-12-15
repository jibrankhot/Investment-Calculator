import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import { UserModule } from './user-input/user-module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultComponent],
  imports: [BrowserModule, FormsModule, UserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
