import { useHistory, useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";
import "./style.css";

type Props = {
  text: string;
  doc?: string;
  cloud?: string;
  url?: string;
};

export default function RollButton({ text, doc, url, cloud }: Props) {
  const history = useHistory();
  const { globalData } = useDocusaurusContext();
  const location = useLocation();

  return (
    <div>
      <button
        onClick={() => {
          if (doc) {
            for (let v of globalData["docusaurus-plugin-content-docs"].default["versions"]) {
              if (location.pathname.includes(v.path)) {
                return history.push(`${v.path}/${doc}`);
              } else {
                return history.push(`/docs/current/${doc}`);
              }
            }
          } else if (url) {
            window.open(url, "_blank", "noopener,noreferrer");
          } else if (cloud) {
            history.push(`/cloud/${cloud}`);
          }
        }}
        className="button-3 learn-more"
      >
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">{text}</span>
      </button>
    </div>
  );
}
