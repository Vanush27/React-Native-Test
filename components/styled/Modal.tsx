import { FunctionComponent, useState } from "react";
import { Text, View, StyleSheet, Modal as DefaulModul } from "react-native";
import { PressableText } from "./PressableText";

type ModalProps = {
  activator?: FunctionComponent<{
    handleOpen: () => void;
  }>;
  children: React.ReactNode;
};
export function Modal({ activator: Activator, children }: ModalProps) {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <DefaulModul
        visible={isModalVisible}
        transparent={false}
        animationType="fade"
      >
        <View style={styles.centerView}>
          <View style={styles.contentView}>{children}</View>
          <PressableText onPress={() => setModalVisible(false)} text="close" />
        </View>
      </DefaulModul>

      {Activator ? (
        <Activator handleOpen={() => setModalVisible(true)} />
      ) : (
        <PressableText text="Open" onPress={() => setModalVisible(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentView: {
    marginBottom: 20,
  },
});
