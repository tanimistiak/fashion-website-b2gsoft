import { Manrope, Pacifico } from "next/font/google";

const manrope = Manrope({
  weight: ["700", "400", "600", "300"], // Choose specific font weights
  subsets: ["latin"], // Use the desired subsets
});
const pacifico = Pacifico({
  weight: ["400"], // Choose specific font weights
  subsets: ["latin"], // Use the desired subsets
});

export { manrope, pacifico };