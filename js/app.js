document.addEventListener('DOMContentLoaded', () => {
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
    checkListItem.classList.add('form-wrapper');
  
    const name = document.createElement('p');
    name.textContent = `Name:  ${this.fname.value} ${this.lname.value}`;
    checkListItem.appendChild(name);
  
    const email = document.createElement('p');
    email.textContent = `email address: ${form.email.value}`;
    checkListItem.appendChild(email);

    const message = document.createElement('p');
    message.textContent = `Here is why I deserve to win: ${form.message.value}`
    checkListItem.appendChild(message);


    const fillInAgain = document.createElement('h6');
    fillInAgain.textContent = `* Hey, psst! Win your friend a trip with you and fill in the form again, telling us why they deserve it too! *`
    checkListItem.appendChild(fillInAgain);
    
    return checkListItem;
    }

  
  const handleDeleteClick = function () {
  const deleteButton = document.querySelector('#check-list');
  deleteButton.innerHTML = '';
}



  // ------- CREATE UL AND LI TO APPEND ------

  // const handleFormSubmit = function () {
  //   event.preventDefault();

  //   const checkList = createCheckList(event.target);
  //   const checkListItem = createCheckListItem(event.target);
    
  //   checkList.appendChild(checkListItem);
  
  //   event.target.reset();
  //   }

  //   const createcheckList = function () {
  //     const checkList = document.createElement('ul');
  //     name.textContent = `- Check before submitting -`;
  //     checkList.classList.add('check-list');
  //   }
