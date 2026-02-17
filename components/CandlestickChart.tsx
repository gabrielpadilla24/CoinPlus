import { PERIOD_BUTTONS } from "@/constants";
import { useState } from "react";

const CandlestickChart = ({
  children,
  data,
  coinId,
  height = 360,
  initialPeriod = "daily",
}: CandlestickChartProps) => {
  const [loading, setLoading] = useState(false);
  const [period, setPeriod] = useState(initialPeriod);
  const handlePeriodChange = (newPeriod: Period) => {
    if (newPeriod === initialPeriod) return;
    //TODO UPDATE PERIOD
  };

  return (
    <div id="candlestick-chart">
      <div className="chart-header">
        <div className="flex-1">{children}</div>

        <div className="button-group">
          <span className="text-sm mx-2 font-medium text-purple-100/50">
            Period:
          </span>
          {PERIOD_BUTTONS.map(({ value, label }) => (
            <button
              key={value}
              className="config-button"
              onClick={() => {}}
              disabled={loading}
            >
              {label}
            </button>
          ))}
          <button
            key="1h"
            className="config-button"
            onClick={() => {}}
            disabled={loading}
          >
            1 hour
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandlestickChart;
