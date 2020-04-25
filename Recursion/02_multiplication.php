<?php

/**
 * To get product of two integers.
 * 
 * @param $m
 * @param $n
 * @return integer
 */
function mul($m, $n)
{
    // Termination condition
    if($m == 0 || $n == 0)
        return 0;
    else
        return $m + mul($m, $n-1);
}

?>