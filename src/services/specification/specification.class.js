const { Service } = require('feathers-mongodb');

exports.Specification = class Specification extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('specification');
    });
  }
};
