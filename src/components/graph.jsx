// "use client";

// import { useMemo } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );

// // Soft stroke shadow (optional subtle glow)
// const SoftShadow = {
//   id: "softShadow",
//   beforeDatasetsDraw(chart, _args, pluginOpts) {
//     const { ctx } = chart;
//     ctx.save();
//     ctx.shadowColor = pluginOpts?.color ?? "rgba(218,87,71,0.45)";
//     ctx.shadowBlur = pluginOpts?.blur ?? 6;
//     ctx.shadowOffsetY = 0;
//     ctx.lineJoin = "round";
//     ctx.lineCap = "round";
//   },
//   afterDatasetsDraw(chart) {
//     chart.ctx.restore();
//   },
// };

// ChartJS.register(SoftShadow);

// // Helper: convert hex -> rgba string
// const hexToRgba = (hex, alpha = 1) => {
//   let c = hex.replace("#", "");
//   if (c.length === 3) {
//     c = c
//       .split("")
//       .map((ch) => ch + ch)
//       .join("");
//   }
//   const num = parseInt(c, 16);
//   const r = (num >> 16) & 255;
//   const g = (num >> 8) & 255;
//   const b = num & 255;
//   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// };

// // Helper: get line color based on title + value
// const getColorByScore = (type, value, fallback = "#DA5747") => {
//   const v = Number(value) || 0;

//   switch (type) {
//     case "Absorptive Metabolism Score":
//       if (v > 80) return "#3FAF58";
//       if (v >= 50) return "#FFC412";
//       return "#DA5747";

//     case "Fermentative Metabolism Score":
//       if (v < 30) return "#3FAF58";
//       if (v <= 35) return "#FFC412";
//       return "#DA5747";

//     case "Fat Metabolism Score":
//       if (v > 80) return "#3FAF58";
//       if (v >= 70) return "#FFC412";
//       return "#DA5747";

//     case "Glucose Metabolism Score":
//       if (v < 40) return "#3FAF58";
//       if (v <= 60) return "#FFC412";
//       return "#DA5747";

//     case "Hepatic Stress Score":
//       if (v < 30) return "#3FAF58";
//       if (v <= 60) return "#FFC412";
//       return "#DA5747";

//     case "Detoxification Metabolism Score":
//       if (v > 80) return "#3FAF58";
//       if (v >= 50) return "#FFC412";
//       return "#DA5747";

//     default:
//       return fallback;
//   }
// };

// export default function Graph({
//   title = "",
//   labels = [],
//   values = [],
//   color = "#DA5747", // fallback if title not matched
//   showGradient
// }) {

//   // 🔹 THIS decides "second graph" behaviour
//   const isSecondScore =
//     title === "Fermentative Metabolism Score" ||
//     title === "Glucose Metabolism Score" ||
//     title === "Detoxification Metabolism Score";


//      const shouldShowGradient =
//     typeof showGradient === "boolean" ? showGradient : !isSecondScore;


//   // latest value decides the color bucket
//   const lastRawValue = values?.length ? values[values.length - 1] : 0;
//   const lastNum =
//     typeof lastRawValue === "string" ? Number(lastRawValue) : lastRawValue;
//   const chosenColor = getColorByScore(title, lastNum, color);

//   const data = useMemo(
//     () => ({
//       labels,
//       datasets: [
//         {
//           label: "Score",
//           data: values.map((v) => {
//             const numValue = typeof v === "string" ? Number(v) : v;
//             return isNaN(numValue) ? 0 : numValue;
//           }),
//           borderColor: chosenColor,
//           borderWidth: 3,
//           pointRadius: 3,                // 👈 visible points on all data
//           pointHoverRadius: 5,           // bigger on hover
//           pointHitRadius: 8,             // easier to hover
//           pointBackgroundColor: chosenColor,
//           pointBorderColor: "#FFFFFF",
//           pointBorderWidth: 1.5,
//           tension: 0.45,                 // smooth curve
//           fill: true,

//           backgroundColor: (ctx) => {
//             // ❌ Remove gradient for second graph
//             // if (isSecondScore) {
//             //   return "rgba(0,0,0,0)"; // fully transparent
//             // }

//                  if (!shouldShowGradient) return "rgba(0,0,0,0)";

//             const { chartArea, ctx: c } = ctx.chart;
//             if (!chartArea) return hexToRgba(chosenColor, 0.3);

//             const g = c.createLinearGradient(
//               0,
//               chartArea.top,
//               0,
//               chartArea.bottom
//             );

//             g.addColorStop(0, hexToRgba(chosenColor, 0.3));
//             g.addColorStop(1, hexToRgba(chosenColor, 0));

//             return g;
//           },

