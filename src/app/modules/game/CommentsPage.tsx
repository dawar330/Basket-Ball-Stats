import { useState } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";
import { FeedsWidget2 } from "../../../_metronic/partials/widgets";
import { Link, useLocation, useParams, Params } from "react-router-dom";
import { createComment, getComments } from "./core/request";
import { useMutation, useQuery } from "@apollo/client";

export function CommentsPage() {
  interface GameRouteParams extends Params {
    id: string;
  }
  const { id: game_ID } = useParams<GameRouteParams>();
  const [Comment, setComment] = useState<String>();
  const [Comments, setComments] = useState<
    [
      {
        _id: string;
        userID: string;
        gameID: string;
        comment: string;
        time: string;
      }
    ]
  >();
  const [CreateComment] = useMutation(createComment, {
    variables: {
      comment: Comment,
      gameID: game_ID,
    },
    onCompleted: ({ createComment }) => {
      setComment("Add Comment...");
    },
  });
  useQuery(getComments, {
    variables: {
      gameID: game_ID,
    },
    onCompleted: ({ getComments }) => {
      setComments(getComments);
    },
  });
  return (
    <>
      <div className={`card mb-5 mb-xl-8`}>
        {/* begin::Body */}
        <div className="card-body pb-0">
          {/* begin::Reply input */}
          <form className="position-relative mb-6">
            <textarea
              className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
              rows={1}
              placeholder="Add Comment..."
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>

            <div
              className="position-absolute top-0 end-0 me-n5"
              onClick={() => CreateComment()}
            >
              <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                <KTSVG
                  path="/media/icons/duotune/general/gen016.svg"
                  className="svg-icon-muted svg-icon-2hx"
                />
              </span>
            </div>
          </form>
          {/* edit::Reply input */}
        </div>
        {/* end::Body */}
      </div>
      {Comments?.length ? (
        Comments?.map((comment) => {
          return (
            <FeedsWidget2
              key={comment._id}
              userID={comment.userID}
              comment={comment.comment}
              time={comment.time}
              className="mb-5 mb-xl-8"
            />
          );
        })
      ) : (
        <div className="d-flex flex-column flex-grow-1">
          {/*begin::Title*/}
          <h5 className="custom-list-title fw-bold text-gray-800 mb-1">
            No Comments Yet
          </h5>
          {/*end::Title*/}
        </div>
      )}
    </>
  );
}
