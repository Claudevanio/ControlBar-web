import { Check } from "@mui/icons-material";
import { StepperProps } from "@/types";

const Stepper = ({ currentStep, totalSteps }: StepperProps) => {
  return (
    <div className="h-[10px] border-textSecondary">
      <div className="flex flex-row h-[1px] w-full bg-primaryLight justify-between">
        {new Array(totalSteps).fill(undefined).map((_, index) => (
          <div
            key={index}
            className={`flex h-[20px] w-[20px] rounded-full relative justify-center items-center top-[-10px] ${
              currentStep > index + 1
                ? "bg-primaryLight"
                : "bg-background border p-1 border-primaryLight"
            } `}
          >
            {currentStep > index + 1 ? (
              <Check className="text-white text-sm" />
            ) : (
              <div className="bg-primaryLight h-full w-full rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
