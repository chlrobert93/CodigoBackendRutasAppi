import { Fragment,useState } from 'react';
import { buildFeedbackPath, extractFeedback} from '../api/feedback/index';

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData]= useState(); 


  function loadFeebackHandler(id) {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
     
      .then((data) => {
        console.log(data)
         setFeedbackData(data.feedback);
      }); //  /api/some-feedback-id
  }

  return (
    <Fragment>
    {feedbackData && <p>{feedbackData.email}</p>}
    <ul>
      {props.FeedbackPage.map((item) => (
        //console.log(item),
        <li key={item.id}>
          {item.text} <button onClick={loadFeebackHandler.bind(null, item.id)}>Show Details</button>
          </li>
      ))}
    </ul>
   </Fragment> 
  );

}

export async function getStaticProps(){
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    return {
        props:{
            FeedbackPage: data,
        }
    }
}


export default FeedbackPage;
