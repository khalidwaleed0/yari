import "./index.scss";
import { Button } from "../button";
import { usePlusUrl } from "../../../plus/utils";

export const SubscribeLink = ({ toPlans = false }) => {
  const href = usePlusUrl();

  return (
    <Button
      href={href + (toPlans ? "#subscribe" : "")}
      extraClasses="mdn-plus-subscribe-link"
    >
      {toPlans ? "Upgrade Now" : "Get MDN Plus"}
    </Button>
  );
};
