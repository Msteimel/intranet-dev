<?php

/**
 * @file
 * This is the heart of creating custom theme settings. You set all of your form options within
 * the form_system_theme_settings_alter hook. From the Drupal API:
 * "With this hook, themes can alter the theme-specific settings form in any way allowable by
 * Drupal's Form API, such as adding form elements, changing default values and removing form
 * elements. See the Form API documentation on api.drupal.org for detailed information."
 * (https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Render!theme.api.php/function/
 * hook_form_system_theme_settings_alter/8)
 *
 */

/**
 * Implementation of hook_form_system_theme_settings_alter()
 *
 * @param $form
 *   Nested array of form elements that comprise the form.
 *
 * @param $form_state
 *   A keyed array containing the current state of the form.
 */
function lib_typhoon_form_system_theme_settings_alter(&$form, &$form_state) { 
    // Create a section for Lib theme settings
  $form['lib_typhoon_theme_settings'] = array(
    '#type'         => 'details',
    '#title'        => t('Lib Typhoon Theme Settings'),
    '#description'  => t('Configure Typhoon Theme options'),
    '#weight' => -1000,
    '#open' => TRUE,
  );
  
  // Theme test options
  // $form['WHICH_SECTION']['OPTION_NAME']
  $form['lib_typhoon_theme_settings']['lib_navbar'] = array(
    '#type'         => 'checkbox',
    '#title'        => t('Show lib navbar'),
    '#default_value' => theme_get_setting('lib_navbar'),
    '#description'  => t('Check this option if you\'d like to show some secret stuff.'),
  );

}