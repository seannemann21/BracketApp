import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default function Matchup(props) {
  // const competitors =
  //   props.competitors.length > 0
  //     ? props.competitors
  //     : [{name: 'TBD'}, {name: 'TBD'}];

  const competitor_matchups =
    props.competitor_matchups.length < 2
      ? props.competitor_matchups.concat(
          Array.from({length: 2 - props.competitor_matchups.length}, () => ({
            competitor: {name: 'TBD'},
            votes: [],
          })),
        )
      : props.competitor_matchups;

  const matchupId = props.id;
  const {competitorClickCallback} = props;

  return (
    <View>
      {competitor_matchups.map(competitor_matchup => {
        const competitor = competitor_matchup.competitor;
        const voteCount = competitor_matchup.votes.length;
        return (
          <TouchableHighlight
            onPress={() => competitorClickCallback(matchupId, competitor.id)}>
            <View
              style={{
                borderWidth: 1,
                width: 250,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{competitor.name}</Text>
              <Text>{voteCount}</Text>
            </View>
          </TouchableHighlight>
        );
      })}
    </View>
  );
}
