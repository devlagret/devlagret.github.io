window.onload = function () {
    document.getElementById("year").innerHTML = new Date().getFullYear();

    const id = [
        '1U-aSZ35-j5uut8GwIiIjKhoeo5M107kS',
        '1jj8hK3MlnHhhga5fBZlbEVoBHlvDK_9I',
        '1d0_v7QKuOpMSKoYKksIICQLFlPpFYDeq',
        '1FM2GpgQeTd3kYHFEXfdhdOZgjpYcLVL0',
        '1zxlPPI4K11EY2sEOIwEhb2MRlZmK4HXL',
        '1NYuIXc5ZWeZsvSUuVRv9hKzLTfRKlnAw',
        '1D2s6SflmbMk1ly3pfNafHxpBYyoJJRcS',
        '1Ua2eBqfTmoBO_3gSRDQiRKN3kF7ZRZaY',
        '106p-FzS29Rwfz1bCLtQtO3XIpGAqm-gl',
        '10dPAx7gGbVXXVyhqmf8v_UwhZMDUS1rc',
        '10snoFo3ehhrzBtDGx7U_LzshnvIeAhje',
        '1Vx4K0vZKgtQaBZ6_Eb0u31YZOhR2B0RV',
        '1_owcswEK395psIPnmmL8swtd9sOz--Kh',
        '1cjLSOxl-cUw_ynkszhATm2oPfNXA5p8t',
        '1-yqqEJVpaPKOyUlKIXtIiNk9MHBeZWN3',
        '1SC-ce4X6d-Pzg7opyYvPWQXShxB-CVUA',
        '1A5p1wG5ex5Rodlz3X705-tp-yhqe9aM3',
        '1SQHmZ9Wu1Nn1t8OdH4cibYj-AfknScsc',
        '11_14zAp4r-IgAunj1r1ya6QRtS1AMVE4',
        '1EhJb_x2MLAm8hMWUkFKXrcdxbi8wqEiA',
        '1ZtCZFmm6Gm4fiuGvW_3gC_gWUNW6mndJ',
        '1AWxW6D51f5tjVFlypz109Khmrjb7Lzzt',
        '1HMrRU5jpTZ4DIgSYihBU6Yu0c2HAAI9d',
        '1R6FkrVIkouAqMde-aI_bZ0l-bx0V2hjg',
        '17fP6Hgh0pF3UDnxHK3tB0S6iBPsxQGXh',
        '1wr_vWOT93qYPe6pS5XCp3jTfsIyHvozj',
        '1Kdt57fvQcyADo2ffEuy5o3n835A-LYko',
        '1Bk-qQV27n48kTmfAW5Eqs1PYeO2hfnj0',
        '1a1rfDO5bZ8nEJxTs48jQ7uHdmYahATER',
        '1yMjd09MfJAFmqLyroZGOnHM3SDC-bw-_',
        '1gJ02_8RzpjIfQlBDjaJCLHC4qqCHzBhl',
        '1sCs2d666BDX76AG5khS5aAXmb6Bjuoqd',
        '10ITjAbdMZWn3r3m0Yyy2-OQgBFUh0Xxk',
        '1rZExqWAwQnuf0IYlAm1z0Jgvy3_YMy5l',
        '1g5ZJ2Fv8j7e8ZMU6QBrYDDFOIdcGQ5ia',
        '1dszgg96mFTPqC-pnBufTAbJiZLLvkscP',
        '1MRkcxhcBXVW6siLNnVYgOHKIIDwhe16e',
        '1iVCdOny5lRB-CyiBYQB8dDi9Pc-xqR0X',
        '1I_AH8f4jx7fGh53FX_OEdsH4gysIl5mL',
        '13hw37nhDrtHhUA-29wF88w6px9GI-fOT',
        '1Jo22WriGK8H9FtC8nEhQ0McXbkmhFPOH',
        '1U9JxSdjMe7aKKTUiEMXdAzs7KBMjpVke',
        '1Ails4-PiIrgRwl3naP54kTe1eUvg84_7',
        '1TqiLlNduLlaSBVx255xJNBZigx8YYCrf',
        '1MVHDwNI-lCJBsWikZvtlvRa4oPTn6UiO',
        '1Ta_irjOU3hCsXRtu3HCwb-jPUaeHvrfb',
        '1uFrm8nNUzhC4UNPR9Lg9Q0el52-prpkR',
        '1gzDCM6aIw-MWL96fsm2nxlIGqtO1ZhuW',
        '1918EBIXreK6C1TnGIRs20zQWbwS-Bas9',
        '1wCKFKh-ZZA40cN8GUpqBs2FBF2BYoDaC',
    ];
    id.forEach(function (v) {
        $('#galeri').append(`<div class="col">
        <div class="card shadow-sm " data-bs-toggle="modal" data-bs-target="#pictureModal" data-bs-id="`+ v + `">
          <img
            src="https://drive.google.com/uc?export=view&id=`+ v + `"
            loading="lazy"
            alt="thumbnail" />
        </div>
      </div>`);
    });
};
function tst() { console.log('foo'); };
var exampleModal = document.getElementById('pictureModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var image = event.relatedTarget
    // Extract info from data-bs-* attributes
    var id = image.getAttribute('data-bs-id')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    var img = exampleModal.querySelector('.modal-body img')
    var download = exampleModal.querySelector('.modal-footer a')
    img.src = "https://drive.google.com/uc?export=view&id=" + id
    download.href = "https://drive.google.com/uc?export=download&id=" + id
})