import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CityService } from "./shared/services/city.service";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { WeatherService } from "./shared/services/weather.service";
import { CopyrightComponent } from "./footer/copyright/copyright.component";
import { CitySearchComponent } from "./header/city-search/city-search.component";
import { ContainerComponent } from "./container/container.component";
import { WeatherComponent } from "./container/weather/weather.component";
import { MessageComponent } from "./container/message/message.component";
import { DataService } from "./shared/services/data.service";
import { FormsModule } from "@angular/forms";
import { AutofocusDirective } from "./autofocus.directive";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CopyrightComponent,
    CitySearchComponent,
    ContainerComponent,
    WeatherComponent,
    MessageComponent,
    AutofocusDirective
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [CityService, DataService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
