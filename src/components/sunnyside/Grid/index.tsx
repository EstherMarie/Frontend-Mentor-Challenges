import { GridSection } from './GridSection';

export function Grid() {
  return (
    <>
      <GridSection
        title="Transform your brand"
        text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        mobileImage="/images/sunnyside/mobile/image-transform.jpg"
        desktopImage="/images/sunnyside/desktop/image-transform.jpg"
        isReverse={true}
        color="yellow"
      />
      <GridSection
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
        mobileImage="/images/sunnyside/mobile/image-stand-out.jpg"
        desktopImage="/images/sunnyside/desktop/image-stand-out.jpg"
        color="softRed"
      />
      <GridSection lastRow={true} />
    </>
  );
}
