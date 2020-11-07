import React from 'react';
import "./News.css";
import NewsItem from  "./NewsItem";

function News() {
    return (
        <div className="news">
            <NewsItem
                logoImage = "https://yt3.ggpht.com/a/AATXAJyY9jLhVGXYAyCwcO7a1dsSmfrnB9Ie0Bzr9Rum=s900-c-k-c0x00ffffff-no-rj"
                name = "Excel Movies"
                timestamp = "8 hours ago"
                image = "https://m.hindustantimes.com/rf/image_size_1200x900/HT/p2/2019/02/22/Pictures/_0c75a6a4-3694-11e9-85ab-b5c6484f4b61.jpg"
                desc = "Ek hi baar kahenge, inse panga na le #Mirzapur"
                like = "31K"
                comment = "213"

            />

            <NewsItem
                logoImage = "https://yt3.ggpht.com/a/AATXAJyzyrPJMwSCUxtTlY-MQ9sEqX8XHm8MYq4yr7e6Gw=s900-c-k-c0x00ffffff-no-rj"
                name = "Netflix India"
                timestamp = "5 days ago"
                image = "https://st1.bollywoodlife.com/wp-content/uploads/2016/08/shahrukh-khan-1-020615.jpg"
                desc = "We know exactly the reason why everyone's EEEEEEE-ing today. Happy birthday to the king of our hearts ❤️"
                like = "48K"
                comment = "653"

            />

            <NewsItem
                logoImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQH6BHWAOzAaYXhRtZ9t0V09yNCNXwS3YhX4w&usqp=CAU"
                name = "Amazon Prime India"
                timestamp = "8 hours ago"
                image = "https://yt3.ggpht.com/zD7wIUatQ5BC5kVR_KknRqHwb-LlPCl-l_qQ4wQ_m-71Ws9kZI4BmKU0zZ29umcjpRxEtxccgs8of-4=s800-nd"
                desc = "Mood for the weekend: Thrill Watch #GathamOnPrime now!"
                like = "21K"
                comment = "665"

            />

            <NewsItem
                logoImage = "https://yt3.ggpht.com/a/AATXAJw-6pk5CzY8UBlTnngE4oUnBein8uRyHiVFEj8CIg=s900-c-k-c0x00ffffff-no-rj"
                name = "Zee Music Company"
                timestamp = "1 day ago"
                image = "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/11/03/whatsapp-image-2020-11-03-at-5-01-10-pm1041771.jpg?fit=900%2C903&quality=80&zoom=1&ssl=1"
                desc = "#Laxmii ne apne tadakte-bhadakte anthem se aag laga di hai!!"
                like = "81K"
                comment = "343"

            />
        </div>
    )
}

export default News
