export interface AuthModel {
  api_token: string;
  refreshToken?: string;
  first_name?: string;
  last_name?: string;
  Role?: string;
  AvailableGames: Number;
}

export interface UserAddressModel {
  addressLine: string;
  city: string;
  state: string;
  postCode: string;
}

export interface UserCommunicationModel {
  email: boolean;
  sms: boolean;
  phone: boolean;
}

export interface UserEmailSettingsModel {
  emailNotification?: boolean;
  sendCopyToPersonalEmail?: boolean;
  activityRelatesEmail?: {
    youHaveNewNotifications?: boolean;
    youAreSentADirectMessage?: boolean;
    someoneAddsYouAsAsAConnection?: boolean;
    uponNewOrder?: boolean;
    newMembershipApproval?: boolean;
    memberRegistration?: boolean;
  };
  updatesFromKeenthemes?: {
    newsAboutKeenthemesProductsAndFeatureUpdates?: boolean;
    tipsOnGettingMoreOutOfKeen?: boolean;
    thingsYouMissedSindeYouLastLoggedIntoKeen?: boolean;
    newsAboutStartOnPartnerProductsAndOtherServices?: boolean;
    tipsOnStartBusinessProducts?: boolean;
  };
}

export interface UserSocialNetworksModel {
  linkedIn: string;
  facebook: string;
  twitter: string;
  instagram: string;
}

export interface UserModel {
  PlayingLevel: string;
  Height: string;
  Weight: string;
  WingSpan: string;
  Vertical: string;
  CGPA: string;
  AAU: boolean;
  AAUTeamName: string;
  AAUAgeLevel: string;
  AAUState: string;

  id: number;

  email: string;
  fname: string;
  lname: string;
  avatar: string;
  AvailableGames: Number;
}
