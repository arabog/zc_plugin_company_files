import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "../../Subcomponents/Image";
import Pdf from "../../Subcomponents/Pdf";
import Zip from "../../Subcomponents/Zip";
import Excel from "../../Subcomponents/Excel";
import Video from "../../Subcomponents/Video";
import Powerpoint from "../../Subcomponents/Powerpoint";
import Document from "../../Subcomponents/Document";
import Audio from "../../Subcomponents//audio";
dayjs.extend(relativeTime);

async function fetcher(url) {
  const res = await axios.get(url);
  return res.data;
}

const API_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:5500/api/v1"
  : "https://companyfiles.zuri.chat/api/v1";
const index = () => {
  const { data, error } = useSWR(`${API_URL}/files/all`, fetcher);

  if (error)
    return (
      <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center tw-text-red-600 tw-py-4">
        failed to load
      </div>
    );
  if (!data)
    return (
      <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center tw-py-4">
        loading...
      </div>
    );

  return (
    <div className="tw-w-full tw-py-10">
      <div className="tw-w-full tw-flex tw-justify-between tw-items-center">
        <h2 className="tw-text-lg tw-font-semibold tw-text-gray-900">Files</h2>
        <Link
          to="/all-files"
          className="tw-text-green-500 tw-text-lg tw-font-semibold hover:tw-text-green-600"
        >
          View All
        </Link>
      </div>

      <div className="project-box-wrapper">
        <div className="project-box tw-w-full tw-py-5 tw-flex tw-flex-wrap tw-justify-between tw-mx-2">
        {data.data.length > 0 ? (
            data.data.slice(0, 15).map((file) => {
              return new RegExp("\\b" + "image" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Image file={file} />
                </div>
              ) : new RegExp("\\b" + "pdf" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Pdf file={file} />
                </div>
              ) : new RegExp("\\b" + "zip" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Zip file={file} />
                </div>
              ) : new RegExp("\\b" + "ms-excel" + "\\b").test(file.type) ||
                new RegExp("\\b" + "spreadsheetml" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center mr-0 my-5 relative"
                >
                  <Excel file={file} />
                </div>
              ) : new RegExp("\\b" + "msword" + "\\b").test(file.type) ||
                new RegExp("\\b" + "wordprocessingml" + "\\b").test(
                  file.type
                ) ||
                new RegExp("\\b" + "plain" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Document file={file} />
                </div>
              ) : new RegExp("\\b" + "ms-powerpoint" + "\\b").test(file.type) ||
                new RegExp("\\b" + "presentationml" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Powerpoint file={file} />
                </div>
              ) : new RegExp("\\b" + "audio" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Audio file={file} />
                </div>
              ) : (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Video file={file} />
                </div>
              );
            })
          ) : (
            <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center">
              No Files
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
