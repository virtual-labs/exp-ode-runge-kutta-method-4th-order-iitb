function activity2() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Dataset", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>
        $$ x_1 = 0, y_1 = 0  $$
        $$ \\frac{dx}{dy} = f(x, y) = -2x^3+12x^2-20x+8.5  $$
        $$ y(1.5) = ?  $$
        <br>
        <div class="row">
            <div class='col-3'>
                <span>Select the value of n: </span>
            </div>

            <div class='col-2'>
                <select id='act2-n-inp' class='form-select fs-16px'>
                    <option value="0" selected>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>

            <div class='col-2'>
                <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='act2_calculate_hxy();' id='temp-btn-4' >Next</button>
            </div>
        </div>


        <div id="h-div-act2" style="display:none; margin-top: 2%">
            <div class="row">
                <div class='col-3'>
                    <span>Calculate the value of h: </span>
                </div>

                <div class='col-2'>
                    <input type='number' id='h-inp-act2' class='form-control fs-16px' />
                </div>

                <div class='col-2'>
                    <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='verify_h_value_act2();' id='temp-btn-h-act2' >Verify</button>
                </div>
            </div> 
        </div>

        <div id="table-div-act2" style="display:none; margin-top: 2%">
            $$ y_2 = y_1 + h f(x_1, y_1)  $$
            <h6 style="font-weight: 600; text-align: left">Enter the values upto 4 decimal places</h6>
            <div id="act2_table-div"></div> <br>
            <div id="act2_graph-div" style="display:none;">
                <p>
                    Calculate y(1.5) = <span style='display: inline-block'>
                        <input type='number' id='act2_y-inp' class='form-control fs-16px' />
                    </span>
                </p>
                <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='act2_verify_y_value();' id='temp-btn-5' >Verify</button>   
            </div>
        </div>
    </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { MathJax.typeset(); }, 100);
    setTimeout(() => {
        show_step('tb3-box');
    }, 150);
}
function act2_calculate_hxy() {
    let act2_inp_n = document.getElementById(`act2-n-inp`);
    if (act2_inp_n.value == '0')
        return;
    let btn = document.getElementById('temp-btn-4');
    btn && btn.remove();
    act2_inp_n.disabled = true;
    act2_n_val = parseInt(act2_inp_n.value);
    console.log("act2-n = ", act2_n_val);
    // calculate h
    act2_h = (act2_xn - act2_x1) / act2_n_val;
    act2_h_val = parseFloat(act2_h.toFixed(2));
    console.log("act2_h= ", act2_h_val);
    // calculate x
    act2_x_val[0] = act2_x1;
    for (let i = 1; i <= act2_n_val; i++) {
        act2_x_val[i] = parseFloat((act2_x_val[i - 1] + act2_h_val).toFixed(2));
    }
    console.log("x_val= ", act2_x_val);
    // calculate y
    act2_y_val = gety2(act2_x1, act2_xn, act2_y1, act2_n_val);
    console.log("y= ", act2_y_val);
    let div = (document.getElementById('h-div-act2'));
    div.style.display = 'block';
}
function verify_h_value_act2() {
    let h_inp_act2 = (document.getElementById('h-inp-act2'));
    if (!verify_values(parseFloat(h_inp_act2.value), parseFloat(act2_h_val.toFixed(4)))) {
        h_inp_act2.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        h_inp_act2.style.border = '1px solid #ced4da';
        h_inp_act2.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let btn = (document.getElementById('temp-btn-h-act2'));
    btn.style.display = 'none';
    act2_fill_table();
    let div = (document.getElementById('table-div-act2'));
    div.style.display = 'block';
}
function act2_fill_table() {
    let div = document.getElementById('act2_table-div');
    let act2_header = ['x'];
    act2_tb_data = [['y']];
    let act2_n_inputs = [];
    let i = 0;
    for (i = 0; i <= act2_n_val; i++) {
        act2_header.push(`${act2_x_val[i]}`);
        act2_tb_data[0].push(act2_y_val[i]);
        act2_n_inputs.push(i + 1);
    }
    act2_y15 = act2_y_val[i - 1];
    console.log("y15 ", act2_y_val[i - 1]);
    let tb = new Verify_Table(act2_header, act2_tb_data, 0, act2_n_inputs, act2_y_val, "", div, true, act2_exp);
    tb.load_table();
}
function act2_exp() {
    let div = (document.getElementById('act2_graph-div'));
    div.style.display = 'block';
}
function act2_verify_y_value() {
    let act2_y_inp = (document.getElementById('act2_y-inp'));
    if (!verify_values(parseFloat(act2_y_inp.value), parseFloat(act2_y15.toFixed(4)))) {
        act2_y_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        act2_y_inp.style.border = '1px solid #ced4da';
        act2_y_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    activity3();
}
// activity2();
//# sourceMappingURL=activity2.js.map