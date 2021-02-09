import { FormState } from "../../pages";

export type ClothingFormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setFormData: React.Dispatch<React.ChangeEvent<HTMLInputElement>>;
  formData: FormState;
};

const ClothingForm: React.FC<ClothingFormProps> = ({
  handleSubmit,
  setFormData,
  formData,
}) => (
  <form onSubmit={handleSubmit}>
    <fieldset>
      <div className="p-2 mt-2">
        <p className="pb-2 text-2xl font-bold">Enter a location 🗺️</p>
        <label className="border-2 rounded border-blue-400 flex w-full md:w-auto md:mr-1">
          <input
            className="form-input w-full"
            name="location"
            type="string"
            onChange={setFormData}
            placeholder="Coming soon (disabled)"
            required
            disabled
            value={formData.location}
          />
        </label>
      </div>
    </fieldset>
    <div className="p-2 mt-2">
      <span className="text-3xl font-extrabold py-4 block">- OR -</span>
    </div>
    <fieldset>
      <div className="p-2 mt-2">
        <p className="pb-2 text-2xl font-bold">Outside temperature 🌡️</p>
        <div className="flex flex-col md:flex-row items-center">
          <label className="border-2 rounded border-blue-400 flex w-full md:w-auto md:mr-1">
            <input
              className="form-input w-full"
              name="tempVal"
              type="number"
              onChange={setFormData}
              placeholder="Enter a temperature"
              required
              value={formData.tempVal}
            />
          </label>
          <label
            style={{ margin: "4px" }}
            className="form-input-checkbox-label"
          >
            <input
              value="celsius"
              checked={formData.tempUnit === "celsius"}
              type="radio"
              name="tempUnit"
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
              checked={formData.tempUnit === "fahrenheit"}
              type="radio"
              name="tempUnit"
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
        <button type="submit" className="bg-yellow-500 p-4 rounded text-2xl">
          👟 Tell me what to wear! 😎
        </button>
      </div>
    </fieldset>
  </form>
);

export default ClothingForm;
