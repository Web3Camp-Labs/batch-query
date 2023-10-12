// import {ethers} from "ethers";

onmessage = function(event) {
    const accounts = event.data.accounts;

    console.log(accounts)

    // async function transfer(item) {
    //     const provider = new ethers.providers.Web3Provider((window).ethereum)
    //     const signer = new ethers.Wallet(item.privateKey, provider);
    //     const amountAft = ethers.utils.parseEther(item.amount);
    //     console.log(signer,amountAft)
    //
    //     // try {
    //     //     // const balance = await wallet.getBalance();
    //     //     if (balance.gte(ethers.utils.parseEther(amount))) {
    //     //         const transaction = await wallet.sendTransaction({
    //     //             to: recipient,
    //     //             value: ethers.utils.parseEther(amount)
    //     //         });
    //     //
    //     //     }
    //     // } catch (error) {
    //     //     console.log(error)
    //     // }finally {
    //     //     // self.postMessage(`成功转账 ${amount} ETH，交易哈希: ${transaction.hash}`);
    //     // }
    //     postMessage(`成功转账 1 ETH，交易哈希:111`);
    // }
    //
    // for (let i = 0; i < accounts; i++) {
    //     transfer(accounts[i]);
    // }
};
