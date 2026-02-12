import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import '../../core/constants/app_constants.dart';

class SettingsViewModel extends ChangeNotifier {
  ThemeMode _themeMode = ThemeMode.system;
  ThemeMode get themeMode => _themeMode;

  SettingsViewModel() {
    _loadSettings();
  }

  void _loadSettings() {
    final box = Hive.box<String>(AppConstants.hiveBoxSettings);
    final themeString = box.get('themeMode');
    if (themeString != null) {
      if (themeString == 'light')
        _themeMode = ThemeMode.light;
      else if (themeString == 'dark')
        _themeMode = ThemeMode.dark;
      else
        _themeMode = ThemeMode.system;
      notifyListeners();
    }
  }

  Future<void> setThemeMode(ThemeMode mode) async {
    _themeMode = mode;
    final box = Hive.box<String>(AppConstants.hiveBoxSettings);
    String modeString = 'system';
    if (mode == ThemeMode.light) modeString = 'light';
    if (mode == ThemeMode.dark) modeString = 'dark';

    await box.put('themeMode', modeString);
    notifyListeners();
  }
}
