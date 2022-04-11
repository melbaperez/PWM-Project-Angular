import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { Galeria } from "../objetos";
import { GaleriaService } from "../galeria.service";
import {tap} from "rxjs";
import * as $ from "jquery";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  data: any;
  imagenes!: Galeria[];
  @Input() galeria!: Galeria;

  constructor(config: NgbCarouselConfig, private galeriaService: GaleriaService) {
  }

  ngOnInit(): void {
    this.galeriaService.getImagesGaleria()
      .pipe(
        tap((image: Galeria[]) => this.imagenes = image)
      )
      .subscribe();
  }
}
