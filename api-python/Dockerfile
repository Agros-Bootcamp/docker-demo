FROM python:3.8-alpine

WORKDIR /app

COPY requirements.txt .
COPY api.py .

RUN pip install -r requirements.txt

EXPOSE 8081

CMD uvicorn api:app --reload --host 0.0.0.0 --port 8081
