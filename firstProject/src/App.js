import react from 'react';
import Card from './components/Card'

function App() {
  return(
    <ScrollView styles={styles.container}>
      <Card title="Fuat" text="Merhaba" />
      <Card title="Fuat" text="Merhaba" />
      <Card title="Fuat" text="Merhaba" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0'
  }
})


export default App;