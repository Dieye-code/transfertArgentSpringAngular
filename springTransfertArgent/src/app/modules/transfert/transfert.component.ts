import { Component, OnInit } from '@angular/core';
import { Transfert } from 'src/app/models/transfert';
import { TransfertService } from 'src/app/services/transfert.service';
import { NgForOf } from "@angular/common";
import { MatTableDataSource, MatHeaderCell, MatColumnDef, MatCell, MatCellDef, MatHeaderRow, MatHeaderRowDef, MatHeaderCellDef } from "@angular/material/table";
import { DataSource } from '@angular/cdk/table';
import { Emetteur } from 'src/app/models/emetteur';
import { Recepteur } from 'src/app/models/recepteur';
import { Router } from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { HttpClient } from "@angular/common/http";
import { invalid } from '@angular/compiler/src/render3/view/util';


declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html',
  styleUrls: ['./transfert.component.css']
})
export class TransfertComponent implements OnInit {

  transferts: Transfert[];
  transfert: Transfert;
  datasource: MatTableDataSource<Transfert>;
  displayedColumns: string[] = ['nomEmetteur', 'prenomEmetteur', 'telEmetteur', 'nomRecepteur', 'prenomRecepteur', 'telRecepteur', 'cniRecepteur', 'montant', 'date'];

  public isSubmited;

  public url: any;

  constructor(private transfertDb: TransfertService, private route: Router) { }

  ngOnInit(): void {

    this.transfert = new Transfert();
    this.transfert.emetteur = new Emetteur();
    this.transfert.recepteur = new Recepteur();

    //recuperer la liste des Transferts
    this.transfertDb.listeTransfert().subscribe(
      data => {
        this.transferts = data
        this.datasource = new MatTableDataSource<Transfert>(this.transferts)
        // console.log(data[0].emetteur);

      }
    )

    //recuperer l'url en cours
    this.url = this.route.url
    this.isSubmited = false;

  }

  addTransfert() {

    this.isSubmited = true;

    if(!this.formulaireValid()){
      let date = new Date();
      this.transfert.date = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
      console.log(this.transfert.date);
      
      this.transfertDb.addTransfert(this.transfert).subscribe(
        data => {
          console.log(this.transfert);
          this.transferts.push(data);
          this.transfert = new Transfert();
          this.route.navigate(["/Transfert"]);
        }
      )
    } else {
      console.log("formulaire invalid")
    }

  }

  get cniValid() {
    return $("#cniRecepteur").val().length != 13;
  }

  //Verifier que les champs ne commencent que par des lettres
  testInput(event: KeyboardEvent, champ) {

    if ($("#" + champ).val().length <= 0) {
      let b = /[a-zA-Z]/g;
      if (!b.test(String.fromCharCode(event.charCode)))
        event.preventDefault()
    }
  }

  //conttrole de saisie du nombres
  saisieNombre(event: KeyboardEvent) {

    return String.fromCharCode(event.which).search(/[0-9]/) != -1;
    // if (!/[0-9]/.test(String.fromCharCode(event.charCode)))
    //   event.preventDefault();
  }

  //conttrole de saisie du nombres
  saisieNumero(event: KeyboardEvent, element) {
    if ($("#" + element).val().length >= 9){
      console.log("Numero Invalid");
      event.preventDefault()
    }
    // console.log("La longeur de "+element+" est "+$("#" + element).val().length)
    return String.fromCharCode(event.which).search(/[0-9]/) != -1;
  }

  //Verifier si le numlero de téléphone est valide
  verifieNumero(numero) {
    let val = $("#" + numero).val();
    if (val.length != 9) {
      return true;
    }
    return ((!val.startsWith("77") && !val.startsWith("76") && !val.startsWith("70") && !val.startsWith("75")));
  }

  //Verifier si le numlero de téléphone est valide
  verifiecni(numero) {
    let val = $("#" + numero).val();
    return (val.length != 13);
  }

  //Tester si un champ est vide
  champVide(v) {
    return $("#" + v).val().trim() == "";
  }

  //Verification que tout les Champs ont ete bien saisie et validé
  formulaireValid() {
    let a = this.verifieNumero("telephoneEmetteur") || this.verifieNumero("telephoneRecepteur") || this.verifiecni("cniRecepteur") || this.champVide("nomEmetteur") || this.champVide("prenomEmetteur") || this.champVide("nomRecepteur") || this.champVide("prenomRecepteur") || this.champVide("montant");
    return a;
  }

}
