/*

SoundMozzo script versione public v 1.0

Developped and tested with max 8.6.4 and Ableton 11.3.21 and Ableton 12.0.10

*/
inlets = 1;
outlets = 2;

autowatch = 1;
editfontsize = 12;

var DEBUG = 0;

// ------------- CONFIG
var spk_config;
var DISPLAY_OUT=0;
var MAX_NUMBER_OF_SPK=8;

if (jsarguments.length>=2) {
	spk_config = jsarguments[1];
	if (jsarguments.length==3) DISPLAY_OUT = jsarguments[2];
}
else {
	spk_config = "5in5.1";
}

var spk_numb = 5;
var quadrant_dimention = new Array(MAX_NUMBER_OF_SPK);

var spk_position = new Array(MAX_NUMBER_OF_SPK);

var weight_array = new Array(MAX_NUMBER_OF_SPK);

for (var i = 0; i < MAX_NUMBER_OF_SPK; i++) {
	weight_array[i] = 1;
}

var MAX_SPEED = 720; //gradi al secondo
var DEFAULT_SPEED = 90; //gradi al secondo
var CLOCK_TIME_BASE = 100;// tempo base di percorrenza di un quadrante !!!
var MANUAL_INPUT_INTERPOLATION = 100;

var DISPLAY_UPDATE_x_CLOCK_TIME = 5;
var display_count = 0;

var chainID = new Array(MAX_NUMBER_OF_SPK);

var zero = 0;

function config(){

	switch (spk_config) { //Init quadrant_dimention
		case("Stereo"):
			spk_numb = 2;
			quadrant_dimention[0]=180;
			quadrant_dimention[1]=180;
			zero = 90;
			weight_array = [1, 1];
		break;
		case(4):
			spk_numb = 4;
			quadrant_dimention[0]=90;
			quadrant_dimention[1]=90;
			quadrant_dimention[2]=90;
			quadrant_dimention[3]=90;
			zero = 45;
			weight_array = [1, 1, 1, 1];
		break;
		case("4in5.1"):
			spk_numb = 4;
			quadrant_dimention[0]=60;
			quadrant_dimention[1]=80;
			quadrant_dimention[2]=140;
			quadrant_dimention[3] = 80;
			zero = 30;
			weight_array = [1, 1, 1, 1];
		break;
		case("4in5equi"):
			spk_numb = 4;
			quadrant_dimention[0]=144;
			quadrant_dimention[1]=72;
			quadrant_dimention[2]=72;
			quadrant_dimention[3] = 72;
			zero = 72;
			weight_array = [1, 1, 1, 1];
		break;
		case("5in5.1"):
			spk_numb = 5;
			quadrant_dimention[0]=30;
			quadrant_dimention[1]=30;
			quadrant_dimention[2]=80;
			quadrant_dimention[3]=140;
			quadrant_dimention[4] = 80;
			zero = 30;
			weight_array = [1, 1, 1, 1, 1];
		break;
		case ("5equi_back"): // 5 diffusori equidistanti con centro back
			spk_numb = 5;
			quadrant_dimention[0] = 72;
			quadrant_dimention[1] = 72;
			quadrant_dimention[2] = 72;
			quadrant_dimention[3] = 72;
			quadrant_dimention[4] = 72;
			zero = 36;
			weight_array = [1, 1, 1, 1, 1];
		break;
		case("5equi"):
			spk_numb = 5;
			quadrant_dimention[0]=72;
			quadrant_dimention[1]=72;
			quadrant_dimention[2]=72;
			quadrant_dimention[3]=72;
			quadrant_dimention[4] = 72;
			zero = 72;
			weight_array = [1, 1, 1, 1, 1];
		break;
		case("4in5equi_back"): // 5 diffusori equidistanti con centro back
			spk_numb = 4;
			quadrant_dimention[0]=72;
			quadrant_dimention[1]=72;
			quadrant_dimention[2]=144;
			quadrant_dimention[3] = 72;
			zero = 36;
			weight_array = [1, 1, 1, 1];
		break;
		case(6):
			spk_numb = 6;
			quadrant_dimention[0]=60;
			quadrant_dimention[1]=60;
			quadrant_dimention[2]=60;
			quadrant_dimention[3]=60;
			quadrant_dimention[4]=60;
			quadrant_dimention[5]=60;
			zero = 30;
			weight_array = [1, 1, 1, 1, 1, 1];
		break;
		case(8):
			spk_numb = 8;
			quadrant_dimention[0]=45;
			quadrant_dimention[1]=45;
			quadrant_dimention[2]=45;
			quadrant_dimention[3]=45;
			quadrant_dimention[4]=45;
			quadrant_dimention[5]=45;
			quadrant_dimention[6]=45;
			quadrant_dimention[7]=45;
			zero = 22.5;
			weight_array = [1, 1, 1, 1, 1, 1, 1, 1];
		break;
	}

	spk_position[0] = 0;
	for (i=1; i<spk_numb; i++){
		spk_position[i] = spk_position[i-1] + quadrant_dimention[i-1];
	}
	
	switch (spk_config) { //Init chainID
		case("Stereo"):
			chainID[0]=1;
			chainID[1]=2;
		break;
		case("4in5equi_back"): // 5 diffusori equidistanti con centro back
		case("4in5.1"):
		case("4in5equi"):
		case(4):
			chainID[0]=1;
			chainID[1]=2;
			chainID[2]=4;
			chainID[3]=3;
		break;
		case("5in5.1"):
			chainID[0] = 1;
			chainID[1] = 5;
			chainID[2] = 2;
			chainID[3] = 4;
			chainID[4] = 3;
		break;
		case("5equi"):
			chainID[0]=1;
			chainID[1]=5;
			chainID[2]=2;
			chainID[3]=4;
			chainID[4]=3;
		break;
		case("5equi_back"):
			chainID[0]=1;
			chainID[1]=2;
			chainID[2]=4;
			chainID[3]=5;
			chainID[4]=3;
		break;
		case(6):
			chainID[0]=1;
			chainID[1]=2;
			chainID[2]=4;
			chainID[3]=6;
			chainID[4]=5;
			chainID[5]=3;
		break;
		case(8):
			chainID[0]=1;
			chainID[1]=2;
			chainID[2]=4;
			chainID[3]=6;
			chainID[4]=8;
			chainID[5]=7;
			chainID[6]=5;
			chainID[7]=3;
		break;
	}
}
config.local =1;

