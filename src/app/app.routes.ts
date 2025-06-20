import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { UserHome } from './pages/user-home/user-home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { ScanQr } from './pages/scan-qr/scan-qr';
import { TakeSelfie } from './pages/take-selfie/take-selfie';
import { UnlockRequest } from './pages/unlock-request/unlock-request';
import { Status } from './pages/status/status';

export const routes: Routes = [
    {path: ' ', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'user-home', component: UserHome},
    {path: 'login', component: Login},
    {path: 'register', component: Register},
    {path: 'scan-qr', component: ScanQr},
    {path: 'take-selfie', component: TakeSelfie},
    {path: 'unlock-request', component: UnlockRequest},
    {path: 'status', component: Status},
    {path: '**', redirectTo: '/home'}
];