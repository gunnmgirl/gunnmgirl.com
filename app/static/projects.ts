import web3TransactionList from "./images/web3-transaction-list.png";
import web3TransactionManager from "./images/web3-transaction-manager.png";
import useAA from "./images/use-aa.png";

export const projects = [
  {
    href: "https://web3-transaction-list.vercel.app/",
    title: "Blockchain transaction list",
    description: `Browse Ethereum and Polygon transactions, view transaction details.`,
    projectImage: web3TransactionList,
  },
  {
    href: "https://web3-transaction-manager.vercel.app/",
    title: "Paymaster in action",
    description: `Showcasing Biconomy's Paymaster service by utilizing gasless transactions.`,
    projectImage: web3TransactionManager,
  },
  {
    href: "https://github.com/bcnmy/useAA",
    title: "useAA",
    description: `React Hooks for Account Abstraction on Ethereum`,
    projectImage: useAA,
  },
];
