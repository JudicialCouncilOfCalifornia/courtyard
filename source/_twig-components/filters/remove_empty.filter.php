<?php

$filter = new Twig_SimpleFilter('remove_empty', function ($string) {
  return $string;
});
