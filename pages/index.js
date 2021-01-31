import Head from "next/head";
import Modal from '../components/modal';
import ClothingArticle from '../components/clothing-article';
import * as React from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function Home() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [formData, setFormData] = React.useReducer(formReducer, {});
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
        <h1 className="text-4xl leading-none font-extrabold tracking-tight text-left px-2 py-4 md:p-4 border-b-2 bg-blue-400 border-blue-400 shadow">🏃‍♀️ 🏃 What do I wear on my run?</h1>
        </header>
        <div className="mx-auto md:max-w-5xl md:px-4 sm:px-6 xl:px-0 rounded">
          <div className="flex flex-col mt-2">
            <p className="text-xl p-2">
              It can be hard to figure out what to wear when you're out on a
              run. Often I spend a lot of time glancing at a variety of conditions before my daily runs. The below form can help you decide what clothing items to wear before you head out the door.
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
                        name="temp_val"
                        type="number"
                        onChange={setFormData}
                        placeholder="Enter a temperature"
                      />
                    </label>
                    <label
                      style={{ margin: '4px' }}
                      className="form-input-checkbox-label"
                    >
                      <input
                        value="celsius"
                        checked={formData.temp_unit === "celsius"}
                        type="radio"
                        name="temp_unit"
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                      />{" "}
                      Celsius
                    </label>
                    <label
                      style={{ margin: '4px' }}
                      className="form-input-checkbox-label"
                    >
                      <input
                        value="fahrenheit"
                        checked={formData.temp_unit === "fahrenheit"}
                        type="radio"
                        name="temp_unit"
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                      />{" "}
                      Fahrenheit
                    </label>
                  </div>
                </div>
                <div className="p-2 mt-2">
                  <p className="pb-2 text-2xl font-bold">Wind conditions🎐</p>
                  <div className="flex flex-col md:flex-row items-center">
                    <label
                      style={{ margin: '4px' }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="calm"
                        type="radio"
                        name="wind"
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                      />{" "}
                      Calm ☺️
                    </label>
                    <label
                      style={{ margin: '4px' }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="breezy"
                        type="radio"
                        name="wind"
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                      />{" "}
                      Breezy ☁️
                    </label>
                    <label
                      style={{ margin: '4px' }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="windy"
                        type="radio"
                        name="wind"
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                      />{" "}
                      Windy 🎐
                    </label>
                    <label
                      style={{ margin: '4px' }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="high_winds"
                        type="radio"
                        name="wind"
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                      />{" "}
                      High Winds 🌬️
                    </label>
                  </div>
                </div>
                <div className="p-2 mt-2">
                  <p className="pb-2 text-2xl font-bold">Precipitation 💧</p>
                  <div className="flex flex-col md:flex-row items-center">
                    <label
                      style={{ margin: '4px' }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="none"
                        type="radio"
                        name="precipitation"
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                      />{" "}
                      None 🌤️
                    </label>
                    <label
                      style={{ margin: '4px' }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="rain"
                        type="radio"
                        name="precipitation"
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                      />{" "}
                      Rain 🌧️
                    </label>
                    <label
                      style={{ margin: '4px' }}
                      className="form-input-checkbox-label"
                    >
                      <input
                        value="sleet"
                        type="radio"
                        name="precipitation"
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                      />{" "}
                      Sleet 🧊
                    </label>
                    <label
                      style={{ margin: '4px' }}
                      className="form-input-checkbox-label"
                    >
                      <input
                        value="sleet"
                        type="radio"
                        className="form-radio ml-1 mr-2"
                        name="precipitation"
                        onChange={setFormData}
                      />{" "}
                      Snow 🌨️
                    </label>
                  </div>
                </div>
                <div className="p-2 mt-2">
                  <p className="pb-2 text-2xl font-bold">Time of day ⏲️</p>
                  <div className="flex flex-col md:flex-row items-center">
                    <label
                      style={{ margin: '4px' }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="day"
                        type="radio"
                        name="time"
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
                      />{" "}
                      Day ☀️
                    </label>
                    <label
                      style={{ margin: '4px' }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="night"
                        type="radio"
                        name="time"
                        className="form-radio ml-1 mr-2"
                        onChange={setFormData}
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
        {isModalVisible ? <Modal title="Here's what I think you should wear 💪" onClose={handleModalClose}>
          <ClothingArticle />
          <span className="text-lg mt-2">Have a safe and wonderful run! 🥳</span>
        </Modal> : null}
        <footer className="text-md text-center mt-2">
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
