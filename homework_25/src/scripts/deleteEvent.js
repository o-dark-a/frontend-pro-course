const container = document.querySelector('.container');

container.addEventListener('click', deleteEvent);

 export function deleteEvent(eventId) {

  console.log(eventId);
  console.log(container);

}
