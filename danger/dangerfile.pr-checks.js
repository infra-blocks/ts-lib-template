import { danger, fail } from "danger";

const SEMVER_LABELS = ["major", "minor", "patch", "no version"];

class CheckError extends Error {}

function checkHasSemverPrLabel(pr) {
  const labels = pr.labels.map((l) => l.name);
  const semverLabels = labels.filter((l) => SEMVER_LABELS.includes(l));

  if (semverLabels.length === 0) {
    fail(
      `Missing semver label on PR!!! Expecting one of ${SEMVER_LABELS.join(", ")}`,
    );
    throw new CheckError("missing semver label");
  }

  if (semverLabels.length > 1) {
    fail(
      `Too many semver labels on PR!!! Expecting one of ${SEMVER_LABELS.join(", ")}`,
    );
    throw new CheckError("too many semver labels");
  }

  return semverLabels[0];
}

try {
  checkHasSemverPrLabel(danger.github.issue);
} catch (err) {
  if (err instanceof CheckError) {
    // Failure already handled
  } else {
    throw err;
  }
}
