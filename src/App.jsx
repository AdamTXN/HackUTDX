import './App.css'
import { useState, useEffect } from 'react'
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";


export default function App() {
  
  const [grossMonthlyIncome, setGrossMonthlyIncome] = useState(0);
  const [creditCardPayment, setCreditCardPayment] = useState(0);
  const [carPayment, setCarPayment] = useState(0);
  const [studentLoanPayment, setStudentLoanPayment] = useState(0);
  const [appraisedValue, setAppraisedValue] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyMortgagePayment, setMonthlyMortgagePayment] = useState(0);
  const [creditScore, setCreditScore] = useState(0);
  const [paymentTotal, setPaymentTotal] = useState(0);
  const [LTV, setLTV] = useState(0);
  const [DTI, setDTI] = useState(0);
  const [FEDTI, setFEDTI] = useState(0);
  const [PMI, setPMI] = useState(0);
  const [emoji, setEmoji] = useState('😔');

  var credScore1 = "• Your credit score was approved.";

  var credScore2 = "• Your credit score was rejected. Try increasing your credit score by making payments on time and optimizing credit utilization.";

  var LTVstring1 = "• Your Loan-to-Value ratio looks good!";
  
  var LTVstring2 = "• Your Loan-to-Value ratio is too high. Consider increasing your down payment. In order to purchase this home, you must also purchase Private Mortgage insurance. You would pay an additional monthly amount of $";

  var DTIstring1 = "• Your Debt to Income ratio is within the recommended range.";
  
  var DTIstring2 = "• Your Debt to Income ratio is slightly high. Try transferring high interest loans to a low interest credit card, or paying off some current debt.";

  var DTIstring3 = "• Your Debt-to-Income ratio is too high. Try transferring high interest loans to a low interest credit card, or paying off some current debt.";

  var FEDTIstring1 = "• Your Front-End Debt to Income ratio looks good! Keep it up!";
  
  var FEDTIstring2 = "• Your Front-End Debt to Income ratio is too high. Try saving more for a larger down payment, or looking for a less expensive home.";

  const [chartData, setChartData] = useState({
    labels: ["Rejected", "Approved"],
    datasets: [
      {
        label: "Rejection and Approval",
        data: [8910, 1090],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(20, 256, 65, 0.6)",
        ],
        borderColor: [
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
        ],
        borderWidth: 5,
      },
    ],
  });

  const[barData, setBarData] = useState({
    labels: ["Credit Score Approved", "Credit Score Rejected", "LTV Approved", "LTV Rejected", "DTI Approved", "DTI Rejected", "FEDTI Approved", "FEDTI Rejected"],
    datasets: [
      {
        data: [5972, 4028, 3742, 6258, 3979, 6021, 4414, 5586],
        backgroundColor: [
          "rgba(20, 256, 65, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
        ],
        borderWidth: 5,
      },
    ],
  });

  

  useEffect(() => {
    if(grossMonthlyIncome <= 1000) {
      setEmoji('😔');
    } else if(grossMonthlyIncome <= 2000) {
      setEmoji('😞');
    } else if(grossMonthlyIncome <= 3000) {
      setEmoji('😟');
    }
     else if(grossMonthlyIncome <= 4000) {
      setEmoji('😕');
    }
     else if(grossMonthlyIncome <= 5000) {
      setEmoji('🙁');
    }
     else if(grossMonthlyIncome <= 6000) {
      setEmoji('🙂');
    }
     else if(grossMonthlyIncome <= 7000) {
      setEmoji('😄');
    }
     else if(grossMonthlyIncome <= 8000) {
      setEmoji('😄');
    }
     else if(grossMonthlyIncome <= 9000) {
      setEmoji('😁');
    }
     else if(grossMonthlyIncome <= 10000) {
       setEmoji('😎');
    }
  }, [grossMonthlyIncome])

  useEffect(() => {
    const getPaymentTotal = () => {
      let total = (creditCardPayment + carPayment + studentLoanPayment + monthlyMortgagePayment).toFixed(2);
      setPaymentTotal(parseFloat(total));
    }
    getPaymentTotal();
  }, [creditCardPayment, carPayment, studentLoanPayment, monthlyMortgagePayment])
  const [output2, setOutput2] = useState('');
  useEffect(() => {
    const getLTV = () => {
      let myLTV = ((appraisedValue - downPayment) / appraisedValue).toFixed(2);
      setLTV(parseFloat(myLTV));
      if(myLTV < 0.8){
        //output2 = LTVstring1;
        setOutput2(LTVstring1);
      }
      else{
        //output2 = LTVstring2 + PMI;
        setOutput2(LTVstring2 + PMI);
      }
    }
    getLTV();
  }, [appraisedValue, downPayment])

    const [output3, setOutput3] = useState('');
  useEffect(() => {
    const getDTI = () => {
      let myDTI = (paymentTotal/grossMonthlyIncome).toFixed(2);
      setDTI(parseFloat(myDTI));
      if(myDTI <= 0.36){
        //output3 += DTIstring1;
        setOutput3(DTIstring1);
      }
      else if (myDTI > 0.36 && myDTI <= 0.49){
        //output3 = DTIstring2;
        setOutput3(DTIstring2);
      }
      else{
        //output3 = DTIstring3;
        setOutput3(DTIstring3);
      }
    }
    getDTI();
  }, [paymentTotal, grossMonthlyIncome])

    const [output4, setOutput4] = useState('');
  useEffect(() => {
    const getFEDTI = () => {
      let myFEDTI = (monthlyMortgagePayment/grossMonthlyIncome).toFixed(2);
      if(myFEDTI <= 0.28){
        //output4 = FEDTIstring1;
        setOutput4(FEDTIstring1);
      }
      else
      {
        //output4 = FEDTIstring2;
        setOutput4(FEDTIstring2);
      }
      setFEDTI(parseFloat(myFEDTI));
    }
    getFEDTI();
  }, [monthlyMortgagePayment, grossMonthlyIncome])

  useEffect(() => {
    const getPMI = () => {
      let myPMI = (monthlyMortgagePayment + ((appraisedValue * .01)/12)).toFixed(2);
      setPMI(parseFloat(myPMI));
    }
    getPMI();
  }, [monthlyMortgagePayment, appraisedValue])

  
  const[output1, setOutput1] = useState('');
  useEffect(() => {
    const getCreditScore = () => {
      if(creditScore >= 640){
        //output1 = credScore1;
        setOutput1(credScore1);
      }
      else{
        //output1 = credScore2;
        setOutput1(credScore2);
      }
    }
    getCreditScore();
  }, [creditScore])

  const [status,setStatus] = useState('');
  useEffect(() => {
    const getStatus = () => {
      if (creditScore >= 640 && LTV < 0.8 && DTI <= 0.36 && FEDTI <= 0.28) {
        //status = "Approved";
        setStatus("Approved");
      }
      else {
        //status = "Rejected";
        setStatus("Rejected");
      }
    }
    getStatus();
  }, [creditScore, LTV, DTI, FEDTI])
  //let status = "";
  //let output1 = "";
  //let output2 = "";
  //let output3 = "";
  //let output4 = "";
  /*if (creditScore >= 640 && LTV < 0.8 && DTI <= 0.36 && FEDTI <= 0.28) {
    status = "Approved";
  }
  else {
    status = "Rejected";
  } */
  /*
  if(creditScore >= 640){
    output1 = credScore1;
  }
  else{
    output1 = credScore2;
  }
  
  if(LTV < 0.8){
    output2 = LTVstring1;
  }
  else{
    output2 = LTVstring2 + PMI;
  }
  
  if(DTI <= 0.36){
    output3 += DTIstring1;
  }
  else if (DTI > 0.36 && DTI <= 0.49){
    output3 = DTIstring2;
  }
  else{
    output3 = DTIstring3;
  }
  
  if(FEDTI <= 0.28){
    output4 = FEDTIstring1;
  }
  else
  {
    output4 = FEDTIstring2;
  } */
  
  
  return (
    <main>
      <h1>Housing Crisis</h1>

      <h2>Pie Chart From Given Data</h2>
      <PieChart chartData={chartData} />
      <br />

      <h2>Bar Chart From Given Data</h2>
      <BarChart chartData={barData} />
      <br />
      <br />
      

      <div className="info-container">
        <label>Credit Score: </label>
        <input type="text" value={creditScore !== 0? creditScore : ''} onChange={(e) => setCreditScore(Number(e.target.value))} />
        <br />
        <label>Gross Monthly Income: $</label>
        {emoji}
        <input type="range" value={grossMonthlyIncome} onChange={(e) => setGrossMonthlyIncome(Number(e.target.value))} min="0" max="10000" />
        {grossMonthlyIncome}
        {/*<input type="text" value={grossMonthlyIncome !== 0? grossMonthlyIncome : ''} onChange={(e) => setGrossMonthlyIncome(Number(e.target.value))}/> */}
        <br />
        <br />

        <label>Credit Card Payment: $</label>
        <input type="text" value={creditCardPayment !== 0? creditCardPayment : ''} onChange={(e) => setCreditCardPayment(Number(e.target.value))}/>
        <br />

        <label>Car Payment: $</label>
        <input type="text" value={carPayment !== 0? carPayment : ''} onChange={(e) => setCarPayment(Number(e.target.value))}/>
        <br />

        <label>Student Loan Payment: $</label>
        <input type="text" value={studentLoanPayment !== 0? studentLoanPayment : ''} onChange={(e) => setStudentLoanPayment(Number(e.target.value))}/>
        <br />

        <label>Monthly Mortgage Payment: $</label>
        <input type="number" value={monthlyMortgagePayment !== 0? monthlyMortgagePayment : ''} onChange={(e) => setMonthlyMortgagePayment(Number(e.target.value))}/>
        <br />

        <label>Total Monthly Payment: ${paymentTotal}</label>
        <br />
        <br />

        <label>Appraised Value: $</label>
        <input type="text" value={appraisedValue !== 0? appraisedValue : ''} onChange={(e) => setAppraisedValue(Number(e.target.value))}/>
        <br />

        <label>Down Payment: $</label>
        <input type="number" value={downPayment !== 0? downPayment : ''} onChange={(e) => setDownPayment(Number(e.target.value))}/>
        <br />

        <label>Loan Amount: $</label>
        <input type="number" value={loanAmount !== 0? loanAmount : ''} onChange={(e) => setLoanAmount(Number(e.target.value))}/>
        <br />
        <br />

        <label>Calculated Loan-to-Value Ratio: <b>{LTV*100}</b>%</label>
        <br />

        <label>Calculated Debt-to-Income Ratio: <b>{DTI*100}</b>%</label>
        <br />

        <label>Calculated Front-End Debt-to-Income Ratio: <b>{FEDTI*100}</b>%</label>


      <div approvalBox = "approval">
        <h3>Approval Status</h3>
        
        <p id="stat">
          <b>{status}</b>
        <br />
        <br />
        <span id="outp">
          {output1}
          <br />
          {output2}
          <br />
          {output3}
          <br />
          {output4}
        </span>
        </p>
      </div>
    </div>
   
      <div>
        <LineChart chartData={monthlyMortgagePayment} idealData={.28 * grossMonthlyIncome} />
      </div>
    </main>
  )
}
