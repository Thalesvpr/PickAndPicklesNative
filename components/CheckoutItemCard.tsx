import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Vibration,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import {
  BorderRadius,
  PaddingMargin,
  Sizes,
  SpaceGaps,
} from "@/constants/Theme";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { RainbowBaseColors } from "@/constants/VariantColors";
import ListCount from "./widgets/ListCount";
import Tag from "./widgets/Tag";
import { Texts } from "./widgets/Texts";
import { Button } from "./widgets/Button";

interface CartItemCardProps {
  id: number;
  itemName: string;
  itemQuantity: string;
  itemCount: number;
  itemCategory: string;
  categoryColor: RainbowBaseColors;
  onDeleteItem: () => void;
}

const SWIPE_THRESHOLD = -Dimensions.get("window").width * 0.3; // 30% da tela

const CartItemCard: React.FC<CartItemCardProps> = ({
  itemName,
  itemQuantity,
  itemCount,
  itemCategory,
  categoryColor,
  onDeleteItem,
}) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const editModeBackgroundColor = useThemeColor({}, "surfaceContainer");

  const handlePanGesture = (event: PanGestureHandlerGestureEvent) => {
    const { translationX: dragX, velocityX } = event.nativeEvent;

    if (Math.abs(velocityX) > 300 || dragX < SWIPE_THRESHOLD) {
      Animated.timing(translateX, {
        toValue: -Dimensions.get("window").width,
        duration: 200,
        useNativeDriver: true,
      }).start(onDeleteItem);
    } else {
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
        restSpeedThreshold: 100,
      }).start();
    }
  };

  return (
    <PanGestureHandler
      activeOffsetX={[-10, 10]} // Só ativa para gestos horizontais
      onGestureEvent={Animated.event(
        [{ nativeEvent: { translationX: translateX } }],
        { useNativeDriver: true }
      )}
      onHandlerStateChange={handlePanGesture}
    >
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateX }],
            backgroundColor: editModeBackgroundColor,
          },
        ]}
      >
        <TouchableWithoutFeedback
          onPress={() => console.log("Item pressionado")}
        >
          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <Texts.Subheadline>{itemName}</Texts.Subheadline>
              <Texts.SupportingText>{itemQuantity}</Texts.SupportingText>
            </View>

            <View style={styles.tagsContainer}>
              <Tag text={itemCategory} rainbowColor={categoryColor} />
              <ListCount count={itemCount} />
            </View>

            <View style={styles.deleteOverlay}>
              <Button
                icon="delete-outline"
                themeColor="error"
                onPress={onDeleteItem}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: PaddingMargin.md,
    borderRadius: BorderRadius.md,
    marginVertical: SpaceGaps.sm,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
    gap: SpaceGaps.sm,
  },
  tagsContainer: {
    flexDirection: "row",
    gap: SpaceGaps.sm,
    alignItems: "center",
  },
  deleteOverlay: {
    position: "absolute",
    right: -80,
    width: 80,
    height: "100%",
    justifyContent: "center",
    backgroundColor: "red",
  },
});

export default CartItemCard;
