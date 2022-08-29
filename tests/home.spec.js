// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('Home page', () => {
  test('counter button can be clicked and count incremented.', async ({
    page,
  }) => {
    await page.goto('/')

    const counterButton = page.locator('text=Clicked 0 times')

    await expect(counterButton).toBeVisible()

    await counterButton.click()

    await expect(page.locator('text=Clicked 1 times')).toBeVisible()
  })

  test('example page link is linking to example page', async ({ page }) => {
    await page.goto('/')

    const goToExample = page.locator('text=Go to example page')

    await expect(goToExample).toHaveAttribute('href', '/example')

    await goToExample.click()

    await expect(page).toHaveURL(/.*example/)
  })
})
