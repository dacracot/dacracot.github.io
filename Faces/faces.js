// --------------------------------------------------------------------
// const FACES = {
// 	"faces": [
// 		{"file": "Harold.png", "name": "Daddy"},
// 		{"file": "Karen.png", "name": "Mommy"},
// 		{"file": "Harry.png", "name": "Harry"},
// 		{"file": "Cindy.png", "name": "Cindy"},
// 		{"file": "Dog.png", "name": "Fido"}
// 		]
// 	}
//---------------------------------------------------------------------
const DATABASE = "BabySmashDB";
const VERSION = 1;
const STORE = "faces";
//---------------------------------------------------------------------
const database = await openDatabase();
//---------------------------------------------------------------------
function openDatabase() {
	return new Promise((resolve, reject) => {
		if (database) {
			resolve(database);
			return;
			}
		const request = indexedDB.open(DATABASE, VERSION);
		request.onupgradeneeded = event => {
			const db = event.target.result;
			if (!db.objectStoreNames.contains(STORE)) {
				db.createObjectStore(STORE, {
					keyPath: "id",
					autoIncrement: true
					});
				}
			};
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error);
		});
	}
//---------------------------------------------------------------------
async function storeFile(faceName,faceImageFile) {
	return new Promise((resolve, reject) => {
		const transaction = database.transaction(STORE, "readwrite");
		const store = transaction.objectStore(STORE);
		const record = {
			name: faceName,
			file: faceImageFile
			};
		const request = store.add(record);
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error);
		});
	}
//---------------------------------------------------------------------
async function getFile(id) {
	return new Promise((resolve, reject) => {
		const transaction = database.transaction(STORE, "readonly");
		const store = transaction.objectStore(STORE);
		const request = store.get(id);
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error);
		});
	}
//---------------------------------------------------------------------
async function getFileCount() {
	return new Promise((resolve, reject) => {
		const transaction = database.transaction(STORE, "readonly");
		const store = transaction.objectStore(STORE);
		const request = store.count();
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error);
		});
	}
//---------------------------------------------------------------------
