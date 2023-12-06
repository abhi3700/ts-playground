import Calculator from "../../src/lib/calculator";
import { expect } from "chai";
import { describe } from "mocha";

describe("calculate", function () {
  it("Sum", function () {
    const result = Calculator.Sum(2, 3);
    expect(result).equal(5);
  });

  it("Difference", function () {
    const result = Calculator.Difference(2, 3);
    expect(result).equal(-1);
  });
});
