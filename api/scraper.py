import requests
import json
from bs4 import BeautifulSoup


BASE_URL = "https://www.xe.com/currencyconverter/convert/?"

# Add try-except later
def _getHtml(params: list) -> BeautifulSoup:
    amount, base, to = params
    response = requests.get(url=f"{BASE_URL}Amount={amount}&From={base}&To={to}")
    
    return BeautifulSoup(response.content, 'html.parser')

def getCurrency(params: list) -> str:
    rawHtml = _getHtml(params)
    
    currency = rawHtml.find('p', class_='sc-262833c5-1 fOUdoA')

    return currency.text[:9] # We only interest on the numbers

def lambda_handler(event, context):
    amount = event['amount']
    base = event['base']
    to = event['to']
    
    converted_amount = getCurrency([amount, base, to])
    
    return {
        'statusCode': 200,
        'body': json.dumps({'convertedAmount': converted_amount})
    }