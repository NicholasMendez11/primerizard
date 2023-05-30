self.addEventListener("activate", (event) => {
  event.waitUntil(
    // Perform any necessary activation tasks here

    // Handle the navigation preload request
    self.addEventListener("fetch", (fetchEvent) => {
      if (fetchEvent.request.method === "GET") {
        fetchEvent.respondWith(
          fetch(fetchEvent.request).catch(() => {
            return self.caches.match(fetchEvent.request);
          })
        );
        event.waitUntil(fetchEvent.preloadResponse);
      }
    })
  );
});
