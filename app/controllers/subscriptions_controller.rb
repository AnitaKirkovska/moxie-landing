class SubscriptionsController < ApplicationController
  before_action :set_subscription, only: [:show, :edit, :update, :destroy]

  def index

  end

  def new
    @subscription = Subscription.new
  end
  
  def create
    @subscription = Subscription.new(subscription_params)

    respond_to do |format|
      if @subscription.save
        format.html { redirect_to root_path, notice: 'Вашите податоци се регистрирани. Очекувајте да ве контактираме.' }
      else
        format.html { redirect_to root_path , notice: 'Треба да ги пополните сите полиња. Од една email адреса можете да се вклучите само еднаш.' }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_subscription
      @subscription = Subscription.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def subscription_params
      params.require(:subscription).permit(:name, :email)
    end
end
