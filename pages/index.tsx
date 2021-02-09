import * as React from "react";
import Head from "next/head";
import Header from "../components/header";
import ClothingForm from "../components/clothing-form";
import ClothingModal from "../components/clothing-modal";
import clothingData from "../constants/data";
import Footer from "../components/footer";
import { convertFromFahrenheitToCelcius, convertFromCelsiusToFahrenheit } from "../utils/temperature-utilities";

type Precipitation = "none" | "rain" | "sleet" | "snow";
type TempUnit = "fahrenheit" | "celsius";
type Time = "day" | "night";
type Wind = "calm" | "breezy" | "windy" | "heavyWinds";

export type FormState = {
  precipitation: Precipitation
  tempVal: number;
  tempUnit: TempUnit;
  time: Time;
  wind: Wind;
  location?: string;
};

const formReducer = (
  state: FormState,
  event: React.ChangeEvent<HTMLInputElement>
) => {
  switch (event.target.name) {
    case "tempUnit":
      if (event.target.value !== state.tempUnit) {
        const newTempVal =
          event.target.value === "celsius"
            ? Number(convertFromFahrenheitToCelcius(state.tempVal).toFixed(2))
            : Number(convertFromCelsiusToFahrenheit(state.tempVal).toFixed(2));

        return {
          ...state,
          [event.target.name]: event.target.value as TempUnit,
          tempVal: newTempVal,
        };
      }
    case "tempVal":
      if (event.target.value === "celsius") {
        return {
          ...state,
          [event.target.name]: convertFromFahrenheitToCelcius(
            Number(event.target.value)
          ),
        };
      } else {
        return {
          ...state,
          [event.target.name]: event.target.value,
        };
      }
    default:
      return {
        ...state,
        [event.target.name]: event.target.value,
      };
  }
};

const DEFAULT_FORM_STATE: FormState = {
  precipitation: "none",
  tempVal: 70,
  tempUnit: "fahrenheit",
  time: "day",
  wind: "calm",
  location: undefined,
};

export const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [formData, setFormData] = React.useReducer(
    formReducer,
    DEFAULT_FORM_STATE
  );

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="https://whatdoiwearonmyrun.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="What do I wear on my run?" />
        <meta
          property="og:description"
          content="A website to determine what clothing to wear on a run."
        />
      </Head>
      <main>
        <Header />
        <div className="mx-auto md:max-w-5xl md:px-4 sm:px-6 xl:px-0 rounded">
          <div className="flex flex-col mt-2">
            <p className="text-2xl font-bold p-2 text-yellow-600">
              This app is currently in alpha. Expect frequent changes.
            </p>
            <p className="text-xl p-2">
              It can be hard to figure out what to wear when you're out on a
              run. Often I spend a lot of time glancing at a variety of
              conditions before my daily runs. The below form can help you
              decide what clothing items to wear before you head out the door.
            </p>
            <ClothingForm
              handleSubmit={handleSumbit}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>
        {/* modal */}
        {isModalVisible ? (
          <ClothingModal
            formData={formData}
            handleModalClose={handleModalClose}
            clothingData={clothingData}
          />
        ) : null}
        <Footer />
      </main>
    </div>
  );
};

export default Home;
