import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimelinesComponent} from "./time-line/timelines/timelines.component";
import {YoutubePlaylistComponent} from "./music/youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./music/youtube-player/youtube-player.component";

const routes: Routes = [
  {
    path: 'time-line',
    component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent
  },
  {
    path: 'youtube/:id',
    component: YoutubePlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
