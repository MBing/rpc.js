module.exports = {


	// Groups - Used to categorize your methods
    groups: {
        math: {
            name: 'Calculatios',
            info: 'Some example math methods',
        },
        util: {
            name: 'Utility calls',
            info: 'API test, debug and utility methods',
        }

    },



    // Your API methods
	methods: {


		sum: {
			info: 'Sum two numbers',
			group: 'math',
			params: {
				x: { required: true, type: 'number', info: 'X value'},
				y: { required: true, type: 'number', info: 'Y value'}
			},
			action: function(params,output)
			{
				var result = parseInt(params.x) + parseInt(params.y);
				output.win(result);
			}
		},


		subtract: {
			info: 'Subtract two numbers',
			group: 'math',
			params: {
				x: { required: true, type: 'number', info: 'X value'},
				y: { required: true, type: 'number', info: 'Y value'}
			},
			action: function(params,output)
			{
				var result = parseInt(params.x) - parseInt(params.y);
				output.win(result);
			}
		},


		division: {
			info: 'Divide numbers',
			group: 'math',
			params: {
				a: { required: true, type: 'number', info: 'A value'},
				b: { required: true, type: 'number', info: 'B value'}
			},
			action: function(params,output)
			{
				var result = parseInt(params.a) / parseInt(params.b);
				output.win(result);
			}
		},


		multiply: {
			info: 'Multiply numbers',
			group: 'math',
			params: {
				b: { required: true, type: 'number', info: 'B value'},
				c: { required: true, type: 'number', info: 'C value'}
			},
			action: function(params,output)
			{
				var result = parseInt(params.b) * parseInt(params.c);
				output.win(result);
			}
		},


		helloWorld: {
			info: 'Say hello!',
			group: 'util',
			params: {
				name: { required: true, type: 'string', info: 'The name - Must be "World"'}
			},
			action: function(params,output)
			{
				if (params.name == 'World')
					output.win("Hello World!");
				else
					output.fail(500,'The param "name" should be "World"');

			}
		},



		// This method return your API schema/catalog
		// Used to generate the UI - You can delete if you don't use it
		getApiSchema: {
			info: 'Return API Schema',
			group: 'util',
			params: { },
			action: function(params,output)
			{
				output.schema();
			}
		}		


	}

}