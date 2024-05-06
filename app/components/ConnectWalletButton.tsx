// // components/ConnectWalletButton.tsx
// import { useState } from "react";
// import { ethers } from "ethers";

// const ConnectWalletButton = () => {
//   const [walletAddress, setWalletAddress] = useState<string>("");

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         // Requesting access to the user's MetaMask account
//         await window.ethereum.request({ method: "eth_requestAccounts" });

//         // Get the connected wallet address
//         const accounts = await ethers.listAccounts();
//         if (accounts.length > 0) {
//           setWalletAddress(accounts[0]);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       console.error("MetaMask not installed");
//     }
//   };

//   return (
//     <div>
//       {walletAddress ? (
//         <p className="text-green-500">
//           Connected Wallet Address: {walletAddress}
//         </p>
//       ) : (
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={connectWallet}
//         >
//           Connect Wallet
//         </button>
//       )}
//     </div>
//   );
// };

// export default ConnectWalletButton;

//////////////////

// components/ConnectWalletButton.tsx
import { useState } from "react";
import { ethers } from "ethers";

interface Window {
  ethereum: any;
}

const ConnectWalletButton = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");

  const connectWallet = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        // Requesting access to the user's MetaMask account
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Get the connected wallet address
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();
        const address = await (await signer).getAddress();
        setWalletAddress(address);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error(
        "MetaMask not installed or not available in this environment"
      );
    }
  };

  return (
    <div className="relative">
      {walletAddress ? (
        <p className="text-white border-[#2B2B2B] border-2 rounded-full md:px-5 md:py-3">
          {walletAddress.slice(0, 5)}...
          {walletAddress.slice(38)}
        </p>
      ) : (
        <button
          className=" text-white border-[#2B2B2B] border-2 rounded-full md:px-5 md:py-3"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWalletButton;

//////////

// // components/ConnectWalletButton.tsx
// import { useState } from "react";
// import { ethers } from "ethers";

// const ConnectWalletButton = () => {
//   const [walletAddress, setWalletAddress] = useState<string>("");
//   const [isConnected, setIsConnected] = useState<boolean>(false);

//   const connectWallet = async () => {
//     if (typeof window !== "undefined" && window.ethereum) {
//       try {
//         // Requesting access to the user's MetaMask account
//         await window.ethereum.request({ method: "eth_requestAccounts" });

//         // Get the connected wallet address
//         const provider = new ethers.BrowserProvider(window.ethereum);
//         const signer = provider.getSigner();
//         const address = await (await signer).getAddress();
//         setWalletAddress(address);
//         setIsConnected(true);
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       console.error(
//         "MetaMask not installed or not available in this environment"
//       );
//     }
//   };

//   const disconnectWallet = async () => {
//     try {
//       if (window.ethereum) {
//         await window.ethereum.request({ method: "eth_accounts" });
//         setWalletAddress("");
//         setIsConnected(false);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       {isConnected ? (
//         <div className="relative">
//           <button
//             className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
//             onClick={disconnectWallet}
//           >
//             Disconnect
//           </button>
//           <p className="absolute bg-gray-800 text-white px-3 py-1 mt-1 rounded">
//             Connected Wallet Address: {walletAddress.slice(0, 6)}...
//             {walletAddress.slice(-4)}
//           </p>
//         </div>
//       ) : (
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={connectWallet}
//         >
//           Connect Wallet
//         </button>
//       )}
//     </div>
//   );
// };

// export default ConnectWalletButton;

///////////

// components/ConnectWalletButton.tsx
// import { useState } from "react";
// import { ethers } from "ethers";

// const ConnectWalletButton = () => {
//   const [walletAddress, setWalletAddress] = useState<string>("");

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         // Requesting access to the user's MetaMask account
//         // await window.ethereum.request({ method: 'eth_requestAccounts' });

//         // Get the connected wallet address
//         // const accounts = await ethers.listAccounts();
//         const accounts = await window.ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         if (accounts.length > 0) {
//           setWalletAddress(accounts[0]);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       console.error("MetaMask not installed");
//     }
//   };

//   return (
//     <div>
//       {walletAddress ? (
//         <p>Connected Wallet Address: {walletAddress}</p>
//       ) : (
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={connectWallet}
//         >
//           Connect Wallet
//         </button>
//       )}
//     </div>
//   );
// };

// export default ConnectWalletButton;
