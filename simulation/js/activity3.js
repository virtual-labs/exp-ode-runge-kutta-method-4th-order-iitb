function activity3() {
    let temp_btn = document.getElementById('temp-btn-5');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Dataset", "tb5-box");
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb5-box'>
        $$ x_1 = 0, y_1 = 0  $$
        $$ \\frac{dx}{dy} = f(x, y) = x-y^2  $$
        $$ y(1.5) = ?  $$
        <br>

        <div class="row">
            <div class='col-3'>
                <span>Select the value of n: </span>
            </div>

            <div class='col-2'>
                <select id='act3-n-inp' class='form-select fs-16px'>
                    <option value="0"selected>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>

            <div class='col-2'>
                <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='act3_calculate_hxy();' id='temp-btn-6' >Next</button>
            </div>
        </div>

        <div id="h-div-act3" style="display:none; margin-top: 2%">
            <div class="row">
                <div class='col-3'>
                    <span>Calculate the value of h: </span>
                </div>

                <div class='col-2'>
                    <input type='number' id='h-inp-act3' class='form-control fs-16px' />
                </div>

                <div class='col-2'>
                    <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='verify_h_value_act3();' id='temp-btn-h-act3' >Verify</button>
                </div>
            </div> 
        </div>

        <div id="table-div-act3" style="display:none; margin-top: 2%">
            $$ y_2 = y_1 + h f(x_1, y_1)  $$
            <h6 style="font-weight: 600; text-align: left">Enter the values upto 4 decimal places</h6>
            <div id="act3_table-div"></div> <br>
            <div id="act3_graph-div" style="display:none;">
                <p>
                    Calculate y(1.5) = <span style='display: inline-block'>
                        <input type='number' id='act3_y-inp' class='form-control fs-16px' />
                    </span>
                </p>
                <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='act3_verify_y_value();' id='temp-btn-7' >Verify</button>
                <button class='btn btn-info std-btn' style='margin: auto; display:none;' id='act1-btn3' onclick='exp_complete();' >Next</button> 
            </div>
        </div>
    </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { MathJax.typeset(); }, 100);
    setTimeout(() => {
        show_step('tb5-box');
    }, 150);
}
function act3_calculate_hxy() {
    let act3_inp_n = document.getElementById(`act3-n-inp`);
    if (act3_inp_n.value == '0')
        return;
    let btn = document.getElementById('temp-btn-6');
    btn && btn.remove();
    act3_inp_n.disabled = true;
    act3_n_val = parseInt(act3_inp_n.value);
    console.log("act3-n = ", act3_n_val);
    // calculate h
    act3_h = (act3_xn - act3_x1) / act3_n_val;
    act3_h_val = parseFloat(act3_h.toFixed(2));
    console.log("act3_h= ", act3_h_val);
    // calculate x
    act3_x_val[0] = act3_x1;
    for (let i = 1; i <= act3_n_val; i++) {
        act3_x_val[i] = parseFloat((act3_x_val[i - 1] + act3_h_val).toFixed(2));
    }
    console.log("act3_x_val= ", act3_x_val);
    // calculate y
    act3_y_val = gety3(act3_x1, act3_xn, act3_y1, act3_n_val);
    console.log("act3_y= ", act3_y_val);
    let div = (document.getElementById('h-div-act3'));
    div.style.display = 'block';
}
function verify_h_value_act3() {
    let h_inp_act3 = (document.getElementById('h-inp-act3'));
    if (!verify_values(parseFloat(h_inp_act3.value), parseFloat(act3_h_val.toFixed(4)))) {
        h_inp_act3.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        h_inp_act3.style.border = '1px solid #ced4da';
        h_inp_act3.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let btn = (document.getElementById('temp-btn-h-act3'));
    btn.style.display = 'none';
    act3_fill_table();
    let div = (document.getElementById('table-div-act3'));
    div.style.display = 'block';
}
function act3_fill_table() {
    let div = document.getElementById('act3_table-div');
    let act3_header = ['x'];
    act3_tb_data = [['y']];
    let act3_n_inputs = [];
    let i = 0;
    for (i = 0; i <= act3_n_val; i++) {
        act3_header.push(`${act3_x_val[i]}`);
        act3_tb_data[0].push(act3_y_val[i]);
        act3_n_inputs.push(i + 1);
    }
    act3_y15 = act3_y_val[i - 1];
    console.log("act3_y15 ", act3_y_val[i - 1]);
    let tb = new Verify_Table(act3_header, act3_tb_data, 0, act3_n_inputs, act3_y_val, "", div, true, act3_exp);
    tb.load_table();
}
function act3_exp() {
    let div = (document.getElementById('act3_graph-div'));
    div.style.display = 'block';
}
function act3_verify_y_value() {
    let btn = (document.getElementById('temp-btn-7'));
    let next_btn = (document.getElementById('act1-btn3'));
    let act3_y_inp = (document.getElementById('act3_y-inp'));
    if (!verify_values(parseFloat(act3_y_inp.value), parseFloat(act3_y15.toFixed(4)))) {
        act3_y_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        act3_y_inp.style.border = '1px solid #ced4da';
        act3_y_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    btn && btn.remove();
    next_btn.style.display = 'block';
    //exp_complete();
}
function exp_complete() {
    let btn = (document.getElementById('act1-btn3'));
    btn && btn.remove();
    alert('Experiment completed');
}
// activity3()
//# sourceMappingURL=activity3.js.map