const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();
suite('Unit Tests', () => {
    test('Translate Mangoes are my favorite fruit. to British English', () => {
        assert.equal(
            translator.americanToBritish('Mangoes are my favorite fruit.'),
            'Mangoes are my <span class="highlight">favourite</span> fruit.'
        )
    });

    test('Translate I ate yogurt for breakfast. to British English', () => {
        assert.equal(
            translator.americanToBritish('I ate yogurt for breakfast.'),
            'I ate <span class="highlight">yoghurt</span> for breakfast.'
        )
    });

    test("Translate We had a party at my friend's condo. to British English", () => {
        assert.equal(
            translator.americanToBritish("We had a party at my friend's condo."), 
            "We had a party at my friend's condo."
        )
    });

    test('Translate Can you toss this in the trashcan for me? to British English', () => {
        assert.equal(
            translator.americanToBritish('Can you toss this in the trashcan for me?'),
            'Can you toss this in the trashcan for me?'
        )
    });

    test('Translate The parking lot was full. to British English', () => {
        assert.equal(
            translator.americanToBritish('The parking lot was full.'),
            'The parking lot was full.'
        )
    });

    test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
        assert.equal(
            translator.americanToBritish('Like a high tech Rube Goldberg machine.'),
            'Like a high tech Rube Goldberg machine.'
        )
    });

    test('Translate To play hooky means to skip class or work. to British English', () => {
        assert.equal(
            translator.americanToBritish('To play hooky means to skip class or work.'),
            'To play hooky means to skip class or work.'
        )
    });

    test('Translate No Mr. Bond, I expect you to die. to British English', () => {
        assert.equal(
            translator.americanToBritish('No Mr. Bond, I expect you to die.'),
            'No <span class="highlight">Mr</span> Bond, I expect you to die.'
        )
    });

    test('Translate Dr. Grosh will see you now. to British English', () => {
        assert.equal(
            translator.americanToBritish('Dr. Grosh will see you now.'),
            '<span class="highlight">Dr</span> Grosh will see you now.'
        )
    });

    test('Translate Lunch is at 12:15 today. to British English', () => {
        assert.equal(
            translator.americanToBritish('Lunch is at 12:15 today.'),
            'Lunch is at <span class="highlight">12.15</span> today.'
        )
    });

    test('Translate We watched the footie match for a while. to American English', () => {
        assert.equal(
            translator.britishToAmerican('We watched the footie match for a while.'),
            'We watched the footie match for a while.'
        )
    });

    test('Translate Paracetamol takes up to an hour to work. to American English', () => {
        assert.equal(
            translator.britishToAmerican('Paracetamol takes up to an hour to work.'),
            'Paracetamol takes up to an hour to work.'
        )
    });

    test('Translate First, caramelise the onions. to American English', () => {
        assert.equal(
            translator.britishToAmerican('First, caramelise the onions.'),
            'First, <span class="highlight">caramelize</span> the onions.'
        )
    });

    test('Translate I spent the bank holiday at the funfair. to American English', () => {
        assert.equal(
            translator.britishToAmerican('I spent the bank holiday at the funfair.'),
            'I spent the bank holiday at the funfair.'
        )
    });

    test('Translate I had a bicky then went to the chippy. to American English', () => {
        assert.equal(
            translator.britishToAmerican('I had a bicky then went to the chippy'),
            'I had a bicky then went to the chippy'
        )
    });

    test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
        assert.equal(
            translator.britishToAmerican("I've just got bits and bobs in my bum bag"),
            `I've just got bits and bobs in my bum bag`
        )
    });

    test('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
        assert.equal(
            translator.britishToAmerican('The car boot sale at Boxted Airfield was called off.'),
            'The car boot sale at Boxted Airfield was called off.'
        )
    });

    test('Translate Have you met Mrs Kalyani? to American English', () => {
        assert.equal(
            translator.britishToAmerican('Have you met Mrs Kalyani?'),
            'Have you met <span class="highlight">Mrs.</span> Kalyani?'
        )
    });

    test("Translate Prof Joyner of King's College, London. to American English", () => {
        assert.equal(
            translator.britishToAmerican("Prof Joyner of King's College, London."),
            `<span class="highlight">Prof.</span> Joyner of King's College, London.`
        )
    });

    test('Translate Tea time is usually around 4 or 4.30. to American English', () => {
        assert.equal(
            translator.britishToAmerican('Tea time is usually around 4 or 4.30'),
            'Tea time is usually around 4 or <span class="highlight">4:30</span>'
        )
    });

    test('Highlight translation in Mangoes are my favorite fruit.', () => {
        assert.equal(
            translator.britishToAmerican('Mangoes are my favorite fruit.'),
            'Mangoes are my favorite fruit.'
        )
    });

    test('Highlight translation in I ate yogurt for breakfast.', () => {
        assert.equal(
            translator.britishToAmerican('I ate yogurt for breakfast.'),
            'I ate yogurt for breakfast.'
        )
    });

    test('Highlight translation in We watched the footie match for a while.', () => {
        assert.equal(
            translator.britishToAmerican('We watched the footie match for a while.'),
            'We watched the footie match for a while.'
        )
    });

    test('Highlight translation in Paracetamol takes up to an hour to work.', () => {
        assert.equal(
            translator.britishToAmerican('Paracetamol takes up to an hour to work.'),
            'Paracetamol takes up to an hour to work.'
        )
    });
});
