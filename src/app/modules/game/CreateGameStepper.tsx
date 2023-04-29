import { useEffect, useRef, useState } from "react";
import { KTSVG } from "../../../_metronic/helpers";
import { CreateGameStep1 } from "./steps/CreateGameStep1";
import { StepperComponent } from "../../../_metronic/assets/ts/components";
import { Formik, Form, FormikValues } from "formik";
import {
  ICreateGame,
  createGameSchemas,
  inits,
} from "./CreateTeamWizardHelper";
import { useNavigate } from "react-router-dom";
import { CreateGameCompleted } from "./steps/CreateGameCompleted";
import { createGame } from "./core/request";
import { useMutation } from "@apollo/client";

const CreateGameStepper = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const stepper = useRef<StepperComponent | null>(null);
  const [currentSchema, setCurrentSchema] = useState(createGameSchemas[0]);
  const [initValues] = useState<ICreateGame>(inits);
  const navigate = useNavigate();
  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(
      stepperRef.current as HTMLDivElement
    );
  };
  const [createGameF] = useMutation(createGame);
  const prevStep = () => {
    if (!stepper.current) {
      return;
    }

    stepper.current.goPrev();

    setCurrentSchema(createGameSchemas[stepper.current.currentStepIndex - 1]);
  };

  const submitStep = async (values: ICreateGame, actions: FormikValues) => {
    if (!stepper.current) {
      return;
    }

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext();
    } else {
      await createGameF({
        variables: { CreateGameInput: { ...values } },
      });
      //TODO NAVIGATE TO GAME
      navigate("/account/teams");
      // actions.resetForm();
    }

    setCurrentSchema(createGameSchemas[stepper.current.currentStepIndex - 1]);
  };

  useEffect(() => {
    if (!stepperRef.current) {
      return;
    }

    loadStepper();
  }, [stepperRef]);

  return (
    <div
      ref={stepperRef}
      className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
      id="kt_create_account_stepper"
    >
      {/* begin::Aside*/}
      <div className="card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9">
        {/* begin::Wrapper*/}
        <div className="card-body px-6 px-lg-10 px-xxl-15 py-20">
          {/* begin::Nav*/}
          <div className="stepper-nav">
            {/* begin::Step 1*/}
            <div className="stepper-item current" data-kt-stepper-element="nav">
              {/* begin::Wrapper*/}
              <div className="stepper-wrapper">
                {/* begin::Icon*/}
                <div className="stepper-icon w-40px h-40px">
                  <i className="stepper-check fas fa-check"></i>
                  <span className="stepper-number">1</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className="stepper-label">
                  <h3 className="stepper-title">Team Details</h3>

                  <div className="stepper-desc fw-semibold">
                    Setup Your Team Details
                  </div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}

              {/* begin::Line*/}
              <div className="stepper-line h-40px"></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 1*/}

            {/* begin::Step 5*/}
            <div className="stepper-item" data-kt-stepper-element="nav">
              {/* begin::Wrapper*/}
              <div className="stepper-wrapper">
                {/* begin::Icon*/}
                <div className="stepper-icon w-40px h-40px">
                  <i className="stepper-check fas fa-check"></i>
                  <span className="stepper-number">2</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className="stepper-label">
                  <h3 className="stepper-title">Completed</h3>
                  <div className="stepper-desc fw-semibold">
                    Woah, we are here
                  </div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}
            </div>
            {/* end::Step 5*/}
          </div>
          {/* end::Nav*/}
        </div>
        {/* end::Wrapper*/}
      </div>
      {/* begin::Aside*/}

      <div className="d-flex flex-row-fluid flex-center bg-body rounded">
        <Formik
          validationSchema={currentSchema}
          initialValues={initValues}
          onSubmit={submitStep}
        >
          {() => (
            <Form
              className="py-20 w-100 w-xl-700px px-9"
              noValidate
              id="kt_create_account_form"
            >
              <div className="current" data-kt-stepper-element="content">
                <CreateGameStep1 />
              </div>

              <div data-kt-stepper-element="content">
                <CreateGameCompleted />
              </div>

              <div className="d-flex flex-stack pt-10">
                <div className="mr-2">
                  <button
                    onClick={prevStep}
                    type="button"
                    className="btn btn-lg btn-light-primary me-3"
                    data-kt-stepper-action="previous"
                  >
                    <KTSVG
                      path="/media/icons/duotune/arrows/arr063.svg"
                      className="svg-icon-4 me-1"
                    />
                    Back
                  </button>
                </div>

                <div>
                  <button type="submit" className="btn btn-lg btn-primary me-3">
                    <span className="indicator-label">
                      {stepper.current?.currentStepIndex !==
                        stepper.current?.totatStepsNumber! - 1 && "Continue"}
                      {stepper.current?.currentStepIndex ===
                        stepper.current?.totatStepsNumber! - 1 && "Submit"}
                      <KTSVG
                        path="/media/icons/duotune/arrows/arr064.svg"
                        className="svg-icon-3 ms-2 me-0"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { CreateGameStepper };
