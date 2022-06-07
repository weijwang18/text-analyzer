// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function (element) {
    if (word.toLowerCase() === element.toLowerCase()) {
      wordCount++;
    }
  });
  return wordCount;
}

// function languageFilter(word, text) {
//   const wordArray = text.split(" ");
//   wordArray.forEach(function (element) {
//     if (word.toLowerCase() === element.toLowerCase()) {
//       wordArray.splice(wordArray.indexOf(element), 1);
//     }
//   });
//   return wordArray.join(" ");
// }

// function languageFilter(word, text) {
//   const wordArray = text.split(" ");
//   wordArray.forEach(function (element) {
//     if (element.toLowerCase().includes(word.toString().toLowerCase())) {
//       wordArray.splice(wordArray.indexOf(element), 1);
//     }
//   });
//   return wordArray.join(" ");
// }

// function languageFilter(word, text) {
//   let goodtext = [];
//   const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
//   let textArray = text.split(" ");
//   textArray.forEach(function (element) {
//     if (!offensiveWords.includes(element.toLowerCase())) {
//       goodtext.push(element);
//     }
//   });
//   return goodtext.join(" ");
// }
