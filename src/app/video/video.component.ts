import { VideoService } from './../service/video/video.service';
import { Component, OnInit, TemplateRef, ElementRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {


  constructor(private videoService: VideoService, private modalService: BsModalService) { }

  modalRef: BsModalRef;



  ngOnInit() {
  }



  callMin(event) {

    if (event.target.src === '') {
      this.videoService.getSource(event.target.id, 'min').subscribe(response => {
        console.log(response);
        event.target.src = response.video;
        event.target.play();
      });
    } else {
      event.target.play();
    }


  }

  stopMin(event) {
    event.target.pause();
  }


  callFullVideo(event) {

    const name = (event.target.id as string).split('-');

    const value = name[0] + '-' + name[1];

    console.log(value);

    this.videoService.getSource(value, 'full').subscribe(response => {
      console.log(response);

       (document.getElementById('myVideo') as HTMLVideoElement).src = response.video;
       (document.getElementById('myVideo') as HTMLVideoElement).play();
    });


  }

  openModal(template: TemplateRef<any>, event) {

    this.callFullVideo(event);

    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'black-modal' }));
  }

}