MAN = 0;
ROT = 1;
SEG = 2; //segmenti
RND = 3; //random pesato posizioni tempi di passaggio e tempi di stasi
RND_INT = 4; //random interpolato
RND_CEN = 5; //random centered

var type = MAN;

var CLOCK_TIME = CLOCK_TIME_BASE;

var diam_tsk = new Task(diam_clock, this); //circumference movement
var points_tsk = new Task(points_clock, this); //point movement

var sin_a = new Array(360);
for (i=0; i<360; i++){
	sin_a[i] = Math.sin(i* Math.PI/180);
}

var next=0;

var man_typeV = 0;
var man_next = 0;
var man_start_degrees = 0;
var man_listV = [1, 1, 0, 0, 0, 0, 0, 0];
var man_interpV = 100;

var play_state=0;

var rot_speed_val = DEFAULT_SPEED;
var rot_dir_val = 1;

var quadrant_time;

var preview_list = new Array(MAX_NUMBER_OF_SPK);
var decay_dec = 0;

var target_ticksleft = 0;
var ticks_inc = 0;

var rot_dir_val_old = 0; 
var rot_speed_val_old = -1;

var seg_shift_min_val = 180, seg_shift_max_val = 360, seg_end_on_spk_val = 0;
var seg_speed_val = DEFAULT_SPEED;
var seg_speed_val_old = -1;
var seg_target_increment = 0, seg_increment_count = 0, seg_dir = 0;

var rnd_target = 0;
var rnd_motion_time_min_val = 500;
var rnd_motion_time_max_val = 500;
var rnd_pause_time_min_val = 500; 
var rnd_pause_time_max_val = 500;
var rnd_target_time = 0;
var rnd_pause_time = 0;
var rnd_target_increment = 0;
var rnd_time_count = 0;
var rnd_pause_count = 0;
var rnd_speed_rescale_val = 1;
var rnd_speed_rescale_val_old =1;
var rnd_on_spk_val = 0;

var rnd_int_target = 0;
var rnd_int_motion_time_min_val = 500, rnd_int_motion_time_max_val = 500, rnd_int_pause_time_min_val = 500, rnd_int_pause_time_max_val = 500;
var rnd_int_target_time = 0, rnd_int_pause_time = 0;
var rnd_int_target_increment = 0;
var rnd_int_dir = 1;
var rnd_int_increment_count =0, rnd_int_pause_count = 0;
var rnd_int_dir_conf_val = 0;
var rnd_int_speed_rescale_val =1, rnd_int_speed_rescale_val_old =1;
var rnd_int_on_spk_val = 0;

var rnd_cen_target = 0;
var rnd_cen_motion_time_min_val = 500, rnd_cen_motion_time_max_val = 500, rnd_cen_pause_time_min_val = 500, rnd_cen_pause_time_max_val = 500;
var rnd_cen_target_time = 0, rnd_cen_pause_time = 0;
var rnd_cen_target_increment = 0;
var rnd_cen_dir = 1;
var rnd_cen_increment_count =0, rnd_cen_pause_count = 0;
var rnd_cen_speed_rescale_val =1, rnd_cen_speed_rescale_val_old =1;
var rnd_cen_center_val = 0;
var rnd_cen_range_val = 60;

var rnd_disp_x; 
var rnd_disp_y; 
var rnd_disp_inc_x;
var rnd_disp_inc_y;

var init=1;

var quadrant=0;

//------ INPUT FUNCTION

function init_script() {
	config();
	if (init) {
		manual ();
		init=0;
	}
}

function decay(value){ // 0-10;
	if (value!=0) { 
		decay_dec = 1 / ((value + 0.5) * 200);
		if (decay_dec<0.00001) decay_dec=0.00001;
	} else decay_dec= 0;
}

