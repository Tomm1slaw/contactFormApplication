var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

// var App = React.createClass({
//   render: function() {
//     return (
//       React.createElement('div', {className: 'app'},
//         React.createElement('div', {className: 'form'},
//         React.createElement(ContactForm, {contact: contactForm})
//         ),
//         React.createElement(Contacts, {items: contacts}, {})
//       )
//     );
//   }
// });

// JSX

var App = React.createClass({
  render: function() {
    return (
      <div className={'app'}>
        <div className={'form'}>
        <ContactForm contact={contactForm}></ContactForm>
        </div>
        <Contacts items={contacts}></Contacts>
      </div>
    );
  }
});

