import { getNotes } from '@reducers/note/NoteAction';
import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './NotesScreenStyle';

function NotesScreen() {
  const n = useSelector((state) => state.note);
  const {
    notes = [], from, to, isLastPage,
  } = n || {};
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const loadData = () => {
    setRefreshing(true);
    dispatch(getNotes({ from: 0, to: 10 }))
      .then(() => setRefreshing(false))
      .catch(() => setRefreshing(false));
  };

  const loadMore = () => {
    if (refreshing || isLastPage || from === 0) return;
    dispatch(getNotes({ from: to + 1, to: to * 2 }))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };

  const renderItem = ({ item }) => (
    <View style={styles.note}>
      <Text style={styles.noteTitle}>
        {item.title || 'Untitled Note'}
      </Text>
      <Text>
        {item.description}
      </Text>
    </View>
  );

  const renderFooter = () => (loading ? (
    <View style={styles.loading}>
      <ActivityIndicator size="small" />
    </View>
  ) : null);

  const renderSeparator = () => (
    <View style={styles.listSeparator} />
  );

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => `${item._id}`}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={renderSeparator}
        refreshing={refreshing}
        onRefresh={loadData}
        onEndReachedThreshold={0.1}
        onEndReached={loadMore}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

export default NotesScreen;
