{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 0,
			"revision" : 0,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"rect" : [ 812.0, 427.0, 997.0, 628.0 ],
		"bglocked" : 0,
		"openinpresentation" : 1,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 276.0, 475.0, 100.0, 22.0 ],
					"presentation_rect" : [ 276.0, 475.0, 100.0, 22.0 ],
					"style" : "",
					"text" : "autopattr",
					"varname" : "u840005783"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-11",
					"index" : 0,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 159.0, 128.0, 25.0, 25.0 ],
					"presentation_rect" : [ 159.0, 128.0, 25.0, 25.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-1",
					"lockeddragscroll" : 1,
					"maxclass" : "bpatcher",
					"name" : "rnd_cen_control.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ -216.0, -50.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 792.0, 198.0, 128.0, 95.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 792.0, 198.0, 128.0, 95.0 ],
					"varname" : "rnd_cen_control",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-2",
					"lockeddragscroll" : 1,
					"maxclass" : "bpatcher",
					"name" : "rot_control.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ -19.0, -27.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 159.0, 202.0, 143.0, 93.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 159.0, 202.0, 143.0, 93.0 ],
					"varname" : "rot_control",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-3",
					"lockeddragscroll" : 1,
					"maxclass" : "bpatcher",
					"name" : "seg_control.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ -86.0, -20.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 331.0, 202.0, 145.0, 97.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 333.0, 200.0, 145.0, 97.0 ],
					"varname" : "seg_control",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-4",
					"lockeddragscroll" : 1,
					"maxclass" : "bpatcher",
					"name" : "man_control.maxpat",
					"numinlets" : 0,
					"numoutlets" : 1,
					"offset" : [ -34.0, -32.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 18.0, 200.0, 128.0, 95.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 12.0, 200.0, 138.0, 95.0 ],
					"varname" : "man_control",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-5",
					"lockeddragscroll" : 1,
					"maxclass" : "bpatcher",
					"name" : "rnd_int_control.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ -5.0, -10.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 646.0, 199.0, 128.0, 95.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 646.0, 199.0, 128.0, 95.0 ],
					"varname" : "rnd_int_control",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-6",
					"lockeddragscroll" : 1,
					"maxclass" : "bpatcher",
					"name" : "rnd_control.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ -208.0, -257.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 497.0, 196.0, 128.0, 95.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 497.0, 198.0, 128.0, 95.0 ],
					"varname" : "rnd_control",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-7",
					"index" : 0,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 108.0, 434.0, 25.0, 25.0 ],
					"presentation_rect" : [ 108.0, 434.0, 25.0, 25.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 9.0,
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 108.0, 463.0, 59.0, 19.0 ],
					"presentation_rect" : [ 108.0, 463.0, 59.0, 19.0 ],
					"save" : [ "#N", "thispatcher", ";", "#Q", "end", ";" ],
					"style" : "",
					"text" : "thispatcher"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-9",
					"index" : 0,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 18.0, 435.0, 25.0, 25.0 ],
					"presentation_rect" : [ 18.0, 435.0, 25.0, 25.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"angle" : 0.0,
					"bgcolor" : [ 0.32549, 0.345098, 0.372549, 1.0 ],
					"border" : 1,
					"bordercolor" : [ 0.32549, 0.345098, 0.372549, 1.0 ],
					"id" : "obj-10",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1.0, 169.0, 957.0, 250.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1.0, 169.0, 957.0, 250.0 ],
					"proportion" : 0.39,
					"rounded" : 0,
					"style" : ""
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"order" : 4,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"order" : 3,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"order" : 2,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"order" : 1,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"order" : 0,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-6", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"source" : [ "obj-7", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-1::obj-46" : [ "rnd_cent_motion_min", "rnd_cent_motion_min", 0 ],
			"obj-4::obj-21" : [ "man_int", "man_int", 0 ],
			"obj-4::obj-25" : [ "list_spk3", "list_spk3", 0 ],
			"obj-4::obj-16" : [ "man_degrees[1]", "man_degrees", 0 ],
			"obj-3::obj-12" : [ "seg_on_spk", "seg_on_spk", 0 ],
			"obj-6::obj-34" : [ "rnd_pause_min", "rnd_pause_min", 0 ],
			"obj-1::obj-13" : [ "rnd_cent_center", "rnd_cent_center", 0 ],
			"obj-5::obj-8" : [ "rnd_int_on_spk", "rnd_int_on_spk", 0 ],
			"obj-5::obj-40" : [ "rnd_int_mot_max", "rnd_int_mot_max", 0 ],
			"obj-1::obj-9" : [ "rnd_cent_range", "rnd_cent_range", 0 ],
			"obj-5::obj-15" : [ "rnd_int_speed_scale", "rnd_int_speed_scale", 0 ],
			"obj-4::obj-20" : [ "list_spk1", "list_spk1", 0 ],
			"obj-4::obj-27" : [ "list_spk5", "list_spk5", 0 ],
			"obj-3::obj-32" : [ "seg_speed", "seg_speed", 0 ],
			"obj-6::obj-8" : [ "rnd_on_spk", "rnd_on_spk", 0 ],
			"obj-1::obj-37" : [ "rnd_cent_pause_max", "rnd_cent_pause_max", 0 ],
			"obj-2::obj-15" : [ "rot_speed", "rot_speed", 0 ],
			"obj-4::obj-7" : [ "man_start_degrees", "man_start_degrees", 0 ],
			"obj-3::obj-25" : [ "seg_shift_max", "seg_shift_max", 0 ],
			"obj-6::obj-35" : [ "rnd_motion_max", "rnd_motion_max", 0 ],
			"obj-6::obj-15" : [ "rnd_speed_scale", "rnd_speed_scale", 0 ],
			"obj-2::obj-9" : [ "rot_direction", "rot_direction", 0 ],
			"obj-4::obj-29" : [ "list_spk7", "list_spk7", 0 ],
			"obj-5::obj-39" : [ "rnd_int_pause_min", "rnd_int_pause_min", 0 ],
			"obj-1::obj-42" : [ "rnd_cent_motion_max", "rnd_cent_motion_max", 0 ],
			"obj-4::obj-24" : [ "list_spk2", "list_spk2", 0 ],
			"obj-4::obj-30" : [ "list_spk8", "list_spk8", 0 ],
			"obj-1::obj-22" : [ "rnd_cent_speed_scale", "rnd_cent_speed_scale", 0 ],
			"obj-4::obj-9" : [ "man_degrees", "man_degrees", 0 ],
			"obj-4::obj-26" : [ "list_spk4", "list_spk4", 0 ],
			"obj-6::obj-30" : [ "rnd_pause_max", "rnd_pause_max", 0 ],
			"obj-1::obj-41" : [ "rnd_cent_pause_min", "rnd_cent_pause_min", 0 ],
			"obj-5::obj-44" : [ "rnd_int_mot_min", "rnd_int_mot_min", 0 ],
			"obj-5::obj-21" : [ "rnd_int_direction", "rnd_int_direction", 0 ],
			"obj-3::obj-29" : [ "seg_shift_min", "seg_shift_min", 0 ],
			"obj-6::obj-39" : [ "rnd_motion_min", "rnd_motion_min", 0 ],
			"obj-4::obj-28" : [ "list_spk6", "list_spk6", 0 ],
			"obj-5::obj-35" : [ "rnd_int_pause_max", "rnd_int_pause_max", 0 ],
			"parameterbanks" : 			{

			}

		}
