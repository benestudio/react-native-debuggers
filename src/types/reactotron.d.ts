// extending global console with Reactotron logging type
interface Console {
  tron: (...args: any[]) => void;
}
