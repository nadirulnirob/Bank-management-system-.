# GreenBank - Bank Management System

A frontend-only Bank Management System built with React and Vite. This is a learning project: it simulates deposits, withdrawals, account balance, and transaction history. It does not connect to a real bank and does not transfer real money.

## Features

- Dashboard with account holder, account number, balance, total deposits, and total withdrawals
- Deposit form with validation and success feedback
- Withdrawal form with validation and insufficient-balance protection
- Transaction history with transaction type, amount, and date
- React Router navigation between four pages
- Reusable React components and props
- Context API for sharing account data
- `useState` and `useEffect` hooks
- `useRef` to focus the amount input
- `localStorage` persistence after refresh
- Responsive layout for mobile and desktop

## Requirements

- Node.js (LTS recommended)
- npm

## Installation

1. Download or clone this repository.
2. Open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

## Project structure

```text
bank-management/
├── src/
│   ├── components/
│   │   ├── AmountForm.jsx
│   │   ├── BalanceCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── TransactionItem.jsx
│   │   └── TransactionList.jsx
│   ├── context/
│   │   └── BankContext.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Deposit.jsx
│   │   ├── Withdraw.jsx
│   │   └── Transactions.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Notes

The sample account details and starting balance are demo data. This project has no backend, authentication, or database.
