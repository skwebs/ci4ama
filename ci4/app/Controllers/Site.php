<?php namespace App\Controllers;

class Site extends BaseController
{

	public function index()
	{
		$data = [
			'title' => ':: Home | Anshu Memorial Academy ::',
			'description' => 'Anshu Memorial Academy CBSE Pattern Based an English Medium School from Std. Play to 8th.'
		];
		return view('v1/site/home',$data);
	}

	//--------------------------------------------------------------------

public function aboutUs()
{
	$data = [
		'title' => ':: About | Anshu Memorial Academy ::',
		'description' => 'Anshu Memorial Academy CBSE Pattern Based an English Medium School from Std. Play to 8th.'
	];
	return view('v1/site/about-us',$data);
}

public function contactUs()
{
	$data = [
		'title' => ':: Contact :: | Anshu Memorial Academy ::',
		'description' => 'Anshu Memorial Academy CBSE Pattern Based an English Medium School from Std. Play to 8th.'
	];
	return view('v1/site/contact-us',$data);
}


}