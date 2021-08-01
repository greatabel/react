create database hope_outreach;

/*
wait for create database hope_outreach finished
then run following : create table sql
*/

use hope_outreach;
CREATE TABLE IF NOT EXISTS `bad_date`(
   `bid` INT UNSIGNED AUTO_INCREMENT,
   `agency_Name` VARCHAR(40),
   `volunteer_First` VARCHAR(40),
   `volunteer_Last` VARCHAR(40),
   `email` VARCHAR(100) ,
   `time_of_incident` VARCHAR(40) NOT NULL,
   `incidentLocation` VARCHAR(40) NOT NULL,
   `picked_up_by` VARCHAR(40) NOT NULL,
   `how_arranged` VARCHAR(40) NOT NULL,
   `location_picked_up` VARCHAR(40),
   `color` VARCHAR(40),
   `license_plate` VARCHAR(40),
   `doors_number` VARCHAR(40),
   `carcondition` VARCHAR(40),
   `make_model` VARCHAR(40),
   `cartype` VARCHAR(40),
   `firstname` VARCHAR(40),
   `lastname` VARCHAR(40),
   `age` VARCHAR(10),
   `hair_color_type` VARCHAR(40),
   `height_weight_build` VARCHAR(40),
   `tattoos_scars` VARCHAR(40),
   `nationality` VARCHAR(40),
   `smells` VARCHAR(40),
   `description_of_incident` VARCHAR(500),
   `report_to_police` VARCHAR(5),
   `appear_as_alert` VARCHAR(5),

   PRIMARY KEY ( `bid` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `bad_date_processed`(
   `id` INT UNSIGNED AUTO_INCREMENT, 
   `dateReported` DATE NOT NULL,
   `incidentDate` DATE,
   `city` VARCHAR(40) NOT NULL,
   `location` VARCHAR(100),
   `incidentType` VARCHAR(40) NOT NULL,
   `perpetratorDescription` VARCHAR(300),
   `vehicleDescription` VARCHAR(200),
   `incidentDetails` VARCHAR(500),

   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `bad_date_processed` (`id`, `dateReported`, `incidentDate`, `city`, `location`,`incidentType`, `perpetratorDescription`, `vehicleDescription`, `incidentDetails`) VALUES
(1,'2021-02-21','2021-01-21','Kelowna','','Kidnapping','','Black, 4-door pickup truck. Possibly a Chrystler','Woman got into back seat. She could not open the doors from inside. It was like a cop car. She smacked out the back window and ran.'),
(2,'2020-12-23',null,'Kelowna','Century 21 building on Hunter Crt.','Assault, Rape','Man who may use the nickname "Moon"','Possibly a red car','Reports of a man taking both men and women there and assaulting them - including rape. Do not go to the Century 21 building on Hunter Crt. in Kelowna'),
(3,'2021-01-01','2020-12-31','Kelowna','Cornerstone shelter','Kidnapping','Caucasian man, late 30s/early 40s. Stalky with a shaved head.','Red SUV, older jeep Cherokee','Cornerstone shelter. Man asked female for help finding drugs. She got in the vehicle. Instead of driving around the block, he got on a highway and proceeded to drive to Winfield. She pulled a knife and he let her out and went inside a gas station.'),
(4,'2021-02-27',null,'Kelowna', 'Downtown','Harassment','Caucasian man, approx. 50 yrs old. Approx. 5ft 10inches. Light reddish hair, short, facial hair','Black truck, Chevy. Clean on the outside','Week of Feb 23, 2021. Harassment of non-sex worker downtown. Man tried to pick up a non-female sex worker in a downtown alley and continued to harass her until she threatened to leave her alone'),
(5,'2020-10-24',null,'Kelowna','8*1 Harvey Ave.','Rape','8*1 Harvey Ave. 778-***-7467.','','Sex worker raped and condom was removed. She was going to an outcall to a private residence. During service, the man removed his condom and raped her.'),
(6,'2021-02-18',null,'Kelowna','Superstore parking lot','Harassment','30-40 years old. Muscular. Brush cut.','Black 2-door coupe, possibly an older Honda Prelude. Car was very clean and shiny.','Harassment of non-sex worker in Superstore parking lot. Man repeatedly asked woman to get in his vehicle and he would make it worth her while. She repeatedly told him "no" and had to scream "get away from me".'),
(7,'2020-10-22',null,'Kelowna','','Assault, Refusal to pay','Caucasian man, approx. 50 yrs old. Approx. 5ft 9inches tall. 200+lbs (big). Black hair, clean shaven. Went by the name "Ryan" or "Brian", and used a different name online. Taxi driver.','Newer black 4-door sedan taxi-cab from Kelowna. Clean inside and outside.','Around July 2020. Female arranged ride on craigslist rideshare from Kamloops to Kelowna. She paid upfront. Cab driver then said she could have a refund in exchange for services. He became very forceful - verbally and physically, saying she wasn''t doing enough. He said he liked non-pros and he hadn''t "had white in a long time". Assaulted her and did not pay.'),
(8,'2021-01-23',null,'Kelowna','','Assault','250-XXX-9409. "Todd". Orange hair with some grey. Tall, overweight, facial hair.','Drives an orange and white camper',"Assault on sex-worker. He put his hand around the woman's throat and the other hand on her mouth."),
(9,'2021-02-23',null,'West Kelowna','','Assault', '250-XXX-3079. "Joe". Tall, late 40s or 50s. Grey and white hair. Over-grown fingernails. Is a flagger by profession. Lives in a trailer park on Westside','Drives a work truck','Assault on sex worker. He put a metal clamp in her vagina and she had to tell him 3 times to remove it.'),
(10,'2021-05-30','2021-05-30','West Kelowna','','Harassment, Assault','- Male, tall, tattoos, black hair, shaved on the sides. - Male, short, chubby, red hair. - Female, white, blonde, skinny girl.','','3 people with a machete, following. They had a machete on hand and were following girls around West Kelowna, making them feel unsafe.'),
(11,'2021-03-15',null,'Vernon','','Refusal to pay, Harassment','Man claimed he was a delivery driver and spoke with an accent (unsure what kind)','Dark-coloured, newer car.','He tried to pay with McDonald''s coupons and some coins. He also tried to stop her from getting out of the vehicle.'),
(12,'2021-03-15',null,'Vernon','','Refusal to pay, Kidnapping','Older man with long hair. Possibly named "Daren"','SUV','Man had no money to pay. He became sketched out by cops and kept driving around. Would''nt let her out of the vehicle.'),
(13,'2020-10-20',null,'Salmon Arm','','Assault','Curtis Sagmoen, history of assault on sex workers. White male, 40 yrs old, lives on farm. Targets women online who do outcalls.','','Ongoing investigation. History of serious violence on sex workers. Dead body found on his property. Deemed suspicious. https://globalnews.ca/news/7411826/okanagan-warning-sex-trade-workers/')