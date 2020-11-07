import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import ChannelVideo from "./ChannelVideo";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage-filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>

      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJyZBQmbGZE0RH4Rzh0my2iSArzhfVgUXY5iU8c1NYA=s900-c-k-c0x00ffffff-no-rj"
        channel="T-Series"
        verified
        subs="160M"
        noOfVideos={(14, 780)}
        description="Music can change the world. T-Series is India's largest Music Label & Movie Studio, believes in bringing world close together through its music."
      />

      <hr />
      <h5>Latest from T-Series</h5>
      <ChannelVideo
        image="https://i.ytimg.com/vi/A5XC0Rhze9w/maxresdefault.jpg"
        title="Chhalaang: Teri Choriyaan (LYRICAL) Rajkummar R, Nushrratt B | Guru Randhawa, VEE, Payal Dev"
        views="1.3M"
        timestamp="23 hours ag0"
        description="Presenting Lyrical of Teri Choriyaan from bollywood movie Chhalaang, a romantic tune that will steal your hearts. It is composed..."
      />

      <ChannelVideo
        image="https://i.ytimg.com/vi/7iAmXLrLizM/maxresdefault.jpg"
        title="Sawan Mein Lag Gayi Aag - Ginny Weds Sunny | Yami, Vikrant | Mika, Neha & Badshah | Payal D, Mohsin"
        views="50M"
        timestamp="1 month ago"
        description="The official party anthem of the season #SawanMeinLagGayiAag #PartySong 
        #Mika #NehaKakkar #Badshah"
      />

      <ChannelVideo
        image="https://i.ytimg.com/vi/JFcgOboQZ08/maxresdefault.jpg"
        title="DILBAR Lyrical | Satyameva Jayate |John Abraham, Nora Fatehi,Tanishk B, Neha Kakkar,Dhvani, Ikka"
        views="906M"
        timestamp="2 years ag0"
        description="Gulshan Kumar and T-Series in association with Emmay Entertainment present the lyrical video Dilbar sung by Neha Kakkar..."
      />

      <ChannelVideo
        image="https://i.ytimg.com/vi/QVzzgu5SZmA/maxresdefault.jpg"
        title="Lyrical: Ankhiyon Se Goli Mare | Pati Patni Aur Woh | Kartik A, Bhumi P, Ananya P | Mika S, Tulsi K"
        views="46M"
        timestamp="11 months ag0"
        description="Presenting the lyrical video song Ankhiyon Se Goli Mare from the upcoming Bollywood movie, Pati, Patni Aur Woh,  Ankhiyon Se Goli Mare..."
      />

     <ChannelVideo
        image="https://1.bp.blogspot.com/-Q1w8Iq7WJHY/XbBQp4u011I/AAAAAAAACxQ/8kXiTx7vbcIj_IOXJqWfJhVkZQGVHl3TQCLcBGAsYHQ/s1600/Bekhayali%2BKabir%2BSingh.jpg"
        title="Bekhayali Full Song | Kabir Singh | Shahid K,Kiara A|Sandeep Reddy Vanga | Sachet-Parampara | Irshad
        "
        views="306M"
        timestamp="1 year ag0"
        description="Bekhyali Mein full video song | Kabir Singh Movie Song | Shahid Kapoor,Kiara Advani | T-Series"
      />

      <hr />

      <h5>People who watched</h5>

      <ChannelVideo
        image="https://i.ytimg.com/vi/iPxDyoVg_DE/maxresdefault.jpg"
        title="SIMMBA: Aankh Marey | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi, Mika, Neha Kakkar, Kumar Sanu"
        views="792M"
        timestamp="1 year ag0"
        description="Presenting the first video song Aankh Marey from the Bollywood Movie Simmba , The movie features Ranveer Singh, Sara Ali Khan..."
      />

      <ChannelVideo
        image="https://i.ytimg.com/vi/tLqtnGLfm4Q/maxresdefault.jpg"
        title="Tum Hi Aana Full Video | Marjaavaan | Riteish D, Sidharth M, Tara S | Jubin N | Payal Dev Kunaal V
        "
        views="179M"
        timestamp="1 year ag0"
        description="Presenting the full video song Tum Hi Aana from the Bollywood movie #Marjaavaan. This romantic track is sung by Jubin Nautiyal"
      />

      <ChannelVideo
        image="https://i.ytimg.com/vi/eN6AYHAT8UM/maxresdefault.jpg"
        title="Yaad Piya Ki Aane Lagi | Divya Khosla Kumar |Neha K,Tanishk B,Jaani, Faisu, Radhika&Vinay |Bhushan K
        "
        views="344M"
        timestamp="1 year ag0"
        description="Presenting official music video of  YAAD PIYA KI AANE LAGI  featuring Divya Khosla Kumar and Faisu. Produced by T-Series & Bhushan Kumar. This romantic song... "
      />

      <ChannelVideo
        image="https://i.ytimg.com/vi/iCe_el15SIw/maxresdefault.jpg"
        title="Tumhe Dillagi Song By Rahat Fateh Ali Khan | Huma Qureshi, Vidyut Jammwal | Salim - Sulaiman"
        views="209M"
        timestamp="4 year ag0"
        description="Presenting abeautiful rendition of Bhushan Kumar's Tumhe DILLAGI Bhool Jani padegi by Rahat Fateh Ali Khan, starring Huma Qureshi, Vidyut Jammwal..."
      />


    </div>
  );
}

export default SearchPage;
