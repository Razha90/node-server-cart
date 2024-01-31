module.exports = mongoose => {
    const schema = mongoose.Schema({
        user_id:Number,
        cart_items: [{type: String, unique:true}]
    })

    schema.method('toJson', function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    })

    const Order = mongoose.model("order", schema);
    return Order
}