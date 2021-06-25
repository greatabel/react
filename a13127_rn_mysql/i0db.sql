create database hope_outreach;


use hope_outreach;
CREATE TABLE IF NOT EXISTS `bad_date`(
   `bid` INT UNSIGNED AUTO_INCREMENT,
   `email` VARCHAR(100) NOT NULL,   
   `bad_date` DATE,
   `time_of_incident` VARCHAR(40) NOT NULL,
    `picked_up_by` VARCHAR(40) NOT NULL,
     `how_arranged` VARCHAR(40) NOT NULL,
    `location_picked_up` VARCHAR(40),
    `vehicle` VARCHAR(40),
    `color` VARCHAR(40),
       `license_plate` VARCHAR(40),
      `doors_number` VARCHAR(40),
      `condition` VARCHAR(40),
      `make_model` VARCHAR(40),
      `type` VARCHAR(40),
      `description_of_suspect` VARCHAR(40),
      `firstname` VARCHAR(40),
      `lastname` VARCHAR(40),
      `age` INT,
      `hair_color_type` VARCHAR(40),
      `height_weight_build` VARCHAR(40),
      `tattoos_scars` VARCHAR(40),
      `nationality` VARCHAR(40),
      `smells` VARCHAR(40),
      `description_of_incident` VARCHAR(500),
      `report_to_police` VARCHAR(1),
      `appear_as_alert` VARCHAR(1),

   PRIMARY KEY ( `bid` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;