import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { UsuariosEffects } from './store/usuarios.effects';
import { StoreModule } from '@ngrx/store';
import { reducer, usuariosFeatureKey } from './store/usuarios.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(usuariosFeatureKey, reducer),
    EffectsModule.forFeature([UsuariosEffects])
  ]
})
export class UsuariosStoreModule { }
