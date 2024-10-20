import {test} from 'playwright/test'

test('Basic Navigation', async ({page})  => {
    await page.goto('http://github.com')
})
