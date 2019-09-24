'use strict'

const expect = require( "chai" ).expect;

const anagramMatcher = require( "./index" );

describe( "anagram matcher", () => {

    it( "matches words with their anagram", () => {

        expect( anagramMatcher( "listen", "silent" ) ).to.equal( true );
        expect( anagramMatcher( "Elvis", "lives"   ) ).to.equal( true );
        expect( anagramMatcher( "Justin Timberlake", "I’m a jerk but listen" ) ).to.equal( true );

        expect( anagramMatcher( "anagram", "matcher" ) ).to.equal( false );


    });

});