$('#defaultForm')
		.bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                username: {
                    message: 'The username is not valid',
                    validators: {
                        notEmpty: {
                            message: 'The username is required and can\'t be empty'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The username must be more than 6 and less than 30 characters long'
                        },
                        /*remote: {
                            url: 'remote.php',
                            message: 'The username is not available'
                        },*/
                        regexp: {
                            regexp: /^[a-zA-Z0-9_\.]+$/,
                            message: 'The username can only consist of alphabetical, number, dot and underscore'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required and can\'t be empty'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required and can\'t be empty'
                        }
                    }
                },
                classTitle:{
                	validators: {
                        notEmpty: {
                            message: '请输入标题'
                        },  
                    }
                },
                price:{
                	validators: {
                        notEmpty: {
                            message: '请输入价钱'
                        },
                        regexp: {
                            regexp: /\d+\.[0-9]{2}$/,
                            message: '数字和点，保留两位小数'
                        }
                    }
                },
                preferential:{
                	validators: {
                        notEmpty: {
                            message: '请输入价钱'
                        },
                        regexp: {
                            regexp: /\d+\.[0-9]{2}$/,
                            message: '数字和点，保留两位小数'
                        }
                    }
                },
                detailed:{
                	validators: {
                        notEmpty: {
                            message: '请输入介绍，最少10个字'
                        },
                        regexp: {
                            regexp: /[\u4e00-\u9fff\w]{10,}/,
                            message: '未超过10个字'
                        }
                    }
                },
                'programs[]':{
                	validators: {
                        choice: {
                            min:1,
                            max:2,
                            message:'请至少选择一项'
                        }
                    }
                }
            }
        })
//      .on('success.form.bv', function(e) {
//          // Prevent form submission
//          e.preventDefault();
//
//          // Get the form instance
//          var $form = $(e.target);
//
//          // Get the BootstrapValidator instance
//          var bv = $form.data('bootstrapValidator');
//
//          // Use Ajax to submit form data
//          $.post($form.attr('action'), $form.serialize(), function(result) {
//              console.log(result);
//          }, 'json');
//      });

