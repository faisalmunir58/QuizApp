import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./public/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./public/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./public/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'quizlist',
    loadChildren: () => import('./members/teacher/quizlist/quizlist.module').then( m => m.QuizlistPageModule)
  },
  {
    path: 'mcqlist',
    loadChildren: () => import('./members/teacher/quizlist/mcqlist/mcqlist.module').then( m => m.MCQlistPageModule)
  },

{
    path: 'mcqlist/optionlist/:myid',
    loadChildren: () => import('./members/teacher/quizlist/optionlist/optionlist.module').then( m => m.OptionlistPageModule)
  },


  {
    path: 'student/quizlist',
    loadChildren: () => import('./members/student/quizlist//quizlist.module').then( m => m.QuizlistPageModule)
  },
  {
    path: 'student/mcq/:myid',
    loadChildren: () => import('./members/student/quizlist/mcqlist/mcqlist.module').then( m => m.MCQlistPageModule)
  }
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

