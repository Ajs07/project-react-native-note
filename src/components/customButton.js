import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

/*menggunakan “Ubah”, "Hapus" dan "Kirim", teks pada button, warna, dan function-function yang akan dieksekusi ketika ditekan akan berbeda tergantung pada di mana hal itu digunakan.
Hal-hal tersebut seharusnya bisa diubah-ubah dan seharsunya bisa diberikan ke component induk melalui props.
Contoh di atas memiliki props berikut ini dan nilainya bisa diubah ketika component tersebut digunakan di tempat yang berbeda. */

const CustomButton = ({
  backgroundColor,
  color,
  text,
  onPress,
  fontSize = 16,
  width = 120,
}) => {
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor,
      width,
      padding: 10,
    },
    buttonText: {
      fontSize,
      fontWeight: '700',
      color,
    },
  })

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton