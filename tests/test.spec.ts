const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    // Go to the website
    await page.goto('https://demoqa.com/');

    const title =  await page.title();
    expect(title).toBe('DEMOQA');

    // Check if the title is correct
    //const title = await page.title();
    //expect(title).toBe('Example Domain');
    
    // Check if a specific element is visible
    //const heading = page.locator('h1');
    //await expect(heading).toBeVisible();
    
    // Interact with a link
    //await page.click('text=More information...');
    //await expect(page).toHaveURL('https://www.iana.org/domains/reserved');
    await page.close();

  });