import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = {"https://spreadsheets.google.com/feeds"}
creds = ServiceAccountCredentials.from_json_keyfile_name('data.json', scope)
client = gspread.authorize(creds)

sheet = client.open("Data").sheet1

pr = sheet.get_all_records()
print(pr)
