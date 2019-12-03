
import {ManageMainComponent} from "./manage-main/manage-main.component";
import {AuthGuard} from "./auth-guard.service";
import {PostTableComponent} from "./post-table/post-table.component";

export const manageRoutes = [
  {
    path:'',
    component:ManageMainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '',redirectTo:'posttable/page/1',pathMatch:'full'},
      { path: 'posttable/page/:page', component: PostTableComponent },
      { path: '**', redirectTo:'posttable/page/1' }
    ]
  }
];
