$(document).ready(function () {
    var DEBUG = true;
    if (DEBUG) { console.log( 'doc ready' ); };

    function checkSection() {
        if (DEBUG) { console.log( 'checkSection' ); };
        var section = $('body').attr('section');
        if (DEBUG) { console.log( 'section', section ); };

        if(section == "Setup") {
            $('#sidebar').load("_modules/_setup-menu.html", setActiveSidebarElement);
        }
        else if(section == "Security") {
            $('#sidebar').load("_modules/_security-menu.html", setActiveSidebarElement);
        }
        else if(section == "Maintenance") {
            $('#sidebar').load("_modules/_maintenance-menu.html", setActiveSidebarElement);
        }
        else if(section == "RR-Admin") {
            $('#sidebar').load("_modules/_rradmin-menu.html", setActiveSidebarElement);
        }
        else if(section == "Help") {
            $('#sidebar').load("_modules/_help-menu.html", setActiveSidebarElement);
        }
    }
    
    function setActiveNavElement() {
        if (DEBUG) { console.log( 'setActiveNavElement' ); };
        var section = $('body').attr('section');
        if (DEBUG) { console.log( 'section', section ); };
        var button =  $( '.'+section );
        button.addClass('active');
    }


    function setActiveSidebarElement(){
        if (DEBUG) { console.log( 'setActiveSidebarElement' ); };
        var page = $('body').attr('page');
        if (DEBUG) { console.log( 'page', page ); };
        var currentButton = $(".list-group-item[title='" + page );
        currentButton.addClass('active');
    }

    //loading page elements with Javascript
    $('#pageheader').load('_modules/_page-header.html'); 
    $('#mainnav').load("_modules/_main-navigation.html", setActiveNavElement);

    //checks the site section and load the appropriate submenu
    checkSection();


    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });

});

