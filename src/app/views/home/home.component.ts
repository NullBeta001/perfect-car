import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { CadastroVeiculo } from 'src/app/models/CadastroVeiculo';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';

const ELEMENT_DATA: CadastroVeiculo[] = [
  { codigo: 1, modelo: 'Gol', cor: "Preto", marca: 'VW' },
  { codigo: 2, modelo: 'Vectra', cor: "Prata", marca: 'GM' },
  { codigo: 3, modelo: 'Astra', cor: "Branco", marca: 'GM' },
  { codigo: 4, modelo: 'Passat', cor: "Vermelho", marca: 'VW' },
  { codigo: 5, modelo: 'Civic', cor: "Verde", marca: 'Honda' },
  { codigo: 6, modelo: 'Hilux', cor: "Azul", marca: 'Toyota' },
  { codigo: 7, modelo: 'CRV', cor: "Branco", marca: 'Honda' },
  { codigo: 8, modelo: 'City', cor: "Branco", marca: 'Honda' },
  { codigo: 9, modelo: 'Tiguan', cor: "Prata", marca: 'VW' },
  { codigo: 10, modelo: 'Amarok', cor: "Verde", marca: 'VW' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['codigo', 'modelo', 'cor', 'marca', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(element: CadastroVeiculo | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '280px',
      data: element === null ? {
        codigo: null,
        modelo: '',
        cor: '',
        marca: ''
      } : {
        codigo: element.codigo,
        modelo: element.modelo,
        cor: element.cor,
        marca: element.marca
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (this.dataSource.map(p => p.codigo).includes(result.codigo)) {
          this.dataSource[result.codigo - 1] = result;
          this.table.renderRows();
        } else {
          this.dataSource.push(result);
          this.table.renderRows();
        }
      }
    });
  }

  editElement(element: CadastroVeiculo): void {
    this.openDialog(element);
  }

  deleteElement(codigo: number): void {
    this.dataSource = this.dataSource.filter(p => p.codigo !== codigo);
  }

} 
