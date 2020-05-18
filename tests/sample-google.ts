describe("Push Notification Test", () => {
    it("should subscribe to topic and log token", () => {
        let el1 = $('android=new UiSelector().resourceId("com.enriquegh.sampleandroidpush:id/subscribeButton")');
        el1.click();
        let el2 = $('android=new UiSelector().resourceId("com.enriquegh.sampleandroidpush:id/logTokenButton")');
        el2.click();

        console.log("DEVICE IS READY!");
        browser.pause(60000);
        
        browser.openNotifications();

        browser.pause(15000);
        
    })

})