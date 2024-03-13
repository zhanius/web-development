import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { Album } from '../models';
import { AlbumService } from '../album.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  newTitle: string = '';
  loaded: boolean;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.newTitle = '';
    this.album = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    })
  }

  updateAlbumTitle() {
    this.loaded = false;
    if(this.newTitle !== ''){
      this.album.title = this.newTitle;
    }
    else{
      alert("you must write smth!");
    }
    this.albumService.updateAlbumTitle(this.album).subscribe((album) => {
      this.album = album;
      this.loaded = true;
      this.newTitle = '';
    })
  }

}
