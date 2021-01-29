import Head from "next/head";
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
    console.log("form data", event);
    setIsModalVisible(true);
  };

  console.log("formData", formData);
  return (
    <div>
      <Head>
        <title>Dude, what do I wear on my run?</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <h1 className="text-5xl text-center p-4 mt-2 bg-green-600 rounded shadow-sm">
          Dude, what do I wear on my run? 🏃‍♂️
        </h1>
        <p className="text-xl text-center p-4">
          {" "}
          It can be hard to figure out what to wear when you're out on a run.
          Let's figure it out together.
        </p>
        <form onSubmit={handleSumbit}>
          <fieldset>
            <label>
              <p>Outside temperature (Actual) 🌡️</p>
              <input name="temp_val" type="number" onChange={setFormData} />
            </label>
            <label>
              <input
                value="celcius"
                type="radio"
                name="temp_unit"
                onChange={setFormData}
              />{" "}
              Celcius
            </label>
            <label>
              <input
                value="fahrenheit"
                type="radio"
                name="temp_unit"
                onChange={setFormData}
              />{" "}
              Fahrenheit
            </label>
            <p>Wind conditions🎐</p>
            <label>
              <input
                value="calm"
                type="radio"
                name="wind"
                onChange={setFormData}
              />{" "}
              Calm ☺️
            </label>
            <label>
              <input
                value="breezy"
                type="radio"
                name="wind"
                onChange={setFormData}
              />{" "}
              Breezy ☁️
            </label>
            <label>
              <input
                value="windy"
                type="radio"
                name="wind"
                onChange={setFormData}
              />{" "}
              Windy 🎐
            </label>
            <label>
              <input
                value="high_winds"
                type="radio"
                name="wind"
                onChange={setFormData}
              />{" "}
              High Winds 🌬️
            </label>
            <p>Precipitation 💧</p>
            <label>
              <input
                value="none"
                type="radio"
                name="precipitation"
                onChange={setFormData}
              />{" "}
              None 🌤️
            </label>
            <label>
              <input
                value="rain"
                type="radio"
                name="precipitation"
                onChange={setFormData}
              />{" "}
              Rain 🌧️
            </label>
            <label>
              <input
                value="sleet"
                type="radio"
                name="precipitation"
                onChange={setFormData}
              />{" "}
              Sleet 🧊
            </label>
            <label>
              <input
                value="sleet"
                type="radio"
                name="precipitation"
                onChange={setFormData}
              /> Snow 🌨️
            </label>
            <p>Time of day ⏲️</p>
            <label>
              <input
                value="day"
                type="radio"
                name="time"
                onChange={setFormData}
              /> Day ☀️
            </label>
            <label>
              <input
                value="night"
                type="radio"
                name="time"
                onChange={setFormData}
              /> Night 🌕
            </label>

            <button type="submit" className="bg-yellow-500 rounded p-2">
              Dude, tell me what to wear! 👟 😎
            </button>
          </fieldset>
        </form>
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