//         },
//       ],
//     }),
//     [labels, values, chosenColor, shouldShowGradient]
//   );

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     animation: false,
//     animations: {
//       colors: false,
//       x: { duration: 0 },
//       y: { duration: 0 },
//       tension: { duration: 0 },
//     },
//     transitions: {
//       active: { animation: { duration: 0 } },
//     },
//     plugins: {
//       legend: { display: false },
//       title: { display: false },
//       tooltip: {
//         enabled: true,
//         intersect: false,
//         mode: "index",
//         callbacks: {
//           title(items) {
//             if (!items?.length) return "";
//             const idx = items[0].dataIndex;
//             return labels[idx] || "";
//           },
//           label(context) {
//             const value = context.parsed.y ?? "";
//             return `Score: ${value}`;
//           },
//         },
//       },
//       softShadow: { color: "rgba(218,87,71,0.45)", blur: 0 },
//     },
//     elements: {
//       line: {
//         borderJoinStyle: "round",
//         borderCapStyle: "round",
//       },
//     },
//     layout: { padding: { top: 8 } },
//     scales: {
//       y: {
//         min: 0,
//         max: 100,
//         // 🔥 KEY LINE: only second graph shows ticks 0,20,...100 from TOP to BOTTOM
//         reverse: isSecondScore, // true => top=0, bottom=100
//         ticks: {
//           stepSize: 20,
//           color: "#A1A1A1",
//           font: { size: 10 },
//         },
//         grid: { display: false },
//         border: { display: true, color: "#D9D9D9" },
//       },
//       x: {
//         ticks: {
//           color: "#A1A1A1",
//           font: { size: 10 },
//           callback(value) {
//             // in Chart.js v4, `this` is the scale
//             const label = this.getLabelForValue(value);
//             const [d, m] = String(label).split(" ");
//             return [d ?? "", m ?? ""];
//           },
//         },
//         grid: { display: true },
//         border: { display: true, color: "#D9D9D9" },
//       },
//     },
//   };

//   return (
//     <div className="w-full">
//       <Line data={data} options={options} />
//     </div>
//   );
// }











"use client";

