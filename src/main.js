import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Journal } from './journal';
import { checkIfVowel } from './journal';

$(document).ready(function (){
  $("form").submit(function (event) {
    event.preventDefault();
    let journal1 = new Journal($("#input-title").val(), $("#input-body").val());
    $("#vowel-output").text(journal1.countLetters()[0]);
    $("#consonants-output").text(journal1.countLetters()[1]);
    $("#words-output").text(journal1.countWords());
    $("#entry-output").text(journal1.getTeaser());
  });
});