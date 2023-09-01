# Stock Portfolio Tracker TS

This repository contains a basic implementation of a stock portfolio tracker backend using Express.js and TypeScript. It includes features for user authentication, adding and removing stocks from the portfolio, real-time stock data retrieval using a financial data API, and tracking portfolio performance over time.

The Stock Portfolio Tracker is a web-based application that allows users to manage their stock portfolios. It provides real-time stock data, portfolio analysis, and performance tracking.

## Features

- **User Authentication:** Secure user registration and login system.
- **Stock Portfolio Management:** Add, remove, and track stocks in your portfolio.
- **Real-Time Stock Data:** Fetch real-time stock prices and information.
- **Portfolio Diversification:** Analyze and optimize your portfolio for better diversification.
- **Historical Performance:** View historical performance charts of your portfolio.
- **User-Friendly API:** Well-documented API for easy integration into other applications.

## Getting Started

- Prerequisites
- Node.js and npm installed on your system.

## Installation

Clone the repository:

```bash
git clone https://github.com/BaseMax/stock-portfolio-tracker-ts.git
cd stock-portfolio-tracker-ts
```

Install dependencies:

```bash
npm install
```

Configure environment variables:

Create a `.env` file in the project root and define the following variables:

```makefile
PORT=3000
DATABASE_URL=mongodb://localhost/stock-portfolio
API_KEY=your_stock_api_key
```

Start the development server:

```bash
npm run dev
```

Access the application at `http://localhost:3000` in your web browser.

## Usage

- Register a new user account or log in if you already have an account.
- Add stocks to your portfolio by searching for their symbols or names.
- Track real-time stock prices and portfolio performance.
- Analyze and optimize your portfolio for better returns.

## API Documentation

For API documentation and endpoints, please refer to the API Documentation file.

## Contributing

Contributions are welcome! Please read the Contributing Guidelines for more information.

## License

This project is licensed under the GPL-3.0 License.

Copyright 2023, Max Base
