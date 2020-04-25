<?php

/**
 * To get factorial of a number
 * 
 * @param $n
 * @return integer
 */
function fact($n)
{
    // Termination condition
    if($n == 1)
        return 1;
    else
        return ($n * fact($n-1));
}

?>