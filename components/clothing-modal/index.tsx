import * as React from "react";
import { determineHatType, determineGloveType, determineSunglasses, determineBottomType, determineTopType, determineJacketType } from "../../utils/static-clothing-utils";
import ClothingArticle from "../clothing-article";
import Modal from "../modal";

export type ClothingModalProps = {
  formData: Record<string,string>
  handleModalClose: () => void;
  clothingData: any; //TODO PAUL. Need to type this
};

const ClothingModal: React.FC<ClothingModalProps> = ({
  clothingData,
  formData,
  handleModalClose,
}) => {
  const hatSelection = determineHatType(formData, clothingData);
  const gloveSelection = determineGloveType(formData, clothingData);
  const sunglassSelection = determineSunglasses(formData, clothingData);
  const bottomSelection = determineBottomType(formData, clothingData);
  const topSelection = determineTopType(formData, clothingData);
  const jacketSelection = determineJacketType(formData, clothingData);

  return (
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
      {}
      {/* Identification 🆔*/}
      <ClothingArticle
        desc={clothingData.get("identification").desc}
        name={clothingData.get("identification").name}
      />
      {/* Hat selection 🤠*/}
      {hatSelection ? (
        <ClothingArticle desc={hatSelection.desc} name={hatSelection.name} />
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
        <ClothingArticle desc={topSelection.desc} name={topSelection.name} />
      ) : null}
      {jacketSelection ? (
        <ClothingArticle
          desc={jacketSelection.desc}
          name={jacketSelection.name}
        />
      ) : null}
      <span className="text-lg my-4">Have a safe and wonderful run! 🥳</span>
    </Modal>
  );
};

export default ClothingModal;
