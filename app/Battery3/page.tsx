'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';


export default function Battery1() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');

  // Example valid authId (replace with real authentication logic)
  const validAuthId = 'your-auth-id';

  useEffect(() => {
    // If id is missing or incorrect, redirect to unauthorized page
    if (!id || id !== validAuthId) {
      router.push('/unauthorized');
    }
  }, [id, router]);
  
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Battery Type 3 Specifications
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Capacity:</strong> 3500mAh
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Charging Time:</strong> 45 minutes
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Flight Time:</strong> 20 minutes
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Energy Efficiency:</strong> Low
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Details:</strong> Great for lightweight drones with short-range use.
      </Typography>
    </Container>
  );
}
