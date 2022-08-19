import React from "react";
import { useIntl, navigate } from "gatsby-plugin-intl";

const IndexPage: React.FC<{}> = () => {
  const intl = useIntl();
  console.log("intl: ", intl.locale);
  return (
    <div>
      <p className="font-semibold text-red-500">
        {intl.formatMessage({ id: "title" })}
      </p>
      <p onClick={() => navigate("/blog/hello-world")}>Markdown LEARNING</p>
    </div>
  );
};

export default IndexPage;
