

module.exports = {
  platformName: browser.isAndroid ? 'ANDROID' : 'IOS',
  Credentials: {
    email: 'walter+1@helloiconic.com',
    password: 'password'
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
}
