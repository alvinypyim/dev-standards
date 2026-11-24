// Example fragment.  Merge into the project's build.gradle.kts.
// Pin the plugin versions.  Check the current ones first.
plugins {
  java
  checkstyle
  id("com.diffplug.spotless")
}

java {
  toolchain {
    languageVersion = JavaLanguageVersion.of(21)
  }
}

checkstyle {
  configFile = file("config/checkstyle/checkstyle.xml")
}

spotless {
  java {
    // Formatter profile to be decided.  See docs/languages/java.md.
    eclipse().configFile("config/eclipse-formatter.xml")
  }
}
