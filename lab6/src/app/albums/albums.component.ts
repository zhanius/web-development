import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { AlbumService } from '../album.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})

export class AlbumsComponent implements OnInit {
  albums!: Album[];
  newAlbum: Album;
  loaded: boolean = false;

  constructor(private albumService: AlbumService) {
    this.newAlbum = {
      id: 101,
      title: ''
    }
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe( (albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter((p)=>p.id !== id);
    this.albumService.deleteAlbum(id).subscribe();
  }

  createAlbum(){
    this.albumService.createAlbum(this.newAlbum).subscribe((album)=>{
      if(this.newAlbum.title===''){
        alert("you must write smth!");
      }
      else{
      this.albums.push(album);
      alert("album created successfully!");
      this.newAlbum = {} as Album;
      }
    });
  }

  comeBack(){
    
  }
}
