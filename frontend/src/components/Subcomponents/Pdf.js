import React, { useState } from "react";
import { GrDocumentPdf } from "react-icons/gr";
import FileType from "./FileType";
import FileMenu from "./FileMenu";

function Pdf({ file }) {
  const [openStatus, setOpenStatus] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    if (e.type === "contextmenu" || e.nativeEvent.which === 3) {
      setOpenStatus(true);
    }
  };

  return (
    <>
      <div
        className="tw-flex tw-items-center tw-w-52 tw-mx-2"
        onClick={(e) => handleContextMenu(e)}
        onContextMenu={(e) => handleContextMenu(e)}
      >
        <FileType
          file={file}
          IconName={GrDocumentPdf}
          bgColor={"tw-bg-green-400"}
        />
      </div>
      {openStatus && (
        <FileMenu
          file={file}
          setOpenStatus={setOpenStatus}
          openStatus={openStatus}
          type={"pdf"}
        />
      )}
    </>
  );
}

export default Pdf;
