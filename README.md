# 📊 Financial KPI Dashboard

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS-S3-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

# 📖 Project Overview

The **Financial KPI Dashboard** is a modern, responsive, and interactive web application developed to analyze and visualize insurance financial data. The project combines **Python-based data processing**, **interactive web technologies**, and **optional AWS cloud integration** to provide meaningful financial insights.

Financial datasets are processed using **Python** and **Pandas**, converted into JSON format, and displayed through an interactive dashboard featuring KPI cards, dynamic charts, filtering options, and a responsive data table.

In addition to financial analytics, the project also demonstrates **SQL-style CSV Join Operations** using the Pandas library, showcasing practical data manipulation techniques similar to relational database joins.

The application supports both **local execution** and **AWS S3 integration**, allowing users to work in either environment without changing the overall workflow.

---

# ✨ Key Features

- 📊 Interactive Financial KPI Dashboard
- 📈 Dynamic KPI Cards
- 📉 Interactive Chart.js Visualizations
- 🔍 Filter Data by Year and Region
- 📋 Responsive Financial Data Table
- 🌙 Dark Mode Support
- 📤 Export Dashboard Data
- 🔄 Refresh Dashboard
- ☁️ Optional AWS S3 Integration
- 🐍 Python Data Processing using Pandas
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

## Backend / Data Processing

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
├── README.md
│
├── financial_data.csv
├── financial_data.json
├── financial_data_processor.py
│
├── csv_joiner.py
├── use_case2_departments.csv
├── use_case2_employees.csv
│
└── use_case1_image.png
```

---

# 📄 File Description

| File | Description |
|------|-------------|
| **index.html** | Main dashboard interface |
| **style.css** | Styling, responsive layout, dark mode |
| **script.js** | Dashboard logic, charts, filters, export, dark mode |
| **financial_data.csv** | Sample insurance financial dataset |
| **financial_data.json** | Processed JSON data for the dashboard |
| **financial_data_processor.py** | Processes financial data using Pandas |
| **csv_joiner.py** | Demonstrates SQL-style CSV join operations |
| **use_case2_departments.csv** | Department dataset |
| **use_case2_employees.csv** | Employee dataset |
| **use_case1_image.png** | AWS integration illustration |
| **README.md** | Project documentation |

---

# 🎯 Project Objectives

The primary objectives of this project are to:

- Develop an interactive Financial KPI Dashboard.
- Process insurance financial datasets using Python and Pandas.
- Visualize financial KPIs using interactive charts.
- Implement dynamic filtering by Year and Region.
- Demonstrate SQL-style CSV Join Operations using Pandas.
- Support both local execution and optional AWS S3 integration.
- Build a responsive and user-friendly dashboard interface.
- Improve understanding of financial analytics and cloud-based data processing.

---

# 🌐 Dashboard Overview

The project is divided into two independent modules.

## ✅ Use Case 1 – Financial KPI Dashboard

This module focuses on processing insurance financial data and presenting meaningful business insights through an interactive dashboard.

### Functionalities

- Display Total Premium
- Display Total Claims
- Display Average Claim Ratio
- Filter by Year
- Filter by Region
- Interactive Chart.js Visualizations
- Export Dashboard Data
- Refresh Dashboard
- Dark Mode Support

---

## ✅ Use Case 2 – CSV Join Operations

This module demonstrates SQL-style join operations using the Pandas library.

Supported join operations include:

- Inner Join
- Left Join
- Right Join

The program first attempts to read datasets from **AWS S3** (if configured). If cloud storage is unavailable, it automatically switches to local CSV files. Sample data is generated when neither source is available.

---

# 🏗️ System Workflow

```text
Financial Dataset (CSV)
          │
          ▼
financial_data_processor.py
          │
          ▼
Processed Financial Data (JSON)
          │
          ▼
script.js
          │
 ┌────────┼─────────┐
 │        │         │
 ▼        ▼         ▼
KPIs   Charts   Data Table
          │
          ▼
Interactive Financial KPI Dashboard
```

---

# 🏛️ System Architecture

```text
                     financial_data.csv
                              │
                              ▼
                financial_data_processor.py
                              │
          Reads Local CSV / AWS S3 (Optional)
                              │
                              ▼
                 Processed Financial Data
                              │
                              ▼
                          script.js
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
   KPI Cards          Chart.js Graphs         Data Table
                              │
                              ▼
                  index.html + style.css
                              │
                              ▼
              Interactive Financial KPI Dashboard
