$(document).ready(function () {
    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url'],textarea'),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');

    // Handle primary color change
    $('#primary-color').change(function() {
        var selectedColor = $(this).val();
        var btnClass;
        if (selectedColor === 'turquoise') {
            btnClass = 'btn-primary-turquoise';
        } else if (selectedColor === 'blue') {
            btnClass = 'btn-primary-blue';
        } else {
            btnClass = 'btn-primary';
        }
        $('div.setup-panel div a').removeClass('btn-primary btn-primary-turquoise btn-primary-blue').addClass(btnClass);
    });
});

function displayPricingDetails() {
    var productName = document.getElementById('product-name').value;
    var productDescription = document.getElementById('product-description').value;
    var netPrice = document.getElementById('net-price').value;
    var listPrice = document.getElementById('list-price').value;
    var discountPrice = document.getElementById('discount-price').value;
    var shippingCharges = document.getElementById('shipping-charges').value;
    var stockLevel = document.getElementById('stock-level').value;

    var output = `
        <p><strong>Product Name:</strong> ${productName}</p>
        <p><strong>Product Description:</strong> ${productDescription}</p>
        <p><strong>Net Price:</strong> ${netPrice}</p>
        <p><strong>List Price:</strong> ${listPrice}</p>
        <p><strong>Discount Price:</strong> ${discountPrice}</p>
        <p><strong>Shipping Charges:</strong> ${shippingCharges}</p>
        <p><strong>Stock Level:</strong> ${stockLevel}</p>
    `;
    document.getElementById('pricing-output').innerHTML = output;
}
