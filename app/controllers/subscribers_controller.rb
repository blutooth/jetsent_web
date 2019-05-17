class SubscribersController < ApplicationController


    def create
        @subscriber = Subscriber.new(subscriber_params)

        if @subscriber.save
            redirect_to root_path
            @message = "Thanks for signing up!"

        else
            puts "IT EXISTS"
            @message = "That email already exits"
            redirect_to root_path and return
            respond_to do |format|
                format.js # create.js.erb
            end

        end


    end


    private

    def subscriber_params
        params.require(:subscriber).permit(:email,:phone)

    end
end
