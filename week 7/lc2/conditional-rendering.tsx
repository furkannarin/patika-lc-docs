// if, ternary, ampersand

function Component1() {
    const [ isVisible, setVisible ] = useState(false);
    const [ arr, setArr ] = useState([]);
  
    useEffect(() => {
      setTimeout(() => {
        const arr = ['hello world', 'patika'];
        setArr(arr);
        setVisible(true);
      }, 2500);
  
    }, [])
  
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.2, justifyContent: 'space-around', margin: 10 }}>
          <Button title="SHOW" onPress={() => setVisible(true)} />
          <Button title="HIDE" onPress={() => setVisible(false)} />
        </View>
        {/* {
          arr.length > 0 && <Text style={{ fontSize: 36, alignSelf: 'center' }}>{arr[0]}</Text>
        } */}
        {
          arr.length > 0
          ? <Text style={{ fontSize: 36, alignSelf: 'center' }}>{arr[0].toUpperCase()}</Text>
          : isVisible
          ? <Text style={{ fontSize: 36, alignSelf: 'center' }}>{arr[1].toUpperCase()}</Text>
          : <Text style={{ fontSize: 36, alignSelf: 'center' }}>YUKLENIYOR</Text>
        }
      </View>
    )
  }