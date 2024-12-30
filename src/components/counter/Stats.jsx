import PropTypes from "prop-types";

const Stats = ({ TotalCount }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <h1 className="">Total Counts: {TotalCount}</h1>
    </div>
  );
};

Stats.propTypes = {
  TotalCount: PropTypes.number.isRequired,
};

export default Stats;
