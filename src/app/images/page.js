'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Navigation from "@/components/Navigation";

const API_KEY = '66c7d097379068cd35472e7cb5b25126';
const USER_ID = '197895414@N06';

function buildPhotoURL(photo, size = 'c') {
  // Size options: s (75x75), q (150x150), t (100 on longest side),
  // m (240), n (320), c (800), b (1024), h (1600), k (2048)
  return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
}

function getPhotoHeight(photo) {
  // Determine relative height based on aspect ratio
  const width = parseInt(photo.width_c || 800);
  const height = parseInt(photo.height_c || 600);
  const aspectRatio = height / width;

  // Categorize into grid spans
  if (aspectRatio > 1.3) return 'tall'; // Portrait
  if (aspectRatio < 0.7) return 'wide'; // Panorama
  return 'normal'; // Square-ish
}

export default function Images() {
  const [photos, setPhotos] = useState([]);
  const [justifiedRows, setJustifiedRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    async function getPhotostream() {
      try {
        let allPhotos = [];
        let page = 1;
        let totalPages = 1;

        // Fetch all pages of photos
        while (page <= totalPages) {
          const url = `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${API_KEY}&user_id=${USER_ID}&format=json&nojsoncallback=1&per_page=500&page=${page}&extras=url_c,url_o,date_taken`;

          const response = await fetch(url);
          const data = await response.json();

          if (data.stat === 'fail') {
            throw new Error(data.message || 'Failed to fetch photos');
          }

          allPhotos = [...allPhotos, ...data.photos.photo];
          totalPages = data.photos.pages;
          page++;
        }

        // Sort by date taken (newest to oldest - reverse chronological order)
        const sortedPhotos = allPhotos.sort((a, b) => {
          const dateA = new Date(a.datetaken);
          const dateB = new Date(b.datetaken);
          return dateB - dateA;
        });

        setPhotos(sortedPhotos);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    getPhotostream();
  }, []);

  // Calculate justified layout when photos change
  useEffect(() => {
    if (photos.length === 0) return;

    const calculateLayout = () => {
      const TARGET_HEIGHT = 250; // Target row height in pixels
      const GAP = 8; // Gap between photos

      // Get the actual container width from the ref
      const CONTAINER_WIDTH = containerRef.current ? containerRef.current.offsetWidth : 800;

      const rows = [];
      let currentRow = [];
      let currentRowWidth = 0;

      photos.forEach((photo) => {
        const aspectRatio = (photo.width_c || 800) / (photo.height_c || 600);
        const photoWidth = TARGET_HEIGHT * aspectRatio;

        if (currentRowWidth + photoWidth + (currentRow.length * GAP) > CONTAINER_WIDTH && currentRow.length > 0) {
          // Calculate actual height for this row to fit exactly
          const totalGaps = (currentRow.length - 1) * GAP;
          const availableWidth = CONTAINER_WIDTH - totalGaps;
          const totalAspectRatio = currentRow.reduce((sum, p) => {
            return sum + ((p.width_c || 800) / (p.height_c || 600));
          }, 0);
          const rowHeight = availableWidth / totalAspectRatio;

          rows.push({
            photos: currentRow,
            height: rowHeight,
            width: CONTAINER_WIDTH
          });

          currentRow = [photo];
          currentRowWidth = photoWidth;
        } else {
          currentRow.push(photo);
          currentRowWidth += photoWidth;
        }
      });

      // Add the last row - keep it at target height if it doesn't fill the row
      if (currentRow.length > 0) {
        const totalGaps = (currentRow.length - 1) * GAP;
        const availableWidth = CONTAINER_WIDTH - totalGaps;
        const totalAspectRatio = currentRow.reduce((sum, p) => {
          return sum + ((p.width_c || 800) / (p.height_c || 600));
        }, 0);
        const rowHeight = availableWidth / totalAspectRatio;

        rows.push({
          photos: currentRow,
          height: Math.min(rowHeight, TARGET_HEIGHT), // Don't make last row too tall
          width: CONTAINER_WIDTH
        });
      }

      setJustifiedRows(rows);
    };

    // Delay calculation to ensure DOM is ready
    const timer = setTimeout(() => {
      calculateLayout();
    }, 100);

    // Recalculate on window resize
    window.addEventListener('resize', calculateLayout);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateLayout);
    };
  }, [photos]);

  return (
    <div className="min-h-screen p-8">
      <div>
        <Navigation />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="">
          <div className="mt-4 text-lg font-[--font-playfair-display]">
            {loading && <p className="text-center">Loading photos...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {!loading && !error && photos.length === 0 && <p>No photos found.</p>}
            {!loading && !error && justifiedRows.length > 0 && (
              <div>
                <hr className="mt-4 mb-2 m-auto w-xs" />
                {/* other ideas: through the lens, a visual collection, what i see, "light, shadow, and everything between", visual notes, "the world, observed" */}
                <div className="text-center mb-2">frames from life</div>
                <hr className="mb-6 m-auto w-xs" />
                <div ref={containerRef} className="flex flex-col gap-2 w-full">
                  {justifiedRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex gap-2 justify-start" style={{ height: `${row.height}px` }}>
                      {row.photos.map((photo) => {
                        const aspectRatio = (photo.width_c || 800) / (photo.height_c || 600);
                        const width = row.height * aspectRatio;

                        return (
                          <a
                            key={photo.id}
                            href={`https://www.flickr.com/photos/${USER_ID}/${photo.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative group shrink-0 transition-bg"
                            style={{ width: `${width}px`, height: `${row.height}px` }}
                          >
                            <Image
                              src={photo.url_c || buildPhotoURL(photo, 'c')}
                              alt={photo.title || 'Flickr photo'}
                              width={photo.width_c || 800}
                              height={photo.height_c || 600}
                              className="w-full h-full object-cover shadow-gray-400 dark:shadow-gray-700 group-hover:shadow-lg group-hover:shadow-gray-400 dark:group-hover:shadow-gray-700 transition-shadow duration-300"
                              quality={85}
                            />
                          </a>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}