function change_spk_config(value){
	var i;
	
	if (value=="Stereo"|value==4|value=="4in5.1"|value=="5in5.1"|value=="5equi"|value=="4in5equi"| value== "4in5equi_back"| value == "5equi_back"| value == 6 | value == 8) {
		
		mozzo_stop();
		
		outlet(1, 0);
		outlet(0, 0, 0, 0, 0, 0, 0, 0, 0);
		
		for (i=0; i<MAX_NUMBER_OF_SPK; i++) preview_list[i] = 0;
		
		spk_config = value;
		config();
		next = 0;
		
		sendnext(0, 100);
	}
}

function paradigm(value){ // 0 rotation; 1 segment;
	type=value;
	mozzo_stop();
	switch (type) {
		case (MAN):
			manual();
			break;
		case (ROT):
			if (play_state) rot_start();
			break;
		case (SEG):
			if (play_state) seg_start();
			break;
		case (RND):
			if (play_state) rnd_start();
			break;
		case (RND_INT):
			if (play_state) rnd_int_start();
			break;
		case (RND_CEN):
			if (play_state) rnd_cen_start();
			break;
	}
}

function play(value){
	play_state=value;
	if (!play_state) mozzo_stop(); else {
		switch (type) {
			case (ROT):
				rot_start();
				break;
			case (SEG):
				seg_start();
				break;
			case (RND):
				rnd_start();
				break;
			case (RND_INT):
				rnd_int_start();
				break;
			case (RND_CEN):
				rnd_cen_start();
				break;
		}
	}
}

// ------ Manual

function man_type(value){
    man_typeV = value;
    if (type==MAN) manual();
}

function man_pos(value){
 	var temp;
	temp = value + zero;
	
	if (temp < 0) { 
        temp = temp % 360;
		temp = (360 + temp);
	}
	
	man_next = temp;
	if (type==MAN&& man_typeV==0) manual();
}

function man_start_degree(value){
	man_start_degrees = value;
	if (type==MAN && man_typeV==0) manual();
}


function man_list(v1, v2, v3, v4, v5, v6, v7, v8){
	man_listV = [v1, v2, v3, v4, v5, v6, v7, v8];
	if (type==MAN && man_typeV==1) manual();
}

function man_interp(value){
    man_interpV = value;
}

// ------ Rotation

function rot_speed(value){
	rot_speed_val = value;	
}

function rot_dir(value){
	rot_dir_val = (value)?-1:1;
}

// ------ Segments

function seg_speed(value){
	seg_speed_val=value;
}

function seg_shift_min(value){
	seg_shift_min_val=value;
}

function seg_shift_max(value){
	seg_shift_max_val=value;
}

function seg_end_on_spk(value){
	seg_end_on_spk_val=value;
}

// ------ Random
function rnd_motion_time_min(arg) {
	rnd_motion_time_min_val = arg;
}

function rnd_motion_time_max(arg) {
	rnd_motion_time_max_val = arg;
}

function rnd_pause_time_min(arg) {
	rnd_pause_time_min_val = arg;
}

function rnd_pause_time_max(arg) {
	rnd_pause_time_max_val = arg;
}

function rnd_speed_rescale(arg) {
	rnd_speed_rescale_val = arg;
}

function rnd_on_spk(value){
	rnd_on_spk_val=value;
}

function rnd_weight(arg) {
	var i;

	if (arguments.length == MAX_NUMBER_OF_SPK) {
		if (check_weight_list(arguments)) {
			for (i = 0; i < MAX_NUMBER_OF_SPK; i++) {
				weight_array[i] = arguments[i];
			}
		}
	} else {
		post("Wrong random weights list legth\n");
	}
}

function check_weight_list(a) {
	var i;
	var sum_value = 0;
	var val_no_zero = 0;
	
	for (i = 0; i < spk_numb; i++) {
		if (a[i] > 0) {
			val_no_zero++;
		}
		sum_value += a[i];
	}
	if (val_no_zero > 1 && sum_value > 1) {
		return (1); 
	} else {
		post("Error in weights list\n");
		return (0);
	}
}
// ------ Random interpolated
function rnd_int_motion_time_min(arg) {
	rnd_int_motion_time_min_val = arg;
}

function rnd_int_motion_time_max(arg) {
	rnd_int_motion_time_max_val = arg;
}

function rnd_int_pause_time_min(arg) {
	rnd_int_pause_time_min_val = arg;
}

function rnd_int_pause_time_max(arg) {
	rnd_int_pause_time_max_val = arg;
}

function rnd_int_dir_conf(arg) {
	rnd_int_dir_conf_val = arg;
}

function rnd_int_speed_rescale(arg) {
	rnd_int_speed_rescale_val = arg;
}

function rnd_int_on_spk(value){
	rnd_int_on_spk_val=value;
}

// ------ Random centered
function rnd_cen_motion_time_min(arg) {
	rnd_cen_motion_time_min_val = arg;
}

function rnd_cen_motion_time_max(arg) {
	rnd_cen_motion_time_max_val = arg;
}

