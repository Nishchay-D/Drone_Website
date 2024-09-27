import { Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  const batteries = [
    { name: "Battery Type 1", link: "./Battery1" },
    { name: "Battery Type 2", link: "./Battery2" },
    { name: "Battery Type 3", link: "./Battery3" },
  ];

  // Example authId (in a real scenario, replace this with a dynamic/authenticated value)
  const authId = 'GhT56JsPqR910283';

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Drone Batteries Overview
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {batteries.map((battery, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {battery.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Learn more about this battery&apos;s capacity, efficiency, and more.
                </Typography>
              </CardContent>
              <CardActions>
                {/* Pass authId in the URL */}
                <Link href={`${battery.link}?id=${authId}`} passHref>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
