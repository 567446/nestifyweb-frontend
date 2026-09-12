
import PropertyCard from '../components/PropertyCard';
import FilterSidebar from '../components/FilterSidebar';
import properties from '../data/propertiesData';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';

const defaultFilters = {
  district: "",
  type: "",
  bhk: "",
  minPrice: "",
  maxPrice: "",
  furnishing: "",
  parking: false,
  verified: false,
  locationQuery: ""
};

function Properties({ incomingFilters }) {
  const [filters, setFilters] = useState(defaultFilters);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    if (!incomingFilters) return;
    setFilters((prev) => ({
      ...prev,
      type: incomingFilters.propertyType ?? prev.type,
      minPrice: incomingFilters.minPrice ?? prev.minPrice,
      maxPrice: incomingFilters.maxPrice ?? prev.maxPrice,
      locationQuery: incomingFilters.location ?? prev.locationQuery
    }));
  }, [incomingFilters]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      if (filters.district && p.district !== filters.district) return false;
      if (filters.type && p.type !== filters.type) return false;

      if (filters.bhk) {
        const bhkNum = Number(filters.bhk);
        if (bhkNum === 4 ? p.bhk < 4 : p.bhk !== bhkNum) return false;
      }

      if (filters.minPrice && p.price < Number(filters.minPrice)) return false;
      if (filters.maxPrice && p.price > Number(filters.maxPrice)) return false;
      if (filters.furnishing && p.furnishing !== filters.furnishing) return false;
      if (filters.parking && !p.parking) return false;
      if (filters.verified && !p.verified) return false;

      if (
        filters.locationQuery &&
        filters.locationQuery.trim() !== '' &&
        !p.location.toLowerCase().includes(filters.locationQuery.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <section className="properties-section" id="properties">

      <div className="section-heading">
        <div>
          <p className="section-label">EXPLORE PROPERTIES</p>
          <h2>Featured Properties</h2>
        </div>

        <button className="view-btn" onClick={() => setFilters(defaultFilters)}>
          View all →
        </button>
      </div>

      <div className="properties-layout">

        <FilterSidebar filters={filters} setFilters={setFilters} />

        <div>
          <p className="results-count">
            {filteredProperties.length} propert{filteredProperties.length === 1 ? 'y' : 'ies'} found
          </p>

          {filteredProperties.length === 0 ? (
            <div className="no-results">
              <p>No properties match your filters.</p>
              <button onClick={() => setFilters(defaultFilters)}>Clear filters</button>
            </div>
          ) : (
            <div className="property-grid">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  isFavorite={favorites.has(property.id)}
                  onToggleFavorite={() => toggleFavorite(property.id)}
                />
              ))}
            </div>
          )}
        </div>

      </div>

    </section>
  );
}

export default Properties;