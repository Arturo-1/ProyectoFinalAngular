import { isDevMode, NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UsuariosStoreModule } from './components/usuarios/usuarios-store.module';
import { UsuariosEffects } from './components/usuarios/store/usuarios.effects';


@NgModule({
  declarations: [],
  imports: [
    
      StoreModule.forRoot(),
    EffectsModule.forRoot([UsuariosEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    UsuariosStoreModule
  ]
})
export class AppStoreModule { }
