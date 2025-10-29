import { expect } from "chai";
import { add, subtract, multiply, divide } from "../utils/mathUtils.js";

describe("mathUtils", () => {

  // -----------------------------
  // Тесты для add
  // -----------------------------
  describe("add", () => {
    it("should return correct sum of two positive numbers", () => {
      expect(add(2, 3)).to.equal(5);
    });

    it("should return correct sum with negative numbers", () => {
      expect(add(-2, 3)).to.equal(1);
      expect(add(-2, -3)).to.equal(-5);
    });

    it("should return 0 when both arguments are 0", () => {
      expect(add(0, 0)).to.equal(0);
    });
  });

  // -----------------------------
  // Тесты для subtract
  // -----------------------------
  describe("subtract", () => {
    it("should return correct difference of two positive numbers", () => {
      expect(subtract(5, 3)).to.equal(2);
    });

    it("should return correct difference with negative numbers", () => {
      expect(subtract(-5, 3)).to.equal(-8);
      expect(subtract(-5, -3)).to.equal(-2);
    });

    it("should return 0 when both arguments are equal", () => {
      expect(subtract(4, 4)).to.equal(0);
    });
  });

  // -----------------------------
  // Тесты для multiply
  // -----------------------------
  describe("multiply", () => {
    it("should return correct product of two positive numbers", () => {
      expect(multiply(2, 3)).to.equal(6);
    });

    it("should return correct product with negative numbers", () => {
      expect(multiply(-2, 3)).to.equal(-6);
      expect(multiply(-2, -3)).to.equal(6);
    });

    it("should return 0 if one of the arguments is 0", () => {
      expect(multiply(0, 5)).to.equal(0);
      expect(multiply(5, 0)).to.equal(0);
    });
  });

  // -----------------------------
  // Тесты для divide
  // -----------------------------
  describe("divide", () => {
    it("should return correct division of two positive numbers", () => {
      expect(divide(6, 3)).to.equal(2);
    });

    it("should return correct division with negative numbers", () => {
      expect(divide(-6, 3)).to.equal(-2);
      expect(divide(-6, -3)).to.equal(2);
    });

    it("should return 0 when numerator is 0", () => {
      expect(divide(0, 5)).to.equal(0);
    });

    it("should throw an error when dividing by zero", () => {
      expect(() => divide(5, 0)).to.throw("Cannot divide by zero");
    });
  });

});
