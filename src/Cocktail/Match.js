import cocktailObj from "Cocktail/Cocktail";

const Match = async (FinalColor) => {
  const getDistance = (FinalColor, MatchColor) => {
    let redDiff = null;
    let greenDiff = null;
    let blueDiff = null;
    redDiff = FinalColor[0] - MatchColor[0];
    greenDiff = FinalColor[1] - MatchColor[1];
    blueDiff = FinalColor[2] - MatchColor[2];

    return redDiff * redDiff + greenDiff * greenDiff + blueDiff * blueDiff;
  };

  let nearValue = null;
  let diffValue = 0;
  let minValue = 999999999999;
  for (let i = 0; i < cocktailObj.length; i++) {
    const MatchFunc = () => {
      function hexToRGB(hex) {
        let c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
          c = hex.substring(1).split("");
          if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
          }
          c = "0x" + c.join("");
          return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
        }
        throw new Error("Bad Hex");
      }
      const MatchColor = hexToRGB(`#${cocktailObj[i].color}`);
      diffValue = getDistance(FinalColor, MatchColor);
      if (diffValue < minValue) {
        minValue = diffValue;
        nearValue = cocktailObj[i];
      }
      return new Promise(function (resolve, reject) {
        resolve();
      });
    };
    await MatchFunc();
  }
  return new Promise(function (resolve, reject) {
    resolve(nearValue);
  });
};

// const Match = async (FinalColor) => {
//   let nearValue = 0;
//   let diffValue = 0;
//   let minValue = 999999999999;
//   for (let i = 0; i < cocktailObj.length; i++) {
//     const MatchFunc = () => {
//       diffValue =
//         parseInt(cocktailObj[i].color, 16) - FinalColor < 0
//           ? -(parseInt(cocktailObj[i].color, 16) - FinalColor)
//           : parseInt(cocktailObj[i].color, 16) - FinalColor;
//       if (diffValue < minValue) {
//         minValue = diffValue;
//         nearValue = cocktailObj[i];
//       }
//       return new Promise(function (resolve, reject) {
//         resolve();
//       });
//     };
//     await MatchFunc();
//   }
//   return new Promise(function (resolve, reject) {
//     resolve(nearValue);
//   });
// };

export default Match;
