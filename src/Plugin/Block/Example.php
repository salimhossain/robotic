<?php
namespace Drupal\example\Plugin\Block; 
use Drupal\Core\Block\BlockBase;
/**
* Provides the Example block. *
* @Block(
* id = “example”,
* admin_label = @Translation(“Example block”) *)
*/

class Example extends BlockBase { 
	public function build() {
		return array(‘hello’ => array('#markup' => $this->t('Hello world. this is form code.') ));
	} 

}


?>