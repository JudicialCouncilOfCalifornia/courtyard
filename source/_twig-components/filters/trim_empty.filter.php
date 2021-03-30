<?php

$filter = new Twig_SimpleFilter('trim_empty', function ($string) {
  return $string;
});
