# csv_joiner.py
import pandas as pd
import boto3
from io import StringIO

def join_csv_files():
    # Read departments data
    try:
        # Try to read from S3 first
        s3 = boto3.client('s3')
        bucket_name = 'your-bucket-name'  # Replace with your bucket name
        
        # Read departments file
        dept_obj = s3.get_object(Bucket=bucket_name, Key='use_case2_departments.csv')
        dept_data = dept_obj['Body'].read().decode('utf-8')
        departments_df = pd.read_csv(StringIO(dept_data))
        
        # Read employees file
        emp_obj = s3.get_object(Bucket=bucket_name, Key='use_case2_employees.csv')
        emp_data = emp_obj['Body'].read().decode('utf-8')
        employees_df = pd.read_csv(StringIO(emp_data))
    except:
        # If S3 read fails, use local files
        try:
            departments_df = pd.read_csv('use_case2_departments.csv')
            employees_df = pd.read_csv('use_case2_employees.csv')
        except FileNotFoundError:
            print("CSV files not found. Creating sample data.")
            # Create sample data if files don't exist
            departments_data = {
                'department_id': [1, 2, 3],
                'department_name': ['Engineering', 'Marketing', 'HR']
            }
            departments_df = pd.DataFrame(departments_data)
            
            employees_data = {
                'emp_id': [101, 102, 103, 104],
                'name': ['Alice Smith', 'Bob Johnson', 'Charlie Lee', 'Diana Gomez'],
                'department_id': [1, 2, 1, 3]
            }
            employees_df = pd.DataFrame(employees_data)
    
    print("Departments Data:")
    print(departments_df)
    print("\nEmployees Data:")
    print(employees_df)
    
    # Perform Inner Join
    inner_join = pd.merge(employees_df, departments_df, on='department_id', how='inner')
    print("\nInner Join Result:")
    print(inner_join)
    
    # Perform Left Join (all employees, matching departments)
    left_join = pd.merge(employees_df, departments_df, on='department_id', how='left')
    print("\nLeft Join Result:")
    print(left_join)
    
    # Perform Right Join (all departments, matching employees)
    right_join = pd.merge(employees_df, departments_df, on='department_id', how='right')
    print("\nRight Join Result:")
    print(right_join)
    
    # Save results to S3 or local files
    try:
        # Save to S3
        s3.put_object(
            Bucket=bucket_name,
            Key='inner_join_result.csv',
            Body=inner_join.to_csv(index=False)
        )
        
        s3.put_object(
            Bucket=bucket_name,
            Key='left_join_result.csv',
            Body=left_join.to_csv(index=False)
        )
        
        s3.put_object(
            Bucket=bucket_name,
            Key='right_join_result.csv',
            Body=right_join.to_csv(index=False)
        )
        print("\nJoin results saved to S3.")
    except:
        # Save to local files if S3 fails
        inner_join.to_csv('inner_join_result.csv', index=False)
        left_join.to_csv('left_join_result.csv', index=False)
        right_join.to_csv('right_join_result.csv', index=False)
        print("\nJoin results saved to local files.")
    
    return inner_join, left_join, right_join

if __name__ == "__main__":
    inner_join, left_join, right_join = join_csv_files()