function rnd_cen_pause_time_min(arg) {
	rnd_cen_pause_time_min_val = arg;
}

function rnd_cen_pause_time_max(arg) {
	rnd_cen_pause_time_max_val = arg;
}

function rnd_cen_speed_rescale(arg) {
	rnd_cen_speed_rescale_val = arg;
}

function rnd_cen_center(arg) {
	var temp;
	temp = arg + zero;
	
	if (temp < 0) { 
        temp = temp % 360;
		temp = (360 + temp);
	}
	rnd_cen_center_val  = temp;
}

function rnd_cen_range(arg) {
	rnd_cen_range_val  = arg;
}

// ------ LOCAL FUNCTION

function mozzo_stop(){
	diam_tsk.cancel();
	points_tsk.cancel();
}
mozzo_stop.local=1;

function manual(){
    if (man_typeV == 0) { //POSITION
	    next = (man_next + man_start_degrees)%360;
	    sendnext(next, man_interpV);
    } else { //LIST
        outlet(1, man_interpV);
        outlet(0, equalgain(man_listV));
        manual_list_update_next(man_listV);
    }
}
manual.local=1;


function manual_list_update_next(value){ // è riscalato equal power nella patch in base alla curva usata
    var temp;
    var i;
    var j;
    var attivi= new Array();
    
    for (i=0; i<spk_numb; i++) {
        if (value[i]!=0) { 
            temp = 0;
            for (j=0; j< ID_link(i + 1); j++) {
               temp += quadrant_dimention[j];
            }
            attivi.push(temp);
        }
    }
    
    if (attivi.length |= 0) {
        i = Math.floor(Math.random() * attivi.length)
        next = attivi[i];
    } else {
        next = 0;
    }
}
manual_list_update_next.local=1;

function ID_link(value) {
    var i;

    for (i=0; i<chainID.length; i++) {
        if (chainID[i]==value) return(i);
    }
}


function equalgain(value){ // è riscalato equal power nella patch in base alla curva usata
    var scale;
    var result= new Array();

    scale = (value[0] + value[1] + value[2] + value[3] + value[4] + value[5] + value[6] + value[7]);
    if (scale == 0) return(value);

    result[0] = value[0]/ scale;
    result[1] = value[1]/ scale;
    result[2] = value[2]/ scale;
    result[3] = value[3]/ scale;
    result[4] = value[4]/ scale;
    result[5] = value[5]/ scale;
    result[6] = value[6]/ scale;
    result[7] = value[7]/ scale;
    
    return(result);
}
equalgain.local=1;

function rot_start(){
	sendnext(next, 10);
	diam_tsk.execute();
}
rot_start.local=1;

function seg_start(){
	seg_target_increment = 0;
	seg_increment_count = 0;
	seg_dir = ((100*Math.random())>=50)?1:-1;
	sendnext(next, 10);
	diam_tsk.execute();
}
seg_start.local=1;

function seg_step(){
	var test, i, distance_val, indice, temp;

	seg_target_increment = seg_shift_min_val + parseInt((seg_shift_max_val - seg_shift_min_val) * Math.random());

	if (seg_end_on_spk_val) {
		distance_val = 1000;
		test = (next+ seg_dir * seg_target_increment);
		if (test<0) test=360+test;

		for (i=0; i<spk_numb; i++) {
			if ((temp=distance_dir(test, spk_position[i],seg_dir)) < distance_val) {
				distance_val = temp;
				indice = i;
			}
		}
		seg_target_increment = distance_dir(next, spk_position[indice],seg_dir);
		
	}
}
seg_step.local=1;

function rnd_start(){
	sendnext(next, 10);
	points_tsk.execute();
}
rnd_start.local=1;

function rnd_step(){

	rnd_target_time = rnd_motion_time_min_val + parseInt((rnd_motion_time_max_val - rnd_motion_time_min_val) * Math.random());
	
	rnd_pause_time = rnd_pause_time_min_val + parseInt((rnd_pause_time_max_val - rnd_pause_time_min_val) * Math.random());
	
	if (rnd_on_spk_val) {
		rnd_target = spk_position[rnd_next_spk_from_weight()];
		//rnd_target = spk_position[parseInt(spk_numb * Math.random())];
		while (find_quadrant(rnd_target) == find_quadrant(next)) rnd_target = spk_position[rnd_next_spk_from_weight()];
	} else {
		rnd_target = parseInt(359 * Math.random());
		while (find_quadrant(rnd_target) == find_quadrant(next)) rnd_target = parseInt(359 * Math.random()); // random in quadrante diverso;
	}
}
rnd_step.local=1;

function rnd_next_spk_from_weight() {
	var i;
	var j;
	var temp_array = new Array();
	var temp_val;

	for (i = 0; i < spk_numb; i++) {
		for (j = 0; j < weight_array[i]; j++) {
			temp_array.push(i);
		}
	}
	temp_val = parseInt(temp_array.length * Math.random());

	for (i = 0; i < spk_numb; i++) {
		if ((temp_array[temp_val]+1) == chainID[i]) {
			return (i);
		}
	}	
}
rnd_next_spk_from_weight.local = 1;

