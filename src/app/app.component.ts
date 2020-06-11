import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

userTable: FormGroup;
control:FormArray;
tableHead=["name","email","bloodGroup","mobile Number"]
tableData=[
  {name:'akshita',email:'dfdsaf@asddas',bloodGroup:{id:0,name:'o'},mobileNumber:6745325}
  ]
constructor(private fb:FormBuilder){

}

ngOnInit(){
 this.userTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    this.control=this.userTable.get('tableRows') as FormArray
    this.addRow();
}



initForm(){
  return this.fb.group({
    name:[''],
    email:[''],
    bloodGroup:[''],
    mobileNumber:[''],
    isEditable:[false]
  })
}

get getFormControls(){
  const control=this.userTable.get('tableRows') as FormArray
  return control;
}

editRow(group){
  group.get('isEditable').setValue(true)
}

  addRow() {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.push(this.initForm());
  }

}
