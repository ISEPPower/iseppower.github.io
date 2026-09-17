/** Include the repository base in every internal URL. */
export function sitePath(path = ''): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\/+/, '');
}
