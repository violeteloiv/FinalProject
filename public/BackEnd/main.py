import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pprint

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
        self.currentSheet.clear()
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

s_data = SpreadSheet()
s_data.clear_data()

s_data.setup()

s_data.print_data()
