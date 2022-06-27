const Fractional = artifacts.require("Fractional");

module.exports = async function (deployer) {
    await deployer.deploy(Fractional, "FractionalNFT", "FNFT");
};
