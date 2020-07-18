if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/map/service_worker.js')
        .then(reg => {
        console.log('Service worker registered!', reg);
    });
}