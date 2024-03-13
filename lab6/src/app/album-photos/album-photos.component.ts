import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { Photo } from '../models';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, FormsModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})


export class AlbumPhotosComponent implements OnInit {
  photos!: Photo[];
  loaded: boolean = false;
  constructor(private albumService: AlbumService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      if (params.get('id')) {
        const id = Number(params.get('id'));
        this.loaded = false;
        this.albumService.getPhotos(id).subscribe((photos) => {
          this.photos = photos;
          this.loaded = true;
        });
      }
    });
  }
}
