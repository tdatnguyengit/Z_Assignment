import splitMessage from "./splitMessage";

const MAX_LENGTH = 50;
it('length of message is less than MAX_LENGTH', () => {
    let msg = "5fgrgrrgyhhghtg";
    expect(splitMessage(msg, MAX_LENGTH)).toEqual([msg]);
  })