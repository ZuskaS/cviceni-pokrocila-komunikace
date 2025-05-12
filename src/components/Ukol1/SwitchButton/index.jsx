import './style.css';
//Dítě
export const SwitchButton = ({ label, onSwitch, lightOn }) => {
  return (
    <button
      className="switch-button switch-button--on"
      onClick={() => onSwitch(!lightOn)}
    >
      <i className="switch-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
