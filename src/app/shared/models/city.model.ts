import { Deserializable } from "./deserializable.model";

export class City implements Deserializable {
  country: string;
  id: number;
  name: string;

  deserialize(input: any): this {
    this.country = input.country;
    this.id = input.id;
    this.name = input.name;
    return this;
  }
}
