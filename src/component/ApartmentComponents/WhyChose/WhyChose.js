import React from 'react'
import "./WhyChose.css"
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
export default function WhyChose(props) {
   const { t, i18n } = useTranslation();
   function handleClick(lang) {
     i18n.changeLanguage(lang);
   }
    return (
      <>
        <div className="my-4 mt-5">
          <h4 className="fw-bold">
            {t("ApartmentComponents.WhyChose.5 reasons to choose")} {" "}
            {props.apartment.apartmentName}{" "}
          </h4>
        </div>

        <div class="d-flex flex-wrap">
          <div className="d-flex my-3">
            <div className="bgColor">
              <div className="p-2">
                <svg
                  height="32"
                  width="32"
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  fill="#06306a"
                >
                  <path d="M21 18.5V20a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 1.5 20V9.5a2.25 2.25 0 0 1 2.25-2.25h15A2.25 2.25 0 0 1 21 9.5V11a.75.75 0 0 0 1.5 0V9.5a3.75 3.75 0 0 0-3.75-3.75h-15A3.75 3.75 0 0 0 0 9.5V20a3.75 3.75 0 0 0 3.75 3.75h15A3.75 3.75 0 0 0 22.5 20v-1.5a.75.75 0 0 0-1.5 0zM19.42 6.165l-2.328-4.658A2.25 2.25 0 0 0 14.074.5h-.002L3.415 5.83a.75.75 0 0 0 .67 1.34l10.658-5.328a.75.75 0 0 1 1.007.335l2.33 4.658a.75.75 0 1 0 1.34-.67zm2.33 13.085A2.25 2.25 0 0 0 24 17v-4.5a2.25 2.25 0 0 0-2.25-2.25H18a4.5 4.5 0 1 0 0 9h3.75zm0-1.5H18a3 3 0 1 1 0-6h3.75a.75.75 0 0 1 .75.75V17a.75.75 0 0 1-.75.75zM18 15.125a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5z"></path>
                </svg>
              </div>
            </div>

            <div className="ms-2">
              <h5 className="mt-2">
                {t("ApartmentComponents.WhyChose.Prices you can't beat!")}
              </h5>
            </div>
          </div>
          <div className="d-flex my-3 ms-3">
            <div className="bgColor">
              <div className="p-2">
                <svg
                  height="32"
                  width="32"
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  fill="#06306a"
                >
                  <path d="M19.5 16.5v5.25a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75v-10.5a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v5.25zm1.5 0v-5.25A2.25 2.25 0 0 0 18.75 9H5.25A2.25 2.25 0 0 0 3 11.25v10.5A2.25 2.25 0 0 0 5.25 24h13.5A2.25 2.25 0 0 0 21 21.75V16.5zM7.5 9.75V6a4.5 4.5 0 0 1 9 0v3.75a.75.75 0 0 0 1.5 0V6A6 6 0 0 0 6 6v3.75a.75.75 0 0 0 1.5 0zM12 15a1.125 1.125 0 1 0 .004 0h-.006a.75.75 0 0 0 .004 1.5H12a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5z"></path>
                </svg>
              </div>
            </div>

            <div className="ms-2">
              <h5 className="mt-2">
                {t("ApartmentComponents.WhyChose.Booking is safe")}
              </h5>
            </div>
          </div>
          <div className="d-flex my-3 ms-3">
            <div className="bgColor">
              <div className="p-2">
                <svg
                  height="32"
                  width="32"
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  fill="#06306a"
                >
                  <path d="M18 16.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0zm-1.694-5.582l.442 1.453a1.744 1.744 0 0 0 2.06 1.194l1.473-.341a.588.588 0 0 1 .557.976l-1.032 1.112a1.75 1.75 0 0 0 0 2.383l1.031 1.11a.589.589 0 0 1-.56.976l-1.468-.34a1.744 1.744 0 0 0-2.06 1.195l-.442 1.445a.58.58 0 0 1-1.113.004l-.442-1.456a1.744 1.744 0 0 0-2.06-1.194l-1.473.341a.588.588 0 0 1-.557-.976l1.032-1.112a1.75 1.75 0 0 0 0-2.383l-1.031-1.11a.589.589 0 0 1 .56-.976l1.468.34a1.744 1.744 0 0 0 2.06-1.195l.442-1.452a.58.58 0 0 1 1.112.002zm1.437-.432a2.08 2.08 0 0 0-3.985-.009l-.441 1.452a.244.244 0 0 1-.29.168l-1.47-.34a2.089 2.089 0 0 0-1.994 3.46l1.031 1.11a.25.25 0 0 1 0 .34l-1.03 1.112a2.089 2.089 0 0 0 1.989 3.46l1.476-.342a.244.244 0 0 1 .287.167l.442 1.454a2.079 2.079 0 0 0 3.984-.003l.441-1.443a.244.244 0 0 1 .29-.169l1.47.34a2.089 2.089 0 0 0 1.994-3.46l-1.031-1.11a.25.25 0 0 1 0-.34l1.03-1.112a2.089 2.089 0 0 0-1.989-3.46l-1.476.342a.244.244 0 0 1-.287-.167l-.443-1.454zM3.75 7.5h10.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5zm0 4.5H7.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5zm0 4.5H7.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5zm3.75 3H2.25a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h10.629a.75.75 0 0 1 .53.22L16.28 4.59c.14.14.219.331.219.53V6.75a.75.75 0 0 0 1.5 0V5.121a2.25 2.25 0 0 0-.659-1.59L14.47.659A2.25 2.25 0 0 0 12.88 0H2.25A2.25 2.25 0 0 0 0 2.25v16.5A2.25 2.25 0 0 0 2.25 21H7.5a.75.75 0 0 0 0-1.5z"></path>
                </svg>
              </div>
            </div>

            <div className="ms-2">
              <h5 className="mt-2">
                {t("ApartmentComponents.WhyChose.Manage your bookings online")}
              </h5>
            </div>
          </div>
          <div className="d-flex my-3 me-1">
            <div className="bgColor">
              <div className="p-2">
                <svg
                  class="bk-icon -streamline-speech_bubble"
                  height="32"
                  width="32"
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  fill="#06306a"
                >
                  <path d="M12.751 0C6.546-.009 1.51 5.014 1.5 11.219a11.235 11.235 0 0 0 1.696 5.952l-.04-.718-3.083 6.475c-.304.637.362 1.303 1 1l6.473-3.084-.718-.04c5.276 3.28 12.213 1.663 15.494-3.614 3.28-5.276 1.663-12.213-3.614-15.494A11.25 11.25 0 0 0 12.748 0zm0 1.5A9.75 9.75 0 1 1 7.62 19.53a.75.75 0 0 0-.718-.04L.428 22.573l1 1 3.082-6.476a.75.75 0 0 0-.04-.718A9.735 9.735 0 0 1 3 11.22c.008-5.377 4.372-9.729 9.749-9.721z"></path>
                </svg>
              </div>
            </div>

            <div className="ms-2">
              <h5 className="mt-2">
                {t("ApartmentComponents.WhyChose.The staff speak English")}
              </h5>
            </div>
          </div>
          <div className="d-flex my-3">
            <div className="bgColor">
              <div className="p-2">
                <svg
                  class="bk-icon -streamline-couple"
                  height="32"
                  width="32"
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  fill="#06306a"
                >
                  <path d="M8.25 3.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM12 13.5a6 6 0 0 0-12 0v2.25c0 .414.336.75.75.75H3l-.746-.675.75 7.5A.75.75 0 0 0 3.75 24h4.5a.75.75 0 0 0 .746-.675l.75-7.5L9 16.5h2.25a.75.75 0 0 0 .75-.75V13.5zm-1.5 0v2.25l.75-.75H9a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 3 15H.75l.75.75V13.5a4.5 4.5 0 1 1 9 0zm9.75-9.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM13.5 16.5H15l-.746-.675.75 7.5a.75.75 0 0 0 .746.675h4.5a.75.75 0 0 0 .746-.675l.75-7.5L21 16.5h2.25a.75.75 0 0 0 .75-.75V13.5a6 6 0 0 0-11.143-3.086.75.75 0 0 0 1.286.772 4.5 4.5 0 0 1 8.357 2.315v2.249l.75-.75H21a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 15 15h-1.5a.75.75 0 0 0 0 1.5z"></path>
                </svg>
              </div>
            </div>

            <div className="ms-2">
              <h5 className="mt-2">
                {t(
                  "ApartmentComponents.WhyChose.Great location and facilities for couples"
                )}
              </h5>
            </div>
          </div>
        </div>
      </>
    );



}
