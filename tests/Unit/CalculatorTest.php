<?php

namespace Tests\Unit;

use Tests\TestCase;

class CalculatorTest extends TestCase
{

     /** @test */
     public function add_example()
     {
         $data = [
             'firstOperand' => 5,
             'operator'=> "+",
             'displayValue' => 2
         ];
 
        //  $response = $this->post('/calculate', $data);
         $response = $this->post('/calculate', $data);
         $response->assertOk();
     }

     /** @test */
     public function subtract_example()
     {
         $data = [
             'firstOperand' => 20,
             'operator'=> "-",
             'displayValue' => 12
         ];
 
        //  $response = $this->post('/calculate', $data);
         $response = $this->postJson('/calculate', $data);
         $response->assertOk();
     }

     /** @test */
     public function multiply_example()
     {
         $data = [
             'firstOperand' => 5,
             'operator'=> "*",
             'displayValue' => 2
         ];
 
        //  $response = $this->post('/calculate', $data);
         $response = $this->postJson('/calculate', $data);
         $response->assertOk();
     }

     /** @test */
     public function divide_example()
     {
         $data = [
             'firstOperand' => 10,
             'operator'=> "/",
             'displayValue' => 2
         ];
 
        //  $response = $this->post('/calculate', $data);
         $response = $this->postJson('/calculate', $data);
         $response->assertOk();
     }

      /** @test */
      public function sqrt_example()
      {
          $data = [
              'firstOperand' => '',
              'operator'=> "sqrt",
              'displayValue' => 9
          ];
  
         //  $response = $this->post('/calculate', $data);
          $response = $this->postJson('/calculate', $data);
          $response->assertOk();
      }
}
