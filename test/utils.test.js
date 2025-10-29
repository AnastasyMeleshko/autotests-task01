import { expect } from "chai";
import { findMax, findMin, removeDuplicates } from "../utils/arrayUtils.js";

describe("arrayUtils", () => {

  // -----------------------------
  // Тесты для findMax
  // -----------------------------
  describe("findMax", () => {
    it("should return the maximum value from a normal array", () => {
      const arr = [1, 5, 3, 9, 2];
      expect(findMax(arr)).to.equal(9);
    });

    it("should return the only element for a single-element array", () => {
      expect(findMax([7])).to.equal(7);
    });

    it("should return -Infinity for an empty array", () => {
      expect(findMax([])).to.equal(-Infinity);
    });

    it("should throw an error if input is not an array", () => {
      expect(() => findMax("not an array")).to.throw("Input must be an array");
      expect(() => findMax(123)).to.throw("Input must be an array");
      expect(() => findMax({})).to.throw("Input must be an array");
      expect(() => findMax(null)).to.throw("Input must be an array");
    });
  });

  // -----------------------------
  // Тесты для findMin
  // -----------------------------
  describe("findMin", () => {
    it("should return the minimum value from a normal array", () => {
      const arr = [1, 5, 3, 9, 2];
      expect(findMin(arr)).to.equal(1);
    });

    it("should return the only element for a single-element array", () => {
      expect(findMin([7])).to.equal(7);
    });

    it("should return Infinity for an empty array", () => {
      expect(findMin([])).to.equal(Infinity);
    });

    it("should throw an error if input is not an array", () => {
      expect(() => findMin("not an array")).to.throw("Input must be an array");
      expect(() => findMin(123)).to.throw("Input must be an array");
      expect(() => findMin({})).to.throw("Input must be an array");
      expect(() => findMin(null)).to.throw("Input must be an array");
    });
  });

  // -----------------------------
  // Тесты для removeDuplicates
  // -----------------------------
  describe("removeDuplicates", () => {
    it("should remove duplicate numbers", () => {
      const arr = [1, 2, 2, 3, 4, 4, 5];
      expect(removeDuplicates(arr)).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it("should remove duplicate strings", () => {
      const arr = ["a", "b", "a", "c"];
      expect(removeDuplicates(arr)).to.deep.equal(["a", "b", "c"]);
    });

    it("should return empty array for empty input", () => {
      expect(removeDuplicates([])).to.deep.equal([]);
    });

    it("should return single-element array unchanged", () => {
      expect(removeDuplicates([7])).to.deep.equal([7]);
    });

    it("should throw an error if input is not an array", () => {
      expect(() => removeDuplicates("not an array")).to.throw("Input must be an array");
      expect(() => removeDuplicates(123)).to.throw("Input must be an array");
      expect(() => removeDuplicates({})).to.throw("Input must be an array");
      expect(() => removeDuplicates(null)).to.throw("Input must be an array");
    });
  });

});
