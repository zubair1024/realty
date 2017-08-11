export class Faq {

  model = {}

  constructor() { }
  attached() {
  }

  submit() {
    this.submitted = true;
    let query = this.model;
    $.ajax({
      url: '/contact/query',
      method: 'POST',
      data: query,
      success: function(data) {
        alert('Your query has been submitted.');
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
}
