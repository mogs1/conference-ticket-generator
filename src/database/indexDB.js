
export const initDB = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('ticketBookingDB', 1);
  
      request.onerror = () => reject(request.error);
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('bookingData')) {
          db.createObjectStore('bookingData', { keyPath: 'id', autoIncrement: true });
        }
      };
  
      request.onsuccess = () => resolve(request.result);
    });
  };
  
  export const saveToIndexDB = async (data) => {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['bookingData'], 'readwrite');
      const store = transaction.objectStore('bookingData');

      const ticketData = {
        ...data,
        id: new Date().getTime(),
      };

      const request = store.add(ticketData);
  
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  };

  export const getStoredTickets = async () => {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['bookingData'], 'readonly');
      const store = transaction.objectStore('bookingData');
      const request = store.getAll();
  
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  };
  

  export const clearTicketsFromDB = async () => {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['bookingData'], 'readwrite');
      const store = transaction.objectStore('bookingData');
      const request = store.clear();
  
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  };
  