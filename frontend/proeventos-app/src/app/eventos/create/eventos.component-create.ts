import { Component } from "@angular/core";
import { Observable, Subscriber } from "rxjs";

@Component({
    selector: 'app-eventos-create',
    templateUrl: './eventos.component-create.html',
    styleUrls: ['./eventos.component-create.scss']
})
export class EventosCreate {

  localUrl: any;
  file?: File;
  foto: string = "";

    ngOnInit(): void {

    }

    uploadFile() {
      if (this.file != undefined) {}
    }

    onChange(event: any) {
      if(event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        this.convertToBase64(file);
      }
    }

    readFile(file: File, subscriber: Subscriber<any>){
      const filereader = new FileReader();
      filereader.readAsDataURL(file);

      filereader.onload=()=>{
        subscriber.next(filereader.result);
        subscriber.complete();
      }

      filereader.onerror=(error)=>{
        subscriber.error(error);
        subscriber.complete();
      }
    }

    convertToBase64(file: File){
      const observable = new Observable((subscriber: Subscriber<any>)=>{
        this.readFile(file, subscriber);
      });
      observable.subscribe((f)=>{
        this.foto = f;
      })
    }

    selectFile(event: any) {
      this.file = <File>event.target.files[0];
      console.log(this.file);
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.localUrl = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
      }
    }
}
