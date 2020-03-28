document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript has loaded');

  const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);
  
  const deleteButton = document.querySelector('#delete-button');
    deleteButton.addEventListener('click', handleDeleteClick);
  })
  
  const handleFormSubmit = function () {
    event.preventDefault();

      const checkListItem = createCheckListItem(event.target);
      const checkList = document.querySelector('#check-list');
      checkList.appendChild(checkListItem);
    
      event.target.reset();
    }

    const createCheckListItem = function (form) {
      const checkListItem = document.createElement('li');
      checkListItem.classList.add('check-list-item');
     
    
      const name = document.createElement('h2');
      // name.textContent = form.fname.value;
      name.textContent = `Your name:  ${this.fname.value} ${this.lname.value}`;
      checkListItem.appendChild(name);
    
      const email = document.createElement('h2');
      email.textContent = `Your email address: ${form.email.value}`;
      checkListItem.appendChild(email);
    
      return checkListItem;
    }
  
  
  const handleDeleteClick = function () {
    const deleteButton = document.querySelector('#check-list');
    deleteButton.innerHTML = '';
  }