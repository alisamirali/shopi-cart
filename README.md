# Shopi-Cart

Shopi-Cart is an e-commerce platform built with Next.js, designed to provide a seamless shopping experience. This project includes features like product browsing, cart management, wishlist functionality, and more.

## Features

- **Product Management**: Browse products by category, brand, and price.
- **Cart and Wishlist**: Add products to the cart or wishlist for later purchase.
- **Order Management**: View and manage orders.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Sanity Integration**: Content management powered by Sanity CMS.

## Project Structure

The project is organized as follows:

```
app/                # Application pages and layouts
components/         # Reusable UI components
constants/          # Static data and constants
hooks/              # Custom React hooks
images/             # Static images
lib/                # Utility functions and libraries
sanity/             # Sanity CMS configuration and schemas
store.ts            # Global state management
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later)
- npm, yarn, pnpm, or bun (package managers)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alisamirali/shopi-cart.git
   cd shopi-cart
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the required environment variables. Refer to `sanity/env.ts` for guidance.

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Deployment

Deploy the application using platforms like [Vercel](https://vercel.com). Refer to the Next.js [deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org)
- [Sanity CMS](https://www.sanity.io)
- [Vercel](https://vercel.com)
