require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift repeat sad protect just process metal gift'; 
let testAccounts = [
"0x10b8b8f02dd911e7c6240db740a3ab9ee4b53b6b898715fcf8612d3e79b4eb07",
"0x319c520964207ab82911a20824e87c80630b4a6f33c93be9128d1f2bdb9e0e73",
"0x9de800ae9dc53187804e3b1270aa6ba584ef56dd9bc88c59bc4ed3ffa5e55372",
"0xcd5355e01a7b95b2e936ce7729c7609685417fa5188c069b7a3100ff0c37abf0",
"0x9537252fc7d7418dafda2889fb914ac960296b31cd024abe00ae7b9a39cceb14",
"0x92622340fad7a6b334196e102465a24b56463efd3e6196c6e2f2c95076e9296b",
"0x42e272f9a71a49e1ae0f194e59c049ebcb77e7fe3ea4d44da2ba6d5e46978d2a",
"0x147c3f5fac3ea1adc915a27ef90e8bcbb38b4b19451203fa46c2d27f56bb0a0e",
"0xfee26a56db5d06405130cc97168ea2274becb953850080b2dbb30076483bd4de",
"0xf6ae6b797d998c03956dc4840efa21097c62f16a5f9c82b5abb93e1016e33f4e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
