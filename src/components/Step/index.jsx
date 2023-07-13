import StepProgress from "./StepProgress";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ProgressControl from "./ProgressControl";
import styles from "./base.module.css";
import { useState } from "react";

function Step() {
  const [nowStep, setNowStep] = useState(1);

  function handleClickNext() {
    if (nowStep < 3) setNowStep(nowStep + 1);
  }

  function handleClickPrev() {
    if (nowStep > 1) setNowStep(nowStep - 1);
  }
  return (
    <div className={styles.steplist}>
      <StepProgress nowStep={nowStep} />
      {nowStep === 1 && <Step1 />}
      {nowStep === 2 && <Step2 />}
      {nowStep === 3 && <Step3 />}
      <ProgressControl
        nowStep={nowStep}
        clickNext={handleClickNext}
        clickPrev={handleClickPrev}
      />
    </div>
  );
}

export default Step;
