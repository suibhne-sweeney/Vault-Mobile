import * as React from 'react';
import { View, Image } from 'react-native';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react-native';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';

const DUMMY_SONG = {
  title: 'Blinding Lights',
  artist: 'The Weeknd',
  albumArt: 'https://media-cdn.socastsrm.com/wordpress/wp-content/blogs.dir/2166/files/2020/01/Blinding-Lights.jpg',
};

export default function Screen() {
  const [progress, setProgress] = React.useState(40);
  const [isPlaying, setIsPlaying] = React.useState(true);

  function togglePlayPause() {
    setIsPlaying((prev) => !prev);
  }

  return (
    <View className="flex-1 justify-center items-center gap-6 p-6 bg-secondary/30">
      <Card className="w-full max-w-sm p-6 rounded-2xl items-center">
        <CardHeader className="items-center">
          <Image
            source={{ uri: DUMMY_SONG.albumArt }}
            className="w-60 h-60 rounded-2xl mb-6"
            resizeMode="cover"
          />
          <CardTitle className="text-center text-2xl">{DUMMY_SONG.title}</CardTitle>
          <Text className="text-muted-foreground text-lg mt-2">{DUMMY_SONG.artist}</Text>
        </CardHeader>

        <CardContent className="w-full mt-8">
          <Progress value={progress} className="h-2" indicatorClassName="bg-sky-600" />
          <View className="flex-row justify-between mt-2">
            <Text className="text-xs text-muted-foreground">1:20</Text>
            <Text className="text-xs text-muted-foreground">3:20</Text>
          </View>
        </CardContent>

        <CardFooter className="flex-row justify-around items-center w-full mt-8">
          <Button variant="ghost" size="icon">
            <SkipBack size={28} />
          </Button>
          <Button variant="outline" size="icon" onPress={togglePlayPause} className="rounded-full w-16 h-16 justify-center items-center">
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </Button>
          <Button variant="ghost" size="icon">
            <SkipForward size={28} />
          </Button>
        </CardFooter>
      </Card>
    </View>
  );
}
