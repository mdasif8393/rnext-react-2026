import PlayButton from "./PlayButton";
import UploadButton from "./UploadButton";

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service"></PlayButton>
      <UploadButton />
    </div>
  );
}
