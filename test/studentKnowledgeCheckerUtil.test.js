import { expect } from "chai";
import checkStudentKnowledge from "../utils/studentKnowledgeCheckerUtil.js";

describe("studentKnowledgeCheckerUtil", () => {
  // -----------------------------
  // Check of correct values
  // -----------------------------
  describe("Correct answers", () => {
    it("should return true when all answers match exactly", () => {
      const studentAnswers = { q1: "A", q2: "B", q3: "C" };
      const correctAnswers = { q1: "A", q2: "B", q3: "C" };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
    });

    it("should return false when at least one answer is incorrect", () => {
      const studentAnswers = { q1: "A", q2: "B", q3: "D" };
      const correctAnswers = { q1: "A", q2: "B", q3: "C" };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });
  });

  // -----------------------------
  // Check edge cases
  // -----------------------------
  describe("Edge cases", () => {
    it("should return false if student has fewer answers than expected", () => {
      const studentAnswers = { q1: "A", q2: "B" };
      const correctAnswers = { q1: "A", q2: "B", q3: "C" };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it("should return false if student has more answers than expected", () => {
      const studentAnswers = { q1: "A", q2: "B", q3: "C", q4: "D" };
      const correctAnswers = { q1: "A", q2: "B", q3: "C" };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it("should return false if question keys do not match", () => {
      const studentAnswers = { q1: "A", qX: "B" };
      const correctAnswers = { q1: "A", q2: "B" };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it("should return true for empty objects (no questions)", () => {
      const studentAnswers = {};
      const correctAnswers = {};
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
    });
  });


  // Check not valid input values(Invalid input)

  describe("Invalid input", () => {
    it("should return false if studentAnswers is not a valid object", () => {

      expect(checkStudentKnowledge({}, { q1: "A" })).to.be.false;
      expect(checkStudentKnowledge({ qX: "B" }, { q1: "A" })).to.be.false;
    });

    it("should return false if correctAnswers is not a valid object", () => {

      expect(checkStudentKnowledge({ q1: "A" }, {})).to.be.false;
      expect(checkStudentKnowledge({ q1: "A" }, { qX: "B" })).to.be.false;
    });
  });


});
