import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contenuto',
  templateUrl: './contenuto.component.html',
  styleUrls: ['./contenuto.component.css']
})
export class ContenutoComponent implements OnInit {
  @Input() pippo :string= '';
  a: string[]
  constructor() { 
    this.a = ['a','b','c']
  }

  ngOnInit(): void {
  }

}
