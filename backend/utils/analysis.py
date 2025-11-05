import pandas as pd
import numpy as np
from collections import Counter

def load_and_clean_data(file_path):
    """Load and clean Netflix dataset"""
    df = pd.read_csv(file_path)
    df['Release_Date'] = pd.to_datetime(df['Release_Date'], errors='coerce')
    df['year_added'] = df['Release_Date'].dt.year
    df['Country'] = df['Country'].fillna('Unknown')
    df['Type'] = df['Type'].fillna('Unknown')
    return df

def get_genre_distribution(df):
    """Get genre distribution from the dataset"""
    genres = []
    for genre_list in df['Type'].dropna():
        genres.extend([g.strip() for g in genre_list.split(',')])
    
    genre_counts = Counter(genres)
    return dict(genre_counts.most_common(10))

def get_country_distribution(df):
    """Get country distribution from the dataset"""
    countries = []
    for country_list in df['Country'].dropna():
        countries.extend([c.strip() for c in country_list.split(',')])
    
    country_counts = Counter(countries)
    return dict(country_counts.most_common(10))

def get_yearly_trends(df):
    """Get yearly content addition trends"""
    df_copy = df.copy()
    df_copy['year_added'] = pd.to_datetime(df_copy['Release_Date'], errors='coerce').dt.year
    yearly_data = df_copy.groupby(['year_added', 'Category']).size().unstack(fill_value=0)
    return yearly_data.to_dict('index')