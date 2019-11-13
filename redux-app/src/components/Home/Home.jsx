import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRandomKitty } from '../../actions/actions';

const Home = () => {
  const kittyUrl = useSelector(state => state.homeKitty);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomKitty());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="content">
        <h1>Welcome to Catpedia!</h1>
        <p>I will be pet i will be pet and then i will hiss immediately regret falling into bathtub or ears back wide eyed,
          stick butt in face, and meow meow we are 3 small kittens sleeping most of our time, we are around 15 weeks old i think,
          i don’t know i can’t count. Eat the rubberband gimme attention gimme attention gimme attention gimme attention gimme
          attention gimme attention just kidding i don't want it anymore meow bye yet loves cheeseburgers, and cat gets stuck in
          tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers stretch, cats secretly
          make all the worlds muffins pose purrfectly to show my beauty. Cat sit like bread give me some of your food give me some of
          your food give me some of your food meh, i don't want it. Hide head under blanket so no one can see play time, yet push your
        water glass on the floor poop on couch.</p>
      </div>
      <img src={kittyUrl} alt="Kitty that you can't see because something broke :(" />
    </div>
  )
}

export default Home;