```

---

# ☁️ AWS Integration

The project supports **optional Amazon S3 integration** using the **Boto3 SDK**.

### Workflow

1. Read financial datasets from an AWS S3 bucket.
2. Automatically switch to local CSV files if AWS is unavailable.
3. Process datasets using Pandas.
4. Generate processed JSON output.
5. Optionally upload processed output back to AWS S3.
6. Display processed data in the interactive dashboard.

> **Note:** Replace the placeholder bucket name (`your-bucket-name`) with your own Amazon S3 bucket name and configure AWS credentials before using cloud integration.

---

# 🚀 Installation Guide

## Step 1 – Clone the Repository

```bash
git clone https://github.com/SaiPriya0606/financial_dashboard.git
```

---

## Step 2 – Navigate to the Project Folder

```bash
cd financial_dashboard
```

---

## Step 3 – Install Required Dependencies

```bash
pip install pandas boto3
```

---

## Step 4 – Process Financial Data

```bash
python financial_data_processor.py
```

This script reads the dataset, performs financial analysis, and generates the processed JSON file.

---

## Step 5 – Run CSV Join Demonstration

```bash
python csv_joiner.py
```

This demonstrates SQL-style join operations using Pandas.

---

## Step 6 – Launch the Dashboard

Open the following file in your preferred web browser:

```text
index.html
```

No additional web server is required because the dashboard reads local processed data.
---

# 📊 Dashboard Components

## 1️⃣ KPI Cards

The dashboard presents key financial indicators that provide a quick overview of business performance.

The displayed KPIs include:

- 💰 Total Premium
- 📉 Total Claims
- 📈 Average Claim Ratio

These values are automatically updated whenever the user applies filters.

---

## 2️⃣ Interactive Filters

The dashboard allows users to analyze financial data using interactive filters.

Available filters include:

- 📅 Year
- 🌍 Region

Additional actions:

- Apply Filters
- Reset Filters
- Refresh Dashboard
- Export Dashboard Data

---

## 3️⃣ Interactive Charts

The dashboard uses **Chart.js** to visualize financial information through interactive graphs.

### 💰 Premium by Region

Displays the total premium collected across different business regions.

---

### 📉 Claims by Region

Displays the total insurance claims for each region.

---

### 📈 Claim Ratio Trend

Illustrates how the claim ratio changes over multiple financial years.

---

### ⚖️ Premium vs Claims

Provides a comparative visualization between premium collected and claims paid.

---

## 4️⃣ Financial Data Table

The dashboard includes a responsive financial data table displaying:

- Year
- Region
- Total Premium
- Total Claims
- Claim Ratio

The table updates dynamically based on the selected filters.

---

## 5️⃣ Dark Mode

The application supports **Dark Mode** for an improved user experience.

Features include:

- Dark Theme
- Responsive Cards
- Styled Tables
- Smooth Theme Switching

---

## 6️⃣ Export Dashboard Data

Users can export the filtered dashboard data for reporting and further analysis.

---

## 7️⃣ Refresh Dashboard

Reloads the latest processed financial data without restarting the application.

---

# 🐍 Python Modules

## financial_data_processor.py

This module processes insurance financial datasets using the Pandas library.

### Responsibilities

- Read Financial Dataset
- Read Data from AWS S3 (Optional)
- Load Local CSV Files
- Clean and Process Data
- Generate Summary Statistics
- Calculate Financial KPIs
- Region-wise Analysis
- Year-wise Analysis
- Generate JSON Output
- Save Processed Data

---

## csv_joiner.py

This module demonstrates SQL-style join operations using Pandas.

### Supported Join Types

- Inner Join
- Left Join
- Right Join

### Responsibilities

- Load Employee Dataset
- Load Department Dataset
- Merge CSV Files
- Generate Joined Results
- Save Results Locally
- Upload Results to AWS S3 (Optional)

---

# 📈 Financial Metrics

The dashboard automatically calculates and displays important financial indicators such as:

- Total Premium
- Total Claims
- Average Claim Ratio
- Premium by Region
- Claims by Region
- Year-wise Financial Summary
- Regional Financial Analysis

These metrics help users compare financial performance across different regions and years.

---

# 💻 Functionalities

## Dashboard Features

- Interactive KPI Cards
- Dynamic Chart.js Graphs
- Responsive Financial Table
- Year Filter
- Region Filter
- Dark Mode
- Export Dashboard Data
- Refresh Dashboard
- Responsive User Interface

---

## Data Processing Features

- CSV Reading
- JSON Generation
- Pandas Data Processing
- Summary Statistics
- Region-wise Analysis
- Year-wise Analysis
- Financial KPI Calculation

---

## Cloud Integration

- AWS S3 File Reading (Optional)
- AWS S3 File Upload (Optional)
- Local File Support
- Automatic Fallback to Local Storage

---

## CSV Join Operations

- Inner Join
- Left Join
- Right Join
- Employee–Department Mapping
- SQL-style Data Merging using Pandas

---

# 📂 Sample Dataset

The project includes a sample insurance financial dataset.

| Column | Description |
|---------|-------------|
| Year | Financial Year |
| Region | Business Region |
| TotalPremium | Total Premium Collected |
| TotalClaims | Total Claims Paid |
| ClaimRatio | Claims ÷ Premium |

The sample dataset contains financial records from multiple regions over multiple financial years.

---

# 📚 Project Skills

This project demonstrates practical knowledge of:

- Financial Dashboard Development
- Business Analytics
- Financial Data Analysis
- Data Visualization
- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5
- Chart.js
- Python Programming
- Pandas Data Processing
- CSV Processing
- JSON Handling
- AWS S3 Integration
- Responsive Web Design
- Git & GitHub
- Interactive Dashboard Development
- Cloud Computing Basics
---

# ⚠️ Current Limitations

This project is developed primarily for educational and learning purposes. The current implementation has the following limitations:

- Uses a sample financial dataset.
- AWS S3 integration requires manual configuration.
- No database connectivity.
- No user authentication or authorization.
- Dashboard data is static (no real-time API integration).
- No role-based access control.
- Export functionality can be extended to additional formats.

These limitations provide opportunities for future enhancements and scalability.

---

# 🚀 Future Enhancements

The following features can be implemented in future versions of the project.

## 📊 Dashboard Improvements

- Real-time Financial API Integration
- Monthly & Quarterly Financial Reports
- Advanced Dashboard Analytics
- Interactive Drill-down Charts
- Geographic Data Visualization
- Custom Dashboard Widgets

---

## 🗄 Database Integration

Replace CSV files with a relational or NoSQL database such as:

- MySQL
- PostgreSQL
- MongoDB
- Amazon RDS

---

## ☁️ Cloud Deployment

Deploy the complete application using AWS services:

- Amazon EC2
- Amazon S3 Static Website Hosting
- AWS Lambda
- API Gateway
- CloudFront
- Amazon RDS

---

## 🔐 Authentication & Security

Enhance the application by implementing:

- User Registration
- Secure Login System
- Role-Based Access Control
- Admin Dashboard
- User Activity Logging

---

## 📈 Advanced Analytics

Future analytical capabilities may include:

- Financial Forecasting
- Revenue Prediction
- Trend Analysis
- Machine Learning Models
- Risk Assessment

---

## 📄 Report Generation

Support exporting reports in multiple formats:

- PDF
- Excel
- CSV

---

## 📱 User Experience Enhancements

Future UI improvements may include:

- Better animations
- Improved accessibility
- Mobile-first optimization
- Personalized dashboard themes
- Enhanced filtering options

---

# 🎯 Learning Outcomes

This project provided practical experience in:

- Building interactive dashboards
- Financial KPI analysis
- Data visualization using Chart.js
- Responsive web design
- Python-based data processing
- Data analysis using Pandas
- CSV and JSON handling
- SQL-style join operations
- AWS S3 integration
- Cloud computing fundamentals
- Git and GitHub project management

---

# 🛠 Skills Demonstrated

## Programming Languages

- HTML5
- CSS3
- JavaScript (ES6)
- Python

---

## Libraries & Frameworks

- Bootstrap 5
- Bootstrap Icons
- Chart.js
- Pandas
- Boto3

---

## Cloud Technologies

- Amazon S3

---

## Technical Concepts

- Financial KPI Dashboard Development
- Business Analytics
- Data Visualization
- Data Processing
- CSV & JSON Handling
- SQL-style Join Operations
- Responsive Web Design
- Cloud Storage Integration
- Interactive Dashboard Development
- Version Control using Git & GitHub

---

# 🤝 Contributing

Contributions are welcome!

To contribute:

1. Fork this repository.
2. Create a new feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push your branch.

```bash
git push origin feature-name
```

5. Create a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project under the terms of the MIT License.

---

# 👥 Team

### Developed By

**Team 05**

---

### Academic Guide

**Mr. U. Sheshadri**

---

### Academic Coordinator

**Dr. Vasantha**

---

# 🙏 Acknowledgements

Special thanks to:

- MassMutual
- Amazon Web Services (AWS)
- Python Community
- Pandas Development Team
- Bootstrap Team
- Chart.js Community
- GitHub
- Open Source Community

---

# ⭐ GitHub Repository

Repository:

**https://github.com/SaiPriya0606/financial_dashboard**

GitHub Profile:

**https://github.com/SaiPriya0606**

If you found this project useful, consider giving it a ⭐ on GitHub.

---

# 📬 Contact

For suggestions, improvements, or collaboration:

📧 Open an issue in this repository or connect through GitHub.

GitHub Profile:

**https://github.com/SaiPriya0606**

---

# 📌 Project Summary

The **Financial KPI Dashboard** is a responsive web application designed to process, analyze, and visualize insurance financial data using modern web technologies and Python.

The project combines:

- Interactive KPI dashboards
- Business data visualization
- Python-based financial data processing
- SQL-style CSV join operations
- Optional AWS S3 integration
- Responsive web design

It demonstrates practical skills in frontend development, backend data processing, cloud integration, and business analytics, making it a strong academic project and portfolio piece.

---

# 🚀 Happy Coding!

⭐ If you found this project useful, don't forget to **Star** the repository on GitHub.