import Head from "next/head";
import Modal from "../components/modal";
import ClothingArticle from "../components/clothing-article";
import * as React from "react";
import clothingData from "../constants/data";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const determineHatType = (data) => {
  //There are a lot of states. Going to manually define cases for now. Will optimize later

  //sunny or rainy day above 45 degrees select a cap
  if (
    (data.precipitation === "none" || data.precipitation === "rain") &&
    Number(data.tempVal) > 45
  )
    return clothingData.get("cap");
  //cold day below 45
  else if (data.tempVal < 45) return clothingData.get("beanie");
  //otherwise no hat
  else return null;
};
const determineSunglasses = (data) => {
  return data.time === "day" && data.precipitation === "none"
    ? clothingData.get("sunglasses")
    : null;
};

const determineGloveType = (data) => {
  //normal gloves
  if (data.tempVal < 45 && data.tempVal > 20) return clothingData.get("gloves");
  else if (data.tempVal < 20) return clothingData.get("heavyGloves");
  else return null;
};

const determineBottomType = (data) => {
  if (data.tempVal < 40) {
    return clothingData.get("tights");
  }
  return clothingData.get("shorts");
};

const determineTopType = (data) => {
  if (data.tempVal > 80) return clothingData.get("singlet");
  else if (data.tempVal > 45) return clothingData.get("shirt");
  return clothingData.get("longSleeveShirt");
};

const determineJacketType = (data) => {
  if (data.precipitation === "rain") return clothingData.get("rainJacket");
  else if (data.wind === "breezy" || data.wind === "heavyWinds")
    return clothingData.get("lightJacket");
  else if (data.tempVal < 35)
    return clothingData.get("winterJacket");
  else return null;
};

