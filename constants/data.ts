type Data = {
  name:string;
  desc:string;
}

export type ClothingData = Map<string, Data>;

const data = new Map<string, Data>([
  // hat data
  [
    "beanie",
    {
      name: "Beanie",
      desc: "A fleece lined beanie will keep your head warm on a cold day!",
    },
  ],
  [
    "cap",
    {
      name: "Cap",
      desc:
        "A cap with a lip will protect your face from sunny rays and rainy days. For hotter days consider wearing a visor.",
    },
  ],
  //general data
  [
    "sunglasses",
    {
      name: "Sunglasses",
      desc:
        "A good pair of sunglasses will protect your eyes from UV radiation during the day.",
    },
  ],
  [
    "identification",
    {
      name: "Identification",
      desc:
        "In the event of an emergency it's always good to keep some identification you.",
    },
  ],
  //bottom data
  [
    "shorts",
    {
      name: "Running shorts",
      desc:
        "A nice lightweight pair of shorts are your best friend. Pick a length that suites your comfort.",
    },
  ],
  [
    "tights",
    {
      name: "Running tights",
      desc:
        "For cold breezy runs a pair of running tights will keep your legs nice and warm.",
    },
  ],
  //top data
  [
    "shirt",
    {
      name: "Shirt",
      desc:
        "Choose a top with good moisture wicking material to stay dry and cool",
    },
  ],
  [
    "longSleeveShirt",
    {
      name: "Long sleeve shirt",
      desc: "Works similar to a shirt but with sleeves to keep your arms warm.",
    },
  ],
  [
    "singlet",
    {
      name: "Singlet",
      desc: "A good technical singlet is a godsend on a hot summer day.",
    },
  ],
  //glove data
  [
    "gloves",
    {
      name: "Gloves",
      desc:
        "A thin pair of gloves with our without technical fleece can help to keep your hands warm on cool days.",
    },
  ],
  [
    "heavyGloves",
    {
      name: "Heavy gloves",
      desc:
        "A solid pair of mittens or even adding a pair of gloves liners in colder weather can help keep your fingers nimble.",
    },
  ],
  //jacket data
  [
    "lightJacket",
    {
      name: "Light jacket",
      desc:
        "A light windbreaker, thin jacket, or pullover is good for blustery days.",
    },
  ],
  [
    "rainJacket",
    {
      name: "Rain jacket",
      desc:
        "A nice rain jacket is helpful on wetter days. Look for goretex or something with good water repellent capability",
    },
  ],
  [
    "winterJacket",
    {
      name: "Winter jacket",
      desc:
        "For very cold days a thick jacket that protects you from the wind. You may consider adding additional layers instead to stay cool as you warm up.",
    },
  ],
]);

export default data;
