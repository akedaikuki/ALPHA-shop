import StepProgress from "./StepProgress";
import Step1 from "./Step1";
// import Step2 from "./Step2";
// import Step3 from "./Step3";
import ProgressControl from "./ProgressControl";
import styles from "./base.module.css";

function Step() {
  return (
    <div className={styles.steplist}>
      <StepProgress />
      <Step1 />
      {/* <Step2 /> */}
      {/* <Step3 /> */}
      <ProgressControl />
    </div>
  );
}

export default Step;
