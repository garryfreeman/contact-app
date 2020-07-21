export default class resumeService {

	data = {
		"garik":{
			"login": "garik",
			"password":"free",
			"firstName":"Garik",
			"lastName":"Freedomyan",
			"contactsList":[
				{
					"id":556,
					"name":"George",
					"telephone":"+7(900)000-00-00",
					"mail":"george@mail.ru"
				},
				{
					"id":322,
					"name":"Masha",
					"telephone":"+7(911)111-11-11",
					"mail":"masha@mail.ru"
				},
				{
					"id":356,
					"name":"Oleg",
					"telephone":"+7(922)222-22-22",
					"mail":"oleg@mail.ru"
				},
				{
					"id":400,
					"name":"Piter",
					"telephone":"+7(933)333-33-33",
					"mail":"piter@mail.ru"
				}
			]
		},
		"takeoff":{
			"login": "takeoff",
			"password":"staff",
			"firstName":"Takeoff",
			"lastName":"Staff",
			"contactsList":[
				{
					"id":111,
					"name":"Ceo",
					"telephone":"+7(900)000-00-00",
					"mail":"ceo@mail.ru"
				},
				{
					"id":222,
					"name":"Cao",
					"telephone":"+7(911)111-11-11",
					"mail":"cao@mail.ru"
				},
				{
					"id":333,
					"name":"Garik",
					"telephone":"+7(924)236-93-41",
					"mail":"garikfreedomyan@gmail.com"
				},
				{
					"id":444,
					"name":"John",
					"telephone":"+7(933)333-33-33",
					"mail":"john@mail.ru"
				}
			]
		}
	 }

	getData() {
		return new Promise((resolve, reject) => {
			resolve(this.russianContentState);
			reject(new Error('Something bad happend'));
		});
	};
};