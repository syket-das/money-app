const { db } = require('../../utils/db');

function addBankAccount(userId, data) {
  return db.bankAccount.create({
    data: {
      userId,
      ...data,
    },
  });
}

function removeBankAccount(id) {
  return db.bankAccount.delete({
    where: {
      id,
    },
  });
}

function getBankAccountsByUser(userId) {
  return db.bankAccount.findMany({
    where: {
      userId,
    },
  });
}

module.exports = {
  addBankAccount,
  removeBankAccount,
  getBankAccountsByUser,
};
