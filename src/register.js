const register = (swUrl, config) => {
    if('serviceWorker' in navigator){
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/pokedex-serviceworker.js')
                .then((reg) => {
                  console.log('Service worker registered.', reg);
                });
          });
    }
}

export default register;