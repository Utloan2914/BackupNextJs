import React from 'react';
import { Container, Box, Grid } from '@mui/material';
import CarouselSlider from '@/app/carouselSlider/page';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Container>
      <Box mt={5}>
        <h2 className="text-4xl font-bold text-center">Welcome to Pet CRUD Application!</h2>
        <h3 className="text-xl mt-2">
          Our application allows you to manage your pet information easily. You can create, read, update, and delete (CRUD) pet profiles with just a few clicks.
        </h3>
      </Box>

      <Box mt={5} ml={14}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition duration-300">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Create a Pet Profile</h5>
              <p className="font-normal text-black dark:text-gray-400">Add new pets to your collection by providing their details. It’s simple and quick!</p>
            </a>
          </Grid>

          <Grid item xs={12} sm={6}>
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition duration-300">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Update Pet Information</h5>
              <p className="font-normal text-black dark:text-gray-400">Keep your pet profile up-to-date by editing their information anytime.</p>
            </a>
          </Grid>

          <Grid item xs={12} sm={6}>
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition duration-300">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">View Pet Profiles</h5>
              <p className="font-normal text-black dark:text-gray-400">Browse through the profiles of all your pets and learn more about each one.</p>
            </a>
          </Grid>

          <Grid item xs={12} sm={6}>
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition duration-300">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Delete Pet Profiles</h5>
              <p className="font-normal text-black dark:text-gray-400">Remove pet profiles from your collection if they are no longer needed.</p>
            </a>
          </Grid>
        </Grid>
      </Box>

      <Box mt={5} textAlign="center">
        <Link href="/productAPI" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded focus:outline-none">
            Go to Pet CRUD
          </button>
        </Link>
      </Box>

      <h3 className="text-3xl font-bold text-center mt-5">Pet Cuteeeeeeee</h3>
      <CarouselSlider />
    </Container>
  );
}
