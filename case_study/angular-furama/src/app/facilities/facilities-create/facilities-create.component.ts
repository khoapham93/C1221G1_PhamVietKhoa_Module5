import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-facilities-create',
  templateUrl: './facilities-create.component.html',
  styleUrls: ['./facilities-create.component.css']
})
export class FacilitiesCreateComponent implements OnInit {

  styleVillaOnly = false;
  styleRoomOnly = false;
  styleVillaAndHouseOnly = false;
  idSelected = 'null';

  constructor() {
    this.showFacilityType(this.idSelected);
  }

  ngOnInit(): void {
  }


  showFacilityType(newValue) {
    this.idSelected = newValue;
    console.log(this.idSelected);
    switch (this.idSelected) {
      case '3': {
        this.styleVillaAndHouseOnly = true;
        this.styleVillaOnly = true;
        this.styleRoomOnly = false;
        break;
      }
      case '2': {
        this.styleVillaAndHouseOnly = false;
        this.styleVillaOnly = true;
        this.styleRoomOnly = true;
        break;
      }
      case '1': {
        this.styleVillaAndHouseOnly = false;
        this.styleVillaOnly = false;
        this.styleRoomOnly = true;
        break;
      }
      default: {
        this.styleVillaAndHouseOnly = false;
        this.styleVillaOnly = false;
        this.styleRoomOnly = false;
      }

    }
  }
}