export default function Home() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [formData, setFormData] = React.useReducer(formReducer, {
    precipitation: "none",
    tempVal: "70",
    temp_unit: "fahrenheit",
    time: "day",
    wind: "calm",
  });

  const hatSelection = determineHatType(formData);
  const gloveSelection = determineGloveType(formData);
  const sunglassSelection = determineSunglasses(formData);
  const bottomSelection = determineBottomType(formData);
  const topSelection = determineTopType(formData);
  const jacketSelection = determineJacketType(formData);

  const handleSumbit = (event) => {
    event.preventDefault();
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Head>
        <title>What do I wear on my run?</title>
      </Head>
      <main>
        <header>
          <h1 className="text-4xl leading-none font-extrabold tracking-tight text-left px-2 py-4 md:p-4 border-b-2 bg-blue-400 border-blue-400 shadow">
            🏃‍♀️ 🏃 What do I wear on my run?
          </h1>
        </header>
        <div className="mx-auto md:max-w-5xl md:px-4 sm:px-6 xl:px-0 rounded">
          <div className="flex flex-col mt-2">
            <p className="text-2xl font-bold p-2 text-yellow-600">
              This app is currently in alpha. Expect frequent changes
            </p>
            <p className="text-xl p-2">
              It can be hard to figure out what to wear when you're out on a
              run. Often I spend a lot of time glancing at a variety of
              conditions before my daily runs. The below form can help you
              decide what clothing items to wear before you head out the door.
            </p>
            <form onSubmit={handleSumbit}>
              <fieldset>
                <div className="p-2 mt-2">
                  <p className="pb-2 text-2xl font-bold">
                    Outside temperature 🌡️
                  </p>
                  <div className="flex flex-col md:flex-row items-center">
                    <label className="border-2 rounded border-blue-400 flex w-full md:w-auto md:mr-1">
                      <input
                        className="form-input w-full"
                        name="tempVal"
                        type="number"
                        onChange={setFormData}
                        placeholder="Enter a temperature"
                        required
                        type="number"
                        value={formData.tempVal}
                      />
                    </label>
                    <label
                      style={{ margin: "4px" }}
                      className="form-input-checkbox-label"
                    >
                      <input
                        value="celsius"
                        checked={formData.temp_unit === "celsius"}
                        type="radio"
                        name="temp_unit"
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                        required
                      />{" "}
                      Celsius
                    </label>
                    <label
                      style={{ margin: "4px" }}
                      className="form-input-checkbox-label"
                    >
                      <input
                        value="fahrenheit"
                        checked={formData.temp_unit === "fahrenheit"}
                        type="radio"
                        name="temp_unit"
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                        required
                      />{" "}
                      Fahrenheit
                    </label>
                  </div>
                </div>
                <div className="p-2 mt-2">
                  <p className="pb-2 text-2xl font-bold">Wind conditions🎐</p>
                  <div className="flex flex-col md:flex-row items-center">
                    <label
                      style={{ margin: "4px" }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="calm"
                        type="radio"
                        name="wind"
                        checked={formData.wind === "calm"}
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                        required
                      />{" "}
                      Calm ☺️
                    </label>
                    <label
                      style={{ margin: "4px" }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="breezy"
                        type="radio"
                        name="wind"
                        checked={formData.wind === "breezy"}
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                        required
                      />{" "}
                      Breezy ☁️
                    </label>
                    <label
                      style={{ margin: "4px" }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="windy"
                        type="radio"
                        name="wind"
                        checked={formData.wind === "windy"}
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                        required
                      />{" "}
                      Windy 🎐
                    </label>
                    <label
                      style={{ margin: "4px" }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="high_winds"
                        type="radio"
                        name="wind"
                        checked={formData.wind === "high_winds"}
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                        required
                      />{" "}
                      High Winds 🌬️
                    </label>
                  </div>
                </div>
                <div className="p-2 mt-2">
                  <p className="pb-2 text-2xl font-bold">Precipitation 💧</p>
                  <div className="flex flex-col md:flex-row items-center">
                    <label
                      style={{ margin: "4px" }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="none"
                        type="radio"
                        name="precipitation"
                        checked={formData.precipitation === "none"}
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                        required
                      />{" "}
                      None 🌤️
                    </label>
                    <label
                      style={{ margin: "4px" }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="rain"
                        type="radio"
                        name="precipitation"
                        checked={formData.precipitation === "rain"}
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                        required
                      />{" "}
                      Rain 🌧️
                    </label>
                    <label
                      style={{ margin: "4px" }}
                      className="form-input-checkbox-label"
                    >
                      <input
                        value="sleet"
                        type="radio"
                        name="precipitation"
                        checked={formData.precipitation === "sleet"}
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                        required
                      />{" "}
                      Sleet 🧊
                    </label>
                    <label
                      style={{ margin: "4px" }}
                      className="form-input-checkbox-label"
                    >
                      <input
                        value="snow"
                        type="radio"
                        className="form-radio ml-1 mr-2"
                        checked={formData.precipitation === "snow"}
                        name="precipitation"
                        onChange={setFormData}
                        required
                      />{" "}
                      Snow 🌨️
                    </label>
                  </div>
                </div>
                <div className="p-2 mt-2">
                  <p className="pb-2 text-2xl font-bold">Time of day ⏲️</p>
                  <div className="flex flex-col md:flex-row items-center">
                    <label
                      style={{ margin: "4px" }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="day"
                        type="radio"
                        name="time"
                        className="form-radio ml-1 mr-2"
                        checked={formData.time === "day"}
                        onChange={setFormData}
                        required
                      />{" "}
                      Day ☀️
                    </label>
                    <label
                      style={{ margin: "4px" }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="night"
                        type="radio"
                        name="time"
                        checked={formData.time === "night"}
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                        required
                      />{" "}
                      Night 🌕
                    </label>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-yellow-500 p-4 rounded text-2xl"
                  >
                    👟 Tell me what to wear! 😎
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        {/* modal */}
        {isModalVisible ? (
          <Modal
            title="Here's what I think you should wear 💪"
            onClose={handleModalClose}
          >
            <div className="bg-color-400 flex w-full justify-between">
              <span className="border-b-2 py-2 px-4 text-2xl font-bold flex items-center bg-blue-300 shadow w-4/12 border-blue-300">
                Clothing Item
              </span>
              <p className="border-b-2 p-2 text-2xl bg-blue-300 shadow flex items-center flex-initial w-8/12 text-left border-blue-300 font-bold">
                Description
              </p>
            </div>
            {/* Identification 🆔*/}
            <ClothingArticle
              desc={clothingData.get("identification").desc}
              name={clothingData.get("identification").name}
            />
            {/* Hat selection 🤠*/}
            {hatSelection ? (
              <ClothingArticle
                desc={hatSelection.desc}
                name={hatSelection.name}
              />
            ) : null}
            {/* Glove selection 🧤*/}
            {gloveSelection ? (
              <ClothingArticle
                desc={gloveSelection.desc}
                name={gloveSelection.name}
              />
            ) : null}
            {/* Sunglass Selection 😎*/}
            {sunglassSelection ? (
              <ClothingArticle
                desc={sunglassSelection.desc}
                name={sunglassSelection.name}
              />
            ) : null}
            {/* bottom selection 🦵*/}
            {bottomSelection ? (
              <ClothingArticle
                desc={bottomSelection.desc}
                name={bottomSelection.name}
              />
            ) : null}
            {/* top selection 👕 */}
            {topSelection ? (
              <ClothingArticle
                desc={topSelection.desc}
                name={topSelection.name}
              />
            ) : null}
            {jacketSelection ? (
              <ClothingArticle
                desc={jacketSelection.desc}
                name={jacketSelection.name}
              />
            ) : null}
            <span className="text-lg my-4">
              Have a safe and wonderful run! 🥳
            </span>
          </Modal>
        ) : null}
        <footer className="text-md text-center mt-2">
          <a
            href="https://github.com/PaulACoroneos/Dude-What-Do-I-Wear-On-My-Run"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.pcoroneos.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my portfolio pcoroneos.com for more projects and blog posts!
          </a>
        </footer>
      </main>
    </div>
  );
}
