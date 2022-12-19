<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CalculatorController extends Controller 
{
    
    public function calculate(Request $request){
        $inputs = $request->all();
        // Get the operands and the operator from the command-line arguments
        $operand1 = $inputs['firstOperand'];
        $operator = $inputs['operator'];
        $operand2 = $inputs['displayValue'];

        // Perform the requested operation
        switch ($operator) {
        case '+':
            $result = $operand1 + $operand2;
            break;
        case '-':
            $result = $operand1 - $operand2;
        break;
        case '*':
            $result = $operand1 * $operand2;
        break;
        case '/':
            $result = $operand1 / $operand2;
        break;
        case 'sqrt':
            $result = sqrt($operand2);
        break;
        default:
            exit('Invalid operator');
        }
        return $result;

    }
}
