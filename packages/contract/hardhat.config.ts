import * as dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomicfoundation/hardhat-verify";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import { task, subtask } from "hardhat/config";
/**
 * Allow to copy a direcotry from source to target
 * @param source - the source directory
 * @param target - the target directory
 */

function copyDirectory(source:string, target: string): void {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, {recursive: true});
  }

  if (!fs.existsSync(source)) {
    return;
  }

  const files = fs.readdirSync(source);

  files.forEach((file: string) => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}
const config: HardhatUserConfig = {
  solidity: "0.8.24",
};

export default config;
