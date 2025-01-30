import requests
from bs4 import BeautifulSoup

import string

class Scraper():
    def __init__(self):
        self.BASE_URL = "https://www.xe.com/currencyconverter/convert/?"


    # Add try-except later
    def _getHtml(self, params: list) -> BeautifulSoup:
        amount, base, to = params
        self.response = requests.get(url=f"{self.BASE_URL}Amount={amount}&From={base}&To={to}")
                
        return BeautifulSoup(self.response.content, 'html.parser')

        
    def getCurrency(self, params: list) -> str:
        rawHtml = self._getHtml(params)
        
        currency = rawHtml.find('p', class_='sc-262833c5-1 fOUdoA')

        return currency.text[:9] # We only interest on the numbers