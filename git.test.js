const hello = require("./git.js");

describe("mono-git", () => {
  it("test", () => {
    const msg = hello("lucifer");
    expect(msg).toBe("Hello, lucifer");
  });
});
