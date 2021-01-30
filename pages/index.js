import Head from "next/head";
import Modal from '../components/modal'
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
        <h1 className="text-3xl p-2 bg-blue-100">What do I wear on my run? 🏃‍♀️ 🏃</h1>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 rounded">
          <div className="flex flex-col p-4 mt-2">
            <p className="text-xl p-4">
              It can be hard to figure out what to wear when you're out on a
              run. Let's figure it out together. 🤝
            </p>
            <form onSubmit={handleSumbit}>
              <fieldset>
                <div className="p-4 mt-2">
                  <p className="pb-2 text-2xl font-bold">
                    Outside temperature (Actual) 🌡️
                  </p>
                  <div className="grid grid-cols-3 items-center content-start gap-1 ">
                    <label className="border-2 rounded border-blue-400 p-1 flex">
                      <input
                        className="form-input flex-1"
                        name="temp_val"
                        type="number"
                        onChange={setFormData}
                        placeholder="Enter a temperature"
                      />
                    </label>
                    <label
                      style={{ margin: 0 }}
                      className="form-input-checkbox-label"
                    >
                      <input
                        value="celcius"
                        checked={formData.temp_unit === "celcius"}
                        type="radio"
                        name="temp_unit"
                        className="form-radio mx-4"
                        onChange={setFormData}
                      />{" "}
                      Celcius
                    </label>
                    <label
                      style={{ margin: 0 }}
                      className="form-input-checkbox-label"
                    >
                      <input
                        value="fahrenheit"
                        checked={formData.temp_unit === "fahrenheit"}
                        type="radio"
                        name="temp_unit"
                        className="form-radio mx-4"
                        onChange={setFormData}
                      />{" "}
                      Fahrenheit
                    </label>
                  </div>
                </div>
                <div className="p-4 mt-2 rounded">
                  <p className="pb-2 text-2xl font-bold">Wind conditions🎐</p>
                  <div className="grid grid-cols-4 items-center content-start gap-1">
                    <label
                      style={{ margin: 0 }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="calm"
                        type="radio"
                        name="wind"
                        className="form-radio mx-4"
                        onChange={setFormData}
                      />{" "}
                      Calm ☺️
                    </label>
                    <label
                      style={{ margin: 0 }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="breezy"
                        type="radio"
                        name="wind"
                        className="form-radio mx-4"
                        onChange={setFormData}
                      />{" "}
                      Breezy ☁️
                    </label>
                    <label
                      style={{ margin: 0 }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="windy"
                        type="radio"
                        name="wind"
                        className="form-radio mx-4"
                        onChange={setFormData}
                      />{" "}
                      Windy 🎐
                    </label>
                    <label
                      style={{ margin: 0 }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="high_winds"
                        type="radio"
                        name="wind"
                        className="form-radio mx-4"
                        onChange={setFormData}
                      />{" "}
                      High Winds 🌬️
                    </label>
                  </div>
                </div>
                <div className="p-4 mt-2 rounded">
                  <p className="pb-2 text-2xl font-bold">Precipitation 💧</p>
                  <div className="grid grid-cols-4 items-center content-start gap-1">
                    <label
                      style={{ margin: 0 }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="none"
                        type="radio"
                        name="precipitation"
                        className="form-radio mx-4"
                        onChange={setFormData}
                      />{" "}
                      None 🌤️
                    </label>
                    <label
                      style={{ margin: 0 }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="rain"
                        type="radio"
                        name="precipitation"
                        className="form-radio mx-4"
                        onChange={setFormData}
                      />{" "}
                      Rain 🌧️
                    </label>
                    <label
                      style={{ margin: 0 }}
                      className="form-input-checkbox-label"
                    >
                      <input
                        value="sleet"
                        type="radio"
                        name="precipitation"
                        className="form-radio mx-4"
                        onChange={setFormData}
                      />{" "}
                      Sleet 🧊
                    </label>
                    <label
                      style={{ margin: 0 }}
                      className="form-input-checkbox-label"
                    >
                      <input
                        value="sleet"
                        type="radio"
                        className="form-radio mx-4"
                        name="precipitation"
                        onChange={setFormData}
                      />{" "}
                      Snow 🌨️
                    </label>
                  </div>
                </div>
                <div className="p-4 mt-2 rounded">
                  <p className="pb-2 text-2xl font-bold">Time of day ⏲️</p>
                  <div className="grid grid-cols-2 items-center content-start gap-1">
                    <label
                      style={{ margin: 0 }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="day"
                        type="radio"
                        name="time"
                        className="form-radio mx-4"
                        onChange={setFormData}
                      />{" "}
                      Day ☀️
                    </label>
                    <label
                      style={{ margin: 0 }}
                      className="form-input-checkbox-label "
                    >
                      <input
                        value="night"
                        type="radio"
                        name="time"
                        className="form-radio mx-4"
                        onChange={setFormData}
                      />{" "}
                      Night 🌕
                    </label>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-yellow-500 p-4 mt-2 rounded text-2xl"
                  >
                    👟 Tell me what to wear! 😎
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        {/* modal */}
        {isModalVisible ? <Modal runData={formData} onClose={handleModalClose} /> : null}
        <footer className="text-md text-center">
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
