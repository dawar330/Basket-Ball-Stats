/* eslint-disable react/jsx-no-target-blank */
import { useIntl } from "react-intl";
import { AsideMenuItemWithSub } from "./AsideMenuItemWithSub";
import { AsideMenuItem } from "./AsideMenuItem";

export function AsideMenuMain() {
  const intl = useIntl();

  return (
    <>
      <AsideMenuItem
        to="/dashboard"
        icon="/media/icons/duotune/art/art002.svg"
        title={intl.formatMessage({ id: "MENU.DASHBOARD" })}
        fontIcon="bi-app-indicator"
      />
      <AsideMenuItem
        to="/game/overview"
        title="Game"
        fontIcon="bi-app-indicator"
        icon="/media/icons/duotune/art/art002.svg"
      />
    </>
  );
}
