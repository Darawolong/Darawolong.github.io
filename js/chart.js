function updateChartType() {
  var chartType = document.getElementById("chartType").value;

  if (chartType === "MonthLineChart") {
    document.getElementById("MonthLineChart").style.display = "block";
    document.getElementById("yearlyDataLineChart").style.display = "none";
    document.getElementById("dusunLineChart").style.display = "none";
  } else if (chartType === "yearlyDataLineChart") {
    document.getElementById("MonthLineChart").style.display = "none";
    document.getElementById("yearlyDataLineChart").style.display = "block";
    document.getElementById("dusunLineChart").style.display = "none";
  } else if (chartType === "dusunLineChart") {
    document.getElementById("MonthLineChart").style.display = "none";
    document.getElementById("yearlyDataLineChart").style.display = "none";
    document.getElementById("dusunLineChart").style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("MonthLineChart").getContext("2d");
  var MonthLineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["2019", "2020", "2021", "2022", "2023"],
      datasets: [
        {
          label: "Penduduk",
          borderColor: "#FF6384",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          data: [5738, 5733, 6268, 6977, 7274],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "Population Trends by Age Category",
      },
      legend: {
        position: "bottom",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
});

// gender
document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("yearlyDataLineChart").getContext("2d");
  var yearlyDataLineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["2019", "2020", "2021", "2022", "2023"],
      datasets: [
        {
          label: "Laki-laki",
          borderColor: "#FF6384",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          data: [2954, 2949, 3159, 3259, 3682],
        },
        {
          label: "Perempuan",
          borderColor: "#36A2EB",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          data: [2784, 2805, 3109, 3448, 3592],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "Population Trends by Age Category (Yearly)",
      },
      legend: {
        position: "bottom",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
});

// perdusun
document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("dusunLineChart").getContext("2d");
  var dusunLineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["2019", "2020", "2021", "2022", "2023"],
      datasets: [
        {
          label: "Krajan",
          borderColor: "#FF6384",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          data: [1468, 1458, 1513, 1512, 1756],
        },
        {
          label: "Karang Tengah",
          borderColor: "#36A2EB",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          data: [1338, 1329, 1478, 1472, 1711],
        },
        {
          label: "Rawa Wiru",
          borderColor: "#2ce88d",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          data: [1478, 1478, 1746, 1743, 2024],
        },
        {
          label: "Kali Jeruk",
          borderColor: "#d3f514",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          data: [854, 854, 858, 860, 998],
        },
        {
          label: "Pasir Ela",
          borderColor: "#3307f5",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          data: [616, 623, 673, 675, 784],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "Population Trends by Age Category (Yearly)",
      },
      legend: {
        position: "bottom",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
});
