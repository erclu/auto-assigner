// import cp from "child_process";
// import path from "path";
// import process from "process";

it("should always pass", () => {
  expect(true).toBe(true);
});

// test("throws invalid number", async () => {
//   const input = parseInt("foo", 10);
//   await expect(wait(input)).rejects.toThrow("milliseconds not a number");
// });

// TODO not sure about this
// XXX shows how the runner will run a javascript action with env / stdout protocol
// test("test the build action", function() {
//   const ip = path.join(__dirname, "..", "dist", "index.js");
//   const options: cp.ExecSyncOptions = {
//     env: process.env,
//   };
//   console.log(cp.execSync(`node ${ip}`, options).toString());
// });