,
		"dependency_cache" : [ 			{
				"name" : "rnd_control.maxpat",
				"bootpath" : "D:/Documents/Max 8/Max for Live Devices/sound_mozzo-4.1b1 Project/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "verify_min.maxpat",
				"bootpath" : "D:/Documents/Max 8/Max for Live Devices/sound_mozzo-4.1b1 Project/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "verify_max.maxpat",
				"bootpath" : "D:/Documents/Max 8/Max for Live Devices/sound_mozzo-4.1b1 Project/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "rnd_int_control.maxpat",
				"bootpath" : "D:/Documents/Max 8/Max for Live Devices/sound_mozzo-4.1b1 Project/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "man_control.maxpat",
				"bootpath" : "D:/Documents/Max 8/Max for Live Devices/sound_mozzo-4.1b1 Project/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "seg_control.maxpat",
				"bootpath" : "D:/Documents/Max 8/Max for Live Devices/sound_mozzo-4.1b1 Project/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "rot_control.maxpat",
				"bootpath" : "D:/Documents/Max 8/Max for Live Devices/sound_mozzo-4.1b1 Project/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "rnd_cen_control.maxpat",
				"bootpath" : "D:/Documents/Max 8/Max for Live Devices/sound_mozzo-4.1b1 Project/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}
