import splitMessage from "./splitMessage";

it('Length of message is less than MAX_LENGTH', () => {
  let msg = "Hello Zalora";
  expect(splitMessage(msg)).toEqual([msg]);
});

it('Message contain excess whitespace', () => {
  let msg = "                Hello      Zalora               ";
  expect(splitMessage(msg)).toEqual(['Hello Zalora']);
});

it('Length of message is great than MAX_LENGTH', () => {
  let msg = "I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.";
  let expectResult = ["1/2 I can't believe Tweeter now supports chunking", "2/2 my messages, so I don't have to do it myself."];
  expect(splitMessage(msg)).toEqual(expectResult);
});

it("Split message into 11 part", () => {
  let msg = "I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself. I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself. I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself. I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself. I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself."
  let expectResult = ["1/11 I can't believe Tweeter now supports chunking",
    "2/11 my messages, so I don't have to do it myself.",
    "3/11 I can't believe Tweeter now supports chunking",
    "4/11 my messages, so I don't have to do it myself.",
    "5/11 I can't believe Tweeter now supports chunking",
    "6/11 my messages, so I don't have to do it myself.",
    "7/11 I can't believe Tweeter now supports chunking",
    "8/11 my messages, so I don't have to do it myself.",
    "9/11 I can't believe Tweeter now supports chunking",
    "10/11 my messages, so I don't have to do it",
    "11/11 myself."];
  expect(splitMessage(msg)).toEqual(expectResult);
});

it("Long long message", () => {
  let msg = "I can't believe Tweeter now supports chunking my messages.";
  let maxLength = 50;
  for (let i = 0; i < 10; i++) {
    msg += ' ' + msg;
  }

  function checkResult(result) {
    if (result.some(u => u.length > maxLength)) {
      return false;
    }

    var lastChunk = result[result.length - 1];
    var indicator = (lastChunk.split(' ')[0]).split('/');
    var lastIndex = indicator[0];
    var total = indicator[1];

    if(lastIndex!==total)
    {
      return false;
    }

    if(result.length != Number.parseInt(total))
    {
      return false;
    }

    return true;
  }

  expect(checkResult(splitMessage(msg, maxLength))).toEqual(true);
});

it('The message contain word longer than MAX_LENGTH', () => {
  let msg = "I can't believe Tweeter now supports chunking my messagemessagemessagemessagemessagemessagemessagemessagemessage, so I don't have to do it myself.";
  let expectError = 'The message contains a span of non-whitespace characters longer than 50 characters';
  expect(() => splitMessage(msg)).toThrow(expectError);
});

it("Can't split message because it contain word which length + (length of indicator) > MAX_LENGTH", () => {
  let msg = "Hello. My name is Dat. Nice to meet you";
  expect(() => splitMessage(msg, 8)).toThrow("Can't split message!");
});

it("Length of indicator > MAX_LENGTH", () => {
  let msg = "";
  for (let i = 0; i < 1000; i++) {
    msg += ' a';
  }
  expect(() => splitMessage(msg, 3)).toThrow("Can't split message!");
});

