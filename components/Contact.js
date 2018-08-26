var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

//   render: function() {
//     return (
//       React.createElement('div', {className: 'contactItem'},
//         React.createElement('div', {className: 'contactLook'},
//           React.createElement('img', {
//             className: 'contactImage',
//             src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350'
//           }),
//         ),
//         React.createElement('div', {className: 'contactInformation'},
//           React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
//           React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
//           React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
//             this.props.item.email
//           )
//         )
//       )
//     )
//   },
// });

// JSX

  render: function() {
    return (
      <div className={'contactItem'}>
        <div className={'contactLook'}>
          <img className={'contactImage'} src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350'}>
        </div>
        <div className={'contactInformation'}>
          <p className={'contactLabel'}>
           Imię: {this.props.item.firstName}
          </p>
          <p className={'contactLabel'}>
           Nazwisko: {this.props.item.lastName}
          </p>
          <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
            {this.props.item.email}
          </a>
        </div>
      </div>
    )
  },
});