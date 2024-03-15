import { Component } from '@angular/core';
import { DataService } from '../../common/data.service';
import { IStudente } from '../../interfaces/i-studente';
import { IAnnoscolastico } from '../../interfaces/i-annoscolastico';

@Component({
  selector: 'app-import-studenti',
  standalone: true,
  imports: [],
  templateUrl: './import-studenti.component.html',
  styleUrl: './import-studenti.component.css'
})
export class ImportStudentiComponent {

  constructor(private dataService: DataService) { }

  onFileChange(event: any): void {    
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = reader.result?.toString(); // Add null check
      if (fileContent) {
        const studenti = this.parseFile(fileContent, true, ';');
        this.getAnniScolastici(studenti);
        console.log(this.dataService.addStudenti(studenti));
        //console.log('Studenti importati:', studenti);
      };
    }
    reader.readAsText(file);
  }

  parseFile(fileContent: string, headerLine: boolean, separator: string): any[] {
    const table = [];
    const lines = fileContent.split('\n');
    let header!: any;
    let headerfields: any;
    if (headerLine) {      
      header = lines.shift();
      headerfields = header.split(separator);
    }
    else {
      for (let i = 0; i < lines[0].length; i++) {
        headerfields.push('Field' + i);        
      }
    }
    for (const line of lines) {
      const fields = line.split(separator);
      const record: any = {};
      for (let i = 0; i < headerfields.length; i++) {
        record[headerfields[i]] = fields[i];
      }
      table.push(record);
    }
    return table;
  }

  getAnniScolastici(data: any): [IAnnoscolastico] {
    //const anni = [new Set(data.map((studente: any) => studente['ANNO SCOLASTICO']))];
    return data.map((studente: any) => {
      return {
      id: studente['ANNO SCOLASTICO'],
      annoinizio: parseInt(studente['ANNO SCOLASTICO'].substring(0,4)),
      annofine: parseInt(studente['ANNO SCOLASTICO'].substring(5,7)+2000),
      }
    });
  }
}
