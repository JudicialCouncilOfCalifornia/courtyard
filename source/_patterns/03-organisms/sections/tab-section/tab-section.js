(function() {
  $(".tabbed").each(function(idx, tabbed) {
    const tablist = tabbed.querySelector("ul");
    const tabs = tablist.querySelectorAll("a");
    const panels = tabbed.querySelectorAll('[id^="section"]');

    // The tab switching function
    const switchTab = function(oldTab, newTab) {
      newTab.focus();
      // Make the active tab focusable by the user (Tab key)
      newTab.removeAttribute("tabindex");
      // Set the selected state
      newTab.setAttribute("aria-selected", "true");
      if (oldTab) {
        oldTab.removeAttribute("aria-selected");
        oldTab.setAttribute("tabindex", "-1");
        let oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
        panels[oldIndex].hidden = true;
      }
      // Get the indices of the new and old tabs to find the correct
      // tab panels to show and hide
      let index = Array.prototype.indexOf.call(tabs, newTab);
      panels[index].hidden = false;
    };

    // Add the tablist role to the first <ul> in the .tabbed container
    tablist.setAttribute("role", "tablist");

    // Add semantics are remove user focusability for each tab
    $(tabs).each(function(i, tab) {
      tab.setAttribute("role", "tab");
      tab.setAttribute("id", "tab" + (i + 1));
      tab.setAttribute("tabindex", "-1");
      tab.parentNode.setAttribute("role", "presentation");

      // Handle clicking of tabs for mouse users
      $(tab).on("click", function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        let currentTab = tablist.querySelector("[aria-selected]");
        switchTab(currentTab, e.currentTarget);
      });

      // Handle keydown events for keyboard users
      tab.addEventListener("keydown", function(e) {
        // Get the index of the current tab in the tabs node list
        let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
        // Work out which key the user is pressing and
        // Calculate the new tab's index where appropriate
        let dir =
          e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? "down" : null;
        if (dir !== null) {
          e.preventDefault();
          // If the down key is pressed, move focus to the open panel,
          // otherwise switch to the adjacent tab
          dir === "down"
            ? panels[i].focus()
            : tabs[dir]
            ? switchTab(e.currentTarget, tabs[dir])
            : void 0;
        }
      });
    });

    // Add tab panel semantics and hide them all
    $(panels).each(function(i, panel) {
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("tabindex", "-1");
      let id = panel.getAttribute("id");
      panel.setAttribute("aria-labelledby", tabs[i].id);
      panel.hidden = true;
    });

    // Initially activate the first tab and reveal the first tab panel
    if (tabs[0].dataset["selected"]) {
      tabs[0].removeAttribute("tabindex");
      tabs[0].setAttribute("aria-selected", "true");
      panels[0].hidden = false;
    }
  });
})();
