// Enhanced script.js with additional features

// Global variables
let financialData = [];
let filteredData = [];
let charts = {};
let isDarkMode = false;

// Load data when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadFinancialData();
    setupEventListeners();
    initializeAnimations();
});

// Setup event listeners
function setupEventListeners() {
    document.getElementById('applyFilters').addEventListener('click', applyFilters);
    document.getElementById('exportBtn').addEventListener('click', exportData);
    document.getElementById('darkModeToggle').addEventListener('change', toggleDarkMode);
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
    document.getElementById('refreshData').addEventListener('click', refreshData);
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'e':
                    e.preventDefault();
                    exportData();
                    break;
                case 'r':
                    e.preventDefault();
                    refreshData();
                    break;
                case 'd':
                    e.preventDefault();
                    toggleDarkMode();
                    break;
            }
        }
    });
}

// Initialize animations
function initializeAnimations() {
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Load financial data from S3
function loadFinancialData() {
    // Show loading indicator
    showLoading(true);
    
    // In a real implementation, this would fetch from your S3 bucket
    fetch('financial_data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            financialData = data;
            filteredData = [...financialData];
            updateDashboard();
            showLoading(false);
            showNotification('Data loaded successfully', 'success');
        })
        .catch(error => {
            console.error('Error loading financial data:', error);
            showLoading(false);
            showNotification('Error loading data. Using sample data.', 'warning');
            
            // If fetch fails, use sample data
            financialData = [
                {"Year": 2020, "Region": "North", "TotalPremium": 500000, "TotalClaims": 300000, "ClaimRatio": 0.6},
                {"Year": 2020, "Region": "South", "TotalPremium": 450000, "TotalClaims": 270000, "ClaimRatio": 0.6},
                {"Year": 2020, "Region": "East", "TotalPremium": 400000, "TotalClaims": 240000, "ClaimRatio": 0.6},
                {"Year": 2020, "Region": "West", "TotalPremium": 550000, "TotalClaims": 330000, "ClaimRatio": 0.6},
                {"Year": 2021, "Region": "North", "TotalPremium": 520000, "TotalClaims": 312000, "ClaimRatio": 0.6},
                {"Year": 2021, "Region": "South", "TotalPremium": 470000, "TotalClaims": 282000, "ClaimRatio": 0.6},
                {"Year": 2021, "Region": "East", "TotalPremium": 420000, "TotalClaims": 252000, "ClaimRatio": 0.6},
                {"Year": 2021, "Region": "West", "TotalPremium": 580000, "TotalClaims": 348000, "ClaimRatio": 0.6},
            ];
            filteredData = [...financialData];
            updateDashboard();
        });
}

// Show/hide loading indicator
function showLoading(show) {
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(element => {
        element.style.display = show ? 'inline-block' : 'none';
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} notification`;
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '1000';
    notification.style.minWidth = '300px';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s';
    
    // Add to document
    document.body.appendChild(notification);
    
    // Fade in
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Update dashboard with current data
function updateDashboard() {
    updateKPIs();
    updateDataTable();
    updateCharts();
    updateDataSummary();
}

// Update KPI cards
function updateKPIs() {
    const totalPremium = filteredData.reduce((sum, item) => sum + item.TotalPremium, 0);
    const totalClaims = filteredData.reduce((sum, item) => sum + item.TotalClaims, 0);
    const avgClaimRatio = filteredData.reduce((sum, item) => sum + item.ClaimRatio, 0) / filteredData.length;

    // Animate the numbers
    animateValue('totalPremium', 0, totalPremium, 1000, '$');
    animateValue('totalClaims', 0, totalClaims, 1000, '$');
    animateValue('avgClaimRatio', 0, avgClaimRatio * 100, 1000, '', '%');
}

// Animate numeric values
function animateValue(id, start, end, duration, prefix = '', suffix = '') {
    const element = document.getElementById(id);
    const range = end - start;
    const increment = range / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            element.textContent = prefix + end.toLocaleString() + suffix;
            clearInterval(timer);
        } else {
            element.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
        }
    }, 16);
}

// Update data table
function updateDataTable() {
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';

    filteredData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.Year}</td>
            <td>${item.Region}</td>
            <td>$${item.TotalPremium.toLocaleString()}</td>
            <td>$${item.TotalClaims.toLocaleString()}</td>
            <td>${(item.ClaimRatio * 100).toFixed(1)}%</td>
        `;
        tableBody.appendChild(row);
    });
}

// Update data summary
function updateDataSummary() {
    const totalRecords = filteredData.length;
    const uniqueYears = [...new Set(filteredData.map(item => item.Year))].length;
    const uniqueRegions = [...new Set(filteredData.map(item => item.Region))].length;
    
    document.getElementById('dataSummary').innerHTML = `
        Showing ${totalRecords} records for ${uniqueYears} year(s) and ${uniqueRegions} region(s)
    `;
}

// Update charts
function updateCharts() {
    updatePremiumChart();
    updateClaimsChart();
    updateClaimRatioChart();
    updatePremiumVsClaimsChart();
}

