-- StayFlow MVP Database Draft

CREATE TABLE users (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  role TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE properties (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT,
  status TEXT DEFAULT 'free',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE bookings (
  id UUID PRIMARY KEY,
  property_id UUID REFERENCES properties(id),
  guest_name TEXT NOT NULL,
  check_in_date DATE NOT NULL,
  check_out_date DATE NOT NULL,
  amount NUMERIC,
  source TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE tasks (
  id UUID PRIMARY KEY,
  property_id UUID REFERENCES properties(id),
  booking_id UUID REFERENCES bookings(id),
  type TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  date DATE,
  time TIME,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
