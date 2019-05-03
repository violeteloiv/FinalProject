import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pprint

# Try to import simplejson, of not, import json
try:
    import simplejson
except:
    import json

# We will be using JSON to communicate data to and from the webpage

scope = ['https://spreadsheets.google.com/feeds',
         'https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_name('client_secret.json', scope)
client = gspread.authorize(creds)

pp = pprint.PrettyPrinter()

class SpreadSheet:

    def __init__(self):
        self.currentSheet = client.open("Data").sheet1
        self.data = None

    def setup(self):
        self.currentSheet.update_cell(1, 1, "Names:")
        self.currentSheet.update_cell(1, 2, "Current Level:")
        self.currentSheet.update_cell(1, 3, "Health:")

        self.data = self.currentSheet.get_all_records()

    def clear_data(self):
        self.currentSheet.clear()

    def print_data(self):
        if self.data == None:
            print("Currently No Data")
        else:
            pp.pprint(self.data)


def create_json_data_file():
    with open("data.txt", w) as outfile:
        json.dump(data, outfile)

def read_json_data_file():
    pass

def send_json_data_file():
    pass

s_data = SpreadSheet()

s_data.print_data()
