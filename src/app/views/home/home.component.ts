import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';

export interface CadastroVeiculo {
  modelo: string;
  ano: number;
  cor: string;
  marca: string;
}

const ELEMENT_DATA: CadastroVeiculo[] = [
  {ano: 2020, modelo: 'Gol', cor: "Preto", marca: 'VW'},
  {ano: 2010, modelo: 'Vectra', cor: "Prata", marca: 'GM'},
  {ano: 2006, modelo: 'Astra', cor: "Branco", marca: 'GM'},
  {ano: 2005, modelo: 'Passat', cor: "Vermelho", marca: 'VW'},
  {ano: 2021, modelo: 'Civic', cor: "Verde", marca: 'Honda'},
  {ano: 2000, modelo: 'Hilux', cor: "Azul", marca: 'Toyota'},
  {ano: 2012, modelo: 'CRV', cor: "Branco", marca: 'Honda'},
  {ano: 2009, modelo: 'City', cor: "Branco", marca: 'Honda'},
  {ano: 2022, modelo: 'Tiguan', cor: "Prata", marca: 'VW'},
  {ano: 2019, modelo: 'Amarok', cor: "Verde", marca: 'VW'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['ano', 'modelo', 'cor', 'marca', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(element: CadastroVeiculo | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: element === null ? {
        ano: null,
        modelo: '',
        cor: '',
        marca: ''
      } : element
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        this.dataSource.push(result);
        this.table.renderRows();
      }  
    });
  }

  editElement(element: CadastroVeiculo): void {
    this.openDialog(element);
  } 

  deleteElement(ano: number): void {
    this.dataSource = this.dataSource.filter(p => p.ano !== ano);
  }

} 
