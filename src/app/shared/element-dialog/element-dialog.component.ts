import { Component, Inject, OnInit } from '@angular/core';
import { CadastroVeiculo } from 'src/app/views/home/home.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {
  element!: CadastroVeiculo;
  isChange!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: CadastroVeiculo,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
  ) { }

  ngOnInit(): void {
    if (this.data.ano != null) { 
    this.isChange = true;
  }
}


onCancel(): void {
  this.dialogRef.close();
}

}
