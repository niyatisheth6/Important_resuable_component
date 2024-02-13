import { CopyAiIcon, TimeIcon } from "@/components/icons/Icon";

function IconSvgComp() {
  return (
    <div className="main_container flex flex-col gap-10 buttons">
      <h1 className="heading mb-5">Icons using Icons.ts</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-6">
          <h4 className="text-3xl">Icons passing props</h4>
          <CopyAiIcon isDisabled={true} />
        </div>
        <div className="flex gap-6">
          <h4 className="text-3xl">Icons Without passing props</h4>
          <CopyAiIcon />
        </div>
        <TimeIcon width={60} height={60} />
      </div>
    </div>
  );
}

export default IconSvgComp;
