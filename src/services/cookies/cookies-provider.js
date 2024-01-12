export class CookiesProvider {
  static get(key: string): any {
    const name = key + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim();
      if (cookie.startsWith(name)) {
        return JSON.parse(cookie.substring(name.length, cookie.length));
      }
    }
    return null;
  }

  static set(key: string, value: any, expirationDays: 7): void {
    const date = new Date();
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie =
      key + '=' + JSON.stringify(value) + ';' + expires + ';path=/';
  }

  static remove(key: string): void {
    const date = new Date();
    date.setTime(date.getTime() - 1);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = key + '=;' + expires + ';path=/';
  }
}
