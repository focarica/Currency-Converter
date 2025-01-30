import typer
from typing_extensions import Annotated, Optional

from api.scraper import Scraper

app = typer.Typer()

@app.command()
def convert(
    base: Annotated[str, typer.Argument(help="Currency to be converted")], 
    to: Annotated[str, typer.Argument(help="Desired new currency")], 
    amount: Annotated[Optional[float], typer.Argument(help="Quantity to convert")] = 1):
    """
    Converts the passed amount from one currency to another.
    """
    
    scraper = Scraper()
    
    # print(scraper.getCurrency([amount, base, to]))
    return scraper.getCurrency([amount, base, to])
    
if __name__ == "__main__":
    typer.run(convert)
    