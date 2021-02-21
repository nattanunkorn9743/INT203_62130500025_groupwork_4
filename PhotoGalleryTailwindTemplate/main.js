const app = {
    data() {
        return {
            msg: 'Hello & Welcome, Vue3',
            bigPhoto: false,
            photos: [{
                src: 'images/1.jpg',
                title: 'Autumn',
                favor: false,
                // sizePhoto: false,
                like: 0
            },
            {
                src: 'images/2.jpg',
                title: 'Hug & Love',
                favor: false,
                // sizePhoto: false,
                like: 0
            },
            {
                src: 'images/3.jpg',
                title: 'Good Night',
                favor: false,
                // sizePhoto: false,
                like: 0
            },
            {
                src: 'images/4.jpg',
                title: 'Architecture',
                favor: false,
                // sizePhoto: false,
                like: 0

            },
            {
                src: 'images/5.jpg',
                title: 'HarryPotter',
                favor: false,
                // sizePhoto: false,
                like: 0
            },
            {
                src: 'images/6.jpg',
                title: 'Building',
                favor: false,
                // sizePhoto: false,
                like: 0
            },
            {
                src: 'images/7.jpg',
                title: 'Mountain',
                favor: false,
                // sizePhoto: false,
                like: 0
            },
            {
                src: 'images/8.jpg',
                title: 'Oxygen',
                favor: false,
                // sizePhoto: false,
                like: 0
            },
            {
                src: 'images/9.jpg',
                title: 'Road',
                favor: false,
                // sizePhoto: false,
                like: 0
            },
            {
                src: 'images/10.jpg',
                title: 'Light',
                favor: false,
                // sizePhoto: false,
                like: 0
            }

            ],
           
            searchInput: {
                inputText: '',
                isshowSearch: false

            },
            isShowPreview: false,
            previewSrc: ''
        }
    },
    methods: {
        likePhoto(index) {
            this.photos[index].favor = !this.photos[index].favor


        },
        showSearch() {
            this.searchInput.isshowSearch = !this.searchInput.isshowSearch;
        },
        clickCencle(index) {
            this.searchInput.isshowSearch = !this.searchInput.isshowSearch;
            this.searchInput.inputText = '';

        },
        show(index){
            this.isShowPreview = true;
            this.previewSrc = this.photos[index].src;
          }
    },
    computed: {
        countLove() {
            return this.photos.filter(t => !t.favor).length
        },
        searchforPicture() {
          return this.photos.filter(photo =>{return photo.title.toLowerCase().includes(this.searchInput.inputText.toLowerCase())});
        }
    }
    
    

}
mountedApp = Vue.createApp(app).mount('#app')