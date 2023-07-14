import React, { useEffect } from "react"
import { getPageList } from "../../services/database"

type Props = {

}

const Home = () => {
    useEffect(() => {
        getPageList()
            .then(console.log)
            .catch(console.error)
    }, [])

    return (
        <div>

        </div>
    )
}

export default Home