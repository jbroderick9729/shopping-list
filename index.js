// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
// Additionally:

function addItem(){
    $('#js-shopping-list-form').submit(function(event){
        // alert('submitting');
        event.preventDefault();
        let item = $('#shopping-list-entry').val();
        // alert(item); 
        $('.shopping-list').append(
            `<li>
                <span class="shopping-item">${item}</span>
                <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                <span class="button-label">delete</span>
                </button>
        </div>
      </li>`
        );
        $('#shopping-list-entry').val("");
    });      
}

function deleteItem(){
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        $(this).closest('li').remove();
    })
}

function shoppingList(){
    addItem();
    deleteItem();
}

$(shoppingList);



