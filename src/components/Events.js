import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { EventCards } from '../index'
import { Card } from 'react-native-paper'

const Events = () => {
	return (
		<ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,

            }}
            horizontal
            showsHorizontalScrollIndicator={false}

        >
            <View className="flex flex-row space-x-2 " >

                <Card className="bg-red-400/100" >
                    <EventCards imgUrl="https://www.transparentpng.com/thumb/tree/tree-images-picture-3.png" title="Garden1"
                    />
                </Card>
                <Card className="bg-green-400/100" >
                    <EventCards imgUrl="https://www.transparentpng.com/thumb/tree/tree-images-picture-3.png" title="Garden2" />
                </Card>
                <Card className="bg-teal-400/100" >

                    <EventCards imgUrl="https://www.transparentpng.com/thumb/tree/tree-images-picture-3.png" title="Garden3" />
                </Card>
                <Card className="bg-cyan-400/100" >

                    <EventCards imgUrl="https://www.transparentpng.com/thumb/tree/tree-images-picture-3.png" title="Garden4" />
                </Card>
            </View>
        </ScrollView>

	)
}

export default Events