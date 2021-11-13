import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../../services/consumo.service';
import {Data} from '../../models/data.models'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  info: Data[]=[];
  cargada: boolean =false;
  constructor(private consumeService: ConsumoService) { }

  ngOnInit(): void {
    this.cargarConsumo();
  }

  cargarConsumo(){
    this.consumeService.getConsumo().subscribe(resp => {
      this.cargada=true;
      console.log(this.cargada);
      console.log(resp);
    })
  }
}
