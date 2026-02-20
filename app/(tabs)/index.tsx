import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const name = "Ralp Lorenz Yamis";
  const age = 21;
  const gender = "Male";
  const address = "Igpít, Opol, Misamis Oriental";
  const course = "Bachelor of Science in Information Technology";
  const school = "University of Science and Technology of Southern Philippines";

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.card}>
        {/* Profile Picture */}
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://ui-avatars.com/api/?name=Ralp+Lorenz+Yamis&size=200&background=4A90E2&color=fff' }}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.course}>{course}</Text>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Info Rows */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>🎂 Age</Text>
          <Text style={styles.value}>{age}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>⚧ Gender</Text>
          <Text style={styles.value}>{gender}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>📍 Address</Text>
          <Text style={styles.value}>{address}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>🎓 School</Text>
          <Text style={styles.value}>{school}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  header: {
    backgroundColor: '#4A90E2',
    paddingTop: 60,
    paddingBottom: 80,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: -50,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -50,
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2D3748',
    marginBottom: 4,
  },
  course: {
    fontSize: 13,
    textAlign: 'center',
    color: '#4A90E2',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4F8',
  },
  label: {
    fontSize: 14,
    color: '#718096',
    fontWeight: '600',
    width: '35%',
  },
  value: {
    fontSize: 14,
    color: '#2D3748',
    fontWeight: '500',
    width: '65%',
    textAlign: 'right',
  },
});