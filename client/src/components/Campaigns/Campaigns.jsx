import CampaignItem from "./CampaignItem";
import "./Campaigns.css";

const Campaigns = () => {
    return (
        <section class="campaigns">
            <div class="container">
                <div class="campaigns-wrapper">
                    <CampaignItem/>
                    <CampaignItem/>
                </div>
                <div class="campaigns-wrapper">
                    <CampaignItem/>
                    <CampaignItem/>
                </div>
            </div>
        </section>
    )
}

export default Campaigns;