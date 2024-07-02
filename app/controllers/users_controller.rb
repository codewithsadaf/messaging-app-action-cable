class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @users = User.all_except(current_user)

    @rooms = Room.public_rooms
    @room = Room.new
    @room_name = get_name(@user, current_user)
    @single_room = Room.where(name: @room_name).first || Room.create_private_room([@user, @current_user], @room_name)

    @message = Message.new
    @messages = @single_room.messages.order(created_at: :asc)
    render 'rooms/index'
  end

  private

  def get_name(user1, user2)
    users = [user1, user2].sort
    "private_#{users[0].id}_#{users[1].id}"
  end
end