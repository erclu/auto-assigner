import core from "@actions/core";

const run = async function(): Promise<void> {
  await new Promise(() => null);

  core.setFailed("NOT IMPLEMENTED");
};

run();
