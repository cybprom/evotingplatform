import { ethers } from "ethers";
import voteAbi from "./build/ProposalFactory.json";

// const voteAbi: ethers.Interface | ethers.InterfaceAbi = [];

const voteContract = (provider: ethers.ContractRunner | null | undefined) => {
  return new ethers.Contract(
    "0xB6BbB4Dc00165BfD8a4F0Be3432c49FD9C25dB35",
    voteAbi.abi,
    provider
  );
};

export default voteContract;
