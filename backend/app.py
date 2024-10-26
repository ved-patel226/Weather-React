from flask import Flask, jsonify
from flask_cors import CORS
import openmeteo_requests
import requests_cache
import pandas as pd
from retry_requests import retry
import requests
from collections import defaultdict

app = Flask(__name__)
CORS(app)

cache_session = requests_cache.CachedSession(".cache", expire_after=3600)
retry_session = retry(cache_session, retries=5, backoff_factor=0.2)
openmeteo = openmeteo_requests.Client(session=retry_session)


@app.route("/rain/7days")
def rain_7days():
    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": 52.52,
        "longitude": 13.41,
        "hourly": "precipitation_probability",
        "forecast_days": 16,
    }
    response = requests.get(url, params=params)
    data = response.json()

    precipitation_by_date = defaultdict(list)

    for time, precipitation in zip(
        data["hourly"]["time"], data["hourly"]["precipitation_probability"]
    ):
        date = time.split("T")[0]
        precipitation_by_date[date].append(precipitation)

    precipitation_by_date = dict(precipitation_by_date)

    return jsonify(precipitation_by_date)


@app.route("/rain/7days/isRain")
def rain_7days_which():
    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": 52.52,
        "longitude": 13.41,
        "hourly": "precipitation_probability",
        "forecast_days": 7,
    }
    response = requests.get(url, params=params)
    data = response.json()

    precipitation_by_date = defaultdict(list)

    for time, precipitation in zip(
        data["hourly"]["time"], data["hourly"]["precipitation_probability"]
    ):
        date = time.split("T")[0]
        precipitation_by_date[date].append(precipitation)

    precipitation_by_date = dict(precipitation_by_date)

    for date, precipitation in precipitation_by_date.items():
        if any(precipitation):
            precipitation_by_date[date] = "rain"
        else:
            precipitation_by_date[date] = "no rain"

    return jsonify(precipitation_by_date)


if __name__ == "__main__":
    app.run(debug=True, port=5001)
