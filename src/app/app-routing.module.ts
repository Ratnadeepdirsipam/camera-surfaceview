import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cameracapture',
    loadChildren: () => import('./cameracapture/cameracapture.module').then( m => m.CameracapturePageModule)
  },
  {
    path: 'cropcaptureimage',
    loadChildren: () => import('./cropcaptureimage/cropcaptureimage.module').then( m => m.CropcaptureimagePageModule)
  },
  {
    path: 'photosize',
    loadChildren: () => import('./photosize/photosize.module').then( m => m.PhotosizePageModule)
  },
  {
    path: 'imagecapture',
    loadChildren: () => import('./imagecapture/imagecapture.module').then( m => m.ImagecapturePageModule)
  },
  {
    path: 'newimagecapture',
    loadChildren: () => import('./newimagecapture/newimagecapture.module').then( m => m.NewimagecapturePageModule)
  },
  {
    path: 'imagecapturepreview',
    loadChildren: () => import('./imagecapturepreview/imagecapturepreview.module').then( m => m.ImagecapturepreviewPageModule)
  },
  {
    path: 'cropinjs',
    loadChildren: () => import('./cropinjs/cropinjs.module').then( m => m.CropinjsPageModule)
  },
  {
    path: 'framingimg',
    loadChildren: () => import('./framingimg/framingimg.module').then( m => m.FramingimgPageModule)
  },
  {
    path: 'screenshot',
    loadChildren: () => import('./screenshot/screenshot.module').then( m => m.ScreenshotPageModule)
  },
  {
    path: 'devicewh',
    loadChildren: () => import('./devicewh/devicewh.module').then( m => m.DevicewhPageModule)
  },
  {
    path: 'jsfiddle',
    loadChildren: () => import('./jsfiddle/jsfiddle.module').then( m => m.JsfiddlePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
