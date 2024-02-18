import {  Button,Input,Textarea,Container,Stack,Grid  } from '@mantine/core';
import '@mantine/core/styles.css';
// import { ColorSchemeScript } from '@mantine/core';
import './App.css';
import CardComponent from './components/Card';
import {useState} from "react";

let arr = [
  {
  id:1,  
  title: 'Mountain 1',
  par: 'Topic 1',
  },
  {
    id:2,
    title: 'Mountain 2',
    par: 'Topic 2',
    },
  {
      id:3,
      title: 'Mountain 3',
      par: 'Topic 3',
      },
  ]



const App = () => {
const [title,setTitle] = useState ('');
const [paragraph,setParagraph] = useState ('');
const [list,setList] = useState(arr);  

const click = () => {
 setTitle('');
 setParagraph(''); 
const copyList = [...list];
copyList.push({
  id: 5,
  title: title,
  par: paragraph,
});
setList (copyList);
}

  return (
    <Container>
    <h1>Cards Program</h1>
    <Stack>
      <Input.Wrapper label="Title">
      <Input placeholder="Title component" value={title} 
      onChange={(e) => setTitle(e.target.value)} />
      </Input.Wrapper>

      <Textarea
        label="Paragraph"
        placeholder="Write a paragraph..."
        value={paragraph} 
        onChange={(e) => setParagraph(e.target.value)}
      />

      <Button variant="outline" onClick={click}>Create a card</Button>
      </Stack>

    <h2>The Cards:</h2>
    <Grid >
    {list.map(({title,par},i)=> (
      <Grid.Col span={4} key={`index ${i}`}>
        <CardComponent  
        title={title} 
        par={par}  
        index ={i}
        click={()=>{
         const copyList = [...list];
         copyList.splice(i, 1);
         setList(copyList); 
        }}
        />
        </Grid.Col>
    ))}
    </Grid>
  </Container>
  )
}

export default App;
