/**
 * BING ADS SAMPLE SCRIPT NOT INTENDED FOR PRODUTION USE
 * ONLY USE THIS SCRIPT IN PREVIEW MODE; IF YOU RUN THIS SCRIPT IT WILL MODIFY YOUR BIDS
 * PLEASE SEE THE BING ADS SCRIPT DOCUMENTAITON FOR MORE INFORMATION: https://docs.microsoft.com/en-us/bingads/scripts/
 */

function main() {
    let keywords = BingAdsApp.keywords().forDateRange("LAST_14_DAYS").get();
    let bidModifier = 2;

    while(keywords.hasNext()){
        let keyword = keywords.next();
        let roas = keyword.getStats().getReturnOnAdSpend();
        
        if(roas >= 5) {
            let currentCPC = keyword.bidding().getCpc();
            let newCPC = currentCPC * bidModifier;
            keyword.bidding().setCpc(newCPC);
        }
    }
}
