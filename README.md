# 🏦 LoanFlex Calculator

**LoanFlex Calculator** is a lightweight, responsive, and high-precision financial web application built to simplify personal loan, mortgage, and auto financing calculations. 

It enables users and local businesses to estimate monthly payments, calculate total interest charges over time, and evaluate debt-to-income (DTI) affordability ratios in real time.

---

## ✨ Key Features

* **Real-time Financial Computation:** Instantly calculates amortized monthly payments ($M$) and cumulative interest costs ($Total Interest$).
* **Affordability & Risk Analysis:** Evaluates the salary deduction ratio ($Deduction Rate \% = \frac{Monthly Payment}{Salary} \times 100$) and issues automated risk warnings when debt service exceeds **50%** of income.
* **Responsive & Clean UI:** Designed with **Tailwind CSS** for an optimal viewing experience across mobile devices, tablets, and desktops.
* **Zero Dependencies:** Built purely with Vanilla JavaScript (ES6+), ensuring ultra-fast load times and zero bloatware.

---

## 🧮 Financial Formulas & Logic

The core logic uses standard financial amortization formulas:

1. **Net Loan Amount ($P$):**
   $$P = \text{Total Amount} - \text{Down Payment}$$

2. **Monthly Interest Rate ($r$):**
   $$r = \frac{\text{Annual Interest Rate}}{100 \times 12}$$

3. **Total Amortization Months ($n$):**
   $$n = \text{Loan Tenure (Years)} \times 12$$

4. **Monthly Payment Amortization ($M$):**
   $$M = P \times \frac{r(1 + r)^n}{(1 + r)^n - 1}$$

5. **Cumulative Interest Charges:**
   $$\text{Total Interest} = (M \times n) - P$$

---

## 🛠️ Tech Stack

* **Frontend Structure:** HTML5 (Semantic Markup)
* **Styling Framework:** Tailwind CSS (Utility-first framework)
* **Programming Logic:** Vanilla JavaScript (ES6+ DOM & Financial Algorithms)
* **Deployment:** Vercel

---

## 🚀 Getting Started

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/loanflex-calculator.git](https://github.com/your-username/loanflex-calculator.git)
