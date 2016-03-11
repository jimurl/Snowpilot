<?php



/*
    This checks to make sure all of the 'drupal required keys' are present. IF not, the user is redirected to the 
		user edit form, then back here.
*/
// This function checks to see if all the user info fields have been filled out.
//   if so, it will return the $account object.
//   if some field is missing, it will redirect the user to the user edit page (!) to fill in that info.

function snowpilot_user_unit_prefs_check($uid){
	$account = user_load($uid);
	$drupal_keys_required = array( // this is a list of keys that are required in order to populate the snowpit profile
		'field_depth_0_from', 
		'field_depth_units', 
		'field_temp_units', 
		'field_coordinate_type', 
		'field_elevation_units',
		'field_longitude_type',
		'field_latitude_type',
		'field_density_units',
		'field_fracture_category',
		'field_hardness_scale',
	//	'field_loaction',
	//  'field_loaction_0'
	//	'field_loaction_1',
		'field_first_name',
		'field_last_name',
		'field_phone',
		'field_professional',
	//	'field_professional_affiliation',
		'name',
		'mail'
	);
  $missing_keys = array();
	foreach($drupal_keys_required as $key){
		if (count($account->$key ) == 0 ){
			$missing_keys[] = $key;
		
		}
	}
	if (count($missing_keys)){
		drupal_set_message( "<h3>Missing User Unit Preferences</h3>You need to set your <a href = '/user/". $uid ."/edit#edit-field-first-name'>User Unit Preferences</a> before you can create a new Snowpit Profile.<br/>
			The following preferences have not been set yet: <li>" . implode($missing_keys,'<li>'), 'warning');
		drupal_goto("user/". $uid ."/edit", array('query' => array('destination' => 'node/add/snowpit-profile')) );
			return FALSE;
	}
	return $account;
}


	// snowpilot_unit_prefs_get will return unit prefs, an array,
	//input is user object
	// $ouput_format = 'drupal' (default): 'avsic' or 'drupal' - indicates the keys of the array, which format to follow inteh return array 
	// return is $unit_prefs = array('hardnessScaling' => 'linear|exponential', 'rhoUnits' =>'kgsper' etc.)
	// or is array( 'field_temp_units' => 'C' , 'field_depth_units' => 'in', 'field_depth_0_from' => 'top' )  
	// type is node or user, where to draw the data from 


function snowpilot_unit_prefs_get($entity, $type = 'user'){

		$unit_prefs = array( 
		
		
			'field_depth_0_from' => _helper_cleaner($entity,'field_depth_0_from'), 
			'measureFrom' => _helper_cleaner($entity,'field_depth_0_from'), 
		
			'field_depth_units' =>  _helper_cleaner($entity,'field_depth_units'), 
			'depthUnits'  => _helper_cleaner($entity,'field_depth_units'), 
			
			'field_temp_units' => _helper_cleaner($entity,'field_temp_units'), 
			'tempUnits'  => _helper_cleaner($entity,'field_temp_units'), 
			
			'field_coordinate_type' =>  _helper_cleaner($entity,'field_coordinate_type'),
			'coordType' =>  _helper_cleaner($entity,'field_coordinate_type'),
		
			'field_elevation_units' =>  _helper_cleaner($entity,'field_elevation_units'),
			'elvUnits'  => _helper_cleaner($entity,'field_elevation_units'),
			
			'field_longitude_type' => _helper_cleaner($entity,'field_longitude_type'),
			'longType'=> _helper_cleaner($entity,'field_longitude_type'),
			
			'field_latitude_type' => _helper_cleaner($entity,'field_latitude_type'),
			'latType' => _helper_cleaner($entity,'field_latitude_type'),
		
			'field_density_units' =>  _helper_cleaner($entity,'field_density_units') ,
			'rhoUnits' =>  _helper_cleaner($entity,'field_density_units') ,
		
			'field_fracture_category' =>  _helper_cleaner($entity, 'field_fracture_category'),
			'fractureCat' =>  _helper_cleaner($entity, 'field_fracture_category'),
		
			'field_hardness_scale' => _helper_cleaner($entity,'field_hardness_scale'),
			'hardnessScaling' => _helper_cleaner($entity,'field_hardness_scale'),
			///////
			'field_loaction_0' => _helper_cleaner($entity, 'field_loaction','tid'),
			'state' => _helper_cleaner($entity, 'field_loaction','tid'), // this needs a conversion function to the state/province name
		
			'field_loaction_1' => _helper_cleaner($entity, 'field_loaction','tid', '1'),
			'range' =>  _helper_cleaner($entity, 'field_loaction','tid', '1'),  // this will need a conversion function to the name of the range
		
			'field_first_name' =>_helper_cleaner($entity,'field_first_name'),
			'first' => _helper_cleaner($entity,'field_first_name'),
		
			'field_last_name' => _helper_cleaner($entity,'field_last_name'),
			'last' => _helper_cleaner($entity,'field_last_name'),
		
			'field_phone' => _helper_cleaner($entity,'field_phone'),
			'phone' => _helper_cleaner($entity,'field_phone'),
		
			'field_professional' =>  _helper_cleaner($entity,'field_professional'),
			'prof' => _helper_cleaner($entity,'field_professional'),
			
			'field_professional_affiliation' => _helper_cleaner($entity, 'field_professional_affiliation','tid')  ,
			'affil'  => _helper_cleaner($entity, 'field_professional_affiliation', 'tid')  ,// tid needs to be converted to name
		
		
			);
			/*
			     These fields are not present in the 'node' variable that this function works on.
			*/
			if ($type  == 'user'){
				$unit_prefs['name'] = $entity->name; // hey, this is the same value in both core drupal and avscience db!
		
				$unit_prefs['mail'] = $entity->mail;
				$unit_prefs['email'] = $entity->mail;
			}
		
		/*	foreach($unit_prefs as $value){
				if ($value == '' ) return FALSE; 	
			}*/
			return $unit_prefs;
	}

	// This function is used by snowpilot_unit_prefs_get to avoid trying to fetch a property of a non-object ...
	// For now, works only with regular fields of 

	function _helper_cleaner($entity, $field, $value = 'value', $count = 0){  
	  if (isset($entity->$field) && count($entity->$field)){
			//var_dump($entity->$field);
			//var_dump($entity); echo $field;
			$entity = (array) $entity;
			return $entity[$field]['und'][$count][$value]; 
		}else{
			return NULL;
		}

	}
	 
	 
	function snowpilot_snopit_prof_unit_prefs_set(&$form,$snowpit_unit_prefs){


		$form['field_loaction']['und']['#default_value'][0] = $snowpit_unit_prefs['field_loaction_0'];
		$form['field_loaction']['und']['#default_value'][1] = $snowpit_unit_prefs['field_loaction_1'];
		foreach( $snowpit_unit_prefs as $key => $pref){
			if ($key != 'field_loaction_0' 
				&& $pref != 'field_loaction_1' 
				&& substr($key,0,6) == 'field_' 
			  && isset($form[$key])){
					$form[$key]['und']['#default_value'] = $pref ;
					//drupal_set_message("<pre>". var_export($form, TRUE )."</pre>");
				
			}
		}
	
	
		return $form;
	}

	?>