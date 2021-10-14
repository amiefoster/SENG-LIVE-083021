# Review the following code
# 'Self' is referenced in a few different places.
# Fill in the blanks

class Email 
    puts "#{self} will return the Email class"

    attr_accessor :sender, :receiver, :subject, :body

    def initialize(sender, receiver, subject, body)
        self.sender = sender
        self.receiver = receiver
        self.subject = subject
        self.body = body
        puts "#{self} will return the instance upon creation Email.new/the object"
    end 

    def print_signature 
        puts "Sincerely, #{self.sender}"
        puts "#{self} will return the instance upon invocation of print_signature"
    end 

end 

email = Email.new("amie", "amie", "What is self", "self")

