import './App.scss';

import { Header } from './components/Header/Header';
import Features from './components/Features/Features';
import Plan from './components/Plan/Plan';
import Map from './components/Map/Map';
import Comment from './components/Comment/Comment';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';


export const App = () => {
  return (
    <div className="App">
      <Header />

      <Features
        title='We Provide Many Features You Can Use'
        subtitle='You can explore the features that we provide with fun and have their own functions each feature.'
      />

      <Plan
        title='Choose Your Plan'
        subtitle='Lets choose the package that is best for you and explore it happily and cheerfully'
      />

      <Map
        title='Huge Global Network of Fast VPN'
      />

      <Comment
        title='Trusted by Thousands of Happy Customer'
        subtitle='These are the stories of our customers who have joined us with great pleasure when using this crazy feature.'
      />

      <Subscribe
        title='Subscribe Now for Get Special Features!'
        subtitle='Lets subscribe with us and find the fun.'
      />

      <Footer
        data='©2020LaslesVPN'
      />
    </div>
  );
}

export default App;
