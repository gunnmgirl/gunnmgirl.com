import web3TransactionList from "./images/web3-transaction-list.png";
import web3TransactionManager from "./images/web3-transaction-manager.png";
import useAA from "./images/use-aa.png";
import clustifyMapbox from "./images/clustify-mapbox.png";
import gitstalk from "./images/gitstalk.png";
import yearPercentage from "./images/year-percentage.png";
import bearClone from "./images/bear-clone.png";

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
  {
    href: "https://github.com/gunnmgirl/clustify-mapbox",
    title: "Map clustify",
    description: `Customize pins on the map. Choose between Mapbox, Leaflet and OpenLayers and easily customize your map components.`,
    projectImage: clustifyMapbox,
  },
  {
    href: "http://mygitstalk.surge.sh/",
    title: "Gitstalk",
    description: `Discover who's up to what on Github.`,
    projectImage: gitstalk,
  },
  {
    href: "http://year-percentage.surge.sh/",
    title: "Year percentage",
    description: `Project for Hacktoberfest. Hacktoberfest is a month-long celebration of open source projects and the entire community of contributors.`,
    projectImage: yearPercentage,
  },
  {
    href: "http://bear-clone.surge.sh/",
    title: "Bear clone",
    description: `Bear is perfect for everything from quick notes to in-depth essays. Full in-line image support brings your writing to life.`,
    projectImage: bearClone,
  },
];
