<?php
/**
 * Plugin Name:       Ljm Header
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ljm-header
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_ljm_header_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_ljm_header_block_init');

function enqueue_custom_script() {
    if ( ! is_admin() ) {
        wp_enqueue_script(
			'my-custom-script',
			// Unique script handle
			plugins_url('/script.js', __FILE__), // Path to your script file
			array(),
			// Dependencies, if any
			'1.0',
			// Script version number
			true // Load the script in the footer
		);
    }
}
add_action( 'wp_enqueue_scripts', 'enqueue_custom_script' );