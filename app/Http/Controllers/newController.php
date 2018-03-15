<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class newController extends Controller
{ 
    
    public function imageArr(){
         
   $arr = array();
   $arr1 = array();
   
   $arr['URL']= 'https://images.pexels.com/photos/761543/pexels-photo-761543.jpeg?w=940&h=650&auto=compress&cs=tinysrgb';
   $arr['description']='This is an image 1';
   $arr['id']=1;
   $arr['name']='Image name';
   
   array_push($arr1,$arr);
   $arr['URL']= 'https://images.pexels.com/photos/679072/pexels-photo-679072.jpeg?w=940&h=650&auto=compress&cs=tinysrgb';
   $arr['description']='This is an image 2';
   $arr['id']=2;
   $arr['name']='Image name 2';
   array_push($arr1,$arr);

   
   return $arr1;
   
   
}
    public function respondWithMessage($message){
        return $this->respond([$message
           /* 'message' => [
                'ballyhoo' => $message,
                'code' => 666,
            ]*/
        ]);
    }
    
     public function respond($data){
        return json_encode($data);
    }
}
