
export const capitalizeWords = (fieldKey: string = ''): string => fieldKey?.replace(/\b\w/g, (match) => match.toUpperCase())?.split('_')?.join(' ');
