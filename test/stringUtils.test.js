import { expect } from "chai";
import { capitalize, reverseString, isPalindrome } from "../utils/stringUtils.js";

describe("stringUtils", () => {

  // -----------------------------
  // Тесты для capitalize
  // -----------------------------
  describe("capitalize", () => {
    it("should capitalize the first letter of a lowercase word", () => {
      expect(capitalize("hello")).to.equal("Hello");
    });

    it("should keep the first letter uppercase if it already is", () => {
      expect(capitalize("Hello")).to.equal("Hello");
    });

    it("should work with a single-character string", () => {
      expect(capitalize("a")).to.equal("A");
    });

    it("should return empty string if input is empty", () => {
      expect(capitalize("")).to.equal("");
    });

    it("should throw an error if input is not a string", () => {
      expect(() => capitalize(123)).to.throw("Input must be a string");
      expect(() => capitalize(null)).to.throw("Input must be a string");
      expect(() => capitalize(undefined)).to.throw("Input must be a string");
      expect(() => capitalize({})).to.throw("Input must be a string");
      expect(() => capitalize([])).to.throw("Input must be a string");
    });
  });

  // -----------------------------
  // Тесты для reverseString
  // -----------------------------
  describe("reverseString", () => {
    it("should reverse a normal string", () => {
      expect(reverseString("hello")).to.equal("olleh");
    });

    it("should return the same string if it’s a palindrome", () => {
      expect(reverseString("madam")).to.equal("madam");
    });

    it("should return an empty string if input is empty", () => {
      expect(reverseString("")).to.equal("");
    });

    it("should work with a single character", () => {
      expect(reverseString("A")).to.equal("A");
    });

    it("should throw an error if input is not a string", () => {
      expect(() => reverseString(123)).to.throw("Input must be a string");
      expect(() => reverseString(null)).to.throw("Input must be a string");
      expect(() => reverseString(undefined)).to.throw("Input must be a string");
      expect(() => reverseString({})).to.throw("Input must be a string");
    });
  });

  // -----------------------------
  // Тесты для isPalindrome
  // -----------------------------
  describe("isPalindrome", () => {
    it("should return true for a palindrome word", () => {
      expect(isPalindrome("madam")).to.be.true;
    });

    it("should return false for a non-palindrome word", () => {
      expect(isPalindrome("hello")).to.be.false;
    });

    it("should return true for an empty string (edge case)", () => {
      expect(isPalindrome("")).to.be.true;
    });

    it("should return true for a single character", () => {
      expect(isPalindrome("a")).to.be.true;
    });

    it("should be case-sensitive (different cases mean not palindrome)", () => {
      expect(isPalindrome("Madam")).to.be.false;
    });

    it("should throw an error if input is not a string", () => {
      expect(() => isPalindrome(123)).to.throw("Input must be a string");
      expect(() => isPalindrome(null)).to.throw("Input must be a string");
      expect(() => isPalindrome(undefined)).to.throw("Input must be a string");
      expect(() => isPalindrome({})).to.throw("Input must be a string");
    });
  });

});
