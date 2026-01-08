import { test, expect } from '@playwright/test'

/**
 * Logo and Image Visibility Tests
 *
 * These tests verify that critical images are present and visible on the homepage:
 * 1. Header logo (top left corner) - validates the American Legion Post 245 branding
 * 2. Verify the site displays American Legion branding consistently
 *
 * Note: The current implementation uses:
 * - Header logo: Local American Legion emblem with alt="American Legion Post 245"
 */

test.describe('Logo and Brand Visibility', () => {
  test('should display Legion in the Woods logo in header', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the logo in the Header - look for any img in the header link
    const headerLogo = page.locator('header a[href="/"] img').first()

    // Verify the logo exists and is visible
    await expect(headerLogo).toBeVisible()

    // Verify the logo has Legion in the Woods alt text
    await expect(headerLogo).toHaveAttribute('alt', 'Legion in the Woods')
  })

  test('should display Legion in the Woods branding in hero section', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the hero heading with Legion in the Woods branding
    const heroHeading = page.locator('h1:has-text("Legion in the Woods")').first()

    // Verify the heading exists
    await expect(heroHeading).toBeVisible()

    // Verify it contains the correct text
    await expect(heroHeading).toContainText('Legion in the Woods')
  })
})
