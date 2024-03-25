app.component('review-list', {

    props: {
        reviews:{
            type: Array,
            required: true
        }
    },

    template: `
        <div class="review-container">
            <h3>Review</h3>
            <ul>
                <li v-for="(review, index) in reviews" :key="index">
                {{review.name}} give this {{review.rating}} stars
                <br />
                {{review.review}}
                <br/>
                 <!-- solution -->
                    Recommended: {{ review.recommend }}
                <!-- solution -->
                </li>
            </ul>
        </div>
    `
})