import "dotenv/config";
import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "Template",
  slug: "Template",

  extra: {
    apiUrl: process.env.EXPO_PUBLIC_API_URL,
    supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
  },
};

export default config;


/* 
-> You can use it two ways: 

1.
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

2.
import Constants from "expo-constants";
const apiUrl = Constants.expoConfig?.extra?.apiUrl;

 */