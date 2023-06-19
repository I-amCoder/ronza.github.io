import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./breadcrumb.css";

const BreadCrumb = ({ links = [],title }) => {
  return (
    <div className="common-header">
      <div className="text-center">
        <h1>{title}</h1>
        <div className="py-4">
          <Breadcrumb className="d-flex flex-row justify-content-center">
            {links.map((link, index) => {
              const isCurrent = index + 1 === links.length;
              return (
                <Breadcrumb.Item
                  key={index}
                  active={isCurrent}
                  linkAs={Link}
                  linkProps={{ to: link.path }}
                >
                  {link.title}
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
