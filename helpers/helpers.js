import * as R from "ramda";

export const buildSessions = userValue => R.reduce(
  (acc, value) => {
    const [eventIndex, event] = value;
    void eventIndex;
    const { milliseconds, url } = event;
    const defaultSession = {
      duration: 0,
      pages: [url],
      startTime: milliseconds,
      lastTime: milliseconds
    };
    if (R.length(acc) === 0) {
      return R.concat(acc, [defaultSession])
    } else {
      const lastSession = R.last(acc);
      const lastSessionStart = lastSession.lastTime;
      if (milliseconds - lastSessionStart >= 600000) {
        return R.concat(acc, [defaultSession])
      }
      const lastPages = R.concat(lastSession.pages, [url]);
      const updatedLast = {
        pages: lastPages,
        duration: milliseconds - lastSession.startTime,
        lastTime: milliseconds,
        startTime: lastSession.startTime,
      };
      return R.update(-1, updatedLast, acc);
    }
  },
  [],
  R.toPairs(userValue)
);