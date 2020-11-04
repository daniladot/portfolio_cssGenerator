function App()
{


let radius = "";
const Selectors = [
    'element',
    'size_w',
    'size_h',
    'offset_x',
    'offset_y',
    'blur',
    'stretching',
    'colorBg_shadow',
    'colorBg_shadow_a',
    'colorBg',
    'colorBg_a',
    'radius',
    'radius_lt',
    'radius_lb',
    'radius_rt',
    'radius_rb',
    'result',
];
const S = {}
const Sett = {
    size_w: 200,
    size_h: 200,
    offset_x: 0,
    offset_y: 0,
    blur: 5,
    stretching: 3,
    colorBg_shadow: "#000000",
    colorBg_shadow_a: 1,
    colorBg :"#000000",
    colorBg_a : 1,
    radius: 0,
    radius_lt: 0,
    radius_lb: 0,
    radius_rt: 0,
    radius_rb: 0,
    result: '',
}

const initApp = () => {
    Selectors.forEach((elem) => {
        S[elem] = document.querySelector(`#${elem}`);
        S[elem].value = Sett[elem];
    });

    for (let key in S) {
        S[key].oninput = function () {
            console.log(Sett[this.id]);
            if(this.name == 'rm')
                Sett.radius_lt = Sett.radius_rt = Sett.radius_rb = Sett.radius_lb = this.value;
            else
                Sett[this.id] = this.value;
            render();
        }
    }
    showSection();
    showSection_r();    
}

const showSection = () => {
    const sections = document.querySelectorAll('.section');
    document.querySelectorAll('.btn').forEach((elem, i) => {
        elem.onclick = function () {
            document.querySelectorAll('.btn').forEach(item => {
                item.classList.remove('active');
            });
            sections.forEach(item => {
                item.classList.remove('show');
            });
            sections[i].classList.add('show');
            elem.classList.add('active');
        }
    });
}

const showSection_r = () => {
    const sections = document.querySelectorAll('.section_r');
    document.querySelectorAll('.btn_r').forEach((elem, i) => {
        elem.onclick = function () {
            document.querySelectorAll('.btn_r').forEach(item => {
                item.classList.remove('active');
            });
            sections.forEach(item => {
                item.classList.remove('show');
            })
            sections[i].classList.add('show');
            elem.classList.add('active');
            render();
        }
        
    });
}

const render = () => {

    S.element.style.cssText = `
        width: ${Sett.size_w}px;
        height: ${Sett.size_h}px;
        border-radius: ${Sett.radius_lt}% ${Sett.radius_rt}% ${Sett.radius_rb}% ${Sett.radius_lb}%;
        background-color:rgba(${parseInt(Sett.colorBg.substr(1,2), 16)}, ${parseInt(Sett.colorBg.substr(3,2), 16)}, ${parseInt(Sett.colorBg.substr(5,2), 16)}, ${Sett.colorBg_a});
        box-shadow: ${Sett.offset_x}px ${Sett.offset_y}px ${Sett.blur}px ${Sett.stretching}px  rgba(${parseInt(Sett.colorBg_shadow.substr(1,2),16)}, ${parseInt(Sett.colorBg_shadow.substr(3,2),16)}, ${parseInt(Sett.colorBg_shadow.substr(5,2),16)}, ${Sett.colorBg_shadow_a});
        `;

    S.result.value = `
        width: ${Sett.size_w}px;
        height: ${Sett.size_h}px;
        border-radius: ${Sett.radius_lt}% ${Sett.radius_rt}% ${Sett.radius_rb}% ${Sett.radius_lb}%;
        background-color: ${S.element.style.backgroundColor};
        box-shadow: ${S.element.style.boxShadow};
        `.replace(/\s\s+/g, '').split(';').join(';\n');
}

initApp();
      
}

App();