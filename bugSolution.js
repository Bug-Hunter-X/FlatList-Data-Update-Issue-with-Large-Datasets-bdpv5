This solution addresses the `FlatList` data update issue by focusing on data immutability and efficient key usage.  Here's the corrected code:

```javascript
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => ({ id: i, title: `Item ${i}` }));

const App = () => {
  const [items, setItems] = useState(DATA);

  const updateItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, title: 'Updated' } : item))
    );
  };

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text onPress={() => updateItem(item.id)}>{item.title}</Text>
        </View>
      )}
    />
  );
};

export default App;
```

By using functional updates and unique keys, React Native's `FlatList` can efficiently manage updates, even with large datasets.