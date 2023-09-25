import { createStyles, Text, Avatar, Group, TypographyStylesProvider, Paper, Button, Notification } from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import { useState } from 'react';
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const useStyles = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
    width:"30%"
  },
  exploreBtn : {
    alignSelf:'center',
    marginTop:10
  },
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  },

  content: {
    '& > p:last-child': {
      marginBottom: 0,
    },
  },
}));

const CommentHtml =  {
  postedAt : 'Log Extractor', 
  body: 'Hello, you\'re logged in <br/> Welcome.' , 
  author : {
    name: 'Priyal',
    image: 'https://media-exp1.licdn.com/dms/image/D5616AQEk-SiPdqh6Bw/profile-displaybackgroundimage-shrink_350_1400/0/1665989036761?e=1674691200&v=beta&t=wmM4eiijZhh89j3DEv8toSHEFAwyQlkpv-UFn6WJukU'
    }
}

function Dashboard() {
  const { classes } = useStyles();
  const { user } = useAuth0();
  console.log(user);
  const [showNotification,setShowNotification] = useState(false);
  return (
    <div style={{display:'flex', justifyContent:'center'}}>

    <Paper  withBorder radius="md" className={classes.comment}>
      <Group>
        <Avatar src={CommentHtml.author.image} alt={''} radius="xl" />
        <div>
          <Text size="sm">{CommentHtml.author.name}</Text>
          <Text size="xs" color="dimmed">
            {CommentHtml.postedAt}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: CommentHtml.body }} />
        <Button onClick={() => {setShowNotification(true)}} className={classes.exploreBtn} size="xs">
            Check
          </Button>
      </TypographyStylesProvider>

      {showNotification && <Notification  onClose={() => {setShowNotification(false)}} className={classes.exploreBtn} icon={<IconCheck size={20} />} title="Wow Glad you're exploring">
        You can have access to all the stats.
      </Notification>}
      
    </Paper>
          
    </div>
  );
}

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <Loading />,
});