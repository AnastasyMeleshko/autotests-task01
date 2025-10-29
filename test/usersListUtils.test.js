import { expect } from "chai";
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken
} from "../utils/usersListUtils.js";

describe("usersListUtils", () => {
  const users = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 20, email: "charlie@example.com" },
    { id: 4, name: "David", age: 35, email: "david@example.com" },
  ];

  // -----------------------------
  // filterUsersByAge
  // -----------------------------
  describe("filterUsersByAge", () => {
    it("should filter users within min and max age", () => {
      const result = filterUsersByAge(users, 25, 35);
      expect(result.map(u => u.name)).to.deep.equal(["Alice", "Bob", "David"]);
    });

    it("should return empty array if no users match", () => {
      const result = filterUsersByAge(users, 40, 50);
      expect(result).to.deep.equal([]);
    });

    it("should include users exactly at min or max age", () => {
      const result = filterUsersByAge(users, 20, 25);
      expect(result.map(u => u.name)).to.deep.equal(["Alice", "Charlie"]);
    });

    it("should throw an error if users is not an array", () => {
      expect(() => filterUsersByAge(null, 20, 30)).to.throw("Users must be an array");
      expect(() => filterUsersByAge({}, 20, 30)).to.throw("Users must be an array");
    });
  });

  // -----------------------------
  // sortUsersByName
  // -----------------------------
  describe("sortUsersByName", () => {
    it("should sort users alphabetically by name", () => {
      const result = sortUsersByName(users);
      expect(result.map(u => u.name)).to.deep.equal(["Alice", "Bob", "Charlie", "David"]);
    });

    it("should not modify the original array", () => {
      const copy = [...users];
      sortUsersByName(users);
      expect(users).to.deep.equal(copy);
    });

    it("should throw an error if users is not an array", () => {
      expect(() => sortUsersByName(null)).to.throw("Users must be an array");
      expect(() => sortUsersByName({})).to.throw("Users must be an array");
    });
  });

  // -----------------------------
  // findUserById
  // -----------------------------
  describe("findUserById", () => {
    it("should return user by id", () => {
      const result = findUserById(users, 2);
      expect(result.name).to.equal("Bob");
    });

    it("should return null if user not found", () => {
      const result = findUserById(users, 999);
      expect(result).to.be.null;
    });

    it("should throw an error if users is not an array", () => {
      expect(() => findUserById(null, 1)).to.throw("Users must be an array");
      expect(() => findUserById({}, 1)).to.throw("Users must be an array");
    });
  });

  // -----------------------------
  // isEmailTaken
  // -----------------------------
  describe("isEmailTaken", () => {
    it("should return true if email exists", () => {
      expect(isEmailTaken(users, "alice@example.com")).to.be.true;
    });

    it("should return false if email does not exist", () => {
      expect(isEmailTaken(users, "notfound@example.com")).to.be.false;
    });

    it("should throw an error if users is not an array", () => {
      expect(() => isEmailTaken(null, "test@example.com")).to.throw("Users must be an array");
      expect(() => isEmailTaken({}, "test@example.com")).to.throw("Users must be an array");
    });
  });
});
