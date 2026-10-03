// Unsplash photos (Unsplash License) used on the GCatcode landing. Astro
// downloads and optimizes them at build time and serves them from the site, so
// visitors never request images.unsplash.com. Alt text lives in the
// dictionaries (`landing.images`); the background photo is decorative.

export interface LandingPhoto {
  src: string;
  width: number;
  height: number;
  author: string;
  authorUrl: string;
}

const referral = "?utm_source=gcatcode&utm_medium=referral";

function unsplashPhoto(
  photo: string,
  width: number,
  height: number,
  author: string,
  username: string,
  crop = "entropy",
): LandingPhoto {
  return {
    src: `https://images.unsplash.com/${photo}?w=${width}&h=${height}&fit=crop&crop=${crop}&fm=jpg&q=80`,
    width,
    height,
    author,
    authorUrl: `https://unsplash.com/@${username}${referral}`,
  };
}

export const landingPhotos = {
  hero: unsplashPhoto("photo-1767327142313-4a5f0f13ec9b", 1200, 1500, "Kaden Taylor", "kaden_t", "faces"),
  problem: unsplashPhoto("photo-1630561535290-24c621d6b463", 1600, 1200, "Nick Sorockin", "rubtsovskcat"),
  services: unsplashPhoto("photo-1556745753-b2904692b3cd", 1200, 1500, "Patrick Tomasso", "impatrickt", "faces"),
  method: unsplashPhoto("photo-1590402494587-44b71d7772f6", 1600, 1200, "airfocus", "airfocus"),
  finalCta: unsplashPhoto("photo-1709066946896-83229cd579a4", 2400, 1200, "Sergio Rodríguez", "sergiordgz"),
} satisfies Record<string, LandingPhoto>;

export const unsplashUrl = `https://unsplash.com/${referral}`;