// Update premium chart
function updatePremiumChart() {
    const ctx = document.getElementById('premiumChart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (charts.premium) {
        charts.premium.destroy();
    }
    
    // Aggregate data by region
    const regionData = {};
    filteredData.forEach(item => {
        if (!regionData[item.Region]) {
            regionData[item.Region] = 0;
        }
        regionData[item.Region] += item.TotalPremium;
    });
    
    charts.premium = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(regionData),
            datasets: [{
                label: 'Total Premium',
                data: Object.values(regionData),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Premium: $' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// Update claims chart
function updateClaimsChart() {
    const ctx = document.getElementById('claimsChart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (charts.claims) {
        charts.claims.destroy();
    }
    
    // Aggregate data by region
    const regionData = {};
    filteredData.forEach(item => {
        if (!regionData[item.Region]) {
            regionData[item.Region] = 0;
        }
        regionData[item.Region] += item.TotalClaims;
    });
    
    charts.claims = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(regionData),
            datasets: [{
                data: Object.values(regionData),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                animateRotate: true,
                animateScale: true
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return `${context.label}: $${context.parsed.toLocaleString()} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Update claim ratio chart
function updateClaimRatioChart() {
    const ctx = document.getElementById('claimRatioChart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (charts.claimRatio) {
        charts.claimRatio.destroy();
    }
    
    // Aggregate data by year
    const yearData = {};
    filteredData.forEach(item => {
        if (!yearData[item.Year]) {
            yearData[item.Year] = [];
        }
        yearData[item.Year].push(item.ClaimRatio);
    });
    
    // Calculate average claim ratio by year
    const avgByYear = {};
    Object.keys(yearData).forEach(year => {
        const sum = yearData[year].reduce((a, b) => a + b, 0);
        avgByYear[year] = sum / yearData[year].length;
    });
    
    charts.claimRatio = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(avgByYear).sort(),
            datasets: [{
                label: 'Average Claim Ratio',
                data: Object.keys(avgByYear).sort().map(year => avgByYear[year]),
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1,
                    ticks: {
                        callback: function(value) {
                            return (value * 100).toFixed(0) + '%';
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Claim Ratio: ${(context.parsed.y * 100).toFixed(1)}%`;
                        }
                    }
                }
            }
        }
    });
}

// Update premium vs claims chart
function updatePremiumVsClaimsChart() {
    const ctx = document.getElementById('premiumVsClaimsChart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (charts.premiumVsClaims) {
        charts.premiumVsClaims.destroy();
    }
    
    // Prepare data for scatter plot
    const scatterData = filteredData.map(item => ({
        x: item.TotalPremium,
        y: item.TotalClaims
    }));
    
    charts.premiumVsClaims = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Premium vs Claims',
                data: scatterData,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1500
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Total Premium'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Total Claims'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Premium: $${context.parsed.x.toLocaleString()}, Claims: $${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            }
        }
    });
}

// Apply filters
function applyFilters() {
    const yearFilter = document.getElementById('yearFilter').value;
    const regionFilter = document.getElementById('regionFilter').value;
    
    filteredData = financialData.filter(item => {
        const yearMatch = yearFilter === 'all' || item.Year.toString() === yearFilter;
        const regionMatch = regionFilter === 'all' || item.Region === regionFilter;
        return yearMatch && regionMatch;
    });
    
    updateDashboard();
    showNotification('Filters applied successfully', 'success');
}

// Reset filters
function resetFilters() {
    document.getElementById('yearFilter').value = 'all';
    document.getElementById('regionFilter').value = 'all';
    filteredData = [...financialData];
    updateDashboard();
    showNotification('Filters reset', 'info');
}

// Refresh data
function refreshData() {
    loadFinancialData();
}

// Export data
function exportData() {
    // Create CSV content
    const headers = ['Year', 'Region', 'TotalPremium', 'TotalClaims', 'ClaimRatio'];
    const csvContent = [
        headers.join(','),
        ...filteredData.map(item => 
            `${item.Year},${item.Region},${item.TotalPremium},${item.TotalClaims},${item.ClaimRatio}`
        )
    ].join('\n');
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'financial_data.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    showNotification('Data exported successfully', 'success');
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    isDarkMode = document.body.classList.contains('dark-mode');
    
    // Update charts for dark mode
    const textColor = isDarkMode ? '#ffffff' : '#666666';
    const gridColor = isDarkMode ? '#333333' : '#e0e0e0';
    
    Object.values(charts).forEach(chart => {
        if (chart) {
            chart.options.scales.x.ticks.color = textColor;
            chart.options.scales.y.ticks.color = textColor;
            chart.options.scales.x.grid.color = gridColor;
            chart.options.scales.y.grid.color = gridColor;
            chart.options.plugins.legend.labels.color = textColor;
            chart.update();
        }
    });
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
    
    showNotification(`Dark mode ${isDarkMode ? 'enabled' : 'disabled'}`, 'info');
}

// Load dark mode preference
document.addEventListener('DOMContentLoaded', function() {
    const darkModePreference = localStorage.getItem('darkMode') === 'true';
    if (darkModePreference) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
        isDarkMode = true;
    }
});

// Add keyboard shortcuts info
document.addEventListener('DOMContentLoaded', function() {
    const shortcutsInfo = document.createElement('div');
    shortcutsInfo.className = 'modal fade';
    shortcutsInfo.id = 'shortcutsModal';
    shortcutsInfo.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Keyboard Shortcuts</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="table">
                        <tr><td><kbd>Ctrl+E</kbd></td><td>Export Data</td></tr>
                        <tr><td><kbd>Ctrl+R</kbd></td><td>Refresh Data</td></tr>
                        <tr><td><kbd>Ctrl+D</kbd></td><td>Toggle Dark Mode</td></tr>
                    </table>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(shortcutsInfo);
    
    // Add help button
    const helpBtn = document.createElement('button');
    helpBtn.className = 'btn btn-outline-secondary btn-sm position-fixed';
    helpBtn.style.bottom = '20px';
    helpBtn.style.right = '20px';
    helpBtn.innerHTML = '<i class="bi bi-question-circle"></i>';
    helpBtn.setAttribute('data-bs-toggle', 'modal');
    helpBtn.setAttribute('data-bs-target', '#shortcutsModal');
    document.body.appendChild(helpBtn);
});