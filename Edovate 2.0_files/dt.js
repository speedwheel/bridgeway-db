var DtModule = (function () {
  'use strict';

  var DOM = {};

  var totals = {
    number_of_students: 0,
    first_contact : [0, 0, 0],
    perf_series_completed: [0, 0, 0],
    course_recommended: [0, 0, 0],
    first_course_approved: [0, 0, 0],
    enroll_inp: [0, 0, 0],
    ready_to_start: [0, 0, 0],
    license_created: [0, 0, 0],
    curriculum_shipped: [0, 0, 0],
    orientation_completed: [0, 0, 0],
  }

  var demoContent = {
    'data': [
      {
        'advisor_name': 'John Smith',
        'enroll_year': 2020,
        'number_of_students': 10,
        'first_contact': '10% / 20 / 1 days',
        'perf_series_completed': '85% / 30 / 2 days',
        'course_recommended': '20% / 40 / 5 days',
        'first_course_approved': '20% / 50 / 5 days',
        'enroll_inp': '80% / 60 / 5 days',
        'ready_to_start': '50% / 70 / 5 days',
        'license_created': '20% / 70 / 5 days',
        'curriculum_shipped': '15% / 80 / 5 days',
        'orientation_completed': '10% / 80 / 5 days',
      },
      {
        'advisor_name': 'Abdirahman Donaldson',
        'enroll_year': 2018,
        'number_of_students': 10,
        'first_contact': '90% / 20 / 5 days',
        'perf_series_completed': '20% / 30 / 3 days',
        'course_recommended': '30% / 40 / 5 days',
        'first_course_approved': '70% / 50 / 5 days',
        'enroll_inp': '90% / 60 / 5 days',
        'ready_to_start': '10% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '90% / 80 / 5 days',
        'orientation_completed': '60% / 80 / 5 days',
      },
      {
        'advisor_name': 'Yvonne Colon',
        'enroll_year': 2018,
        'number_of_students': 80,
        'first_contact': '80% / 20 / 5 days',
        'perf_series_completed': '70% / 30 / 10 days',
        'course_recommended': '60% / 40 / 5 days',
        'first_course_approved': '50% / 50 / 5 days',
        'enroll_inp': '40% / 60 / 5 days',
        'ready_to_start': '30% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '20% / 80 / 5 days',
        'orientation_completed': '20% / 80 / 5 days',
      },
      {
        'advisor_name': 'Sonny Brown',
        'enroll_year': 2018,
        'number_of_students': 40,
        'first_contact': '80% / 20 / 10 days',
        'perf_series_completed': '70% / 30 / 60 days',
        'course_recommended': '60% / 40 / 5 days',
        'first_course_approved': '50% / 50 / 5 days',
        'enroll_inp': '40% / 60 / 5 days',
        'ready_to_start': '30% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '20% / 80 / 5 days',
        'orientation_completed': '20% / 80 / 5 days',
      },
      {
        'advisor_name': 'Mylo Leblanc',
        'enroll_year': 2018,
        'number_of_students': 60,
        'first_contact': '80% / 20 / 5 days',
        'perf_series_completed': '70% / 30 / 5 days',
        'course_recommended': '60% / 40 / 5 days',
        'first_course_approved': '50% / 50 / 5 days',
        'enroll_inp': '40% / 60 / 5 days',
        'ready_to_start': '30% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '20% / 80 / 5 days',
        'orientation_completed': '20% / 80 / 5 days',
      },
      {
        'advisor_name': 'Angelina Collier',
        'enroll_year': 2018,
        'number_of_students': 350,
        'first_contact': '80% / 20 / 5 days',
        'perf_series_completed': '70% / 30 / 5 days',
        'course_recommended': '60% / 40 / 5 days',
        'first_course_approved': '50% / 50 / 5 days',
        'enroll_inp': '40% / 60 / 5 days',
        'ready_to_start': '30% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '20% / 80 / 5 days',
        'orientation_completed': '20% / 80 / 5 days',
      },
      {
        'advisor_name': 'Sumaiyah Lloyd',
        'enroll_year': 2018,
        'number_of_students': 260,
        'first_contact': '80% / 20 / 5 days',
        'perf_series_completed': '70% / 30 / 5 days',
        'course_recommended': '60% / 40 / 5 days',
        'first_course_approved': '50% / 50 / 5 days',
        'enroll_inp': '40% / 60 / 5 days',
        'ready_to_start': '30% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '20% / 80 / 5 days',
        'orientation_completed': '20% / 80 / 5 days',
      },
      {
        'advisor_name': 'Cecil Kaufman',
        'enroll_year': 2018,
        'number_of_students': 90,
        'first_contact': '80% / 20 / 5 days',
        'perf_series_completed': '70% / 30 / 5 days',
        'course_recommended': '60% / 40 / 5 days',
        'first_course_approved': '50% / 50 / 5 days',
        'enroll_inp': '40% / 60 / 5 days',
        'ready_to_start': '30% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '20% / 80 / 5 days',
        'orientation_completed': '20% / 80 / 5 days',
      },
      {
        'advisor_name': 'Donte Penn',
        'enroll_year': 2018,
        'number_of_students': 20,
        'first_contact': '80% / 20 / 5 days',
        'perf_series_completed': '70% / 30 / 5 days',
        'course_recommended': '60% / 40 / 5 days',
        'first_course_approved': '50% / 50 / 5 days',
        'enroll_inp': '40% / 60 / 5 days',
        'ready_to_start': '30% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '20% / 80 / 5 days',
        'orientation_completed': '20% / 80 / 5 days',
      },
      {
        'advisor_name': 'Scott Lewis',
        'enroll_year': 2018,
        'number_of_students': 100,
        'first_contact': '80% / 20 / 5 days',
        'perf_series_completed': '70% / 30 / 5 days',
        'course_recommended': '60% / 40 / 5 days',
        'first_course_approved': '50% / 50 / 5 days',
        'enroll_inp': '40% / 60 / 5 days',
        'ready_to_start': '30% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '20% / 80 / 5 days',
        'orientation_completed': '20% / 80 / 5 days',
      },
      {
        'advisor_name': 'Bluebell O\'Moore',
        'enroll_year': 2018,
        'number_of_students': 100,
        'first_contact': '80% / 20 / 5 days',
        'perf_series_completed': '70% / 30 / 5 days',
        'course_recommended': '60% / 40 / 5 days',
        'first_course_approved': '50% / 50 / 5 days',
        'enroll_inp': '40% / 60 / 5 days',
        'ready_to_start': '30% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '20% / 80 / 5 days',
        'orientation_completed': '20% / 80 / 5 days',
      },
      {
        'advisor_name': 'Darrell Malone',
        'enroll_year': 2018,
        'number_of_students': 100,
        'first_contact': '80% / 20 / 5 days',
        'perf_series_completed': '70% / 30 / 5 days',
        'course_recommended': '60% / 40 / 5 days',
        'first_course_approved': '50% / 50 / 5 days', 
        'enroll_inp': '40% / 60 / 5 days',
        'ready_to_start': '30% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '20% / 80 / 5 days',
        'orientation_completed': '20% / 80 / 5 days',
      },
      {
        'advisor_name': 'Habiba Whitaker',
        'enroll_year': 2018,
        'number_of_students': 60,
        'first_contact': '80% / 20 / 5 days',
        'perf_series_completed': '70% / 30 / 5 days',
        'course_recommended': '60% / 40 / 5 days',
        'first_course_approved': '50% / 50 / 5 days',
        'enroll_inp': '40% / 60 / 5 days',
        'ready_to_start': '30% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '20% / 80 / 5 days',
        'orientation_completed': '20% / 80 / 5 days',
      },
      {
        'advisor_name': 'Arran Diaz',
        'enroll_year': 2018,
        'number_of_students': 80,
        'first_contact': '80% / 20 / 5 days',
        'perf_series_completed': '70% / 30 / 5 days',
        'course_recommended': '60% / 40 / 5 days',
        'first_course_approved': '50% / 50 / 5 days',
        'enroll_inp': '40% / 60 / 5 days',
        'ready_to_start': '30% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '20% / 80 / 5 days',
        'orientation_completed': '20% / 80 / 5 days',
      },
      {
        'advisor_name': 'Moses Holder',
        'enroll_year': 2018,
        'number_of_students': 100,
        'first_contact': '80% / 20 / 5 days',
        'perf_series_completed': '70% / 30 / 5 days',
        'course_recommended': '60% / 40 / 5 days',
        'first_course_approved': '50% / 50 / 5 days',
        'enroll_inp': '40% / 60 / 5 days',
        'ready_to_start': '30% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '20% / 80 / 5 days',
        'orientation_completed': '20% / 80 / 5 days',
      },
      {
        'advisor_name': 'Larry Hill',
        'enroll_year': 2018,
        'number_of_students': 100,
        'first_contact': '80% / 20 / 5 days',
        'perf_series_completed': '70% / 30 / 5 days',
        'course_recommended': '60% / 40 / 5 days',
        'first_course_approved': '50% / 50 / 5 days',
        'enroll_inp': '40% / 60 / 5 days',
        'ready_to_start': '30% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '20% / 80 / 5 days',
        'orientation_completed': '20% / 80 / 5 days',
      },
      {
        'advisor_name': 'Hashir Hernandez',
        'enroll_year': 2018,
        'number_of_students': 100,
        'first_contact': '80% / 20 / 5 days',
        'perf_series_completed': '70% / 30 / 5 days',
        'course_recommended': '60% / 40 / 5 days',
        'first_course_approved': '50% / 50 / 5 days',
        'enroll_inp': '40% / 60 / 5 days',
        'ready_to_start': '30% / 70 / 5 days',
        'license_created': '30% / 70 / 5 days',
        'curriculum_shipped': '20% / 80 / 5 days',
        'orientation_completed': '10% / 80 / 5 days',
      },
    ]
  };

  var dtConf = {
    'data': demoContent.data,
    'dom': 'l<"toolbar">frtip',
    'responsive': true,
    'columnDefs': [
      {
        'title': 'Advisor Name',
        'name': 'advisor_name',
        'data': 'advisor_name',
        'targets': 0,
        'render': function ( data, type, full, meta ) {
          return '<a class="open_student" href="">'+data+'</a>';
        }
      },
      {
        'title': 'Enroll Year',
        'name': 'enroll_year',
        'data': 'enroll_year',
        'className': 'dt-body-center',
        'targets': 1,
      },
      {
        'title': '# of Students',
        'name': 'number_of_students',
        'data': 'number_of_students',
        'className': 'dt-body-center',
        'targets': 2,
      },
      {
        'title': 'First Contact',
        'name': 'first_contact',
        'data': 'first_contact',
        'targets': 3,
      },
      {
        'title': 'Perf. Series Completed',
        'name': 'perf_series_completed',
        'data': 'perf_series_completed',
        'targets': 4,
      },
      {
        'title': 'Course Recommended',
        'name': 'course_recommended',
        'data': 'course_recommended',
        'targets': 5,
      },
      {
        'title': 'First Course Approved',
        'name': 'first_course_approved',
        'data': 'first_course_approved',
        'targets': 6,
      },
      {
        'title': 'Enroll INP',
        'name': 'enroll_inp',
        'data': 'enroll_inp',
        'targets': 7,
      },
      {
        'title': 'Ready to Start',
        'name': 'ready_to_start',
        'data': 'ready_to_start',
        'targets': 8,
      },
      {
        'title': 'Lincense Created',
        'name': 'license_created',
        'data': 'license_created',
        'targets': 9,
      },
      {
        'title': 'Curriculum Shipped',
        'name': 'curriculum_shipped',
        'data': 'curriculum_shipped',
        'targets': 10,
      },
      {
        'title': 'Orientation Completed',
        'name': 'orientation_completed',
        'data': 'orientation_completed',
        'targets': 11,
      },
    ],
    "createdRow": function( row, data, dataIndex){
      
    },
    'rowCallback': function( row, data ) {
    },
    'initComplete': function (settings, json) {
      var currYear = new Date().getFullYear();
      var years = [currYear];
      var table = settings.oInstance.api();

      var rows = table.rows( { search: 'applied' } ).eq(0).each( function ( index ) {
        var row = table.row( index );
        var data = row.data();
        if (data.enroll_year != '') {
          if (!years.includes(data.enroll_year)) {
            years.push(data.enroll_year)
          }
        }
        
      });

      if ($('#advisors-table_wrapper .enroll-year').length <= 0) {
        $('#advisors-table_wrapper div.toolbar').after('<select class="enroll-year"></select>');
        $('#advisors-table_wrapper .enroll-year').append($('<option>', { value : '' }).text('All years'));
        years.sort().reverse();
        for (var key in years) {
          $('#advisors-table_wrapper .enroll-year').append($('<option>', { value : years[key] }).text(years[key]));
        }
        $('#advisors-table_wrapper .enroll-year').val(currYear);
        
        table.column( 1 ).search( currYear ? '^'+currYear+'$' : '', true, false ).draw();
      }
     
    }
  }

  function cacheDom() {
    DOM.$dt = $('#advisors-table');
  }

  function initDT() {
    var table = DOM.$dt.DataTable(dtConf);

    var firstHeaderRow = $('tr', table.table().header() );
    calcHeaderTotals(table, firstHeaderRow);
    
    DOM.$dt.before('<div class="legend clearfix overflow-hidden w-100"><a class="open-enrollments" target="_blank" href="#">Open Enrollments</a> <span>% of contacts reaching the stage / # of students that haven\'t reached the stage / # of days since previous stage.</span></div>')

    table.on( 'search.dt', function () {
      calcHeaderTotals(table, firstHeaderRow);
    });

    $(document).on('change', '.enroll-year', function(e) {
      var val = $(this).val();
      table.column( 1 ).search( val ? '^'+val+'$' : '', true, false ).draw();
    })

    $(document).keyup(function(e) {
      if (e.keyCode == 27) { //Escape button
         $.fancybox.close();
       }
    });

    table.on('click', 'tbody tr', function(e) {
      e.preventDefault();
      $.fancybox.open('<table id="student-table" class="cell-border compact stripe dt-body-center kazeli-style"></table>');
      DOM.$st = $('#student-table');
      var table2 = DOM.$st.DataTable(dtConf);
      var firstStudetHeaderRow = $('tr', table2.table().header() );
      calcHeaderTotals(table2, firstStudetHeaderRow);
      table2.on( 'search.dt', function () {
        calcHeaderTotals(table2, firstStudetHeaderRow);
      });  
    })
  }

  function calcTotal(total, data) {
    var temp = data.split(' / ');
    total[0] += parseInt(temp[0].replace('%', ''));
    total[2] += parseInt(temp[2].replace('days ', ''));
    return total;
  }

  function calcAvreage(total, rowCount) {
    total[0] = Math.round(total[0] / rowCount);
    total[2] = Math.round(total[2] / rowCount);
    return total;
  }

  function calcHeaderTotals(table, firstHeaderRow) {
    totals.number_of_students = 0;
    totals.first_contact = [0, 0, 0];
    totals.perf_series_completed = [0, 0, 0];
    totals.course_recommended = [0, 0, 0];
    totals.first_course_approved = [0, 0, 0];
    totals.enroll_inp = [0, 0, 0];
    totals.ready_to_start = [0, 0, 0];
    totals.license_created = [0, 0, 0];
    totals.curriculum_shipped = [0, 0, 0];
    totals.orientation_completed = [0, 0, 0];
    
    var rowCount = table.rows( { search: 'applied' } ).count();
    if (rowCount <= 0) {
      firstHeaderRow.next().remove();
      return;
    }
    var rows = table.rows( { search: 'applied' } ).eq(0).each( function ( index ) {
    var row = table.row( index );
    var data = row.data();
    
    totals.number_of_students += data.number_of_students;

    totals.first_contact= calcTotal(totals.first_contact, data.first_contact)
    totals.perf_series_completed= calcTotal(totals.perf_series_completed, data.perf_series_completed)
    totals.course_recommended= calcTotal(totals.course_recommended, data.course_recommended)
    totals.first_course_approved= calcTotal(totals.first_course_approved, data.first_course_approved)
    totals.enroll_inp= calcTotal(totals.enroll_inp, data.enroll_inp)
    totals.ready_to_start= calcTotal(totals.ready_to_start, data.ready_to_start)
    totals.license_created= calcTotal(totals.license_created, data.license_created)
    totals.curriculum_shipped= calcTotal(totals.curriculum_shipped, data.curriculum_shipped)
    totals.orientation_completed= calcTotal(totals.orientation_completed, data.orientation_completed)

  });

  totals.first_contact = calcAvreage(totals.first_contact, rowCount);
  totals.perf_series_completed = calcAvreage(totals.perf_series_completed, rowCount);
  totals.course_recommended = calcAvreage(totals.course_recommended, rowCount);
  totals.first_course_approved = calcAvreage(totals.first_course_approved, rowCount);
  totals.enroll_inp = calcAvreage(totals.enroll_inp, rowCount);
  totals.ready_to_start = calcAvreage(totals.ready_to_start, rowCount);
  totals.license_created = calcAvreage(totals.license_created, rowCount);
  totals.curriculum_shipped = calcAvreage(totals.curriculum_shipped, rowCount);
  totals.orientation_completed = calcAvreage(totals.orientation_completed, rowCount);
  
  
  firstHeaderRow.next().remove();
  firstHeaderRow.next().last().remove();
  firstHeaderRow.after( '<tr><th></th><th></th><th>'+totals.number_of_students+'</th><th>'+totals.first_contact[0]+'% / '+totals.first_contact[2]+' days</th><th>'+totals.perf_series_completed[0]+'% / '+totals.perf_series_completed[2]+' days</th><th>'+totals.course_recommended[0]+'% / '+totals.course_recommended[2]+' days</th><th>'+totals.first_course_approved[0]+'% / '+totals.first_course_approved[2]+' days</th><th>'+totals.enroll_inp[0]+'% / '+totals.enroll_inp[2]+' days</th><th>'+totals.ready_to_start[0]+'% / '+totals.ready_to_start[2]+' days</th><th>'+totals.license_created[0]+'% / '+totals.license_created[2]+' days</th><th>'+totals.curriculum_shipped[0]+'% / '+totals.curriculum_shipped[2]+' days</th><th>'+totals.orientation_completed[0]+'% / '+totals.orientation_completed[2]+' days</th></tr><tr><th style="border:0;"></th></tr>' );

  }


  function init() {
    cacheDom();
    initDT();
  }

  return {
    init: init
  };
}());


$(document).ready( function () {
  DtModule.init();
} );
