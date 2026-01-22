# Portfolio Support Backend

Backend server for handling Razorpay payments and Supabase operations.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` file with your credentials (already created)

3. Create the Supabase table by running this SQL in your Supabase dashboard:

```sql
CREATE TABLE supporters (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL DEFAULT 'Anonymous',
  message TEXT,
  amount INTEGER NOT NULL,
  is_private BOOLEAN DEFAULT false,
  payment_id VARCHAR(255),
  order_id VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE supporters ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (only non-private supporters)
CREATE POLICY "Public supporters are viewable by everyone"
ON supporters FOR SELECT
USING (is_private = false);

-- Allow service role to insert
CREATE POLICY "Service role can insert supporters"
ON supporters FOR INSERT
WITH CHECK (true);
```

## Running

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

## API Endpoints

- `POST /api/create-order` - Create Razorpay order
- `POST /api/verify-payment` - Verify payment and store supporter
- `GET /api/supporters` - Get recent public supporters
- `GET /api/health` - Health check
