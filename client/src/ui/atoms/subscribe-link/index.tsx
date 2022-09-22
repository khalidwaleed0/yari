import "./index.scss";
import { Button } from "../button";
import { usePlusUrl } from "../../../plus/utils";
import { useGleanClick } from "../../../telemetry/glean-context";
import { TOP_NAV_GET_MDN_PLUS } from "../../../telemetry/constants";

export const SubscribeLink = ({ toPlans = false }) => {
  const href = usePlusUrl();
  const gleanClick = useGleanClick();
  return (
    <Button
      href={href + (toPlans ? "#subscribe" : "")}
      extraClasses="mdn-plus-subscribe-link"
      onClickHandler={() => gleanClick(TOP_NAV_GET_MDN_PLUS)}
    >
      {toPlans ? "Upgrade Now" : "Get MDN Plus"}
    </Button>
  );
};