function rnd_int_start(){
	rnd_int_target_increment = 0;
	rnd_int_increment_count = rnd_int_pause_count = 0;
	if (rnd_int_dir_conf_val) rnd_int_dir = ((100*Math.random())>=50)?1:-1;
	sendnext(next, 10);
	target_ticksleft=0;	
	diam_tsk.execute();
}
rnd_int_start.local=1;

function rnd_int_step(){

	rnd_int_target_time = rnd_int_motion_time_min_val + parseInt((rnd_int_motion_time_max_val - rnd_int_motion_time_min_val) * Math.random());
	
	rnd_int_pause_time = rnd_int_pause_time_min_val + parseInt((rnd_int_pause_time_max_val - rnd_int_pause_time_min_val) * Math.random());
	
	if (rnd_int_on_spk_val) {
		rnd_int_target = spk_position[parseInt(spk_numb * Math.random())];
		while (rnd_int_target == next ){
			rnd_int_target = spk_position[parseInt(spk_numb * Math.random())];
		}
	} else {
		rnd_int_target = parseInt(359 * Math.random());
		while ((distance(rnd_int_target, next)) < quadrant_dimention[find_quadrant(next)]) rnd_int_target = parseInt(360 * Math.random()); // random in quadrante diverso;
	}
	if (!rnd_int_dir_conf_val) { //  shortest direction
		if (rnd_int_target > next) {
			if ((rnd_int_target-next)<=(next+360-rnd_int_target)) {
				rnd_int_dir=1;
				rnd_int_target_increment = rnd_int_target-next;
			} else {
				rnd_int_dir=-1;
				rnd_int_target_increment = next+360-rnd_int_target;
			}
		} else {
			if ((next-rnd_int_target)<=(rnd_int_target+360-next)) {
				rnd_int_dir=-1;
				rnd_int_target_increment = next-rnd_int_target;
			} else {
				rnd_int_dir=1;
				rnd_int_target_increment = rnd_int_target+360-next;
			}
		}
	} else { // alternating direction
		rnd_int_dir = rnd_int_dir * -1;
		if (rnd_int_target > next) {
			if (rnd_int_dir ==1) rnd_int_target_increment = rnd_int_target-next;
			else rnd_int_target_increment = next+360-rnd_int_target;
		} else {
			if (rnd_int_dir ==1) rnd_int_target_increment = rnd_int_target+360-next;
			else rnd_int_target_increment = next-rnd_int_target;
		}
	}
}
rnd_int_step.local=1;

function rnd_cen_start(){
	rnd_cen_target_increment = 0;
	rnd_cen_increment_count = rnd_cen_pause_count = 0;
	sendnext(next, 10);
	target_ticksleft=0;	
	diam_tsk.execute();
}
rnd_cen_start.local=1;

function rnd_cen_step(){

	rnd_cen_target_time = rnd_cen_motion_time_min_val + parseInt((rnd_cen_motion_time_max_val - rnd_cen_motion_time_min_val) * Math.random());
	
	rnd_cen_pause_time = rnd_cen_pause_time_min_val + parseInt((rnd_cen_pause_time_max_val - rnd_cen_pause_time_min_val) * Math.random());
	
	rnd_cen_target = rnd_cen_center_val - rnd_cen_range_val + Math.floor(rnd_cen_range_val * 2 * Math.random());
	if (rnd_cen_target<0) rnd_cen_target= 360+ rnd_cen_target;

	while (rnd_cen_target==next) {
		rnd_cen_target =  rnd_cen_center_val - rnd_cen_range_val + Math.floor(rnd_cen_range_val * 2 * Math.random());
		if (rnd_cen_target<0) rnd_cen_target= 360 + rnd_cen_target;
	}
		
	if (rnd_cen_target > next) {
		if ((rnd_cen_target-next)<=(next+360-rnd_cen_target)) {
			rnd_cen_dir=1;
			rnd_cen_target_increment = rnd_cen_target-next;
		} else {
			rnd_cen_dir=-1;
			rnd_cen_target_increment = next+360-rnd_cen_target;
		}
	} else {
		if ((next-rnd_cen_target)<=(rnd_cen_target+360-next)) {
			rnd_cen_dir=-1;
			rnd_cen_target_increment = next-rnd_cen_target;
		} else {
			rnd_cen_dir=1;
			rnd_cen_target_increment = rnd_cen_target+360-next;
		}
	}
}
rnd_cen_step.local=1;

function distance (a,b){
	var distance;
		if (a > b) {
			if ((a-b)<=(b+360-a)) {
				distance = a - b;
			} else {
				distance = b+360-a;
			}
		} else {
			if ((b-a)<=(a+360-b)) {
				distance = b-a;
			} else {
				distance = a+360-b;
			}
		}
	return distance;
}
distance.local = 1;

function distance_dir (a,b,dir){
	var distance;
	
		if (a > b) {
			if (dir==1) {
				distance = b+360-a;
			} else {
				distance = a - b;
			}
		} else {
			if (dir==1) {
				distance = b-a;
			} else {
				distance = a+360-b;
			}
		}
	return distance;
}
distance.local = 1;

