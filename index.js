function getLADataFromAPI(){
    var endpoint = 'https://data.lacity.org/resource/2bdm-kpij.json'
    var projectImages = {
        "Jordan Downs": "https://therealdeal.com/la/wp-content/uploads/2017/01/Jordan-Downs.jpg",
        "Nickerson Gardens": "https://c1.staticflickr.com/1/181/459600291_16f9d0bc63_b.jpg",
        "William Mead Homes":"https://www.laconservancy.org/sites/default/files/styles/hero_partial/public/images/heroes/William%20Mead%20Homes%20by%20Hunter%20Kerhart%207.jpg?itok=7ly2UH7Y",
        "Rose Hill Courts" : "https://www.amoeba.com/admin/uploads/blog/Eric_B/RoseHillCourts.JPG",
        "Ramona Gardens" :"http://www.boyleheightsbeat.com/wp-content/uploads/2014/09/IMG_4024.jpg",
        "Avalon Gardens" : "https://static1.squarespace.com/static/55bacdf0e4b07fa7600de1cf/55bacface4b0141573fa242e/55bacfade4b0141573fa2905/1352034889038/1000w/AvalonGardensPlan2.jpg",
        "Mar Vista Gardens": "https://cdn0.vox-cdn.com/thumbor/HIiJqWTVxMPMz9f9P6OtNWRfUiA=/800x0/filters:no_upscale()/cdn0.vox-cdn.com/uploads/chorus_asset/file/5807133/2008-08-mar_vista_gardens.0.jpg",
        "Imperial Courts" : "https://c1.staticflickr.com/5/4020/5076969956_9aa3fa6cd7_z.jpg",
        "Pueblo Del Sol" : "http://mccormackbaron.com/assets/img/images/managing-profiles/Pueblo%20del%20Sol/cprofiles_detail_img_pueblo_3_608x296.jpg",
        "Pueblo Del Rio" : "http://cdn.ipernity.com/144/43/25/34334325.0392cb34.500.jpg",
        "Estrada Courts" : "https://www.laconservancy.org/sites/default/files/styles/hero_partial/public/images/heroes/EStrada%20Courts%20Adrian%2007.JPG?itok=4qeMySPF",
        "Rancho San Pedro" : "http://image.dailybreeze.com/storyimage/LI/20150108/NEWS/150109560/EP/1/1/EP-150109560.jpg&maxh=400&maxw=667",
        "Gonzaque Village" : "https://c1.staticflickr.com/3/2426/3642260572_3c21eed2f7_b.jpg",
        "San Fernando Gardens" : "https://upload.wikimedia.org/wikipedia/commons/9/90/San_Fernando_Gardens_Apartments.JPG",
        "New Pico & Las Casitas" : "http://i201.photobucket.com/albums/aa318/rhsghs/LA%20Streets/Boyle%20Heights/BH%20Tech%20Center/Pico%20Gardens/End%20Violence%20March%20%2006132012/DSC01167.jpg",
        "Dana Harbor View & Wilmington" : "https://www.morleybuilders.com/wp-content/uploads/revslider/Harbor%20View%20Place/Harbor_2.jpg"
        
        
    }
     fetch(endpoint) 
    .then(function(data){
        return data.json()
    })
    .then(function(json){
        console.log(json)
       var resultDiv = document.getElementById('result')
       var finalHTML = ''
    //   var input = document.getElementById('search')
    //   var value = input.value
    //   var filteredData = json.filter(function(item){
    //       return item.site_name === value
    //   })
       json.forEach(function(item){
           var site = item.site_name
           var units= item.actual_units
           var occupied = item.occupied_units
           var rate = item.rate_of_occupied_units
           var residents = item.no_of_resident
           var rent = item.average_rent_per_month
           var income = item.average_monthly_income_per_family
           var location = item.location_1_address
           var acres = item.acres.split(".")[0]
           var picCardItem = 
           `
                 <div class="row">
                <div class="col s6 m4">
                  <div class="card">
                    <div class="card-image">
                      <img src=${projectImages[site]}>
                      <span class="card-title">${site}</span>
                    </div>
                    <div class="card-content pink-text">
                    <p> In the site of the ${site} , it is located in ${location} and it is estemated up to ${acres} acres & from our data it is occupied by ${occupied} units with the adverage rate of ${rate} and has a minimum of ${residents} residents, with the average rent per month of $${rent}, the monthly income per family is $${income}.</p>
                    </div>
                </div>
            </div>
           `
           
           //var cardItem =
           //`
           //<div class="col s6 m6">
           //    <div class="card blue-grey darken-1">
           //      <div class="card-content pink-text">
           //        <span class="card-title">${site}</span>
           //        <p>' In the location of ${location}, the site of the ${site}, it is  ${acres} acres, there are also ${occupied} occupied units with the rate of ${rate} and has ${residents} residents, with the average rent per month of ${rent}, the monthly income per family is ${income}.</p>
           //      <div class="card-action">
           //      </div>
           //     </div>
           //    </div>
           //   </div>
           //   
           // `
            //var cardItem = 
            //`
            //    <div class="col s4 m4">
            //      <div class="card">
            //        <div class="card-image">
            //          <img src="https://farm4.staticflickr.com/3041/2744167003_7498f322d7_o.jpg">
            //          <span class="card-title">${item.area_name}</span>
            //        </div>
            //        <div class="card-content">
            //          <p>
            //            'In the area of ${item.cross_street}, crimes have happend in ${item.cross_street}, and the location of ${item.crmcd_desc} also the crime was set as ${item.crmcd_desc} the status was ${item.status_desc} the date was ${item.date_occ}.                    
            //          </p>
            //        </div>
            //        <div class="card-action">
            //          <a href="#">This is a link</a>
            //        </div>
            //      </div>
            //    </div>
            //`
            finalHTML += picCardItem
        })
        resultDiv.innerHTML = finalHTML


    })
    .catch(function(error){
        console.log(error)
    })

}