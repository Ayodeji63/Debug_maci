import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { InitialVoiceCreditProxyContractName } from "../constants";
import { initialVoiceCreditProxy } from "../typechain-types/maci-contracts/contracts";

const DEFAULT_INITIAL_VOICE_CREDITS = 99;

const deployContracts: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();

    await hre.deployments.deploy(InitialVoiceCreditProxyContractName, {
        from: deployer,
        args: [DEFAULT_INITIAL_VOICE_CREDITS],
        log: true,
        autoMine: true,
    });

    const intialVoiceCreditProxy = await hre.ethers.getContract(InitialVoiceCreditProxyContractName, deployer);
    console.log(`The intial voice credit proxy is deployed at ${initialVoiceCreditProxy.getAddress()}`)

}