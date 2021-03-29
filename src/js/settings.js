// settings and their default value
export const defaultSettings = {
  displayOutline: true,
  hideHelpBtn: false,
  bolderTextInDark: false,
  smallText: false,
  fullWidth: false,
  hideComments: false,
  scrollTopBtn: false,
  hideSlashMenuAfterSpace: false,
  disableSlashMenu: false,
  leftAlignImage: false,
  showHoverText: false,
  hideHiddenColumns: false,
  disablePopupOnURLPaste: false,
  addMoreHeightToPage: false,
  enableSpellcheckForCode: false,
  codeLineNumbers: false,
  customHeadline: false,
};

export const settingDetails = [
  {
    func: "displayOutline",
    name: "Show Outline",
    desc:
      "Show sticky outline (table of contents) for pages that have headings",
  },
  {
    func: "fullWidth",
    name: "Full width for all pages",
    desc: "Set full width for all pages by default",
  },
  {
    func: "smallText",
    name: "Small text for all pages",
    desc: "Set small text for all pages by default",
  },
  {
    func: "scrollTopBtn",
    name: "'Scroll to top' button",
    desc: "Add button at bottom-right corner for scrolling back to top",
  },
  {
    func: "hideSlashMenuAfterSpace",
    name: "Close slash command menu after space",
    desc: "Close slash command popup menu '/' by pressing space key",
    disable_func: "disableSlashMenu",
  },
  {
    func: "disableSlashMenu",
    name: "Don't show slash command menu when pressing '/'",
    desc: "Don't show slash command popup menu when pressing '/'",
    disable_func: "hideSlashMenuAfterSpace",
  },
  {
    func: "showHoverText",
    name: "Show full text on hover",
    desc: "Show full text in table cells on mouse hover",
  },
  {
    func: "codeLineNumbers",
    name: "Show code line numbers",
    desc: "Show line numbers for code blocks",
  },
  {
    func: "disablePopupOnURLPaste",
    name: "Disable popup when pasting link",
    desc: "Disable popup when pasting external URL",
  },
  {
    func: "leftAlignImage",
    name: "Left align images",
    desc: "Align document images to left instead of center",
  },

  {
    func: "addMoreHeightToPage",
    name: "Add more height to page",
    desc: "Add more height to page by hiding top padding, image cover, & icon",
  },
  {
    func: "hideHelpBtn",
    name: "Hide Help button from pages",
    desc: "",
  },
  {
    func: "bolderTextInDark",
    name: "Bolder text in dark mode",
    desc: "Fix poorly recognizable bold text in dark mode",
  },
  {
    func: "hideHiddenColumns",
    name: "Hide 'Hidden columns' in board view",
    desc: "Truly hide 'Hidden columns' in Kanban board view",
  },
  {
    func: "enableSpellcheckForCode",
    name: "Enable spellcheck inside code blocks",
    desc: "",
  },
  {
    func: "hideComments",
    name: "Hide comments section from pages",
    desc: "",
  },
  {
    func: "customHeadline",
    name: "Custom head line",
    desc: "",
  },
];
