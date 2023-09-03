'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.testnet = exports.regtest = exports.crown = void 0;
exports.crown = {
  messagePrefix: '\x18Crown Signed Message:\n',
  bech32: 'bc',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x017507,
  scriptHash: 0x0174f1,
  wif: 0x80,
};
exports.regtest = {
  messagePrefix: '\x18Crown Signed Message:\n',
  bech32: 'bc',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x017507,
  scriptHash: 0x0174f1,
  wif: 0xef,
};
exports.testnet = {
  messagePrefix: '\x18Crown Signed Message:\n',
  bech32: 'bc',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x017acd67,
  scriptHash: 0x017acd51,
  wif: 0xef,
};