// ----------------- TASK FUNCTION

function diam_clock(){
	var shift = 0;
	var next_spk = 0;
	var quadrant_dim, current_quadrant;

	switch (type) {
		case (ROT):
			if (target_ticksleft == 0 || rot_dir_val != rot_dir_val_old || rot_speed_val != rot_speed_val_old){
				
				current_quadrant = find_quadrant(next);
				
				if (rot_dir_val==1) {
					quadrant_dim = quadrant_dimention[current_quadrant-1];
					shift = quadrant_dim - (next - spk_position[current_quadrant-1]); 
				} else {
					if (next == spk_position[current_quadrant-1]){
						current_quadrant--;
						if (current_quadrant==0) current_quadrant=spk_numb;
					}
					shift = (next - spk_position[current_quadrant-1]);
					if (shift<0) shift=360+shift;
				}
				
				if (shift == 0) shift = quadrant_dim;

				quadrant_time = (shift / rot_speed_val) * 1000;
	
				target_ticksleft = Math.round(quadrant_time/CLOCK_TIME_BASE);
				if (!target_ticksleft) target_ticksleft=1;
	
				CLOCK_TIME = (quadrant_time / target_ticksleft);
	
				ticks_inc = shift / target_ticksleft;
	
				rot_dir_val_old=rot_dir_val; 
				rot_speed_val_old=rot_speed_val;

				next_spk = (next + rot_dir_val * shift) % 360;
				if (next_spk<0) next_spk=360+next_spk;
				sendnext(next_spk, quadrant_time);
			}
			
			next=((next+(rot_dir_val * ticks_inc)) % 360);
			if (next<0) next=360+next;
			target_ticksleft --;
		break;
		case (SEG):
			seg_increment_count += ticks_inc;
			if (seg_increment_count >= seg_target_increment || target_ticksleft == 0 || seg_speed_val_old != seg_speed_val){ 
			
				if (seg_increment_count >= seg_target_increment) {
					seg_increment_count = 0;
					seg_dir=seg_dir*-1;
					seg_step();
				}
				
				current_quadrant = find_quadrant(next);
				
				if (seg_dir==1) {
					quadrant_dim = quadrant_dimention[current_quadrant-1];
					shift = quadrant_dim - (next - spk_position[current_quadrant-1]); 
				} else {
					if (next == spk_position[current_quadrant-1]){
						current_quadrant--;
						if (current_quadrant==0) current_quadrant=spk_numb;
					}
					shift = (next - spk_position[current_quadrant-1]);
					if (shift<0) shift=360+shift;
				}
				
				if (shift == 0) shift = quadrant_dim;
				
				quadrant_time = (shift / seg_speed_val) * 1000;
			
				target_ticksleft = Math.round(quadrant_time/CLOCK_TIME_BASE);
				if (!target_ticksleft) target_ticksleft=1;
				
				CLOCK_TIME = (quadrant_time / target_ticksleft);
				
				quadrant_time = CLOCK_TIME * target_ticksleft;
				
				ticks_inc = shift / target_ticksleft;
				
				seg_speed_val_old = seg_speed_val;
				
				next_spk = (next + seg_dir * shift) % 360;
				if (next_spk<0) next_spk=360+next_spk;
				
				sendnext(next_spk, quadrant_time);
			}
			next=((next+(seg_dir * ticks_inc)) % 360);
			if (next<0) next=360+next;
			target_ticksleft --;
		break;

		case (RND_INT):
			// Increment during movement
			if (rnd_int_increment_count < rnd_int_target_increment) {
				rnd_int_increment_count += ticks_inc;
				target_ticksleft --;
			}
			
			if ((rnd_int_increment_count >= rnd_int_target_increment) && (rnd_int_pause_count == 0)) {
				if (rnd_int_pause_time<=CLOCK_TIME_BASE) {
					CLOCK_TIME = rnd_int_pause_time;
				} else {
					CLOCK_TIME = (rnd_int_pause_time/(rnd_int_pause_time/CLOCK_TIME_BASE)+1);
				}
			}
			
			if ((rnd_int_increment_count >= rnd_int_target_increment) && (rnd_int_pause_count < rnd_int_pause_time)) { // Pausa
				rnd_int_pause_count = rnd_int_pause_count + (CLOCK_TIME * rnd_int_speed_rescale_val);
			}

			// Movement
			if ((rnd_int_increment_count >= rnd_int_target_increment && rnd_int_pause_count >= rnd_int_pause_time) || ((target_ticksleft == 0) && (rnd_int_pause_count==0) && (rnd_int_increment_count < rnd_int_target_increment)) || (rnd_int_speed_rescale_val != rnd_int_speed_rescale_val_old && rnd_int_pause_count==0)){
			
				if (rnd_int_increment_count >= rnd_int_target_increment && rnd_int_pause_count >= rnd_int_pause_time) {
					rnd_int_pause_count = 0;
					rnd_int_increment_count = 0;
					rnd_int_step();
				}
				
				current_quadrant = find_quadrant(next);
				
				if (rnd_int_dir==1) {
					quadrant_dim = quadrant_dimention[current_quadrant-1];
					shift = quadrant_dim - (next - spk_position[current_quadrant-1]); 
				} else {
					if (next == spk_position[current_quadrant-1]){
						current_quadrant--;
						if (current_quadrant==0) current_quadrant=spk_numb;
					}
					shift = (next - spk_position[current_quadrant-1]);
					if (shift<0) shift=360+shift;
				}

				if (shift == 0) shift = quadrant_dim;
				
				// verificare se il valore di destinazione Ë nel quadrante attuale o no;
				if (!rnd_int_on_spk_val && (find_quadrant(rnd_int_target) == current_quadrant)) {
					shift = distance(next, rnd_int_target);
					if (!shift) rnd_int_increment_count=rnd_int_target_increment + 1;
				}
				
				quadrant_time = (shift / rnd_int_target_increment) * rnd_int_target_time * ( 1 / rnd_int_speed_rescale_val);
				target_ticksleft = Math.round(quadrant_time/CLOCK_TIME_BASE);
				if (!target_ticksleft) target_ticksleft=1;
				
				CLOCK_TIME = (quadrant_time / target_ticksleft);
				
				quadrant_time = CLOCK_TIME * target_ticksleft;
				ticks_inc = shift / target_ticksleft;
				
				next_spk = (next + rnd_int_dir * shift) % 360;
				if (next_spk<0) next_spk=360+next_spk;
				
				sendnext(next_spk, quadrant_time);
				
				rnd_int_speed_rescale_val_old = rnd_int_speed_rescale_val;
			}
			// increment next during movement
			if ((rnd_int_increment_count) < (rnd_int_target_increment) && rnd_int_pause_count == 0) {
				next=((next+(rnd_int_dir * ticks_inc)) % 360);
				if (next<0) next=360+next;
			}
		break;

		case (RND_CEN):
			// Increment during movement
			if (rnd_cen_increment_count < rnd_cen_target_increment) {
				rnd_cen_increment_count += ticks_inc;
				target_ticksleft --;
			}
			
			if ((rnd_cen_increment_count >= rnd_cen_target_increment) && (rnd_cen_pause_count == 0)) {
				if (rnd_cen_pause_time<=CLOCK_TIME_BASE) {
					CLOCK_TIME = rnd_cen_pause_time;
				} else {
					CLOCK_TIME = (rnd_cen_pause_time/(rnd_cen_pause_time/CLOCK_TIME_BASE)+1);
				}
			}
			
			if ((rnd_cen_increment_count >= rnd_cen_target_increment) && (rnd_cen_pause_count < rnd_cen_pause_time)) { // Pausa
				rnd_cen_pause_count = rnd_cen_pause_count + (CLOCK_TIME * rnd_cen_speed_rescale_val);
			}

			// Movement
			if ((rnd_cen_increment_count >= rnd_cen_target_increment && rnd_cen_pause_count >= rnd_cen_pause_time) || ((target_ticksleft == 0) && (rnd_cen_pause_count==0) && (rnd_cen_increment_count < rnd_cen_target_increment)) || (rnd_cen_speed_rescale_val != rnd_cen_speed_rescale_val_old && rnd_cen_pause_count==0)){
			
				if (rnd_cen_increment_count >= rnd_cen_target_increment && rnd_cen_pause_count >= rnd_cen_pause_time) {
					rnd_cen_pause_count = 0;
					rnd_cen_increment_count = 0;
					rnd_cen_step();
				}
				
				current_quadrant = find_quadrant(next);
				
				if (rnd_cen_dir==1) {
					quadrant_dim = quadrant_dimention[current_quadrant-1];
					shift = quadrant_dim - (next - spk_position[current_quadrant-1]); 
				} else {
					if (next == spk_position[current_quadrant-1]){
						current_quadrant--;
						if (current_quadrant==0) current_quadrant=spk_numb;
					}
					shift = (next - spk_position[current_quadrant-1]);
					if (shift<0) shift=360+shift;
				}

				if (shift == 0) shift = quadrant_dim;
				
				// verificare se il valore di destinazione Ë nel quadrante attuale o no;
				if (find_quadrant(rnd_cen_target) == current_quadrant) {
					shift = distance(next, rnd_cen_target);
					if (!shift) rnd_cen_increment_count=rnd_cen_target_increment + 1;
				}
				
				quadrant_time = (shift / rnd_cen_target_increment) * rnd_cen_target_time * ( 1 / rnd_cen_speed_rescale_val);
				target_ticksleft = Math.round(quadrant_time/CLOCK_TIME_BASE);
				if (!target_ticksleft) target_ticksleft=1;
				
				CLOCK_TIME = (quadrant_time / target_ticksleft);
				
				quadrant_time = CLOCK_TIME * target_ticksleft;
				ticks_inc = shift / target_ticksleft;
				
				next_spk = (next + rnd_cen_dir * shift) % 360;
				if (next_spk<0) next_spk=360+next_spk;
				
				sendnext(next_spk, quadrant_time);
				
				rnd_cen_speed_rescale_val_old = rnd_cen_speed_rescale_val;
			}
			// increment next during movement
			if ((rnd_cen_increment_count) < (rnd_cen_target_increment) && rnd_cen_pause_count == 0) {
				next=((next+(rnd_cen_dir * ticks_inc)) % 360);
				if (next<0) next=360+next;
			}
		break;

	}

	diam_tsk.schedule(CLOCK_TIME);
}
diam_clock.local=1;

