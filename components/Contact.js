var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('div', {},
          React.createElement('img', {
            className: 'contactImage',
            src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350'
          }),
        ),
        React.createElement('div', {className: 'contactInformation'},
          React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
          React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
          React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
            this.props.item.email
          )
        )
      )
    )
  },
});