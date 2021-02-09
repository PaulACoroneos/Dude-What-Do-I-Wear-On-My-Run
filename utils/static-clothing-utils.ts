export const determineHatType = (formData,clothingData) => {
  //There are a lot of states. Going to manually define cases for now. Will optimize later

  //sunny or rainy day above 45 degrees select a cap
  if (
    (formData.precipitation === "none" || formData.precipitation === "rain") &&
    Number(formData.tempVal) > 45
  )
    return clothingData.get("cap");
  //cold day below 45
  else if (formData.tempVal < 45) return clothingData.get("beanie");
  //otherwise no hat
  else return null;
};

export const determineSunglasses = (formData,clothingData) => {
  return formData.time === "day" && formData.precipitation === "none"
    ? clothingData.get("sunglasses")
    : null;
};

export const determineGloveType = (formData,clothingData) => {
  //normal gloves
  if (formData.tempVal < 45 && formData.tempVal > 20) return clothingData.get("gloves");
  else if (formData.tempVal < 20) return clothingData.get("heavyGloves");
  else return null;
};

export const determineBottomType = (formData,clothingData) => {
  if (formData.tempVal < 40) {
    return clothingData.get("tights");
  }
  return clothingData.get("shorts");
};

export const determineTopType = (formData,clothingData) => {
  if (formData.tempVal > 80) return clothingData.get("singlet");
  else if (formData.tempVal > 45) return clothingData.get("shirt");
  return clothingData.get("longSleeveShirt");
};

export const determineJacketType = (formData,clothingData) => {
  if (formData.precipitation === "rain") return clothingData.get("rainJacket");
  else if (formData.wind === "breezy" || formData.wind === "heavyWinds")
    return clothingData.get("lightJacket");
  else if (formData.tempVal < 35)
    return clothingData.get("winterJacket");
  else return null;
};