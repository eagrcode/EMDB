import { useEffect, useState } from "react";
import axios from "axios";
import requests from "../requests";
import { useQuery } from "@tanstack/react-query";

import { Hero, MovieRows } from "../Components";

function Home() {
  return (
    <>
      <Hero />
      <MovieRows topRated={topRated} upcoming={upcoming} latest={latest} />
    </>
  );
}

export default Home;
