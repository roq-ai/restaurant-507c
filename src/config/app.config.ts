interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Restaurant Manager', 'Staff Member', 'Customer'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user information', 'Manage restaurant information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/dfc1af80-8a62-4b4a-a49c-151eb4adc8cf',
};
