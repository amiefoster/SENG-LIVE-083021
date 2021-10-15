require 'pry'

class Pizza
    attr_accessor :name, :ingredients, :desc
  
    def initialize name, ingredients, desc
      @name = name
      @ingredients = ingredients
      @desc = desc
    end

    #getter mehtod - sets the value
    #def name
       # @name
    #end

    #setter method - lets us change/update the value
    #def name=(name)
        #@name = name
    #end
 
  end

  pepperoni = Pizza.new("pepperoni", "pepperoni, cheese", "Yummy!")

  binding.pry
