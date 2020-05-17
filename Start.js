class Start
{
    constructor()
    {
        this.button = createButton("Start The Beat");
        this.button_text = createDiv("Enter Your Place/Map");
        this.button_text.position(530, 565);
        this.button_text.style('color', 'white');
        this.button_text.style('font-size', '20px');


        this.place = createSelect();
        this.place.option('jamnagar');
        this.place.option('mudhol');

        this.place_text = createDiv("Enter Your Place/Map");
        this.place_text.position(530, 405);
        this.place_text.style('color', 'white');
        this.place_text.style('font-size', '20px');
        

        this.situation = createSelect();
        this.situation.option('Cop Driver');
        this.situation.option('Thug Life/Gangster');
        this.situation.option('Like A Dad/Free Roam');
        this.situation.option('Far away/Shooting');

        this.situation_text = createDiv("Enter The Situation/Gameplay");
        this.situation_text.position(530, 485);
        this.situation_text.style('color', 'white');
        this.situation_text.style('font-size', '20px');
        

        this.name = createInput("Name");
        this.name_text = createDiv("Enter Your Name");
        this.name_text.position(530, 325);
        this.name_text.style('color', 'white');
        this.name_text.style('font-size', '20px');
    }

    display()
    {   
        this.name.position(530, 350)
        this.place.position(530, 430);
        this.situation.position(530, 510);  
        this.button.position(530, 590);

         this.button.mousePressed(()=>
         {
           this.name_text.hide();  
           this.button_text.hide();
           this.situation_text.hide();
           this.place_text.hide();  
           this.place.hide();
           this.situation.hide();
           this.button.hide();
           this.name.hide();

           place = this.place.value();
           situation = this.situation.value();
           name = this.name.value();

           player = new Player();
           player.play();
           
           console.log(place);
           console.log(situation);
           console.log(name);
         })
         drawSprites();
    }
}