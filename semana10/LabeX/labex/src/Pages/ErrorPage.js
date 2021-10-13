import React from "react";
import { PageContainer } from "./style";

const ErrorPage = () => {
  return (
      <PageContainer>
        <h1>Oops! Algo deu errado!</h1>
        <iframe
         title="errorGif"
         src="https://giphy.com/embed/UHAYP0FxJOmFBuOiC2" 
         width="480" 
         height="361" 
         frameBorder="0" 
         class="giphy-embed" 
         allowFullScreen>
        </iframe>
      </PageContainer>
  );
}

export default ErrorPage;