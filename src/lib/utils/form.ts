export function formatCharCount(current: number, max: number): string {
  return `${current} / ${max}`;
}

export function sanitize(input: string): string {
  return input.replace(/<[^>]*>/g, '').trim();
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
