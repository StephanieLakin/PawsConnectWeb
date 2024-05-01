export interface UserModel {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    passwordHash: Uint8Array;
    passwordSalt: Uint8Array;
    verificationToken: string;
    passwordResetToken?: string;
    passWordResetExpires?: Date;
    passWordResetCreated?: Date;
    profilePicture?: string;
    verifiedAt?: Date;
  }
  