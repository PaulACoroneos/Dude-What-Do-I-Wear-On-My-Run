import Head from "next/head";
import Image from "next/image";
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

  console.log("formData", formData, formData.temp_unit === "fahrenheit");
  return (
    <div>
      <Head>
        <title>Dude, what do I wear on my run?</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <h1 className="text-5xl text-center p-4 mt-2 bg-green-600 rounded shadow-sm">
          Dude, what do I wear on my run? 🏃‍♂️
        </h1>
        <div className="p-2 mt-4 bg-pink-100 rounded shadow flex justify-center">
          <div className="flex flex-col p-4 mt-2 bg-blue-400 rounded shadow">
            <p className="text-xl text-center p-4">
              It can be hard to figure out what to wear when you're out on a
              run. Let's figure it out together. 🤝
            </p>
            <form onSubmit={handleSumbit}>
              <fieldset>
                <div className="bg-gray-500 p-4 mt-2 rounded">
                  <p className="pb-2 text-2xl">
                    Outside temperature (Actual) 🌡️
                  </p>
                  <div className="grid grid-cols-3 items-center content-start gap-1">
                    <label>
                      <input
                        className="border-4 p-2 border-gray-300"
                        name="temp_val"
                        type="number"
                        className="form-input"
                        onChange={setFormData}
                        placeholder="Enter a temperature"
                      />
                    </label>
                    <label
                      style={{ margin: 0 }}
                      className="mb-2 uppercase font-bold text-lg text-grey-darkest  bg-gray-300 p-2 cursor-pointer m-0 text-center border-2 rounded flex items-center justify-center"
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
                      className="mb-2 uppercase font-bold text-lg text-grey-darkest  bg-gray-300 p-2 cursor-pointer m-0 text-center border-2 rounded flex items-center justify-center"
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
                <div className="bg-gray-500 p-4 mt-2 rounded">
                  <p className="pb-2 text-2xl">Wind conditions🎐</p>
                  <div className="grid grid-cols-4 items-center content-start gap-1">
                    <label
                      style={{ margin: 0 }}
                      className="mb-2 uppercase font-bold text-lg text-grey-darkest  bg-gray-300 p-2 cursor-pointer m-0 text-center border-2 rounded flex items-center justify-center"
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
                      className="mb-2 uppercase font-bold text-lg text-grey-darkest  bg-gray-300 p-2 cursor-pointer m-0 text-center border-2 rounded flex items-center justify-center"
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
                      className="mb-2 uppercase font-bold text-lg text-grey-darkest  bg-gray-300 p-2 cursor-pointer m-0 text-center border-2 rounded flex items-center justify-center"
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
                      className="mb-2 uppercase font-bold text-lg text-grey-darkest  bg-gray-300 p-2 cursor-pointer m-0 text-center border-2 rounded flex items-center justify-center"
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
                <div className="bg-gray-500 p-4 mt-2 rounded">
                  <p className="pb-2 text-2xl">Precipitation 💧</p>
                  <div className="grid grid-cols-4 items-center content-start gap-1">
                    <label
                      style={{ margin: 0 }}
                      className="mb-2 uppercase font-bold text-lg text-grey-darkest  bg-gray-300 p-2 cursor-pointer m-0 text-center border-2 rounded flex items-center justify-center"
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
                      className="mb-2 uppercase font-bold text-lg text-grey-darkest  bg-gray-300 p-2 cursor-pointer m-0 text-center border-2 rounded flex items-center justify-center"
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
                      className="mb-2 uppercase font-bold text-lg text-grey-darkest  bg-gray-300 p-2 cursor-pointer m-0 text-center border-2 rounded flex items-center justify-center"
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
                      className="mb-2 uppercase font-bold text-lg text-grey-darkest  bg-gray-300 p-2 cursor-pointer m-0 text-center border-2 rounded flex items-center justify-center"
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
                <div className="bg-gray-500 p-4 mt-2 rounded">
                  <p className="pb-2 text-2xl">Time of day ⏲️</p>
                  <div className="grid grid-cols-2 items-center content-start gap-1">
                    <label
                      style={{ margin: 0 }}
                      className="mb-2 uppercase font-bold text-lg text-grey-darkest  bg-gray-300 p-2 cursor-pointer m-0 text-center border-2 rounded flex items-center justify-center"
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
                      className="mb-2 uppercase font-bold text-lg text-grey-darkest  bg-gray-300 p-2 cursor-pointer m-0 text-center border-2 rounded flex items-center justify-center"
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
