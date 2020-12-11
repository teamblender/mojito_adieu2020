const MixColor = (emojiObj) => {
  const blueRGB = [21, 125, 251];
  const greenRGB = [10, 199, 101];
  const greyRGB = [220, 220, 220];
  const orangeRGB = [255, 126, 0];
  const pinkRGB = [255, 101, 166];
  const purpleRGB = [141, 64, 238];
  const redRGB = [235, 76, 54];
  const yellowRGB = [255, 185, 1];
  const { red, orange, yellow, blue, purple, green, pink, grey } = emojiObj;
  const count = red + orange + yellow + blue + purple + green + pink + grey;
  const RValue =
    (blue * blueRGB[0] +
      green * greenRGB[0] +
      grey * greyRGB[0] +
      orange * orangeRGB[0] +
      pink * pinkRGB[0] +
      purple * purpleRGB[0] +
      red * redRGB[0] +
      yellow * yellowRGB[0]) /
    count;
  const GValue =
    (blue * blueRGB[1] +
      green * greenRGB[1] +
      grey * greyRGB[1] +
      orange * orangeRGB[1] +
      pink * pinkRGB[1] +
      purple * purpleRGB[1] +
      red * redRGB[1] +
      yellow * yellowRGB[1]) /
    count;
  const BValue =
    (blue * blueRGB[2] +
      green * greenRGB[2] +
      grey * greyRGB[2] +
      orange * orangeRGB[2] +
      pink * pinkRGB[2] +
      purple * purpleRGB[2] +
      red * redRGB[2] +
      yellow * yellowRGB[2]) /
    count;
  const rgbToHex = function (rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };
  const fullColorHex = function (r, g, b) {
    const red = rgbToHex(r);
    const green = rgbToHex(g);
    const blue = rgbToHex(b);
    return red + green + blue;
  };

  // const FinalColor = fullColorHex(
  //   Math.floor(RValue),
  //   Math.floor(GValue),
  //   Math.floor(BValue)
  // );

  const FinalColor = [
    Math.floor(RValue),
    Math.floor(GValue),
    Math.floor(BValue),
  ];

  return FinalColor;
};

export default MixColor;
