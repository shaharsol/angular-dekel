import { Routes } from '@angular/router';
import { ProfileComponent } from './components/posts/profile/profile.component';
import { FeedComponent } from './components/posts/feed/feed.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { EditComponent } from './components/posts/edit/edit.component';
import { SearchComponent } from './components/search/search-better/search.component';

export const routes: Routes = [
    { path: "profile", component: ProfileComponent},
    { path: "feed", component: FeedComponent},
    { path: "", redirectTo: "profile", pathMatch: 'full'},
    { path: "edit/:id", component: EditComponent},
    { path: "search", component: SearchComponent},
    { path: "**", component: NotFoundComponent},
];
