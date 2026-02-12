# TaskTimer Release Credentials

**CRITICAL: Keep this file secure!**

## Keystore Details
- **File**: tasktimer-release.jks
- **Store Password**: tasktimer123
- **Key Alias**: tasktimer
- **Key Password**: tasktimer123
- **Validity**: 10000 days (until ~2054)

## Locations
- Primary: `docs/release/tasktimer-release.jks`
- Android app copy: `android/app/tasktimer-release.jks`

## Recovery Instructions
**CRITICAL WARNING**: If you lose this keystore, you CANNOT update the app on Google Play Store. You would need to publish under a new package name, losing all existing users and reviews.

### Backup Checklist
- [ ] Copy to secure cloud storage (Google Drive, Dropbox, etc.)
- [ ] Copy to external hard drive
- [ ] Email encrypted copy to yourself
- [ ] Store credentials in password manager

## Using the Keystore

### Build Release APK
```bash
flutter build apk --release
```

### Build Release App Bundle (for Play Store)
```bash
flutter build appbundle --release
```

Output will be in:
- APK: `build/app/outputs/apk/release/app-release.apk`
- AAB: `build/app/outputs/bundle/release/app-release.aab`

### Verify Keystore
```powershell
& "C:\Program Files\Android\Android Studio\jbr\bin\keytool.exe" -list -v -keystore "docs\release\tasktimer-release.jks" -storepass tasktimer123
```

## key.properties Location
The file `android/key.properties` contains these credentials and is used during build.
**DO NOT** commit this file to public repositories.
