import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../../services/consumo.service';
import { Data, DataResponse } from '../../models/data.models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  public info: Data[]=[];
  //private data : any;
  cargada: boolean =false;
  private data : any;
  constructor(private consumeService: ConsumoService) { }

  ngOnInit(): void {
    this.cargarConsumo();

  }

  cargarConsumo(){
    this.consumeService.getConsumo().subscribe(resp => {
      this.cargada=true;
      this.data = resp;
      this.info = this.data;
    })
  }



  select(){

  }
}
