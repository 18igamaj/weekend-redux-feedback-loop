import { useSelector } from "react-redux"



function FeedList({getFeedBack}) {

const feedBackStore = useSelector(store => store.feedbackList)

    return (
        <div>
        {feedBackStore.map((feed) => (
            <li>
                {feed.feeling}
            </li>
        ))}
        </div>
    )
}