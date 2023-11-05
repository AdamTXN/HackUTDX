import pandas

def main():
  csvFile = pandas.read_csv('HackUTD-2023-HomeBuyerInfo.csv')

  #statArray = []
  Ycount = 0
  Ncount = 0
  countCS = 0 #counts fails
  countLTV = 0 #counts fails
  countDTI = 0 #counts fails
  countFEDTI = 0 #counts fails
  for index, row in csvFile.iterrows():
    myCS = CS(row)
    if myCS == 0:
      countCS += 1
    myLTV = LTV(row)
    if myLTV == 0:
      countLTV += 1
    myDTI = DTI(row)
    if myDTI == 0:
      countDTI += 1
    myFEDTI = FEDTI(row)
    if myFEDTI == 0:
      countFEDTI += 1

    # [ID, Credit Score, LTV, DTI, FEDTI]
    #statArray[index] = [row['ID'], myCS, myLTV, myDTI, myFEDTI]
    #0 is False, 1 is True, 2 is (only for DTI) .36<x<.43

    # Write CSV file to store Y or N based on ID number
    if myCS == 0 or myLTV == 0 or myDTI == 0 or myFEDTI == 0:
      Ncount += 1
    else:
      Ycount += 1
      
  print("Y: ", Ycount, "N: ", Ncount)
  print("Total Credit Score Fails: ", countCS)
  print("Total PMI: ", countLTV)
  print("Total DTI Fails: ", countDTI)
  print("Total FEDTI Fails: ", countFEDTI)

def CS(row):
  if row['CreditScore'] >= 640:
    return 1
  else:
    return 0
    print ('Your credit score is too low.')
  
def LTV(row):
  apprValue = row['AppraisedValue']
  downP = row['DownPayment']

  myLTV = (apprValue-downP)/apprValue

  if myLTV < .80:
    return 1
  else:
    #print ('Your Loan-to-Value ratio is too high. Consider increasing \
    #your down payment. In order to purchase the home, consider purchasing Private Mortgage insurance')
    #add PMI, additional 1% (of appraisal) to yearly until LTV drops below 80%
    return 0
  
def DTI(row):
  carP = row['CarPayment']
  ccP = row['CreditCardPayment']
  mortgage = row['MonthlyMortgagePayment']
  studentLoans = row['StudentLoanPayments']
  monthlyDebt = carP + ccP + mortgage + studentLoans

  monthlyInc = row['GrossMonthlyIncome']

  myDTI = (monthlyDebt/monthlyInc)

  if myDTI > .36 and myDTI <= .43:
    return 2
    #print ('Your Debt to Income ratio is slightly high. Try transferring high interest loans to a low interest credit card, or paying off some current debt.')
  elif myDTI <= .36:
    return 1
  else:
    return 0
    #print ('Your Debt-to-Income ratio is too high. Try transferring high interest loans to a low interest credit card, or paying off some current debt.')

def FEDTI(row):
  mortgage = row['MonthlyMortgagePayment']
  monthlyInc = row['GrossMonthlyIncome']
  
  myFEDTI = (mortgage/monthlyInc)

  if myFEDTI <= .28:
    return 1
  else:
    return 0
    #print ('Your Front-End Debt to Income ratio is too high. Try saving more for a larger down payment, or looking for a less expensive home.');

def PMI(row):
  apprValue = row['AppraisedValue']
  return ((apprValue * 1.01)/12) #monthly 

"""def NewFunc(statArray):
  print('what ID');
  if statArray[ID][1]"""

if __name__ == "__main__":
  main()
