"use strict"

const config = require("../")
const fs = require("fs")
const stylelint = require("stylelint")

const validStyles = fs.readFileSync("./__tests__/valid.scss", "utf-8")
const invalidStyles = fs.readFileSync("./__tests__/invalid.scss", "utf-8")

const findWarning = (data, ruleName) => {
  const warnings = data.results[0].warnings
  return warnings.find(warning => warning.rule === ruleName)
}

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

  it("ignores [at-rule-empty-line-before] rule", () => {
    return result.then(data => {
      expect(findWarning(data, 'at-rule-empty-line-before')).not.toBeDefined()
    })
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

  it("still does not error", () => {
    return result.then(data => (
      expect(data.errored).toBeFalsy()
    ))
  })

  it("issues exactly 6 warnings", () => {
    return result.then(data => {
      expect(data.results[0].warnings).toHaveLength(7)
    })
  })

  it("ignores [at-rule-empty-line-before] rule", () => {
    return result.then(data => {
      expect(findWarning(data, 'at-rule-empty-line-before')).not.toBeDefined()
    })
  })

  it("enforces [at-rule-no-unknown] rule", () => {
    return result.then(data => {
      expect(findWarning(data, 'at-rule-no-unknown')).toBeDefined()
    })
  })

  it("enforces [rule-empty-line-before] rule", () => {
    return result.then(data => {
      expect(findWarning(data, 'rule-empty-line-before')).toBeDefined()
    })
  })

  it("enforces [declaration-empty-line-before] rule", () => {
    return result.then(data => {
      expect(findWarning(data, 'declaration-empty-line-before')).toBeDefined()
    })
  })

  it("enforces [color-hex-case] rule", () => {
    return result.then(data => {
      expect(findWarning(data, 'color-hex-case')).toBeDefined()
    })
  })

  it("enforces [color-hex-length] rule", () => {
    return result.then(data => {
      expect(findWarning(data, 'color-hex-length')).toBeDefined()
    })
  })

  it("enforces [block-closing-brace-newline-after] rule", () => {
    return result.then(data => {
      expect(findWarning(data, 'block-closing-brace-newline-after')).toBeDefined()
    })
  })

  it("enforces [declaration-block-single-line-max-declarations] rule", () => {
    return result.then(data => {
      expect(findWarning(data, 'declaration-block-single-line-max-declarations')).toBeDefined()
    })
  })
})
