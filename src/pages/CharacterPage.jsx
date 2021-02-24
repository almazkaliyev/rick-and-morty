import { Link } from 'react-router-dom';

import Card from '../components/Card';

const CharacterPage = () => (
  <section>
    <Link className="section__link" to="/">
      &larr; Return homepage
    </Link>
    <Card horizontal>
      <div>
        Last known location:
        <br />
        <span>Testicle Monster Dimension</span>
      </div>
      <div>
        First seen in:
        <br />
        <span>Close Rick-counters of the Rick Kind</span>
      </div>
    </Card>
  </section>
);

export default CharacterPage;
