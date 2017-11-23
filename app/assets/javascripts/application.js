// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery3
//= require_tree .

//OPEN SIDE-MENU
function openNav() {
    document.getElementById("menu-navigation").style.width = "100%";
}
//CLOSE SIDE-MENU
function closeNav() {
    document.getElementById("menu-navigation").style.width = "0";
}
//OPEN SIDE-SOCIAL-MENU
function openSocialNav() {
  document.getElementById("menu-social").style.width = "100%";
}
//CLOSE SIDE-SOCIAL-MENU
function  closeSocialNav() {
  document.getElementById("menu-social").style.width = "0";
}