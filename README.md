Financial KPI Dashboard

A modern, interactive dashboard for visualizing key financial metrics including Total Premium, Total Claims, and Claim Ratio across different regions and years.

🚀 Features

Interactive Charts: Visualize financial data with bar charts, pie charts, line charts, and scatter plots

Dynamic Filtering: Filter data by year and region

Dark Mode: Toggle between light and dark themes

Data Export: Export filtered data as CSV

Responsive Design: Works seamlessly on desktop and mobile devices

Real-time Updates: Animated charts and smooth transitions

Data Table View: View raw data in tabular format

🛠️ Technology Stack

Frontend: HTML5, CSS3, JavaScript (ES6+)

Charts: Chart.js

Styling: Bootstrap 5

Data Processing: Python with Pandas

Hosting: GitHub Pages

📊 Project Structure

financial-dashboard/

├── index.html # Main dashboard page

├── style.css # Styling and animations

├── script.js # Interactive functionality

├── financial_data.json # Sample financial data

├── financial_data.csv # Financial data in CSV format

├── use_case2_employees.csv # Employee data

├── use_case2_departments.csv # Department data

├── csv_joiner.py # Python script for joining CSV files

├── financial_data_processor.py # Python script for data processing

├── use_case1_image.png # Project image

└── README.md # This file



## 🌐 Live Demo

View the live dashboard: [https://yourusername.github.io/financial-dashboard/](https://yourusername.github.io/financial-dashboard/)

## 📈 Data Visualization

The dashboard displays:

- Total Premium by region
- Total Claims distribution
- Claim Ratio trends over time
- Premium vs Claims correlation
- Regional performance comparison

## 🎯 Key Metrics

- Total Premium Collected
- Total Claims Paid
- Average Claim Ratio
- Year-over-Year Growth
- Regional Performance

## 🔧 Data Processing

### Python Scripts Included:

**financial_data_processor.py**:
- Reads financial data from CSV/JSON
- Calculates summary statistics
- Generates regional and yearly summaries
- Saves processed data back to S3 or local files

**csv_joiner.py**:
- Demonstrates different types of SQL joins
- Inner Join: Matching records from both tables
- Left Join: All records from left table, matching from right
- Right Join: All records from right table, matching from left

## 🚀 How to Run Locally

1. Clone the repository:
   git clone https://github.com/yourusername/financial-dashboard.git
   
2. Navigate to the project directory:
   cd financial-dashboard

3. Open index.html in your web browser
   For data processing:
   python financial_data_processor.py
   python csv_joiner.py
   
📱 Features in Detail

Interactive Filters
Filter by year (2020, 2021)
Filter by region (North, South, East, West)
Real-time chart updates

Chart Types
Bar Chart: Premium by Region
Pie Chart: Claims Distribution
Line Chart: Claim Ratio Trend
Scatter Plot: Premium vs Claims

User Experience
Smooth animations and transitions
Loading indicators
Keyboard shortcuts (Ctrl+E: Export, Ctrl+R: Refresh, Ctrl+D: Dark Mode)
Responsive design for all devices

🔧 Technical Implementation
Frontend
Pure HTML/CSS/JavaScript (no frameworks required)
Chart.js for data visualization
Bootstrap for responsive layout
LocalStorage for user preferences

Data Processing
Pandas for data manipulation
CSV and JSON data formats
S3 integration for cloud storage

Hosting
GitHub Pages for static site hosting
CDN distribution for fast loading
SSL certificate included

🎨 Design Principles
Clean and modern interface
Consistent color scheme
Intuitive navigation
Accessibility focused
Mobile-first approach

📊 Sample Data
The dashboard uses sample financial data representing:
Insurance premiums collected by region
Claims paid out by region
Claim ratios calculated automatically
Multi-year data for trend analysis

🔮 Future Enhancements
 Add more chart types
 Real-time data updates
 User authentication
 Custom date range selection
 Data export in multiple formats
 API integration for live data
 
🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

📄 License
This project is open source and available under the MIT License.

👥 Team
Developed by: Team 05
Project Guide: Mr. U. Sheshadri
MassMutual Coordinators: Dr. Vasantha

🙏 Acknowledgments
MassMutual for the project opportunity
Chart.js for the visualization library
Bootstrap for the UI framework
AWS for cloud services knowledge

