const KEY_PREFIX = 'nestify_favorites_';

export function getFavorites(userId) {
  if (!userId) return [];
  const stored = localStorage.getItem(KEY_PREFIX + userId);
  return stored ? JSON.parse(stored) : [];
}

export function toggleFavorite(userId, propertyId) {
  const current = getFavorites(userId);
  const exists = current.includes(propertyId);
  const updated = exists
    ? current.filter((id) => id !== propertyId)
    : [...current, propertyId];
  localStorage.setItem(KEY_PREFIX + userId, JSON.stringify(updated));
  return updated;
}