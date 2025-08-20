-- Create the contact_messages table in Supabase SQL Editor
CREATE TABLE contact_messages (
  id BIGSERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (optional, for better security)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts from anyone (for contact form)
-- You might want to restrict this further based on your needs
CREATE POLICY "Allow public inserts" ON contact_messages FOR INSERT 
TO public WITH CHECK (true);

-- Create a policy for reading (only for authenticated users/admins)
-- This prevents public users from reading all contact messages
CREATE POLICY "Allow authenticated read" ON contact_messages FOR SELECT 
TO authenticated USING (true);