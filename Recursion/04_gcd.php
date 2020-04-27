<?php

/** 
 * To find GCD of given two positive integers
 * 
 * @param $m
 * @param $n
 * @return mixed
 */
function gcd($m, $n)
{
    // Validation condition
    if($m == 0 && $n == 0)
        return "Undefined";
    // Termination condition
    if($m == 0)
        return $n;
    if($n == 0)
        return $m;
    // Recursion
    return gcd($n%$m, $m);
}

?>