document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("skillsChart");
  
    if (!ctx) return; // safety check
  
    new Chart(ctx, {
      type: "radar",
      data: {
        labels: [
          "Programmieren",
          "Datenbanken",
          "Prozessmodellierung",
          "Mockups & Prototyping",
          "Datenanalyse"
        ],
        datasets: [{
          label: "Skill Level (0–10)",
          data: [5, 4, 5, 8, 6],
          backgroundColor: "rgba(153, 93, 143, 0.2)",  
          borderColor: "rgba(44, 28, 41, 1)",        
          borderWidth: 2,
          pointBackgroundColor: "rgba(29, 88, 39, 1)"
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 10,
            ticks: {
              stepSize: 2
            }
          }
        },
        plugins: {
          legend: {
            position: "bottom"
          }
        }
      }
    });
  });
  