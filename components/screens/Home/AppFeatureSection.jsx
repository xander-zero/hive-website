import styled from "styled-components";
import { featureCardTable } from "../../../utility/data/featureCardTable";
import AppFeatureCard from "../Cards/AppFeatureCard";

const AppFeatureSection = () => {

    const renderLinks = () => {
        return featureCardTable.map((service, index) => <AppFeatureCard key={index} service={service}/> )
    }

    return <AppFeatureStyle>
        <div className="main-container">
           <div className="title">
             <h1 className="service-title">یک اپلیکیشن، برای تمام نیاز‌ها</h1>
           </div>
           <div className="needs-links">
              {renderLinks()}
           </div>
        </div>
    </AppFeatureStyle>
}


const AppFeatureStyle = styled.div`
    background-color: #F2F5F8;
    padding-bottom: 4rem;

    .main-container {
        background-color: #F2F5F8;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .service-title {
            color : #3F3F3F;
            font-size: 2.8rem;
            font-weight: 650;
            padding: 1rem  0;
        }

        .needs-links {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
`;


export default AppFeatureSection;