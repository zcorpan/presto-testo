/* Tests for DOM 2 HTML 'HTMLDivElement' object.
   Interactive
*/

var cvs = "$Id: htmldivelement_int.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "HTMLDivElement interactive", cvs );

try {
	testcase("write align attribute");

	if (is_phase(2))
	{
		var div_elm = document.getElementById('d1');
		div_elm.align = "right";
		conf( "align #1", "Is 'Hello world!' aligned right?" );
		div_elm.align = "center";
		conf( "align #2", "Is 'Hello world!' aligned center?" );
		div_elm.align = "left";
		conf( "align #3", "Is 'Hello world!' aligned left?" );
	}

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
