import fetch from 'node-fetch';
import * as R from 'ramda';
import moment from 'moment';

let getDataset = () => {
  fetch(`https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=a55015833c54e10d086cad221f00`)
  .then(response => response.json())
  .then(response => {

    const sortedEvents = R.compose(
      R.map(R.sortBy(R.prop('timestamp'))),
      R.reduce(
        (acc, value) => {
          const { url, visitorId, timestamp } = value;
          const formattedTime = moment(timestamp).format();
          if (!acc[visitorId]) {
            acc[visitorId] = [{ url, timestamp: formattedTime, milliseconds: timestamp }];
          } else {
            acc[visitorId].push({ url, timestamp: formattedTime, milliseconds: timestamp })
          }
          return acc;
        },
        {}
      ),
      R.path(['events']),
    )(response);

    const buildSessions = userValue => R.reduce(
      (acc, value) => {
        const [eventIndex, event] = value;
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

    const reduceEventsToSessions = R.reduce(
      (acc, value) => {
        const [userId, userValue] = value;
        const sessions = buildSessions(userValue);
        return R.mergeAll([acc, { [userId]: sessions }]);
      },
      {},
      R.toPairs(sortedEvents)
    );

    return R.map(session => {
      return R.map(events => {
        const { pages, startTime, duration } = events;
        return ({ pages, startTime, duration });
      }, session);
    }, reduceEventsToSessions);
  })
  .then(response => {
    const body = { sessionsByUser: response };
    return fetch('https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=a55015833c54e10d086cad221f00', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    });
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
};

getDataset();
