export class BaseEntity {
  id: number;
  name: string;

  constructor(id: number = null, name: string = null) {
    this.id = id;
    this.name = name;
  }
}
