import $ from 'jquery'

import './css/index.css'

import './css/index.scss'

$(function(){
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor','yellow')
}) 