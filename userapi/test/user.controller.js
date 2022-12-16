const { expect } = require('chai')
const userController = require('../src/controllers/user')
const db = require('../src/dbClient')

describe('User', () => {
  
  beforeEach(() => {
    // Clean DB before each test
    db.flushdb()
  })

  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'cconchez',
        firstname: 'Clement',
        lastname: 'Conchez'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Clement',
        lastname: 'Conchez'
      }
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    // it('avoid creating an existing user', (done)=> {
    //   // TODO create this test
    //   // Warning: the user already exists
    //   done()
    // })

    it('avoid creatin an existing user', (done) => {
      const user = {
        username: 'cconchez',
        firstname: 'Clement',
        lastname: 'Conchez'
      }
      // Create user
      userController.create(user, () => {  
      })
      // Try create same user a second time
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })     
    })
  })

  // TODO Create test for the get method
  // describe('Get', ()=> {
  //   
  //   it('get a user by username', (done) => {
  //     // 1. First, create a user to make this unit test independent from the others
  //     // 2. Then, check if the result of the get method is correct
  //     done()
  //   })
  //
  //   it('cannot get a user when it does not exist', (done) => {
  //     // Chech with any invalid user
  //     done()
  //   })
  //
  // })

  descride('Get', ()=> {

    it('get a user by username', (done) => {
    // 1. First, create a user to make this unit test independent from the others
      const user = {
        username: 'cconchez',
      firstname: 'Clement',
      lastname: 'Conchez'
      }
      userController.create(user, () => {  
      })
   // 2. Then, check if the result of the get method is correct
      userController.get(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal({
          firstname: 'Clement',
          lastname: 'Conchez'
        })
        done()
      })
    })



    it ('can not get a user when it does not exist', (done) => {
      //Asks for anon existing user user
      userController.get('noUser', (err,result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    
  })



})
