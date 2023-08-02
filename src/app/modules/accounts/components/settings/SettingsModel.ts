export interface IProfileDetails {
  avatar: string;
  fName: string;
  lName: string;

  PlayingLevel: string;
  Height: string;
  Weight: string;
  WingSpan: string;
  Vertical: string;
  CGPA: string;
}
export interface IAAUDetails {
  AAU: boolean;
  AAUTeamName: string;
  AAUAgeLevel: string;
  AAUState: string;
}

export interface ITeamDetails {
  avatar: string;
  teamName: string;
  homeTown: string;
}

export interface IUpdateEmail {
  newEmail: string;
  confirmPassword: string;
}

export interface IUpdatePassword {
  currentPassword: string;
  newPassword: string;
  passwordConfirmation: string;
}

export interface IConnectedAccounts {
  google: boolean;
  github: boolean;
  stack: boolean;
}

export interface IEmailPreferences {
  successfulPayments: boolean;
  payouts: boolean;
  freeCollections: boolean;
  customerPaymentDispute: boolean;
  refundAlert: boolean;
  invoicePayments: boolean;
  webhookAPIEndpoints: boolean;
}

export interface INotifications {
  notifications: {
    email: boolean;
    phone: boolean;
  };
  billingUpdates: {
    email: boolean;
    phone: boolean;
  };
  newTeamMembers: {
    email: boolean;
    phone: boolean;
  };
  completeProjects: {
    email: boolean;
    phone: boolean;
  };
  newsletters: {
    email: boolean;
    phone: boolean;
  };
}

export interface IDeactivateAccount {
  confirm: boolean;
}
export const teamDetailsInitValues: ITeamDetails = {
  avatar: "",
  teamName: "",
  homeTown: "string",
};

export const updateEmail: IUpdateEmail = {
  newEmail: "support@keenthemes.com",
  confirmPassword: "",
};

export const updatePassword: IUpdatePassword = {
  currentPassword: "",
  newPassword: "",
  passwordConfirmation: "",
};

export const connectedAccounts: IConnectedAccounts = {
  google: true,
  github: true,
  stack: false,
};

export const emailPreferences: IEmailPreferences = {
  successfulPayments: false,
  payouts: true,
  freeCollections: false,
  customerPaymentDispute: true,
  refundAlert: false,
  invoicePayments: true,
  webhookAPIEndpoints: false,
};

export const notifications: INotifications = {
  notifications: {
    email: true,
    phone: true,
  },
  billingUpdates: {
    email: true,
    phone: true,
  },
  newTeamMembers: {
    email: true,
    phone: false,
  },
  completeProjects: {
    email: false,
    phone: true,
  },
  newsletters: {
    email: false,
    phone: false,
  },
};

export const deactivateAccount: IDeactivateAccount = {
  confirm: false,
};
