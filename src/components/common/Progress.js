const Progress = ({
  percentage,
  containerColor,
  progressColor,
  height,
  className,
}) => {
  return (
    <div
      className={`progress-container ${className}`}
      style={{
        backgroundColor: containerColor,
        height: height,
        borderRadius: 999,
      }}
    >
      <div
        className="progress"
        style={{
          backgroundColor: progressColor,
          width: percentage,
          height: "100%",
        }}
      ></div>
    </div>
  );
};

export default Progress;
