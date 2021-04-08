import { Component } from '@angular/core';
import { FirebaseService } from './../firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
moneyTransactions: any;
  
  constructor(
    public firerebaseService: FirebaseService
  ) {
    this.firerebaseService.get_transactions().subscribe((res)=> {
      this.moneyTransactions = res.map(e =>{
        return {
          id: e.payload.doc.id,
          type: e.payload.doc.data()['type'],
          title: e.payload.doc.data()['title'],
          subTitle: e.payload.doc.data()['subTitle'],
          amount: e.payload.doc.data()['amount'],
        }
      })
      console.log(this.moneyTransactions);

    },(err:any) => {
      console.log(err);
    })
    
      }
      delete_transaction(transactionId){
        this.firerebaseService.delete_transaction(transactionId).then((res:any) => {
          console.log(res)
        })

      }


}
