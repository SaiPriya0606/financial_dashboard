# financial_data_processor.py
import pandas as pd
import json
import boto3
from io import StringIO

def process_financial_data():
    # Read the financial data
    try:
        # Try to read from S3 first
        s3 = boto3.client('s3')
        bucket_name = 'your-bucket-name'  # Replace with your bucket name
        file_key = 'financial_data.csv'
        
        obj = s3.get_object(Bucket=bucket_name, Key=file_key)
        data = obj['Body'].read().decode('utf-8')
        
        # Convert string data to DataFrame
        df = pd.read_csv(StringIO(data))
    except:
        # If S3 read fails, use local file
        try:
            df = pd.read_csv('financial_data.csv')
        except FileNotFoundError:
            print("Financial data file not found. Creating sample data.")
            # Create sample data if file doesn't exist
            financial_data = [
                {"Year": 2020, "Region": "North", "TotalPremium": 500000, "TotalClaims": 300000, "ClaimRatio": 0.6},
                {"Year": 2020, "Region": "South", "TotalPremium": 450000, "TotalClaims": 270000, "ClaimRatio": 0.6},
                {"Year": 2020, "Region": "East", "TotalPremium": 400000, "TotalClaims": 240000, "ClaimRatio": 0.6},
                {"Year": 2020, "Region": "West", "TotalPremium": 550000, "TotalClaims": 330000, "ClaimRatio": 0.6},
                {"Year": 2021, "Region": "North", "TotalPremium": 520000, "TotalClaims": 312000, "ClaimRatio": 0.6},
                {"Year": 2021, "Region": "South", "TotalPremium": 470000, "TotalClaims": 282000, "ClaimRatio": 0.6},
                {"Year": 2021, "Region": "East", "TotalPremium": 420000, "TotalClaims": 252000, "ClaimRatio": 0.6},
                {"Year": 2021, "Region": "West", "TotalPremium": 580000, "TotalClaims": 348000, "ClaimRatio": 0.6},
            ]
            df = pd.DataFrame(financial_data)
    
    # Data processing
    print("Financial Data Overview:")
    print(df.head())
    print("\nData Info:")
    print(df.info())
    
    # Calculate summary statistics
    print("\nSummary Statistics:")
    print(df.describe())
    
    # Group by region and calculate totals
    region_summary = df.groupby('Region').agg({
        'TotalPremium': 'sum',
        'TotalClaims': 'sum',
        'ClaimRatio': 'mean'
    }).reset_index()
    
    print("\nRegional Summary:")
    print(region_summary)
    
    # Group by year and calculate totals
    year_summary = df.groupby('Year').agg({
        'TotalPremium': 'sum',
        'TotalClaims': 'sum',
        'ClaimRatio': 'mean'
    }).reset_index()
    
    print("\nYearly Summary:")
    print(year_summary)
    
    # Save processed data back to S3 or local file
    processed_data = df.to_dict(orient='records')
    
    try:
        # Save to S3
        json_data = json.dumps(processed_data)
        s3.put_object(
            Bucket=bucket_name,
            Key='processed_financial_data.json',
            Body=json_data
        )
        print("\nProcessed data saved to S3.")
    except:
        # Save to local file if S3 fails
        with open('processed_financial_data.json', 'w') as f:
            json.dump(processed_data, f)
        print("\nProcessed data saved to local file.")
    
    return df, region_summary, year_summary

if __name__ == "__main__":
    df, region_summary, year_summary = process_financial_data()