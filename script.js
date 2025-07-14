
function kira() {
  const e10 = parseFloat(document.getElementById("e10").value) || 0;
  const e12 = parseFloat(document.getElementById("e12").value) || 0;
  const e14 = parseFloat(document.getElementById("e14").value) || 0;
  const g34 = Math.min(parseFloat(document.getElementById("g34").value) || 0, 20);
  const m34 = Math.min(parseFloat(document.getElementById("m34").value) || 0, 30);
  const h45 = Math.min(parseFloat(document.getElementById("h45").value) || 0, 25);

  const prestasi = (e10 + e12 + e14) / 3;
  const potensi = g34 + m34 + h45;
  const jumlah = prestasi + potensi;

  let status = "TIDAK LAYAK";
  if (prestasi >= 85 && jumlah >= 70) status = "LAYAK";

  document.getElementById("output").innerHTML = `
    <p><strong>Markah Prestasi:</strong> ${prestasi.toFixed(2)}</p>
    <p><strong>Jumlah Markah:</strong> ${jumlah.toFixed(2)}</p>
    <p><strong>Status:</strong> ${status}</p>
  `;
}
