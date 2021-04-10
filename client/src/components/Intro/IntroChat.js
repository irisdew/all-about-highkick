import React from 'react';
import Disqus from 'disqus-react';
function IntroChat() {
  const disqusShortname = 'hoguma';
  const disqusConfig = {
    url:
      'http://elice-kdt-ai-track-vm-da-02.koreacentral.cloudapp.azure.com/about',
    identifier: 'article-id',
    title: '하이킥 완전정복',
  };
  return (
    <>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </>
  );
}

export default IntroChat;
