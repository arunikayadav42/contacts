describe('contactModel', function() {

	var $Contact;
	beforeEach(module('contactsApp'));

	beforeEach(inject(function(Contact){
		$Contact = Contact;
	}));

	it('should match a search pattern in title', function() {
		var contact = new $Contact({displayName: 'test'});
		contact.title('The Boss');
		expect(contact.matches('123')).to.equal(false);
		expect(contact.matches('the')).to.equal(true);
		expect(contact.matches('OSS')).to.equal(true);
	});
});
