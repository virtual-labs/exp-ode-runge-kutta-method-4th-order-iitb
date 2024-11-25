let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">ODE: Runge Kutta method 4<sup>th</sup> order</h4>
            <p>Objective: </p>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Dataset', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        $$ x_1 = 0, y_1 = 0  $$
        $$ \\frac{dx}{dy} = f(x, y) = \\frac{x^2}{y^2+1}  $$
        $$ y(1.5) = ?  $$
        <br>

        <div class="row">
            <div class='col-3'>
                <span>Select the value of n: </span>
            </div>
            <div class='col-2'>
                <span>
                    <select id='n-inp' class='form-select fs-16px'>
                        <option value="0" selected>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </span>
            </div>
            <div class='col-2'>
                <span>
                <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='calculate_hxy();' id='temp-btn-2' >Next</button>
                </span>
            </div>
        </div>

        <div id="h-div-act1" style="display:none; margin-top: 2%">
            <div class="row">
                <div class='col-3'>
                    <span>Calculate the value of h: </span>
                </div>
                <div class='col-2'>
                    <span><input type='number' id='h-inp' class='form-control fs-16px' /></span>
                </div>
                <div class='col-2'>
                    <span>
                    <button class='btn btn-info btn-sm std-btn' onclick='verify_h_value_act1();' id='temp-btn-h' >Verify</button>
                    </span>
                </div>
            </div>
        </div>

        <div id="table-div-act1" style="display:none; margin-top: 2%">
            $$ y_2 = y_1 + h f(x_1, y_1)  $$

            <h6 style="font-weight: 600; text-align: left">Enter the values upto 4 decimal places</h6>
            <div id="table-div"></div> <br>
                <div id="graph-div" style="display:none;">
                    <p>
                        Calculate y(1.5) = <span style='display: inline-block'>
                            <input type='number' id='y-inp' class='form-control fs-16px' />
                        </span>
                    </p>
                    <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='verify_y_value();' id='temp-btn-3' >Verify</button>   
                </div>
            </div>
        </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('tb1-box');
    }, 150);
}
function calculate_hxy() {
    let inp_n = document.getElementById(`n-inp`);
    if (inp_n.value == '0') {
        return;
    }
    let btn = document.getElementById('temp-btn-2');
    btn && btn.remove();
    inp_n.disabled = true;
    n_val = parseInt(inp_n.value);
    console.log('n = ', n_val);
    // calculate h
    h = (xn - x1) / n_val;
    h_val = parseFloat(h.toFixed(2));
    console.log('h= ', h_val);
    // calculate x
    x_val[0] = x1;
    for (let i = 1; i <= n_val; i++) {
        x_val[i] = parseFloat((x_val[i - 1] + h_val).toFixed(2));
    }
    console.log('x_val= ', x_val);
    // calculate y
    y_val = gety(x1, xn, y1, n_val);
    console.log('y= ', y_val);
    let div = (document.getElementById('h-div-act1'));
    div.style.display = 'block';
}
function verify_h_value_act1() {
    let h_inp = (document.getElementById('h-inp'));
    if (!verify_values(parseFloat(h_inp.value), parseFloat(h_val.toFixed(4)))) {
        h_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        h_inp.style.border = '1px solid #ced4da';
        h_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let btn = (document.getElementById('temp-btn-h'));
    btn.style.display = 'none';
    fill_table();
    let div = (document.getElementById('table-div-act1'));
    div.style.display = 'block';
}
function fill_table() {
    let div = (document.getElementById('table-div'));
    let header = ['x'];
    tb_data = [['y']];
    let n_inputs = [];
    let i = 0;
    for (i = 0; i <= n_val; i++) {
        header.push(`${x_val[i]}`);
        tb_data[0].push(y_val[i]);
        n_inputs.push(i + 1);
    }
    y15 = y_val[i - 1];
    console.log('y15 ', y_val[i - 1]);
    let tb = new Verify_Table(header, tb_data, 0, n_inputs, y_val, '', div, true, exp);
    tb.load_table();
}
function exp() {
    let div = (document.getElementById('graph-div'));
    div.style.display = 'block';
}
function verify_y_value() {
    let y_inp = (document.getElementById('y-inp'));
    if (!verify_values(parseFloat(y_inp.value), parseFloat(y15.toFixed(4)))) {
        y_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y_inp.style.border = '1px solid #ced4da';
        y_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map