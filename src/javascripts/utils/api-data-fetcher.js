export async function getAPIDataAsJsObjects(url) {
  try {
    const response = await fetch(url);
    const itemsArray = await response.json();
    return itemsArray;
  } catch (error) {
    /*eslint-disable no-console */
    console.log(error);
    /*eslint-enable no-alert */
  }
}
