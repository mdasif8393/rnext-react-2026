import useOnlineStatus from "../src/hooks/useOnlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  return (
    <button disabled={!isOnline}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}
