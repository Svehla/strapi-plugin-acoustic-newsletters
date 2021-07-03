const pluginPermissions = {
  // This permission regards the main component (App) and is used to tell
  // If the plugin link should be displayed in the menu
  // And also if the plugin is accessible. This use case is found when a user types the url of the
  // plugin directly in the browser
  accessPermission: [{ action: 'plugins::acoustic-newsletters.access-permission', subject: null }],
  sendPermission: [{ action: 'plugins::acoustic-newsletters.send-permission', subject: null }],
  editPermission: [{ action: 'plugins::acoustic-newsletters.edit-permission', subject: null }],
};

export default pluginPermissions;