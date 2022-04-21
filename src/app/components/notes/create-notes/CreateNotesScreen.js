import { createNote } from '@reducers/note/NoteAction';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';

import styles from './CreateNotesScreenStyle';

function CreateNotesScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setLoading(true);
    dispatch(createNote({
      title,
      description,
    })).then(() => {
      setLoading(false);
      setTitle('');
      setDescription('');
    }).catch(() => {
      setLoading(false);
    });
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Title"
        onChangeText={setTitle}
        disabled={loading}
        value={title}
      />
      <Input
        multiline
        numberOfLines={5}
        placeholder="Content"
        onChangeText={setDescription}
        inputStyle={styles.input}
        disabled={loading}
        value={description}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
        loading={loading}
        disabled={!title || !description || loading}
      />
    </View>
  );
}

export default CreateNotesScreen;