import { useMemo, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// Soft stroke shadow (optional subtle glow)
const SoftShadow = {
  id: "softShadow",
  beforeDatasetsDraw(chart, _args, pluginOpts) {
    const { ctx } = chart;
    ctx.save();
    ctx.shadowColor = pluginOpts?.color ?? "rgba(218,87,71,0.45)";
    ctx.shadowBlur = pluginOpts?.blur ?? 6;
    ctx.shadowOffsetY = 0;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
  },
  afterDatasetsDraw(chart) {
    chart.ctx.restore();
  },
};

ChartJS.register(SoftShadow);

const hexToRgba = (hex, alpha = 1) => {
  let c = hex.replace("#", "");
  if (c.length === 3) {
    c = c
      .split("")
      .map((ch) => ch + ch)
      .join("");
  }
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// const getColorByScore = (type, value, fallback = "#DA5747") => {
//   const v = Number(value) || 0;

//   switch (type) {
//     case "Absorptive Metabolism Score":
//       if (v > 80) return "#3FAF58";
//       if (v >= 50) return "#FFC412";
//       return "#DA5747";

//     case "Fermentative Metabolism Score":
//       if (v < 30) return "#3FAF58";
//       if (v <= 35) return "#FFC412";
//       return "#DA5747";

//     case "Fat Metabolism Score":
//       if (v > 80) return "#3FAF58";
//       if (v >= 70) return "#FFC412";
//       return "#DA5747";

//     case "Glucose Metabolism Score":
//       if (v < 40) return "#3FAF58";
//       if (v <= 60) return "#FFC412";
//       return "#DA5747";

//     case "Hepatic Stress Score":
//       if (v < 30) return "#3FAF58";
//       if (v <= 60) return "#FFC412";
//       return "#DA5747";

//     case "Detoxification Metabolism Score":
//       if (v > 80) return "#3FAF58";
//       if (v >= 50) return "#FFC412";
//       return "#DA5747";

//     default:
//       return fallback;
//   }
// };


const getColorByScore = (title, value, fallback = "#E48326") => {
  const v = Number(value) || 0;

  const t = String(title || "").trim().toLowerCase();

  // Nutrient Utilization Trend (absorptive): red 0-50, yellow 50-80, green 80-100
  if (t === "nutrient utilization trend") {
    if (v > 80) return "#3FAF58";
    if (v >= 50) return "#FFC412";
    return "#E48326";
  }

  // Digestive Activity Trend (fermentative): green 0-20, yellow 20-30, red 30-100
  if (t === "digestive activity trend") {
    if (v < 20) return "#3FAF58";
    if (v <= 30) return "#FFC412";
    return "#E48326";
  }

  // Fuel Utilization Trend (fat): red 0-70, yellow 70-80, green 80-100
  if (t === "fuel utilization trend") {
    if (v > 80) return "#3FAF58";
    if (v >= 70) return "#FFC412";
    return "#E48326";
  }

  // Energy Source Trend (glucose): green 0-20, yellow 20-30, red 30-100
  if (t === "energy source trend") {
    if (v < 20) return "#3FAF58";
    if (v <= 30) return "#FFC412";
    return "#E48326";
  }

  // Recovery Activity Trend (detoxification): red 0-50, yellow 50-80, green 80-100
  if (t === "recovery activity trend") {
    if (v > 80) return "#3FAF58";
    if (v >= 50) return "#FFC412";
    return "#E48326";
  }

  // Metabolic Load Trend (hepatic stress): green 0-20, yellow 20-30, red 30-100
  if (t === "metabolic load trend") {
    if (v < 20) return "#3FAF58";
    if (v <= 30) return "#FFC412";
    return "#E48326";
  }

  return fallback;
};




export default function Graph({
  title = "",
  labels = [],
  values = [],
  color = "#E48326",
  showGradient,
}) {
  // const isSecondScore =
  //   title === "Fermentative Metabolism Score" ||
  //   title === "Glucose Metabolism Score" ||
  //   title === "Detoxification Metabolism Score";

  const isSecondScore =
  title === "Digestive Activity Trend" ||
  title === "Energy Source Trend" ||
  title === "Metabolic Load Trend";


  const shouldShowGradient =
    typeof showGradient === "boolean" ? showGradient : !isSecondScore;

  const lastRawValue = values?.length ? values[values.length - 1] : 0;
  const lastNum =
    typeof lastRawValue === "string" ? Number(lastRawValue) : lastRawValue;

  const chosenColor = getColorByScore(title, lastNum, color);

  // ✅ convert values once (stable array for chart)
  const numericValues = useMemo(() => {
    return (values || []).map((v) => {
      const n = typeof v === "string" ? Number(v) : v;
      return Number.isFinite(n) ? n : 0;
    });
  }, [values]);

  // ✅ Keep a gradient cache so it doesn't recreate every render
  const gradientRef = useRef(null);
  const gradientKeyRef = useRef("");

  const data = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          label: "Score",
          data: numericValues,
          borderColor: chosenColor,
          borderWidth: 3,
          pointRadius: 3,
          pointHoverRadius: 5,
          pointHitRadius: 8,
          pointBackgroundColor: chosenColor,
          pointBorderColor: "#FFFFFF",
          pointBorderWidth: 1.5,
          tension: 0.45,
          fill: true,

          // ✅ IMPORTANT: don't use function here (causes frequent redraw/flicker)
          // We'll inject gradient via chartArea-aware plugin below
          backgroundColor: shouldShowGradient
            ? hexToRgba(chosenColor, 0.15) // temporary fallback until chart area is known
            : "rgba(0,0,0,0)",
        },
      ],
    };
  }, [labels, numericValues, chosenColor, shouldShowGradient]);

  // ✅ Plugin to set gradient ONLY when chartArea available, and cache it
  const gradientPlugin = useMemo(() => {
    return {
      id: "stableGradientFill",
      beforeDatasetsDraw(chart) {
        if (!shouldShowGradient) return;

        const { ctx, chartArea } = chart;
        if (!chartArea) return;

        const key = `${chartArea.top}-${chartArea.bottom}-${chosenColor}`;
        if (gradientKeyRef.current !== key) {
          const g = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          g.addColorStop(0, hexToRgba(chosenColor, 0.3));
          g.addColorStop(1, hexToRgba(chosenColor, 0));
          gradientRef.current = g;
          gradientKeyRef.current = key;
        }

        // set it on dataset (no re-render required)
        const ds = chart.data.datasets?.[0];
        if (ds) ds.backgroundColor = gradientRef.current;
      },
    };
  }, [chosenColor, shouldShowGradient]);

  // ✅ Memoize options so it doesn't become "new object" each render
  const options = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,

      // if you want ZERO animation
      animation: false,
      animations: {
        colors: false,
        x: { duration: 0 },
        y: { duration: 0 },
        tension: { duration: 0 },
      },
      transitions: {
        active: { animation: { duration: 0 } },
      },

      plugins: {
        legend: { display: false },
        title: { display: false },
        tooltip: {
          enabled: true,
          intersect: false,
          mode: "index",
          callbacks: {
            title(items) {
              if (!items?.length) return "";
              const idx = items[0].dataIndex;
              return labels[idx] || "";
            },
            label(context) {
              const value = context.parsed.y ?? "";
              return `Score: ${value}`;
            },
          },
        },
        softShadow: { color: "rgba(218,87,71,0.45)", blur: 0 },
      },

      elements: {
        line: {
          borderJoinStyle: "round",
          borderCapStyle: "round",
        },
      },

      layout: { padding: { top: 8 } },

      scales: {
        y: {
          min: 0,
          max: 100,
          reverse: isSecondScore,
          ticks: {
            stepSize: 20,
            color: "#A1A1A1",
            font: { size: 10 },
          },
          grid: { display: false },
          border: { display: true, color: "#D9D9D9" },
        },
        x: {
          ticks: {
            color: "#A1A1A1",
            font: { size: 10 },
            callback(value) {
              const label = this.getLabelForValue(value);
              const [d, m] = String(label).split(" ");
              return [d ?? "", m ?? ""];
            },
          },
          grid: { display: true },
          border: { display: true, color: "#D9D9D9" },
        },
      },
    };
  }, [labels, isSecondScore]);

  return (
    <div className="w-full h-full">
      <Line data={data} options={options} plugins={[gradientPlugin]} />
    </div>
  );
}
