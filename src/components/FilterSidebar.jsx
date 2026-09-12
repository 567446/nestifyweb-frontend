import React from 'react'

export default function FilterSidebar({ filters, setFilters }) {

  const handleChange = (field, value) => {
    setFilters({
      ...filters,
      [field]: value
    });
  };

  const resetFilters = () => {
    setFilters({
      district: "",
      type: "",
      bhk: "",
      minPrice: "",
      maxPrice: "",
      furnishing: "",
      parking: false,
      verified: false,
      locationQuery: ""
    });
  };

  return (
    <aside className="filter-sidebar">

      <div className="filter-header">
        <h3>Filters</h3>

        <button onClick={resetFilters}>
          Reset
        </button>
      </div>

      {/* District */}
      <div className="filter-group">
        <label>District</label>

        <select
          value={filters.district}
          onChange={(e) =>
            handleChange("district", e.target.value)
          }
        >
          <option value="">All Districts</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Navi Mumbai">Navi Mumbai</option>
          <option value="Thane">Thane</option>
        </select>
      </div>

      {/* Property Type */}
      <div className="filter-group">
        <label>Property Type</label>

        <select
          value={filters.type}
          onChange={(e) =>
            handleChange("type", e.target.value)
          }
        >
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
          <option value="Office">Office</option>
        </select>
      </div>

      {/* BHK */}
      <div className="filter-group">
        <label>BHK</label>

        <select
          value={filters.bhk}
          onChange={(e) =>
            handleChange("bhk", e.target.value)
          }
        >
          <option value="">Any BHK</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4+ BHK</option>
        </select>
      </div>

      {/* Minimum Price */}
      <div className="filter-group">
        <label>Minimum Price</label>

        <input
          type="number"
          placeholder="Minimum price"
          value={filters.minPrice}
          onChange={(e) =>
            handleChange("minPrice", e.target.value)
          }
        />
      </div>

      {/* Maximum Price */}
      <div className="filter-group">
        <label>Maximum Price</label>

        <input
          type="number"
          placeholder="Maximum price"
          value={filters.maxPrice}
          onChange={(e) =>
            handleChange("maxPrice", e.target.value)
          }
        />
      </div>

      {/* Furnishing */}
      <div className="filter-group">
        <label>Furnishing</label>

        <select
          value={filters.furnishing}
          onChange={(e) =>
            handleChange("furnishing", e.target.value)
          }
        >
          <option value="">Any</option>
          <option value="Furnished">Furnished</option>
          <option value="Semi-Furnished">
            Semi-Furnished
          </option>
          <option value="Unfurnished">
            Unfurnished
          </option>
        </select>
      </div>

      {/* Parking */}
      <div className="checkbox-filter">
        <label>
          <input
            type="checkbox"
            checked={filters.parking}
            onChange={(e) =>
              handleChange("parking", e.target.checked)
            }
          />

          Parking Available
        </label>
      </div>

      {/* Verified */}
      <div className="checkbox-filter">
        <label>
          <input
            type="checkbox"
            checked={filters.verified}
            onChange={(e) =>
              handleChange("verified", e.target.checked)
            }
          />

          Verified Properties
        </label>
      </div>

    </aside>
  );
}