function points_clock(){
	var shift = 0;
	
	switch (type) {
		case (RND):
			if (rnd_time_count < rnd_target_time) {
				rnd_time_count += ticks_inc;
			}
			if (rnd_time_count >= rnd_target_time && rnd_pause_count==0){
				if (rnd_pause_time<=CLOCK_TIME_BASE) {
					CLOCK_TIME = rnd_pause_time;
				} else {
					CLOCK_TIME = (rnd_pause_time/(rnd_pause_time/CLOCK_TIME_BASE)+1);
				}				
			}
			if (rnd_time_count >= rnd_target_time && rnd_pause_count < rnd_pause_time) {
				rnd_pause_count = rnd_pause_count + (CLOCK_TIME * rnd_speed_rescale_val);
			}

			if ((rnd_time_count >= rnd_target_time && rnd_pause_count >= rnd_pause_time) || (target_ticksleft == 0 && rnd_pause_count == 0) || (rnd_speed_rescale_val != rnd_speed_rescale_val_old && rnd_pause_count==0)){
				
				if (rnd_time_count >= rnd_target_time && rnd_pause_count >= rnd_pause_time) {
					rnd_time_count = 0;
					rnd_pause_count = 0;
					rnd_step();
				}
				
				target_ticksleft = Math.round(((rnd_target_time-rnd_time_count)/ rnd_speed_rescale_val)/CLOCK_TIME_BASE);
				
				if (!target_ticksleft) target_ticksleft=1;
				
				CLOCK_TIME = ((rnd_target_time-rnd_time_count) / rnd_speed_rescale_val)/ target_ticksleft;
				ticks_inc = rnd_target_time / target_ticksleft;
				
				sendnext(rnd_target, parseInt((rnd_target_time - rnd_time_count) / rnd_speed_rescale_val));
				next=rnd_target;
				rnd_speed_rescale_val_old = rnd_speed_rescale_val;
			}
		if (rnd_time_count < rnd_target_time) {
			rnd_disp_x += rnd_disp_inc_x;
			rnd_disp_y += rnd_disp_inc_y;
		}

		break;
	}
	
	points_tsk.schedule(CLOCK_TIME);
	target_ticksleft --;
}
points_clock.local=1;

