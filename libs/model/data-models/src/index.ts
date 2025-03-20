// Core data models

/**
 * Base entity interface with common properties
 */
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * User entity model
 */
export interface User extends BaseEntity {
  username: string;
  email: string;
  displayName?: string;
  isActive: boolean;
  roles: string[];
}

/**
 * Configuration settings model
 */
export interface AppConfig {
  apiEndpoint: string;
  version: string;
  features: {
    [key: string]: boolean;
  };
}
