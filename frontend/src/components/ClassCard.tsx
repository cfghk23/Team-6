import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  tryLink?: string;
}

const ClassCard = ({ title, description, link, image, tryLink }: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  
  const winWidth = window.innerWidth;
  const [width, setWidth] = useState(
    winWidth < 1350 && winWidth > 1100
    ? 360 - Math.floor((1350 - winWidth) / 2)
    : winWidth > 400
    ? 360
    : 360 - Math.floor((400 - winWidth) / 2)
  );

  useEffect(() => {
    const handleResize = () => {
      const winWidth = window.innerWidth;

      setWidth(
        winWidth < 1350 && winWidth > 1100
        ? 360 - Math.floor((1350 - winWidth) / 2)
        : winWidth > 400
        ? 360
        : 360 - Math.floor((400 - winWidth) / 2)
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Card style={{ width, overflow: 'hidden' }} raised>
        <div style={{ width, height: width, overflow: 'hidden' }}>
          <img
          style={{
            position: 'relative',
            left: '-10%',
            width: '120%',
          }}
          src={image}
          alt={title} />
        </div>
      <CardContent>
        <Typography variant='h2' style={{ margin: 0 }}>
          {title}
        </Typography>
      </CardContent>
      <CardActions style={{ paddingLeft: '16px' }} disableSpacing>
        <Button
          href={link}
          variant='outlined'>
          Source Code
        </Button>
        {tryLink
          ? <Button
            style={{ marginLeft: '8px' }}
            href={tryLink}
            variant='outlined'>
            Try It
          </Button>
          : null
        }
        <ExpandMore
          expand={expanded}
          onClick={() => setExpanded(!expanded)}>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout={200} unmountOnExit>
        <CardContent style={{ paddingTop: '0px' }}>
          <hr />
          <Typography>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ClassCard;