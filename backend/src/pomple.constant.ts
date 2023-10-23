export function getEnvOrFail(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error('Missing environment token');
  }

  return value;
}

export const POMPLE_JWT_SECRET: string = getEnvOrFail('JWT_SECRET');
export const POMPLE_JWT_EXPIRATION_IN_MS = Number(
  getEnvOrFail('JWT_EXPIRATION_IN_MS'),
);
