$(".jcc-cascading-jump-menu").each(function() {
  const $parent = $(this).find(".jcc-cascading-jump-menu__parent");
  const $child = $(this).find(".jcc-cascading-jump-menu__child");

  let data = $(this)
    .find(".cascading-jump-menu__data")
    .val();
  data = JSON.parse(unescape(data));

  // Default 'child' option to use when no 'parent' option selected
  const child_default_option = "<option value=''>" + data.default_child_option + "</option>";

  function updateCascade(groupName) {
    let options = "";
    if (groupName) {
      const groupItems = data.groups[groupName].items;
      const default_option =
        "<option value=''>" + data.groups[groupName].default_option + "</option>";

      // Update 'child' select options
      options = $.map(groupItems, function(groupItem) {
        return '<option value="' + groupItem.url + '">' + groupItem.name + "</option>";
      }).join("");

      $child.html(default_option + options);
    } else {
      // Reset 'child' options
      $child.html(child_default_option);
    }

    if (options.length > 0) {
      $child.removeAttr("disabled");
    } else {
      $child.attr("disabled", "disabled");
    }
  }

  $parent.on("change", function() {
    const groupName = $(this).val();
    updateCascade(groupName);
  });

  $(window).on("pageshow", function() {
    const groupName = $parent.val();
    updateCascade(groupName);
  });
});

$(".jcc-cascading-jump-menu button").on("click", function() {
  // Get url from 'child'
  const $child = $(this)
    .parents(".jcc-cascading-jump-menu")
    .find(".jcc-cascading-jump-menu__child");
  const url = $child.val();
  if (url) {
    window.location.href = url;
  }
});
