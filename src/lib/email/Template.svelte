<script lang="ts">
  import { Button, Hr, Html, Text, Head, Body, Container, Section, Img } from 'svelte-email';

  export let senderName: string;
  export let message: string;
  export let senderEmail: string;

  const userImage = {
    margin: '0 auto',
    marginBottom: '16px',
    borderRadius: '50%'
  };

  const paragraph = {
    fontSize: '16px',
    lineHeight: '1.3',
    color: '#484848'
  };

  const review = {
    ...paragraph,
    padding: '20px',
    backgroundColor: '#f2f3f3',
    borderRadius: '4px'
  };
</script>

<Html lang="en">
  <Head />
  <Text>Sender: {senderName} - {senderEmail}</Text>
  <Body>
    <Container>
      <Section>
        <Img
          src="https://www.anuragrawat.tech/_app/immutable/assets/Image.14e10013.png"
          width="96"
          height="96"
          alt="author"
          style={userImage}
        />
      </Section>
      <Section>
        <Text>You received the following message</Text>
        <Text style={review}>{message}</Text>
      </Section>
    </Container>
  </Body>
  <Hr />
  <Button href="https://anuragrawat.tech/">Visit Website</Button>
</Html>
