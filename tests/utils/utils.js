module.exports = {
  platformName: browser.isAndroid ? 'ANDROID' : 'IOS',
  NewUserCredentials: {
    email: 'noheliaeucedaf@gmail.com',
    password: 'Password1.'
  },
  timeout: 180000,
  waitForTimeout: 30000,
  DevDomain: 'https://storefront.dev.amuse.com/',
  ProdDomain: 'https://amuse.com/',
  ValidEmail: 'vr@mailinator.com',
  ValidEmailPassword: 'Test1234!',
  SelectedProduct:{
    name: '',
    classification: '',
    brand: '',
    price: ''
  },
  SelectedDeliverHour: '',
  SelectedDeliverDate: '',
  SelectedPayment: '',
  fees: 0,
  disconuts: 0,
  taxes: 0,
  referralUrl: 'hola nohe',
  promoCode: 'TEAMAMUSE',
  lastSubtotal: '',
  lastTotal: '',
}
