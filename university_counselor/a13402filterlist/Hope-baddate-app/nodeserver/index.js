const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3002;
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/get', (req, res) => {
  db.query('SELECT * FROM bad_date_processed', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.post('/api/add', (req, res)=> {
    const ryear =req.body.ryear;
    const rmonth= req.body.rmonth;
    const rday =req.body.rday;
    const rbad_date=ryear+'-'+rmonth+'-'+rday;
    const pyear =req.body.pyear;
    const pmonth= req.body.pmonth;
    const pday =req.body.pday;
    const pbad_date=pyear+'-'+pmonth+'-'+pday;
    const city = req.body.city;
    const location = req.body.location;
    const incidentType=req.body.incidentType;
    const perpetratorDesc=req.body.perpetratorDesc;
    const vehicleDesc = req.body.vehicleDesc;
    const incident = req.body.incident;
    
    const incidentLocation =req.body.incidentLocation;
    const pickUp =req.body.pickUp;

    db.query("INSERT INTO bad_date_processed(dateReported,incidentDate,city,location,incidentType,perpetratorDescription,vehicleDescription,incidentDetails) VALUES (?,?,?,?,?,?,?,?)",
        [rbad_date,pbad_date,city,location,incidentType,perpetratorDesc,vehicleDesc,incident], (err,result)=>{
            if(err) {
                console.log(err)
            }
            console.log(result)
        }
    );
})

app.post('/api/create', (req, res)=> {
    const agency = req.body.agency;
    const volunteerFName=req.body.volunteerFName;
    const volunteerLName=req.body.volunteerLName;
    const email = req.body.email;
    const year =req.body.year;
    const month= req.body.month;
    const day =req.body.day;
    const bad_date=year+'-'+month+'-'+day;
    const incidentLocation =req.body.incidentLocation;
    const pickUp =req.body.pickUp;
    const arranged =req.body.arranged;
    const pickUpLocation =req.body.pickUpLocation;

    //Description of Vehicle
    const colour =req.body.colour;
    const license =req.body.license;
    const doors =req.body.doors;
    const carcondition =req.body.condition;
    const model = req.body.model;
    const type =req.body.type;

    //Description of Suspect
    const suspectFName =req.body.suspectFName;
    const suspectLName = req.body.suspectLName;
    const age = req.body.age;
    const hair =req.body.hair;
    const build = req.body.build;
    const identifier=req.body.identifier;
    const nationality=req.body.nationality;
    const smells=req.body.smells;

    //Incident
    const incident=req.body.incident;
    const policeReport = req.body.policeReport;
    const publicAlert =req.body.publicAlert;

// console.log(email,bad_date,time_of_incident,picked_up_by,how_arranged)


// INSERT INTO `hope_outreach`.`bad_date` (`email`, `bad_date`, `time_of_incident`, `picked_up_by`, `how_arranged`) VALUES ('outman@126.com', '2021-06-24', 'evening', '21:21', 'by taxi');

    db.query("INSERT INTO bad_date(agency_Name,volunteer_First,volunteer_Last,email,time_of_incident,incidentLocation,picked_up_by,how_arranged,location_picked_up,color,license_plate,doors_number,carcondition,make_model,cartype,firstname,lastname,age,hair_color_type,height_weight_build,tattoos_scars,nationality,smells,description_of_incident,report_to_police,appear_as_alert) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [agency,volunteerFName,volunteerLName,email,bad_date,incidentLocation,pickUp,arranged,pickUpLocation,colour,license,doors,carcondition,model,type,suspectFName,suspectLName,age,hair,build,identifier,nationality,smells,incident,policeReport,publicAlert], (err,result)=>{
            if(err) {
                console.log(err)
            }
            console.log(result)
        }
    );
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

