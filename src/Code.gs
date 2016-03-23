/* Fires onOpen */
function onOpen() {  
    var ui = SpreadsheetApp.getUi();
    var mainMenu = ui.createMenu("Bugs");
	/* Add option to toggle on the addbugsidebar */
    mainMenu.addItem("Add Bug Sidebar", "showSidebar");
    mainMenu.addToUi();
    ui.showSidebar(createUI());
}

function onInstall() {
    onOpen(); 
}

/* Loads the "bugsidebar" HTML file in the sidebar. */

function showSidebar() {
  var ui = SpreadsheetApp.getUi();
  var html = HtmlService.createTemplateFromFile("bugsidebar")
    .evaluate()
    .setTitle("Add Bug"); // The title shows in the sidebar
  ui.showSidebar(html);
}

/* Creates a new row to the spreadsheet with specific values from the form */
function newBugRow(e) {
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getActiveSheet();
  
 sheet.appendRow(["=INDIRECT(ADDRESS(ROW()-1,COLUMN()))+1", "", "", "", e]);
}

