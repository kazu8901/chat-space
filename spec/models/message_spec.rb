require 'rails_helper'
RSpec.describe Message, type: :model do
  describe '#create' do
    context '保存できる場合' do
      it "contentがあれば保存できる" do
        message = build(:message, image: nil)
        expect(message).to be_valid
      end
  
      it "imageがあれば保存できる" do
        message = build(:message, content: nil)
        expect(message).to be_valid
      end
  
      it "contentとimageがあれば保存できる" do
        message = build(:message)
        expect(message).to be_valid
      end
    end
    
    context '保存できない場合' do
      it "contentもimageもないと保存できない" do
        message = build(:message, content: "", image: "")
        message.valid?
        expect(message.errors[:content]).to include("を入力してください")
      end

      it "group_idがないと保存できない" do
        message = build(:message, group_id: "")
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end

      it "user_idがないと保存できない" do
        message = build(:message, user_id: "")
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end

    end

  end
end