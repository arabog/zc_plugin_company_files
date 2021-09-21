import React from "react";

function MenuButtons({ setShowModal, setDeleteModal }) {
  return (
    <div>
      <button
        className="block py-4 pl-3 pr-12 md:pr-10 w-full text-left hover:bg-gray-100 focus__lightGreen"
        onClick={() => setShowModal(true)}
      >
        <svg
          className="inline-block"
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.1499 0.125C7.45915 0.125 5.83764 0.79665 4.6421 1.99219C3.44655 3.18774 2.7749 4.80924 2.7749 6.5H0.649902L3.40532 9.25542L3.4549 9.35458L6.31657 6.5H4.19157C4.19157 5.18497 4.71396 3.9238 5.64383 2.99393C6.5737 2.06406 7.83487 1.54167 9.1499 1.54167C10.4649 1.54167 11.7261 2.06406 12.656 2.99393C13.5858 3.9238 14.1082 5.18497 14.1082 6.5C14.1082 7.81503 13.5858 9.0762 12.656 10.0061C11.7261 10.9359 10.4649 11.4583 9.1499 11.4583C7.78282 11.4583 6.54324 10.8988 5.65074 9.99917L4.6449 11.005C5.23386 11.6004 5.93561 12.0725 6.70913 12.3936C7.48264 12.7147 8.3124 12.8783 9.1499 12.875C10.8407 12.875 12.4622 12.2033 13.6577 11.0078C14.8533 9.81226 15.5249 8.19075 15.5249 6.5C15.5249 4.80924 14.8533 3.18774 13.6577 1.99219C12.4622 0.79665 10.8407 0.125 9.1499 0.125Z"
            fill="#999999"
          />
        </svg>{" "}
        &nbsp; Restore
      </button>
      <button
        onClick={() => setDeleteModal(true)}
        className="block py-4 pl-3 pr-12 md:pr-10 w-full md:w-max text-left hover:bg-gray-100 focus__lightGreen whitespace-nowrap"
      >
        <svg
          className="inline-block"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.43555 4.48242H3.76888H14.4355"
            stroke="#999999"
            strokeWidth="1.22693"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.7153 4.48236C13.7153 4.14356 13.4407 3.8689 13.1019 3.8689C12.7631 3.8689 12.4884 4.14356 12.4884 4.48236H13.7153ZM4.38202 4.48236C4.38202 4.14356 4.10736 3.8689 3.76855 3.8689C3.42975 3.8689 3.15509 4.14356 3.15509 4.48236H4.38202ZM5.15518 4.48234C5.15518 4.82115 5.42984 5.0958 5.76864 5.0958C6.10745 5.0958 6.38211 4.82115 6.38211 4.48234H5.15518ZM10.4885 4.48234C10.4885 4.82115 10.7632 5.0958 11.102 5.0958C11.4408 5.0958 11.7154 4.82115 11.7154 4.48234H10.4885ZM12.4884 4.48236V13.8157H13.7153V4.48236H12.4884ZM12.4884 13.8157C12.4884 14.2133 12.1661 14.5356 11.7686 14.5356V15.7625C12.8437 15.7625 13.7153 14.8909 13.7153 13.8157H12.4884ZM11.7686 14.5356H5.10189V15.7625H11.7686V14.5356ZM5.10189 14.5356C4.70431 14.5356 4.38202 14.2133 4.38202 13.8157H3.15509C3.15509 14.8909 4.0267 15.7625 5.10189 15.7625V14.5356ZM4.38202 13.8157V4.48236H3.15509V13.8157H4.38202ZM6.38211 4.48234V3.14901H5.15518V4.48234H6.38211ZM6.38211 3.14901C6.38211 2.75143 6.7044 2.42914 7.10198 2.42914V1.20221C6.02679 1.20221 5.15518 2.07382 5.15518 3.14901H6.38211ZM7.10198 2.42914H9.76864V1.20221H7.10198V2.42914ZM9.76864 2.42914C10.1662 2.42914 10.4885 2.75143 10.4885 3.14901H11.7154C11.7154 2.07382 10.8438 1.20221 9.76864 1.20221V2.42914ZM10.4885 3.14901V4.48234H11.7154V3.14901H10.4885Z"
            fill="#999999"
          />
          <path
            d="M7.10205 7.81567V11.8157"
            stroke="#999999"
            strokeWidth="1.22693"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.76855 7.81567V11.8157"
            stroke="#999999"
            strokeWidth="1.22693"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>{" "}
        &nbsp; Delete Permanently
      </button>
    </div>
  );
}

export default MenuButtons;