//------ Output function

function build_list(spk_A, spk_B, amp_A, amp_B){
	var i;
	var list = new Array(spk_numb);
	
	for (i=0; i<spk_numb; i++){
		if (i==spk_A-1) list[i]=amp_A; else if (i==spk_B-1) list[i]=amp_B; else list[i]=0;
	}
	if (decay_dec>0) {
		list = decay_value(list, preview_list);	
	}
	preview_list=list;
	
	return list;
}
build_list.local=1;

function decay_value(new_list, old_list){
	var i, rescale;
	
	for (i=0; i<spk_numb; i++){
		if (old_list[i]!=0) {
			new_list[i] = (new_list[i] + (old_list[i] - old_list[i] * (CLOCK_TIME * decay_dec)));
		}
		if (new_list[i]<0) new_list[i]=0;
		if (new_list[i]>1) new_list[i]=1;
		
	}
	
	rescale = getRescale(new_list);
	for (i=0; i<spk_numb; i++){
		new_list[i] = new_list[i] * rescale;
	}

	return new_list;
}
decay_value.local=1;

function getRescale(items) {
	var sum = 0;

	for (i=0; i<spk_numb; i++) sum += Math.pow(items[i], 2);

	if (!sum) return(0);
	
	return(1 / Math.sqrt(sum)); //1 dovrebbe essere la somma calcolata da
}
getRescale.local = 1;

function find_quadrant(ang){
	var i;
	for (i=1;i<spk_numb;i++){
		if (ang<spk_position[i]) return(i);
	}
	return(i);
}

function sendnext(ang, time){
	var spk_A, spk_B, amp_A, amp_B;
	
	quadrant = find_quadrant(ang);
	
	spk_A = chainID[quadrant-1];
	spk_B = chainID[quadrant % spk_numb];
	
	ang = (ang - spk_position[quadrant-1]);

	amp_B = (ang)/quadrant_dimention[quadrant-1];
	amp_A = 1-amp_B;
	
	outlet(1, time);
	outlet(0, build_list(spk_A, spk_B, (amp_A), (amp_B)));

}
sendnext.local=1;

function dpostA(name, arr){
	if (DEBUG){
		post("Array " + name + ": ");
		for (var i=0; i<arr.length; i++){
			post(arr[i] + " ");
		}
		post("\n");
	}
}
dpostA.local = 1;

function dpost(s){
	if (DEBUG){
		post(s+"\n");
	}
}
dpost.local=1;
