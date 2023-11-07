import PhoneForm from 'components/PhoneForm/PhoneForm';
import css from '../../components/App.module.css';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

const ContactsPage = () => {
  return (
    <div className={css.container}>
      <div className={css.appstyled}>
        <PhoneForm />
        <h2 className={css.text}>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    </div>
  );
};

export default ContactsPage;
