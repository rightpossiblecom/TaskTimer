# Production Checklist Verification

> **Status**: Ready for Submission (Build Skipped by User Request)

## Phase 1: Branding & Visuals
- [x] **1.0 Device Preview**: Integrated in `main.dart` (Enabled in Debug mode only).
- [x] **1.1 App Icon**: 
  - Source: `assets/app_logo.png` (Brain in box design)
  - Config: `pubspec.yaml` updated
  - Status: Generated for Android and iOS
- [x] **1.2 Splash Screen**: 
  - Config: `flutter_native_splash` in `pubspec.yaml`
  - Status: Generated (Indigo background `#6366F1`)
- [x] **1.3 App Name**: 
  - Android: Updated to "RecallBox" in `AndroidManifest.xml`
  - iOS: Updated to "RecallBox" in `Info.plist`
- [x] **1.4 Package Name**: 
  - Android: `com.recallbox.app` in `build.gradle.kts`
  - Kotlin: `MainActivity.kt` package updated and moved to `com/recallbox/app/`
  - iOS: `PRODUCT_BUNDLE_IDENTIFIER` updated to `com.recallbox.app` in `project.pbxproj`

## Phase 2: Android Release Signing
- [x] **2.1 Generate Keystore**: `recallbox-release.jks` created.
- [x] **2.2 Key Properties**: `android/key.properties` created with correct alias/passwords.
- [x] **2.3 Copy Keystore**: Copied to `android/app/recallbox-release.jks`.
- [x] **2.4 Build Config**: `android/app/build.gradle.kts` updated to use `signingConfigs.getByName("release")`.
- [x] **2.5 Backup**: Keys backed up to `docs/release/recallbox-release.jks`.

## Phase 3: Permissions Audit
- [x] **3.1 Android**: Added `<uses-permission android:name="android.permission.INTERNET"/>` to `AndroidManifest.xml`.
- [x] **3.2 iOS**: `Info.plist` verified.

## Phase 4: Version & Build Number
- [x] **4.1 Version**: Set to `1.0.0+1` in `pubspec.yaml`.

## Phase 5: App Store Metadata
- [x] **5.1 Listing**: Created `docs/release/play_store_listing.md` with full descriptions.
- [x] **5.2 Screenshots**: Folder created at `docs/release/screenshots/` (Populate with actual captures).
- [x] **5.3 Feature Graphic**: Generated premium graphic at `docs/release/featured_graphic_recallbox.png`.
- [x] **5.4 Privacy Policy**: Created `docs/release/privacy_policy.md` (Zero data collection policy).

## Phase 6 & 7: Technical Verification & Deployment
- [x] **6.3 ProGuard**: Created `android/app/proguard-rules.pro` to protect Hive and Flutter.
- [WARNING] **Build**: Skipped per user request. You must run `flutter build appbundle --release` before uploading.

## Phase 8: Client Handoff
- [x] **Release Folder**: All assets located in `docs/release/`.

---
## 📂 File Locations Verification
| Asset | Location | Status |
|-------|----------|--------|
| **Keystore** | `docs/release/recallbox-release.jks` | ✅ Present |
| **Key Properties** | `android/key.properties` | ✅ Present |
| **Feature Graphic** | `docs/release/featured_graphic_recallbox.png` | ✅ Present |
| **Play Listing** | `docs/release/play_store_listing.md` | ✅ Present |
| **Privacy Policy** | `docs/release/privacy_policy.md` | ✅ Present |
