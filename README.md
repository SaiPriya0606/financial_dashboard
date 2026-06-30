# 📊 Financial KPI Dashboard

A modern, responsive, and interactive **Financial KPI Dashboard** developed using **HTML5, CSS3, JavaScript, Python, Pandas, Bootstrap, Chart.js, and AWS S3 (Optional)**.

The project demonstrates how financial insurance data can be processed using Python and visualized through an interactive web dashboard. It also includes a separate use case demonstrating SQL-style CSV join operations using the Pandas library.

The application provides financial insights by displaying **Total Premium**, **Total Claims**, and **Average Claim Ratio** through KPI cards, interactive charts, filtering options, and a responsive data table.

The Python modules support both **AWS S3** (when configured) and **local file execution**, making the project easy to run in different environments.

---

# 🚀 Project Highlights

- 📊 Interactive Financial KPI Dashboard
- 📈 Dynamic KPI Cards
- 📉 Chart.js Visualizations
- 🔍 Filter Financial Data by Year and Region
- 📋 Responsive Financial Data Table
- 🌙 Dark Mode Support
- 📥 Export Dashboard Data
- 🔄 Refresh Dashboard Data
- ☁️ Optional AWS S3 Integration
- 🐍 Financial Data Processing using Pandas
- 🔗 SQL-style CSV Join Operations
- 📱 Fully Responsive User Interface

---

# 🛠️ Technology Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5
- Bootstrap Icons
- Chart.js

## Backend Processing

- Python
- Pandas
- JSON
- Boto3

## Cloud

- Amazon S3 (Optional)

## Version Control

- Git
- GitHub

---

# 📂 Project Structure

```text
financial_dashboard/
│
├── index.html
├── style.css
├── script.js
│
├── financial_data.csv
├── financial_data.json
├── financial_data_processor.py
│
├── csv_joiner.py
├── use_case2_departments.csv
├── use_case2_employees.csv
│
├── use_case1_image.png
├── README.md
```

---

# 🎯 Project Objectives

The main objectives of this project are:

- Build an interactive financial analytics dashboard.
- Process financial datasets using Python and Pandas.
- Visualize insurance KPIs through charts.
- Demonstrate data filtering and dashboard interaction.
- Perform SQL-style CSV join operations using Pandas.
- Support both AWS S3 (optional) and local file processing.
- Develop a responsive and user-friendly web interface.
---

# 🌐 Dashboard Overview

The Financial KPI Dashboard provides an intuitive interface for analyzing insurance financial data. Users can view key financial indicators, visualize trends, filter records, and explore the dataset through an interactive dashboard.

The project is divided into **two use cases**:

## ✅ Use Case 1 – Financial KPI Dashboard

This use case focuses on processing financial insurance data and presenting it through an interactive web dashboard.

### Key Functionalities

- Display Total Premium
- Display Total Claims
- Display Average Claim Ratio
- Filter data by Year
- Filter data by Region
- View interactive charts
- Export displayed data
- Refresh dashboard
- Switch between Light and Dark Mode

---

## ✅ Use Case 2 – CSV Join Operations

This module demonstrates SQL-style join operations using the Pandas library.

The program loads employee and department datasets and performs:

- Inner Join
- Left Join
- Right Join

If AWS S3 is configured, the files are loaded from S3. Otherwise, the program automatically switches to local CSV files.

---

# 🏗️ System Workflow

```text
Financial Dataset (CSV)
          │
          ▼
financial_data_processor.py
          │
          ▼
Processed Financial Data
          │
          ▼
JavaScript Dashboard
          │
          ▼
 ┌───────────────┬───────────────┬───────────────┐
 │               │               │
 ▼               ▼               ▼
KPI Cards     Data Table     Chart.js Graphs
          │
          ▼
Interactive Financial Dashboard
```

---

# 🏛️ System Architecture

```text
                     financial_data.csv
                              │
                              ▼
                 financial_data_processor.py
                              │
                 Reads CSV / Optional AWS S3
                              │
                              ▼
                   Processed Financial Data
                              │
                              ▼
                        script.js
                              │
        ┌───────────────┬───────────────┬───────────────┐
        ▼               ▼               ▼
   KPI Cards        Charts         Data Table
                              │
                              ▼
                  index.html + style.css
                              │
                              ▼
                Interactive Financial Dashboard
```

---

# 📊 Dashboard Components

## 1. KPI Cards

The dashboard displays three important financial indicators:

- Total Premium
- Total Claims
- Average Claim Ratio

These KPI cards update automatically whenever filters are applied.

---

## 2. Interactive Filters

Users can filter dashboard data using:

- Year
- Region

The **Reset** button restores the complete dataset.

---

## 3. Interactive Charts

The dashboard contains four Chart.js visualizations.

### Premium by Region

Displays total premium collected for each region.

### Claims by Region

Displays total insurance claims across all regions.

### Claim Ratio Trend

Shows the average claim ratio across financial years.

### Premium vs Claims

Compares premium collected with claims paid.

---

## 4. Financial Data Table

The dashboard includes a responsive table containing:

- Year
- Region
- Total Premium
- Total Claims
- Claim Ratio

The table updates automatically based on selected filters.

---

# 🐍 Python Modules

## financial_data_processor.py

This module performs financial data processing.

### Responsibilities

- Load financial dataset
- Read data from AWS S3 (when configured)
- Automatically use local CSV if S3 is unavailable
- Display dataset information
- Generate summary statistics
- Calculate region-wise financial summary
- Calculate year-wise financial summary
- Export processed data as JSON

