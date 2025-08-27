(function timedSwitchTab(){
  var DOM_TABS = document.querySelectorAll('overflow-layout-item > tab span span');
  var selected_tab = document.querySelector('overflow-layout-item > tab.selected span span');
  var selected_tab_index = 0;
  var min= 1;
  var max= 2;
  var randomMinutes = Math.floor(Math.random() * (max - min + 1)) + min;

  for (let i = 0; i < DOM_TABS.length; i++) {
      if (selected_tab == DOM_TABS[i] ) {
          selected_tab_index = (i); 
      }
  }
  if (selected_tab_index+1 >=DOM_TABS.length){selected_tab_index=-1};
  DOM_TABS[selected_tab_index+1].click();
  setTimeout(timedSwitchTab, randomMinutes * 60 * 1000);
})();