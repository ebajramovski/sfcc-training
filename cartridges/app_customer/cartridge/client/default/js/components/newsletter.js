export default class Newsletter {
    constructor() {
        this.$form = $('.newsletter .form');
    }

    init() {
        console.log(this.$form);
        this.$form.submit(event => {
            event.preventDefault();
            const isValid = true;
            const $form = $(event.currentTarget);

            console.log($form);

            if (isValid) {
                $.ajax({
                    method: 'post',
                    url: $form.attr('action'),
                    data: $form.serialize(),
                    dataType: 'json',
                }).done(response => {
                    console.log(response);
                }).fail(error => {
                    console.log(error);
                });
            }
        });
    }
}
