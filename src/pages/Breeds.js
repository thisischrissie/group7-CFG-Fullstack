import React from 'react';
import BreedCard from '../components/BreedCard.jsx'; //this works and won't start a fight with npm start
import '../styles/Breeds.css';


function Breed()
{
    return (
    //NAV BAR GOES HERE
    //SEARCH BAR COMPONENT GOES HERE
    // •
    <div className="grid-container">
      <BreedCard imageUrl="corgi.png" imageAlt="Corgi" dogBreed="Corgi" quality="Loyal  Playful  Intelligent" temper="Friendly" knows="•Walks required daily •High energy needs •Heavy fur shedders •Professional grooming required"/>
      <BreedCard imageUrl="shih.png" imageAlt="Shih tzu" dogBreed="Shih tzu" quality="Affectionate  Alert  Friendly" temper="Lively" knows="•Frequent professional grooming required •Coat requires daily brushing •Suffers from human separation anxiety"/>
      <BreedCard imageUrl="gRetriever.png" imageAlt="Golden Retriever" dogBreed="Golden Retriever" quality="Loyal  Friendly  Intelligent" temper="Gentle" knows="•Vigorous daily exercise required •Seasonal changes bring fourth shredding of their thick double coat" />
      <BreedCard imageUrl="beagle.png" imageAlt="Beagle" dogBreed="Beagle" quality="Curious  Energetic  Friendly" temper="Cheerful" knows="•High energy levels •Prone to boredom and destructive behaviour when not mentally and physically stimulated •Tendency to follow scents •Keep on a leash at all times" />
      <BreedCard imageUrl="chihuaha.png" imageAlt="Chihuahua" dogBreed="Chihuahua" quality="Alert  Brave  Loyal" temper="Bold" knows="•Delicate •Prone to injury •Wary of strangers and other animals •Early socialisation is essential" />
      <BreedCard imageUrl="dachshund.png" imageAlt="Dachshund" dogBreed="Dachshund" quality="Curious  Courageous Loyal" temper="Independent" knows="•Prone to back problems •Prevent jumping when possible •Ensure to support their back when lifting •Stubborn •Consistant and patient training necessary" />
      <BreedCard imageUrl="dobberman.png" imageAlt="Doberman" dogBreed="Doberman" quality="Fearless  Energetic  Intelligent" temper="Alert" knows="•High energy •Constant mental stimulation needed •Boredom will result in chewing and digging •Early socialisation essential to prevent aggression" />
      <BreedCard imageUrl="frenchie.png" imageAlt="French Bulldog" dogBreed="French Bulldog" quality="Affectionate  Playful  Adaptable" temper=" Easygoing" knows="•Breathing issues (Brachycephalic syndrome) •Take special care in hotter seasons •Thrive on human companionship •Separation Anxiety •Need constant attention" />
      <BreedCard imageUrl="greyhound.png" imageAlt="Greyhound" dogBreed="Greyhound" quality="Gentle  Athletic  Loyal" temper="Calm" knows="•Low energy •Enjoys lounging around •Benefits from sprints and daily short exercise •Sensitive to extreme temperatures •Require clothing in winter •Do not leave outside in hot conditions unmonitored" />
      <BreedCard imageUrl="Huskey.png" imageAlt="Huskey" dogBreed="Huskey" quality="Plaful  Energetic  Independent" temper="Friendly" knows="•High energy •Vigorous daily exercise •Develop destructive behaviours when bored •Double thick coat sheds heavily  •Professional grooming regularly" />
      <BreedCard imageUrl="jackRussel.png" imageAlt="Jack Russell Terrier" dogBreed="Jack Russell Terrier" quality="Energetic  Intelligent  Fearless" temper="Bold"  knows="•Highly energetic  •Require significant daily mental and physical exercise •Boredom leads to destructive behaviours •Stubborn •Firm training needed" />
      <BreedCard imageUrl="minSchnauzer.png" imageAlt="Miniature Schnauzer" dogBreed="Miniature Schnauzer" quality="Alert  Spirited  Affectionate" temper="Energetic" knows="•Distinctive double coat that requires regular grooming •Prone to coat matting •Regular brushing and trimming •Firm training needed " />
      <BreedCard imageUrl="Samoyed.png" imageAlt="Samoyed" dogBreed="Samoyed" quality="Friendly  Gentle  Sociable" temper="Affectionate" knows="•Regular grooming needed due to thick double coat •Shed heavily •Coat matting and tangling common •Frequent brushing needed •Regular exercise •Mental stimulation like agility traning beneficial" />
      <BreedCard imageUrl="sheltie.png" imageAlt="Sheltie" dogBreed="Sheltie" quality="Intelligent  Loyal  Energetic" temper="Responsive" knows="•Active lifestyle needed •Thick double coat requires regular brushing to remove matting •Professional grooming required" />
      <BreedCard imageUrl="shiba.png" imageAlt="Shiba Inu" dogBreed="Shiba Inu" quality="Independent  Alert  Loyal" temper="Bold" knows="•Stubborn •Firm training required •Thick double coat requires constant maintainance •Heavy fur sheds" />
    </div>
    //BACK TO TOP BTN
  );
}

export default Breed;