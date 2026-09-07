const FACES = {
	"faces": [
		{"file": "Harold.png", "name": "Daddy"},
		{"file": "Karen.png", "name": "Mommy"},
		{"file": "Harry.png", "name": "Harry"},
		{"file": "Cindy.png", "name": "Cindy"},
		{"file": "Dog.png", "name": "Fido"}
		]
	}
// --------------------------------------------------------------------
<input type="file" id="fileInput">
//---------------------------------------------------------------------
//---------------------------------------------------------------------
const DATABASE = "BabySmashDB";
const VERSION = 1;
const STORE = "faces";
//---------------------------------------------------------------------
function openDatabase() {
	return new Promise((resolve, reject) => {
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
	const db = await openDatabase();
	return new Promise((resolve, reject) => {
		const transaction = db.transaction(STORE, "readwrite");
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
	const db = await openDatabase();
	return new Promise((resolve, reject) => {
		const transaction = db.transaction(STORE, "readonly");
		const store = transaction.objectStore(STORE);
		const request = store.get(id);
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error);
		});
	}
//---------------------------------------------------------------------
// Handle the file upload
document.getElementById("fileInput").addEventListener("change", async event => {
	const file = event.target.files[0];
	if (!file) {
		return;
		}
	try {
		const id = await storeFile(file);
		console.log("File stored with ID:", id);
		}
	catch (error) {
		console.error("Unable to store file:", error);
		}
	});
//---------------------------------------------------------------------
//---------------------------------------------------------------------
const record = await getFile(1);
console.log(record.name);
console.log(URL.createObjectURL(record.file));
