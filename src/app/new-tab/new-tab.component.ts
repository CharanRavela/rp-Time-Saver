import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-new-tab',
  templateUrl: './new-tab.component.html',
  styleUrls: ['./new-tab.component.css']
})
export class NewTabComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  listArray: Array<string> =[""];
  count: number = 0;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _snackBar: MatSnackBar
    ) {

    this.form = fb.group({

      listString: ['', [Validators.required]],

    })

  }    

  submit(){

    this.count = 0;
    this.listArray[this.count] = "";

    for(let c of this.form.value.listString){
      
      if(c == " "){
        this.listArray[this.count] += "+";
      }
      else if( c != "\n"){
        this.listArray[this.count] += c;
      }
      else{
        this.count++;
        this.listArray[this.count] = "";
      }

    }

    if( this.listArray.length != 0){

      // let body ={
      //   data: this.listArray
      // }

      setTimeout( () => {
        this.listArray.forEach( async element =>{
          await console.log(this.count);
          await window.open(`https://www.google.com/search?q=${element}`,'_blank');
          await this.count++;
        });
        console.log(this.listArray);
        this.listArray = [];
      },1000);
    }
    else
    {
      this.openSnackBar("Bad Request...!", "Fill all the fields!");
    }

  }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
