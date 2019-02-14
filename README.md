1. Install Mapbox package for React Native
    ```bash
        $ npm i @mapbox/react-native-mapbox-gl
    ```
2. go to yourProject/android/build.gradle
    ```java
    allprojects {
        repositories {
            jcenter()
            maven { url "$rootDir/../node_modules/react-native/android" }
            maven { url "https://jitpack.io" }
            maven { url "https://maven.google.com" }
        }
    }
    ```