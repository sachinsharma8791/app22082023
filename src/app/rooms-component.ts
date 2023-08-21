import { Component, OnInit } from "@angular/core";
import { RoomsHttpService } from "./rooms-service";

@Component({
    selector: 'app-rooms',
    templateUrl: './app-rooms.html',

})
export class RoomsComponent implements OnInit {
    data = {}
    constructor(private roomsHttpService: RoomsHttpService) { }
    ngOnInit() {
        this.roomsHttpService.roomsList().subscribe({
            next: (res:any) => {
                this.data = res.data,
                    console.log(res, "res")
            },
            error: (err) => console.log(err, "err")
        })
    }


}