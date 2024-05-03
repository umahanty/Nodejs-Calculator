const assert = require('assert');
const { remote } = require('webdriverio');

(async () => {
  const browser = await remote({
    logLevel: 'trace', // For detailed logs
    capabilities: {
      browserName: 'chrome',
    },
  });

  try {
    // Navigate to the calculator application
    await browser.url('http://localhost:5000');
    await browser.pause(5000); // Wait for the page to load
    console.log("Navigation step completed successfully.");

    // Perform addition: 5 + 3 = 8
    await browser.execute(() => {
      document.querySelector('input[name="num1"]').value = '5';
      document.querySelector('input[name="num2"]').value = '3';
    });
    console.log("Addition input values set.");

    await browser.execute((text) => {
      const select = document.querySelector('select[name="operator"]');
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text === text) {
          select.selectedIndex = i;
          break;
        }
      }
    }, '+'); // Select addition operator 

    await browser.execute(() => {
      document.querySelector('button[type="submit"]').click();  // Simulate click
    });
    console.log("Addition operation step completed successfully.");

    await browser.pause(5000); // Wait for the result

    // Validate the addition result
    let resultText = await browser.execute(() => {
      return document.querySelector('#result').textContent; // Get the result text
    });

    assert.strictEqual(resultText, 'Result: 8', 'Addition test failed');  // Validate the result
    console.log("Addition result validated successfully.");

    // Perform subtraction: 5 - 3 = 2
    await browser.execute(() => {
      document.querySelector('input[name="num1"]').value = '5';
      document.querySelector('input[name="num2"]').value = '3';
    });
    console.log("Subtraction input values set.");

    await browser.execute((text) => {
      const select = document.querySelector('select[name="operator"]');
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text === text) {
          select.selectedIndex = i;
          break;
        }
      }
    }, '-'); // Select subtraction operator

    await browser.execute(() => {
      document.querySelector('button[type="submit"]').click();  // Simulate click
    });
    console.log("Subtraction operation step completed successfully.");

    await browser.pause(5000); // Wait for the result

    // Validate the subtraction result
    resultText = await browser.execute(() => {
      return document.querySelector('#result').textContent; // Get the result text
    });

    assert.strictEqual(resultText, 'Result: 2', 'Subtraction test failed');  // Validate the result
    console.log("Subtraction result validated successfully.");

    // Perform multiplication: 5 * 3 = 15
    await browser.execute(() => {
      document.querySelector('input[name="num1"]').value = '5';
      document.querySelector('input[name="num2"]').value = '3';
    });
    console.log("Multiplication input values set.");

    await browser.execute((text) => {
      const select = document.querySelector('select[name="operator"]');
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text === text) {
          select.selectedIndex = i;
          break;
        }
      }
    }, '*'); // Select multiplication operator

    await browser.execute(() => {
      document.querySelector('button[type="submit"]').click();  // Simulate click
    });
    console.log("Multiplication operation step completed successfully.");

    await browser.pause(5000); // Wait for the result

    // Validate the multiplication result
    resultText = await browser.execute(() => {
      return document.querySelector('#result').textContent; // Get the result text
    });

    assert.strictEqual(resultText, 'Result: 15', 'Multiplication test failed');  // Validate the result
    console.log("Multiplication result validated successfully.");

    // Perform division: 6 / 3 = 2
    await browser.execute(() => {
      document.querySelector('input[name="num1"]').value = '6';
      document.querySelector('input[name="num2"]').value = '3';
    });
    console.log("Division input values set.");

    await browser.execute((text) => {
      const select = document.querySelector('select[name="operator"]');
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text === text) {
          select.selectedIndex = i;
          break;
        }
      }
    }, '/'); // Select division operator

    await browser.execute(() => {
      document.querySelector('button[type="submit"]').click();  // Simulate click
    });
    console.log("Division operation step completed successfully.");

    await browser.pause(5000); // Wait for the result

    // Validate the division result
    resultText = await browser.execute(() => {
      return document.querySelector('#result').textContent;  // Get the result text
    });

    assert.strictEqual(resultText, 'Result: 2', 'Division test failed');  // Validate the division result
    console.log("Division result validated successfully.");

  } catch (error) {
    console.error("Error during automation test:", error); // Handle exceptions
  } finally {
    await browser.deleteSession(); // Clean up and close the session
    console.log("Browser session closed.");
  }
})();
