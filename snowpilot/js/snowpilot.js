
(function ($) {

   Drupal.behaviors.snowpilot = {

    attach: function (context, settings) {
        
        $('input[name=field_layer_add_more]', context).click(function() {
            var maxIndex = SnowProfile.snowLayers.length - 1;
            var spaceBelow = SnowProfile.pitDepth - SnowProfile.snowLayers[maxIndex].depth();
            SnowProfile.newLayer(SnowProfile.snowLayers[maxIndex].depth() + (spaceBelow / 2));
            alert("Button works!");
          });
          
			//
			//  hide "depth 0 measured from" field
			//
			$('#edit-field-depth-0-from select', context).hide();
			
			//
			//  reset label field to show which option is chosen
			//
			$('#edit-field-depth-0-from label', context).text( function() {
				return "measure from: " + $( "#edit-field-depth-0-from select option:selected").val();
			});
			//
			//  everytime the select option is changed, hide the dropdown and reset the label to relect !!
			//
			
			$('#edit-field-depth-0-from select', context).once( function () {
				$('#edit-field-depth-0-from select', context).change( function () {
					$('#edit-field-depth-0-from label', context).text( function() {
						return "measure from: " + $( "#edit-field-depth-0-from select option:selected").val();	
					});
				//  hide select is here
					$('#edit-field-depth-0-from select', context).hide();
				} );
			});
			// If the user just navigates away from the field ( blur ), also
			// hide the select and set the label
			//
			$('#edit-field-depth-0-from select', context).blur( function () {
				
				$('#edit-field-depth-0-from label', context).text( function() {
					return "measure from: " + $( "#edit-field-depth-0-from select option:selected").val();	
				});
				//  hide select is here
				$('#edit-field-depth-0-from select', context).hide();
			} );
					
			
			$('#edit-field-depth-0-from label', context).once('open', function () {
					$('#edit-field-depth-0-from label', context).click(function () {
						$('#edit-field-depth-0-from select', context).toggle('200', function(){ 
						}); // done
					}); //
			} );
			//
			//  end tweaks for "hide depth from ..." field
			//
			
			//
			//  start tweaks for "this is my layer of greatest concern"
			//
			
			
        $('div.field-name-field-this-is-my-layer-of-greate input.form-checkbox').change(function() {
            if ($(this).is(':checked')) {
              $('div.field-name-field-this-is-my-layer-of-greate input.form-checkbox').not(this).each(function() {
                $(this).parent().hide();
              });
            } else {
              $('div.field-name-field-this-is-my-layer-of-greate input.form-checkbox').parent().show();
            }
          });
			
			
			
			/// show / hide layers on click
        $('.collapsible-content.collapsed', context).hide();
       
        $('#edit-field-layer .layer_num_0 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-layer .layer_num_0 h3.collapsible-handle', context).click(function () {
                $('.layer_num_0 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
        
        $('#edit-field-layer .layer_num_1 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-layer .layer_num_1 h3.collapsible-handle', context).click(function () {
                $('.layer_num_1 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
        
        $('#edit-field-layer .layer_num_2 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-layer .layer_num_2 h3.collapsible-handle', context).click(function () {
                $('.layer_num_2 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-layer .layer_num_3 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-layer .layer_num_3 h3.collapsible-handle', context).click(function () {
                $('.layer_num_3 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-layer .layer_num_4 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-layer .layer_num_4 h3.collapsible-handle', context).click(function () {
                $('.layer_num_4 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-layer .layer_num_5 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-layer .layer_num_5 h3.collapsible-handle', context).click(function () {
                $('.layer_num_5 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-layer .layer_num_6 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-layer .layer_num_6 h3.collapsible-handle', context).click(function () {
                $('.layer_num_6 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-layer .layer_num_7 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-layer .layer_num_7 h3.collapsible-handle', context).click(function () {
                $('.layer_num_7 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-layer .layer_num_8 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-layer .layer_num_8 h3.collapsible-handle', context).click(function () {
                $('.layer_num_8 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-layer .layer_num_9 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-layer .layer_num_9 h3.collapsible-handle', context).click(function () {
                $('.layer_num_9 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-layer .layer_num_10 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-layer .layer_num_10 h3.collapsible-handle', context).click(function () {
                $('.layer_num_10 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-temp-collection .layer_num_11 h3.collapsible-handle', context).once('open', function () {             
            $('#edit-field-temp-collection .layer_num_11 h3.collapsible-handle', context).click(function () {
                $('.layer_num_11 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });

//repeat through layer number 20 ...

        
// TEmp collection:
        $('#edit-field-temp-collection .temp_num_0 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-temp-collection .temp_num_0 h3.collapsible-handle', context).click(function () {
                $('.temp_num_0 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-temp-collection .temp_num_1 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-temp-collection .temp_num_1 h3.collapsible-handle', context).click(function () {
                $('.temp_num_1 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-temp-collection .temp_num_2 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-temp-collection .temp_num_2 h3.collapsible-handle', context).click(function () {
                $('.temp_num_2 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-temp-collection .temp_num_3 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-temp-collection .temp_num_3 h3.collapsible-handle', context).click(function () {
                $('.temp_num_3 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-temp-collection .temp_num_4 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-temp-collection .temp_num_4 h3.collapsible-handle', context).click(function () {
                $('.temp_num_4 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-temp-collection .temp_num_5 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-temp-collection .temp_num_5 h3.collapsible-handle', context).click(function () {
                $('.temp_num_5 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-temp-collection .temp_num_6 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-temp-collection .temp_num_6 h3.collapsible-handle', context).click(function () {
                $('.temp_num_6 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-temp-collection .temp_num_7 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-temp-collection .temp_num_7 h3.collapsible-handle', context).click(function () {
                $('.temp_num_7 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-temp-collection .temp_num_8 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-temp-collection .temp_num_8 h3.collapsible-handle', context).click(function () {
                $('.temp_num_8 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-temp-collection .temp_num_9 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-temp-collection .temp_num_9 h3.collapsible-handle', context).click(function () {
                $('.temp_num_9 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-temp-collection .temp_num_10 h3.collapsible-handle', context).once('open', function () { 
            $('#edit-field-temp-collection .temp_num_10 h3.collapsible-handle', context).click(function () {
                $('.temp_num_10 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });

            
// DENSITY collection:
        $('#edit-field-density-profile .density_num_0 h3.collapsible-handle', context).once('open', function () {
            $('#edit-field-density-profile .density_num_0 h3.collapsible-handle', context).click(function () {
                $('.density_num_0 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-density-profile .density_num_1 h3.collapsible-handle', context).once('open', function () {
            $('#edit-field-density-profile .density_num_1 h3.collapsible-handle', context).click(function () {
                $('.density_num_1 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-density-profile .density_num_2 h3.collapsible-handle', context).once('open', function () {
            $('#edit-field-density-profile .density_num_2 h3.collapsible-handle', context).click(function () {
                $('.density_num_2 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-density-profile .density_num_3 h3.collapsible-handle', context).once('open', function () {
            $('#edit-field-density-profile .density_num_3 h3.collapsible-handle', context).click(function () {
                $('.density_num_3 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-density-profile .density_num_4 h3.collapsible-handle', context).once('open', function () {
            $('#edit-field-density-profile .density_num_4 h3.collapsible-handle', context).click(function () {
                $('.density_num_4 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-temp-collection .density_num_5 h3.collapsible-handle', context).once('open', function () {
            $('#edit-field-temp-collection .density_num_5 h3.collapsible-handle', context).click(function () {
                $('.density_num_5 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
                    
// Stability Tests:
        $('#edit-field-test .stability_test_num_0 h3.collapsible-handle', context).once('open', function () {
            $('#edit-field-test .stability_test_num_0 h3.collapsible-handle', context).click(function () {
                $('.stability_test_num_0 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-test .stability_test_num_1 h3.collapsible-handle', context).once('open', function () {
            $('#edit-field-test .stability_test_num_1 h3.collapsible-handle', context).click(function () {
                $('.stability_test_num_1 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-test .stability_test_num_2 h3.collapsible-handle', context).once('open', function () {
            $('#edit-field-test .stability_test_num_2 h3.collapsible-handle', context).click(function () {
                $('.stability_test_num_2 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-test .stability_test_num_3 h3.collapsible-handle', context).once('open', function () {
            $('#edit-field-test .stability_test_num_3 h3.collapsible-handle', context).click(function () {
                $('.stability_test_num_3 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-test .stability_test_num_4 h3.collapsible-handle', context).once('open', function () {
            $('#edit-field-test .stability_test_num_4 h3.collapsible-handle', context).click(function () {
                $('.stability_test_num_4 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
            
        $('#edit-field-temp-collection .stability_test_num_5 h3.collapsible-handle', context).once('open', function () {
            $('#edit-field-temp-collection .stability_test_num_5 h3.collapsible-handle', context).click(function () {
                $('.stability_test_num_5 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
        $('#edit-field-temp-collection .stability_test_num_6 h3.collapsible-handle', context).once('open', function () {
            $('#edit-field-temp-collection .stability_test_num_6 h3.collapsible-handle', context).click(function () {
                $('.stability_test_num_6 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });        $('#edit-field-temp-collection .stability_test_num_7 h3.collapsible-handle', context).once('open', function () {
            $('#edit-field-temp-collection .stability_test_num_7 h3.collapsible-handle', context).click(function () {
                $('.stability_test_num_7 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
        $('#edit-field-temp-collection .stability_test_num_8 h3.collapsible-handle', context).once('open', function () {
            $('#edit-field-temp-collection .stability_test_num_8 h3.collapsible-handle', context).click(function () {
                $('.stability_test_num_8 .collapsible-content').toggle('slow', function () {
                    // Animation complete.
                });
                //add css class to H2 title when clicked//
                //$(this).toggleClass('open');
            });
        });
        
        }    // end of attach 
    };  //end of Drupal.behavior.snowpilot
}) (jQuery);
