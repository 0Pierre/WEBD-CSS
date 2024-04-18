
const mongoose = require('mongoose');
const Animal = require('./model/animals'); 

// Connect to MongoDB
//as of right now this isnt functioning to come back to
mongoose.connect('mongodb://localhost:27017/lab4');

// for generating data
const generateMockData = () => {
    const mockData = [];
    for (let i = 0; i < 1000; i++) {
        const entry = new Animal({
            zoo: 'Zoo ' + i,
            scientificName: 'Scientific Name ' + i,
            commonName: 'Common Name ' + i,
            givenName: 'Given Name ' + i,
            gender: Math.random() < 0.5 ? 'Male' : 'Female',
            dateOfBirth: new Date(2000 + Math.floor(Math.random() * 20), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
            age: Math.floor(Math.random() * 20),
            isTransportable: Math.random() < 0.5 ? true : false
        });
        mockData.push(entry);
    }
    return mockData;
};

// Populate the database
const populateDatabase = async () => {
    try {
        await Animal.deleteMany({});
        const mockData = generateMockData();
        await Animal.insertMany(mockData);
        
        console.log('Database populated successfully!');
    } catch (error) {
        console.error('Error populating database:', error);
    } finally {
        mongoose.disconnect();
    }
};

// Call the populateDatabase function
populateDatabase();
