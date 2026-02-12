# TaskTimer Release Keystore Generation

## Automated Keytool Failed
The `keytool` command is not available in your PATH. You'll need to run it manually.

## Option 1: Find Java and Run Keytool

### Step 1: Find Java Installation
Run this command to find Java:
```powershell
where.exe java
```

Or check common locations:
- `C:\Program Files\Android\Android Studio\jbr\bin\keytool.exe`
- `C:\Program Files\Java\jdk-*\bin\keytool.exe`

### Step 2: Generate Keystore
Once you find keytool, run (replace PATH_TO_KEYTOOL):
```powershell
& "PATH_TO_KEYTOOL\keytool.exe" -genkey -v -keystore "c:\Users\mr_right\Desktop\projects\olumide\task_timer\docs\release\tasktimer-release.jks" -keyalg RSA -keysize 2048 -validity 10000 -alias tasktimer -storepass tasktimer123 -keypass tasktimer123 -dname "CN=TaskTimer, OU=TaskTimer, O=TaskTimer, L=City, ST=State, C=US"
```

## Option 2: Use Android Studio
1. Open Android Studio
2. Build menu → Generate Signed Bundle/APK
3. Create new keystore:
   - **Location**: `c:\Users\mr_right\Desktop\projects\olumide\task_timer\docs\release\tasktimer-release.jks`
   - **Password**: `tasktimer123`
   - **Alias**: `tasktimer`
   - **Alias Password**: `tasktimer123`
   - **Validity**: 10000 days

## After Generating Keystore

### 1. Copy to Android folder
```powershell
Copy-Item -Path "docs\release\tasktimer-release.jks" -Destination "android\app\tasktimer-release.jks"
```

### 2. Verify key.properties exists
File already created at: `android\key.properties`
Contents:
```
storePassword=tasktimer123
keyPassword=tasktimer123
keyAlias=tasktimer
storeFile=tasktimer-release.jks
```

### 3. Backup credentials
Save `docs\release\README.md` with credentials:
```markdown
# TaskTimer Release Credentials

**CRITICAL: Keep this file secure!**

## Keystore Details
- File: tasktimer-release.jks
- Store Password: tasktimer123
- Key Alias: tasktimer
- Key Password: tasktimer123
- Validity: 10000 days

## Recovery
If you lose this keystore, you cannot update the app on Google Play.
Keep multiple backups in secure locations.
```

## Verification
After generating, verify the keystore:
```powershell
keytool -list -v -keystore "docs\release\tasktimer-release.jks" -storepass tasktimer123
```
