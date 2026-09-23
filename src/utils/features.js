export function getFeatures(property) {
  const features = [];

  if (property.type === 'Villa') {
    features.push('Private Garden', 'Swimming Pool');
  }
  if (property.type === 'Apartment') {
    features.push('Lift Access', '24/7 Security');
  }
  if (property.type === 'House') {
    features.push('Independent Entrance', 'Terrace');
  }
  if (property.type === 'Office') {
    features.push('Conference Room', 'High-Speed Internet');
  }
  if (property.price > 15000000) {
    features.push('Premium Interiors');
  }

  return features;
}