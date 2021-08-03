import { letters } from "./utils";

export class RandomString {
  code = 2;
  randomNumbers: Number = new Date().getTime();
  randomArray: Array<String> = this.randomNumbers.toString().split("");
  randomString: String = "";

  generate() {
    this.randomArray.map((number) => {
      let num = Number(number);
      this.randomString += letters[num];
    });

    return this.randomString;
  }

  generateShort() {
    this.code = 4;
    this.randomArray.slice(5, this.randomArray.length - 1).map((number) => {
      let num = Number(number);
      this.randomString += letters[num];
    });

    return this.randomString;
  }
}

export default RandomString;
