import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.css']
})
export class DeleteConfirmDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteConfirmDialogComponent>) { }

  ngOnInit() {
  }

  delete(): void{
    this.dialogRef.close('delete');
  }

  close() {
    this.dialogRef.close();
}

}
