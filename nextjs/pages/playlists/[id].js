import Layout from "../../layouts/basic";
import Link from "../../src/Link";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import fetch from "isomorphic-unfetch";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  },
  img: {
    width: 300,
    height: 175
  }
}));

function Playlist(props) {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              {props.playlist.name} - 视频列表
            </Typography>
            <div className={classes.demo}>
              <List>
                {props.playlist.movies.map(movie => (
                  <ListItem key={movie.id}>
                    <Link
                      href={`https://www.qiuzhi99.com/movies/${
                        movie.url_name
                      }/${movie.id}.html`}
                      target="_blank"
                    >
                      <ListItemText primary={movie.title} />
                    </Link>
                  </ListItem>
                ))}
              </List>
              <Link href="/">back to home</Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

Playlist.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://www.qiuzhi99.com/api/v1/playlists/${id}`);
  const data = await res.json();

  return {
    playlist: data
  };
};

export default Playlist;
