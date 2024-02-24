import Exception from "../../support/Pages/Exception/testExceptions.page";
const ex = new Exception();

/**
 * @description Test Suite For Exception Handling
 */
describe('Test Suite For Exception Handling',()=>{
    let creds;

    /**
     * @description Before each test, load test data
     */
    before(()=>{
        cy.fixture('testData.json').then((data) => {
            creds = data;
          });
    })

    /**
     * @description Before each test, load exception page
     */
    beforeEach(()=>{
        ex.ExceptionsPageLoad()
    })

    /**
     * @description Test case 1: NoSuchElementException handling
     */
    it('Test case 1: NoSuchElementException handling',()=>{
        const Inputtexts = creds.api;
        ex.addNewRowAndVerifyTwoInput(Inputtexts.newName) //added proper wait in base class
    })

    /**
     * @description Test case 2: ElementNotInteractableException handling
     */
    it('Test case 2: ElementNotInteractableException handling',()=>{ //used indexing so that only the valid save button will be clicked
        const Inputtexts = creds.api;
        ex.addNewRowAndVerifyTwoInput(Inputtexts.newName) //added proper wait in base class
        ex.addDataInRow2(Inputtexts.newJob)
        ex.verifySaveSuccess('Row 2 was saved')
    })

    /**
     * @description Test case 3: Verify By default input field is disabled
     */
    it('Test case 3 : Verify By default input field is disabled',()=>{
        ex.verifyInputDisabledbyDefault()
    })

    /**
     * @description Test case 4: StaleElementReferenceException
     */
    it('Test case 4: StaleElementReferenceException handling',()=>{
        ex.clickAddButton()
        ex.verifySaveSuccess('Row 2 was added')
        ex.verifyAddButtonNotvisible()
    })

    /**
     * @description Test case 5: TimeoutException handling
     */
    it('Test case 5: TimeoutException handling',()=>{
       ex.clickAddAndVerifyTwoInputRows()
    })
})