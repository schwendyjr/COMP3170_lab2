import React from "react";
import {artist} from "./mydata";

    
    export default function ArtistDetails({artist}){

        return (
            <div>
                <div>
                    <img src={image_url} alt={artist.name} />
                </div>
                <p>
                    
                  <span >{<h2>artist.name</h2>}</span>
                  <span >Country:{artist.country}</span>
                  <span >Years Active:{artist.years_active}</span>
    
                </p>
            </div>
        );
    }