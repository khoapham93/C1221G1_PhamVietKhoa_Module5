function threeDotForFacility(){
  document.querySelector('.card-all').onclick = ({
                                                   target
                                                 }) => {
    if (!target.classList.contains('more')) return;
    document.querySelectorAll('.dropout.active').forEach(
      (d) => d !== target.parentElement && d.classList.remove('active')
    );
    target.parentElement.classList.toggle('active');
  };
}
function threeDotForCustomer(){
  document.querySelector('.table').onclick = ({
                                                target
                                              }) => {
    if (!target.classList.contains('more')) return;
    document.querySelectorAll('.dropout.active').forEach(
      (d) => d !== target.parentElement && d.classList.remove('active')
    );
    target.parentElement.classList.toggle('active');
  };
}

function showFacilityType() {
  let selected = $("#facilityTypeId").val();
  if (selected == 3) { // Room
    $("#villaAndHouseOnly").hide();
    $("#villaOnly").hide();
    $("#roomOnly").show();
    $('#villaAndHouseOnly').find("input").each(function () {
      $(this).val('');
    });
    $('#villaOnly').find("input").each(function () {
      $(this).val('');
    });
  } else if (selected == 2) { //House
    $("#villaAndHouseOnly").show();
    $("#villaOnly").hide();
    $("#roomOnly").hide();
    $('#villaOnly').find("input").each(function () {
      $(this).val('');
    });
    $('#roomOnly').find("input").each(function () {
      $(this).val('');
    });
  } else if (selected == 1) { //Villa
    $("#villaAndHouseOnly").show();
    $("#villaOnly").show();
    $("#roomOnly").hide();
    $('#roomOnly').find("input").each(function () {
      $(this).val('');
    });
  }else {
    $("#villaAndHouseOnly").show();
    $("#villaOnly").show();
    $("#roomOnly").show();
  }
}
