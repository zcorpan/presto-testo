/* The contents of this file are subject to the Netscape Public License
 * Version 1.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.mozilla.org/NPL/
 * 
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 * 
 * The Original Code is Mozilla Communicator client code, released March
 * 31, 1998.
 * 
 * The Initial Developer of the Original Code is Netscape Communications
 * Corporation. Portions created by Netscape are Copyright (C) 1998
 * Netscape Communications Corporation. All Rights Reserved.
 * 
 */
/**
    File Name:          15.1.1.2.js
    ECMA Section:       15.1.1.2 Infinity

    Description:        The initial value of Infinity is +Infinity.

    Author:             christine@netscape.com
    Date:               28 october 1997

*/
    var SECTION = "15.1.1.2";
    var VERSION = "ECMA_1";
    startTest();
    var TITLE   = "Infinity";

    writeHeaderToLog( SECTION + " "+ TITLE);

    var testcases = getTestCases();

    test();

function getTestCases() {
    var array = new Array();
    var item = 0;

    array[item++] = new TestCase( SECTION, "Infinity",               Number.POSITIVE_INFINITY,      Infinity );
    array[item++] = new TestCase( SECTION, "this.Infinity",          Number.POSITIVE_INFINITY,      this.Infinity );
    array[item++] = new TestCase( SECTION, "typeof Infinity",        "number",                      typeof Infinity );

    return ( array );
}
function test() {
        for ( tc=0; tc < testcases.length; tc++ ) {
            testcases[tc].passed = writeTestCaseResult(
                            testcases[tc].expect,
                            testcases[tc].actual,
                            testcases[tc].description +" = "+ testcases[tc].actual );

            testcases[tc].reason += ( testcases[tc].passed ) ? "" : "wrong value ";

        }

        stopTest();
        return ( testcases );
}
