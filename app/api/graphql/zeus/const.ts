/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	DateTime: "String",
	Query:{
		user:{
			id:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		scene:{
			id:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	Mutation:{
		createUser:{
			input:{
				type:"CreateUserInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateUser:{
			input:{
				type:"UpdateUserInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeUser:{
			id:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeScene:{
			id:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	CreateUserInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		email:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	UpdateUserInput:{
		id:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Scene:{
		id:"String",
		name:"String",
		properties:"String",
		geometry:"String",
		materials:"String",
		userId:"String",
		created_at:"DateTime",
		updated_at:"DateTime"
	},
	User:{
		id:"String",
		name:"String",
		email:"String",
		is_admin:"Boolean",
		created_at:"DateTime",
		updated_at:"DateTime",
		scenes:"Scene"
	},
	Query:{
		users:"User",
		user:"User",
		profile:"User",
		scenes:"Scene",
		scene:"Scene"
	},
	Mutation:{
		createUser:"User",
		updateUser:"User",
		removeUser:"User",
		removeScene:"Scene"
	}
}