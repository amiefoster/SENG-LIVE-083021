
def init
  greeting
  menu_list
end 

def greeting
  puts "Welcome to the donation tracker app!"
  puts "Please enter your name"
  
  name = gets 
  puts "Awesome, #{name}, what would you like to do?"
end

def menu_list
  puts "Please select from the following options"
  puts "option 1"
  puts "option 2"
  puts "option 3"

end

def menu_selection
  selection = gets.strip

  while selection != "exit"
    if selection == "1"
      puts "create a donation"
    elsif selection == ""
      puts "show list of orgs"
    elsif selection == "menu"
      puts "menu again"
    else
      puts "Looks like something went wrong try again."
    end
    selection = gets.strip
  end
end
