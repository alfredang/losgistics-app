// ========================================
// LogiFlow — Dashboard JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {

  // ----------------------------------------
  // Chart.js Global Defaults (Dark Theme)
  // ----------------------------------------
  Chart.defaults.color = '#94a3b8';
  Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.05)';
  Chart.defaults.font.family = "'Inter', sans-serif";

  // ----------------------------------------
  // 1. Shipment Volume — Line Chart
  // ----------------------------------------
  const shipmentCtx = document.getElementById('shipmentChart');
  if (shipmentCtx) {
    new Chart(shipmentCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Shipments',
          data: [1200, 1900, 1700, 2100, 2400, 2200, 2800, 3100, 2900, 3400, 3200, 3600],
          borderColor: '#06b6d4',
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) return 'rgba(6, 182, 212, 0.1)';
            const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
            gradient.addColorStop(0, 'rgba(6, 182, 212, 0.2)');
            gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
            return gradient;
          },
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#06b6d4',
          pointBorderWidth: 0,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1a2236',
            titleColor: '#fff',
            bodyColor: '#94a3b8',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#64748b' }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#64748b' }
          }
        }
      }
    });
  }

  // ----------------------------------------
  // 2. Delivery Status — Doughnut Chart
  // ----------------------------------------
  const statusCtx = document.getElementById('statusChart');
  if (statusCtx) {
    new Chart(statusCtx, {
      type: 'doughnut',
      data: {
        labels: ['Delivered', 'In Transit', 'Pending', 'Delayed'],
        datasets: [{
          data: [540, 280, 120, 60],
          backgroundColor: ['#4ade80', '#22d3ee', '#facc15', '#f87171'],
          borderWidth: 0,
          spacing: 4,
          borderRadius: 4,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '72%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#94a3b8',
              padding: 16,
              usePointStyle: true,
              pointStyleWidth: 8,
              font: { size: 12 }
            }
          },
          tooltip: {
            backgroundColor: '#1a2236',
            titleColor: '#fff',
            bodyColor: '#94a3b8',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
          }
        }
      }
    });
  }

  // ----------------------------------------
  // 3. Revenue by Region — Bar Chart
  // ----------------------------------------
  const revenueCtx = document.getElementById('revenueChart');
  if (revenueCtx) {
    new Chart(revenueCtx, {
      type: 'bar',
      data: {
        labels: ['North America', 'Europe', 'Asia Pacific', 'Middle East', 'Africa', 'Latin America'],
        datasets: [{
          label: 'Revenue ($M)',
          data: [4.2, 3.8, 5.1, 2.4, 1.1, 1.8],
          backgroundColor: (context) => {
            const colors = [
              'rgba(6, 182, 212, 0.7)',
              'rgba(6, 182, 212, 0.6)',
              'rgba(6, 182, 212, 0.8)',
              'rgba(6, 182, 212, 0.5)',
              'rgba(6, 182, 212, 0.35)',
              'rgba(6, 182, 212, 0.45)',
            ];
            return colors[context.dataIndex] || 'rgba(6, 182, 212, 0.6)';
          },
          borderRadius: 6,
          barThickness: 40,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1a2236',
            titleColor: '#fff',
            bodyColor: '#94a3b8',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              label: function(context) {
                return '$' + context.parsed.y + 'M';
              }
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#64748b', font: { size: 11 } }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: {
              color: '#64748b',
              callback: function(value) { return '$' + value + 'M'; }
            }
          }
        }
      }
    });
  }

  // ----------------------------------------
  // 4. Sidebar Toggle (Desktop)
  // ----------------------------------------
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }

});

// ----------------------------------------
// 5. Mobile Sidebar Toggle (Global)
// ----------------------------------------
function toggleMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  if (sidebar && overlay) {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('active');
  }
}
