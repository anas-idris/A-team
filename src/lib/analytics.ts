export function trackEvent(event: string, props?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(event, { props });
  }
}

const trackedSections = new Set<string>();

export function trackSectionView(sectionId: string) {
  if (trackedSections.has(sectionId)) return;
  trackedSections.add(sectionId);
  trackEvent('section_view', { name: sectionId });
}
