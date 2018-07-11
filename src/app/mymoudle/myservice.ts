export class MyJqueryService {
  constructor(public name:string){
    console.info("MyJqueryService init :name is "+name);
  }
  getValue(): string {
    return "value is sth";
  }
  getName(): string {
    return name;
  }
}
