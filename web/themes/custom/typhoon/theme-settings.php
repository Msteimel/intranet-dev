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
function typhoon_form_system_theme_settings_alter(&$form, &$form_state) { 

  // Create a section for util nav link
  $form['lib_util_nav_links'] = array(
    '#type'         => 'details',
    '#title'        => t('Utility Nav Links'),
    '#description'  => t('Quick Nav links displayed at the top of the Page.'),
    '#weight' => -800,
    '#open' => TRUE,
  );
  
  // 1
  $form['lib_util_nav_links']['lib_util_nav1_text'] = array(
      '#type'   => 'textfield',
      '#title'  => t('Util Nav 1 Text'),
      '#default_value'  => theme_get_setting('lib_util_nav1_text'),
    );

  $form['lib_util_nav_links']['lib_util_nav1_url'] = array(
      '#type'   => 'url',
      '#title'  => t('Util Nav 1 URL'),
      '#default_value'  => theme_get_setting('lib_util_nav1_url'),
    );

  // 2
  $form['lib_util_nav_links']['lib_util_nav2_text'] = array(
      '#type'   => 'textfield',
      '#title'  => t('Util Nav 2 Text'),
      '#default_value'  => theme_get_setting('lib_util_nav2_text'),
    );

  $form['lib_util_nav_links']['lib_util_nav2_url'] = array(
      '#type'   => 'url',
      '#title'  => t('Util Nav 2 URL'),
      '#default_value'  => theme_get_setting('lib_util_nav2_url'),
    );

  // 3
  $form['lib_util_nav_links']['lib_util_nav3_text'] = array(
      '#type'   => 'textfield',
      '#title'  => t('Util Nav 3 Text'),
      '#default_value'  => theme_get_setting('lib_util_nav3_text'),
    );

  $form['lib_util_nav_links']['lib_util_nav3_url'] = array(
      '#type'   => 'url',
      '#title'  => t('Util Nav 3 URL'),
      '#default_value'  => theme_get_setting('lib_util_nav3_url'),
    );

  // 4
  $form['lib_util_nav_links']['lib_util_nav4_text'] = array(
      '#type'   => 'textfield',
      '#title'  => t('Util Nav 4 Text'),
      '#default_value'  => theme_get_setting('lib_util_nav4_text'),
    );

  $form['lib_util_nav_links']['lib_util_nav4_url'] = array(
      '#type'   => 'url',
      '#title'  => t('Util Nav 4 URL'),
      '#default_value'  => theme_get_setting('lib_util_nav4_url'),
    );

  // 5
  $form['lib_util_nav_links']['lib_util_nav5_text'] = array(
      '#type'   => 'textfield',
      '#title'  => t('Util Nav 5 Text'),
      '#default_value'  => theme_get_setting('lib_util_nav5_text'),
    );

  $form['lib_util_nav_links']['lib_util_nav5_url'] = array(
      '#type'   => 'url',
      '#title'  => t('Util Nav 5 URL'),
      '#default_value'  => theme_get_setting('lib_util_nav5_url'),
    );
}