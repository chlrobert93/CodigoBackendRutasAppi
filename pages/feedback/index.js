import { buildFeedbackPath, extractFeedback} from '../api/feedback';

function FeedbackPage(props) {
  return (
    <ul>
      {props.FeedbackPage.map((item) => (
        //console.log(item),
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
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
