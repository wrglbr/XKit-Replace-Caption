    //* TITLE Replace Caption **//
    //* VERSION 1.0 REV A **//
    //* DESCRIPTION Replace post caption with boilerplate text/html. **//
    //* DEVELOPER https://github.com/philgroshens/ **//
    //* FRAME false **//
    //* BETA false **//

    XKit.extensions.replace_caption = new Object({

        running: false,

        preferences: {
            "caption": {
                text: "Caption (if including HTML, use single quotes instead of double quotes)",
                value: "",
                default: "",
                type: "text"
            }
        },


        run: function () {

            this.running = true;
            XKit.interface.post_window.create_control_button("xkit-replace-caption-window", this.button_icon, "Replace Caption!");
            XKit.interface.create_control_button("xkit-replace-caption", this.button_icon, "Replace Caption", "", this.button_ok_icon);

            XKit.interface.post_window_listener.add("replace_caption", XKit.extensions.replace_caption.post_window);
            XKit.post_listener.add("replace_caption", XKit.extensions.replace_caption.do_posts);
            this.do_posts();


            // Store something?
            var m_caption = XKit.extensions.replace_caption.preferences.caption.value;
            XKit.storage.set("replace_caption", "caption", m_caption);

        },

        post_window: function () {

            var m_sentence = XKit.storage.get("replace_caption", "caption", "");
            $("#post_two").val(m_sentence);
            setTimeout(function () {
                function set_post() {
                    try {
                        var post_two = (tinyMCE && tinyMCE.get('post_two')) ? tinyMCE.get('post_two').setContent(add_tag) : ($('post_two') ? $('post_two').value : add_tag);
                        $(post_two).value = add_tag;
                    } catch (e) {
                        console.log("OCR ERROR --> " + e.message);
                    }
                }
                var mx_sentence = XKit.tools.replace_all(m_sentence, "\\\n", "");
                mx_sentence = XKit.tools.replace_all(m_sentence, "\\\r", "");
                mx_sentence = XKit.tools.replace_all(m_sentence, "'", "");
                XKit.tools.add_function(set_post, true, mx_sentence);
                XKit.tools.set_setting("xkit_one_click_reply_sentence", "");
                XKit.tools.set_setting("xkit_one_click_reply_username", "");
            }, 400);




        },

        do_posts: function () {

            // get posts:
            var posts = XKit.interface.get_posts("xkit-replace-caption-done", true, true);

            $(posts).each(function () {

                $(this).addClass("xkit-replace-caption-done");


                XKit.interface.add_control_button(this, "xkit-replace-caption", "");

            });

        },

        destroy: function () {


            XKit.post_listener.remove("replace_caption");
            this.running = false;



        }

    });
