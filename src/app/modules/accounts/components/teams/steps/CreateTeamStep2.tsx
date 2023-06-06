import React, { Dispatch, FC, SetStateAction, useRef } from "react";
import { toAbsoluteUrl } from "../../../../../../_metronic/helpers";

interface Props {
  setselectedImage: Dispatch<SetStateAction<string | null | undefined>>;
  selectedImage: string | null | undefined;
}
const CreateTeamStep2: FC<Props> = ({ setselectedImage, selectedImage }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    fileInputRef?.current?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          setselectedImage(e.target.result.toString());
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <div className="w-100">
      <div className="pb-10 pb-lg-15">
        <h2 className="fw-bolder text-dark">Team Image</h2>

        <div className="text-gray-400 fw-bold fs-6">Upload a Team Image</div>
      </div>

      <div className="row mb-6">
        <label className="col-lg-4 col-form-label fw-bold fs-6">
          Team Image
        </label>
        <div className="col-lg-8">
          <div
            className="image-input image-input-outline"
            data-kt-image-input="true"
            style={{
              backgroundImage: `url(${toAbsoluteUrl(
                "/media/avatars/blank.png"
              )})`,
            }}
            onClick={handleClick}
          >
            <div
              className="image-input-wrapper w-125px h-125px"
              style={{
                backgroundImage: selectedImage
                  ? `url(${selectedImage})`
                  : `url(${toAbsoluteUrl("/media/avatars/blank.png")}`,
              }}
            ></div>
          </div>
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export { CreateTeamStep2 };
