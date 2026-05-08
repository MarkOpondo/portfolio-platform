import { useState } from "react"

export default function Search({ setSearchWord }) {

    return (
        
    <form>
        <input type="text" placeholder="Search Projects" onChange={(e) => setSearchWord(e.target.value)}/>
    </form>
        
    )
}