const Timer = props => {
  // get minutes and seconds from timeLeft in seconds
  const minutes = Math.ceil(props.timeLeft / 60) - 1;
  const seconds = props.timeLeft - minutes * 60 - 1;

  if (props.timeLeft == 0) {
    const timerEndedEvent = new CustomEvent('timerEnded', {});
    dispatchEvent(timerEndedEvent);
  }
  if (props.timeLeft == null || props.timeLeft == 0) return React.createElement('div', null);
  return React.createElement(
    'h1',
    null,
    'Time left: ',
    minutes,
    ':',
    seconds < 10 ? '0' : '',
    seconds
  );
};