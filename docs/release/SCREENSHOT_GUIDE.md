# TaskTimer Screenshot Guide

## Setup device_preview

device_preview has been added as a dev dependency. To capture screenshots:

### 1. Wrap your app with DevicePreview (temporary)

Edit `lib/main.dart` and wrap `MaterialApp` with `DevicePreview`:

```dart
import 'package:device_preview/device_preview.dart';

void main() async {
  // ... existing Hive initialization ...
  
  runApp(
    DevicePreview(
      enabled: true, // Set to false for production
      builder: (context) => const MyApp(),
    ),
  );
}

// In MaterialApp:
MaterialApp(
  useInheritedMediaQuery: true, // Add this
  locale: DevicePreview.locale(context), // Add this
  builder: DevicePreview.appBuilder, // Add this
  // ... rest of your MaterialApp config
)
```

### 2. Run the app
```bash
flutter run
```

### 3. Capture Screenshots

With the app running, you can:
- Switch between different device frames
- Take screenshots of key screens
- Test different orientations

### 4. Required Screenshots (8 total)

Capture these screens in portrait mode:

1. **Home Screen - Empty State**
   - Clean timer interface
   - Task input field visible
   - Duration chips showing

2. **Home Screen - Task Entered**
   - Task name typed in
   - AI suggestion chip visible
   - Ready to start

3. **Timer Running**
   - Active countdown
   - Pause button visible
   - Progress indicator

4. **Timer Paused**
   - Paused state
   - Resume option shown

5. **History Screen - Populated**
   - List of completed sessions
   - Dates and durations visible

6. **Settings Screen - Light Mode**
   - Theme toggle
   - Clear history option
   - About navigation

7. **Settings Screen - Dark Mode**
   - Dark theme applied
   - All options visible

8. **About Screen**
   - App information
   - Version display

### 5. Save Screenshots

Save to `docs/release/screenshots/` with names:
- `01_home_empty.png`
- `02_home_task_entered.png`
- `03_timer_running.png`
- `04_timer_paused.png`
- `05_history.png`
- `06_settings_light.png`
- `07_settings_dark.png`
- `08_about.png`

### 6. Cleanup
Remove DevicePreview wrapper before building release version!
