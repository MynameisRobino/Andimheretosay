// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'Omega', 		// this is the TITLE place in the class
				'https://google.com',	// this is the LINK place in the class
				'a Homeopathic theopany',			// this is the AUTHOR place in the class
				'Wiredsounds.png',	// this is the IMAGE place in the class
				'Let the love rain through her' // this is the BODY place in the class
				),

			new Post(
				'Beta',
				'https://vuejs.org',
				'a wandering Savoir',
				'differentplacedifferenttime.png', // this is a local image in the same folder as the js script
				'This has a local image. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra euismod euismod. Nulla leo est, venenatis at fringilla eget, tincidunt sed justo. In efficitur dui odio, sit amet finibus sem hendrerit ut. Etiam vestibulum sem vel metus lobortis, vitae dictum metus sagittis. Nulla facilisi. '
				),

			new Post(
				'This Post: letsall',
				'https://google.com',
				'Asiru',
				'youdontneedyourbody.png',
				'Crazy Fredrick bought many very exquisite opal jewels.'
				),

			new Post(
				'Another Post: lovelainlovelain',
				'https://vuejs.org',
				'mikasa',
				'wearethenuerons.png',
				'We promptly judged antique ivory buckles for the next prize.'
				),

			new Post(
				'Last Post: cyberia',
				'https://google.com',
				'Anptoght Author',
				'kamisama.png',
				'Jaded zombies acted quaintly but kept driving their oxen forward.'
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



