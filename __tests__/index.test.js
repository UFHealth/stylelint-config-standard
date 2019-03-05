"use strict"

const config = require("../")
const fs = require("fs")
const stylelint = require("stylelint")

const validStyles = fs.readFileSync("./__tests__/valid.scss", "utf-8")
const invalidStyles = fs.readFileSync("./__tests__/invalid.scss", "utf-8")

describe("flags no warnings with valid css", () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: validStyles,
      config,
    })
  })

  it("does not error", () => {
    return result.then(data => (
      expect(data.errored).toBeFalsy()
    ))
  })

  it("flags no warnings", () => {
    return result.then(data => (
      expect(data.results[0].warnings).toHaveLength(0)
    ))
  })
})

describe("flags warnings with invalid css", () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidStyles,
      config,
    })
  })

  it("does error", () => {
    return result.then(data => (
      expect(data.errored).toBeTruthy()
    ))
  })
})
