/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Params } from "react-router-dom";
type Props = {
  className: string;
};
interface GameRouteParams extends Params {
  id: string;
}
const ListsWidget3: React.FC<Props> = ({ className }) => {
  const dispatch = useDispatch();
  const CurrentGame = useSelector((state: any) => state.CurrentGame);

  let ScoringPlays = CurrentGame?.homeTeam?.ScoringGamePlays.concat(
    CurrentGame?.awayTeam?.ScoringGamePlays
  );
  ScoringPlays.sort((a: any, b: any) => {
    const timeA = parseInt(a.Time2);
    const timeB = parseInt(b.Time2);
    return timeB - timeA;
  });
  let oldhome = CurrentGame?.homeTeam?.TotalScore;
  let oldaway = CurrentGame?.awayTeam?.TotalScore;
  return (
    <div
      className={`card  ${className}`}
      style={{
        overflow: "scroll",
        height: "500px",
      }}
    >
      {/* begin::Header */}
      <div className="card-header border-0">
        <h3 className="card-title fw-bold text-dark">Scoring Plays</h3>
        <div className="card-toolbar">
          {/* begin::Menu */}
          {/* <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 /> */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body pt-2">
        {ScoringPlays?.map((Play: any, index: any) => {
          let home = oldhome;
          let away = oldaway;
          let isHome = Play.Team == CurrentGame.homeTeam._id;

          switch (Play.PlayType) {
            case "3-Point":
              Play.Team == CurrentGame.homeTeam._id
                ? (oldhome = oldhome - 3)
                : (oldaway = oldaway - 3);
              break;
            case "2-Point":
              Play.Team === CurrentGame.homeTeam._id
                ? (oldhome = oldhome - 2)
                : (oldaway = oldaway - 2);
              break;
            case "Free Throw":
              Play.Team === CurrentGame.homeTeam._id
                ? (oldhome = oldhome - 1)
                : (oldaway = oldaway - 1);
              break;
            default:
              Play.Team === CurrentGame.homeTeam._id
                ? (oldhome = oldhome - 0)
                : (oldaway = oldaway - 0);
              break;
          }

          return (
            <div className="d-flex align-items-center mb-8" key={index}>
              <div className="d-flex me-3">
                <span>{Play.Time}</span>
              </div>

              {/* begin::Bullet */}
              <span
                className={`bullet bullet-vertical h-40px  me-5`}
                style={{
                  backgroundColor: isHome
                    ? CurrentGame.homeTeam.Color
                    : CurrentGame.awayTeam.Color,
                }}
              ></span>
              {/* end::Bullet */}

              {/* begin::Description */}
              <div className="flex-grow-1">
                <span className="text-gray-800 text-hover-primary fw-bold fs-6">
                  {Play.PlayerID}
                </span>
                <div className="d-flex">
                  <span
                    className="badge badge-light-warning  text-muted fw-semibold d-block"
                    style={{ fontSize: "1rem" }}
                  >
                    {Play.PlayType}
                  </span>
                </div>
              </div>
              {/* end::Description */}
              <div className="d-flex flex-column g-5">
                <div className="d-flex mb-2 justify-content-around">
                  <span
                    className="badge badge-warning fw-bold me-2 "
                    style={{
                      fontSize: "1rem",
                      backgroundColor: CurrentGame.homeTeam.Color,
                    }}
                  >
                    {CurrentGame.homeTeam.teamName.slice(0, 3).toUpperCase()}
                  </span>
                  {CurrentGame?.awayTeam?.teamName !== "" && (
                    <span
                      className="badge badge-primary fw-bold "
                      style={{
                        fontSize: "1rem",
                        backgroundColor: CurrentGame.awayTeam.Color,
                      }}
                    >
                      {CurrentGame.awayTeam.teamName.slice(0, 3).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="d-flex justify-content-around text-muted fw-semibold">
                  <span className="">{home}</span>
                  {CurrentGame?.awayTeam?.teamName !== "" && (
                    <span className="">{away}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ListsWidget3 };
