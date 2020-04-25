<?php

/**
 * To get factorial of a number
 * 
 * @param $num
 * @return integer
 */
function fact($num)
{
    // Termination condition
    if($num == 1)
        return 1;
    else
        return ($num * fact($num-1));
}
?>