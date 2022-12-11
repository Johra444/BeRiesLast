import { ethers } from "ethers";
import {
    BERIES_CONTRACT_ABI,
    BERIES_CONTRACT_ADDRESS,
  } from "../constants/index";
  import { utils } from "ethers";
  
export const mintFunction = async (tokenId, amount) => {
    try { 
    const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
    const contract = new ethers.Contract(
      BERIES_CONTRACT_ADDRESS,
      BERIES_CONTRACT_ABI,
      signer
      );
      const value = 0.001 * amount;
      const Mint = await contract.Mint(tokenId, amount, {
        value: utils.parseEther(value.toString()),
      });


      await Mint.wait();
        console.log("Minted");
    } catch (error) {
        console.log(error);
    }
}
