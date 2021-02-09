import Head from "next/head";
import * as React from "react";
import Header from "../components/header";
import ClothingForm from "../components/clothing-form";
import ClothingModal from "../components/clothing-modal";
import clothingData from "../constants/data";
import Footer from "../components/footer";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const DEFAULT_FORM_DATA = {
  precipitation: "none",
  tempVal: "70",
  tempUnit: "fahrenheit",
  time: "day",
  wind: "calm",
};

export const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [formData, setFormData] = React.useReducer(
    formReducer,
    DEFAULT_FORM_DATA
  );

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
        <Header />
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
