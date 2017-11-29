pragma solidity ^0.4.15;

/**
 * @title Basic Storage
 */
contract Storage {
  /**
   * Storage variables
   */
  string public storage_;

  /**
   * Events
   */
  event LogStorageSet(string storageVal);

  /**
   * @dev Set storage value.
   * @param _storage New value.
   */
  function setStorage(string _storage) external {
    storage_ = _storage;
    LogStorageSet(_storage);
  }
}
