<?php

/**
 * To get the nth fibonacci number
 * 
 * @param $n
 * @return integer
 */
function fib($n)
{
    // Termination condition
    if($n == 0 || $n == 1)
        return $n;
    else
        return fib($n-1) + fib($n-2);
}

?>