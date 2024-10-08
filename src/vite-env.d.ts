/// <reference types="vite/client" />
declare module 'Email' {
    const Email: {
      send: (options: {
        SecureToken: string;
        To: string;
        From: string;
        Subject: string;
        Body: string;
      }) => Promise<string>;
    };
    export default Email;
  }
  