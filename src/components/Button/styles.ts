import { theme } from '@/src/global/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
