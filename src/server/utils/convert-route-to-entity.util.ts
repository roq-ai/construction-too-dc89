const mapping: Record<string, string> = {
  companies: 'company',
  feedbacks: 'feedback',
  outlets: 'outlet',
  reservations: 'reservation',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
