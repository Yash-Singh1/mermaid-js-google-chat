/**
 * Responds to a MESSAGE event in Hangouts Chat.
 *
 * @param {Object} event the event object from Hangouts Chat
 */
function onMessage(event) {
  if (event.message.text.split('\n')[0].trim() === '!mermaid') {
    const codeEncoded = btoa(
      event.message.trim().slice('!mermaid'.length).trim() + '\n'
    );
    return {
      cards: [
        {
          sections: [
            {
              widgets: [
                {
                  image: { imageUrl: 'https://mermaid.ink/img/' + codeEncoded }
                },
                {
                  buttons: [
                    {
                      textButton: {
                        text: 'Open in Live Editor',
                        onClick: {
                          openLink: {
                            url:
                              'https://mermaid-js.github.io/mermaid-live-editor/#/edit/' +
                              codeEncoded
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  }
}
