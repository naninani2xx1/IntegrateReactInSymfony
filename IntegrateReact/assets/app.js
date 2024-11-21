import { registerReactControllerComponents } from '@symfony/ux-react';
import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './cms/assets/plugins/global/plugins.bundle.css';
import './cms/assets/css/style.bundle.css';

registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));
// import './cms/assets/js/scripts.bundle.js';
// import './cms/assets/plugins/global/plugins.bundle.js';
