require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stomach razor noise horse gesture merry fog giggle'; 
let testAccounts = [
"0x7b37e45deb98402f84861dbee001e6c2ed2103947ab13c4872b44c8d360a8001",
"0x8aa779bf8358204f646c9c27f38fdd8e66594c108014ce52a3818faf3329898c",
"0xf72bdaec04ee9f409410f74580341aefc3155f2140dff34a09989929e89b4884",
"0x7727968fb1d519ec2eb198a4f0b2cfccbc14839aefd2762ea584e3b095b3024d",
"0x7601d73acbff5510f05d9169d50c03546bd65ade007d1e21e002f7368ca4f57d",
"0x5d6d460596bda04c738778bcd0d4bbbaae8924e8f6ddec9b8e1ba39af044a506",
"0xfd658b66058952112f2fa7c0c16024048f2235f44793e153a1ebc85c14ea33c4",
"0xaf5906ee0ad46111a1d9765cb91e3930be47a75da23dffdb6791ca1d4754e7f3",
"0x00004d5c632c25942728487dabc3f9754651dca1ed250e0e6617cd89d9ce9ac3",
"0xf0a46ee76487ee16cae1946b4632a8572c75a08ef7cc7d6cc7059f6c8dbe7b7b"
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
            version: '^0.8.0'
        }
    }
};