---

## csv_joiner.py

This module demonstrates SQL-style join operations using Pandas.

### Supported Join Types

- Inner Join
- Left Join
- Right Join

The program first attempts to load CSV files from AWS S3. If S3 is unavailable, it automatically reads local CSV files. If neither source is available, sample data is generated for demonstration purposes.

---

# 📈 Financial Metrics

The dashboard calculates and displays:

- Total Premium
- Total Claims
- Average Claim Ratio
- Regional Premium Analysis
- Regional Claims Analysis
- Year-wise Financial Summary

These metrics help users understand overall financial performance and compare results across different regions and years.
---

# ☁️ AWS Integration

This project includes **optional AWS S3 support** through the Boto3 SDK.

### Workflow

1. The Python scripts first attempt to read input files from an AWS S3 bucket.
2. If AWS credentials or bucket configuration are unavailable, the scripts automatically switch to local CSV files.
3. Processed output can also be uploaded to S3 when properly configured.
4. This fallback mechanism allows the project to run successfully in both cloud and local environments.

> **Note:** Before using AWS S3, replace the placeholder bucket name (`your-bucket-name`) in the Python scripts with your actual S3 bucket name and configure AWS credentials on your system.

---

# 🚀 Installation Guide

## Step 1: Clone the Repository

```bash
git clone https://github.com/SaiPriya0606/financial_dashboard.git
```

---

## Step 2: Open the Project Folder

```bash
cd financial_dashboard
```

---

## Step 3: Install Required Python Libraries

```bash
pip install pandas boto3
```

---

## Step 4: Run Financial Data Processing

```bash
python financial_data_processor.py
```

This script reads the financial dataset, performs analysis, and generates processed output.

---

## Step 5: Run CSV Join Demonstration

```bash
python csv_joiner.py
```

This script demonstrates SQL-style join operations using Pandas.

---

## Step 6: Launch the Dashboard

Open the following file in your preferred web browser:

```text
index.html
```

No web server is required because the dashboard uses local data.

---

# 📊 Sample Dataset

The project includes a sample insurance financial dataset with the following fields:

| Column | Description |
|---------|-------------|
| Year | Financial Year |
| Region | Business Region |
| TotalPremium | Total Premium Collected |
| TotalClaims | Total Claims Paid |
| ClaimRatio | Claims ÷ Premium |

The dataset currently contains records for multiple regions across two financial years.

---

# 💻 Functionalities

## Dashboard

- Display Financial KPI Cards
- Interactive Charts using Chart.js
- Year Filter
- Region Filter
- Dynamic Financial Table
- Export Dashboard Data
- Refresh Dashboard
- Dark Mode
- Responsive Layout

## Python Modules

- Financial Data Processing
- CSV Reading
- JSON Generation
- Summary Statistics
- Region-wise Analysis
- Year-wise Analysis
- SQL-style Join Operations

---

# 📸 Screenshots

After running the project, add screenshots of:

- Dashboard Home
- KPI Cards
- Premium by Region Chart
- Claims by Region Chart
- Claim Ratio Trend
- Premium vs Claims Chart
- Financial Data Table
- Filters
- Dark Mode

Example folder:

```text
screenshots/
│
├── dashboard.png
├── kpi_cards.png
├── premium_chart.png
├── claims_chart.png
├── claim_ratio.png
├── premium_vs_claims.png
├── filters.png
├── table.png
└── dark_mode.png
```

---

# 📚 Skills Demonstrated

This project demonstrates practical knowledge of:

- Financial Dashboard Development
- Data Visualization
- Financial Analytics
- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5
- Chart.js
- Python Programming
- Pandas Data Processing
- CSV Processing
- JSON Processing
- AWS S3 Integration (Optional)
- Responsive Web Design
- Git & GitHub

---

# ⚡ Future Enhancements

Possible improvements for future versions include:

- Real-time Financial API Integration
- Database Integration (MySQL/PostgreSQL)
- Authentication & User Login
- PDF Report Generation
- Excel Export Support
- Custom Date Range Filters
- Role-Based Access Control
- Advanced Financial Analytics
- Machine Learning-Based Forecasting
- Full AWS Cloud Deployment

---

# 🎯 Learning Outcomes

Through this project, the following concepts were implemented:

- Interactive Dashboard Design
- Client-side Data Visualization
- Financial Data Analysis
- Responsive User Interface Development
- Python-based Data Processing
- CSV and JSON Handling
- SQL-style Join Operations using Pandas
- Optional AWS S3 File Handling
- GitHub Project Organization

---

# 🤝 Contributing

Contributions are welcome.

If you would like to improve this project:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Submit a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👥 Team

### Developed By

**Team 05**

### Academic Guide

**Mr. U. Sheshadri**

### Academic Coordinator

**Dr. Vasantha**

---

# 🙏 Acknowledgements

Special thanks to:

- MassMutual
- Amazon Web Services (AWS)
- Pandas Development Team
- Bootstrap Team
- Chart.js Community
- Python Community
- GitHub

---

# ⭐ GitHub Repository

Repository:

**https://github.com/SaiPriya0606/financial_dashboard**

If you found this project helpful, consider giving it a ⭐ on GitHub.

---

## 📬 Contact

For suggestions, improvements, or collaboration, feel free to connect through GitHub.

**Happy Coding! 🚀**