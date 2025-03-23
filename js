<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Welcome to My Website - Azeem</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
  <!-- Google Fonts for handwritten styles -->
  <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Dancing+Script&family=Handlee&family=Patrick+Hand&family=Shadows+Into+Light&family=Indie+Flower&family=Reenie+Beanie&display=swap" rel="stylesheet" />
  <style>
    body {
      position: relative;
      min-height: 100vh;
      background: linear-gradient(to right, #ff9a9e, #fad0c4);
      padding-bottom: 50px;
      color: #fff;
      font-family: Arial, sans-serif;
    }
    h1 {
      font-family: 'Dancing Script', cursive;
      font-size: 3rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    #watermark {
      position: fixed;
      bottom: 10px;
      right: 10px;
      opacity: 0.3;
      font-size: 24px;
      z-index: 9999;
    }
    .a4-page {
      background-color: #fff;
      color: #000;
      width: 210mm;
      height: 297mm;
      padding: 20mm;
      margin: 20px auto;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      border-radius: 10px;
      overflow: auto;
      position: relative;
    }
    @media screen and (max-width: 768px) {
      .a4-page {
        width: 95%;
        height: auto;
        padding: 10mm;
      }
    }
  </style>
</head>
<body>
  <div id="watermark">Azeem</div>
  <div class="container mt-5 text-center">
    <h1>Welcome to My Website - I'm Azeem</h1>
    <p>Generate your handwritten A4 page with beautiful fonts!</p>

    <!-- Input Section -->
    <div class="form-group">
      <label for="inputText">Enter your text:</label>
      <textarea class="form-control" id="inputText" rows="5">Hello, I'm Azeem</textarea>
    </div>

    <div class="form-group">
      <label for="fontSelect">Choose Handwritten Font:</label>
      <select class="form-control" id="fontSelect">
        <option value="Handlee, cursive">Handlee</option>
        <option value="'Shadows Into Light', cursive">Shadows Into Light</option>
        <option value="'Patrick Hand', cursive">Patrick Hand</option>
        <option value="'Dancing Script', cursive">Dancing Script</option>
        <option value="'Amatic SC', cursive">Amatic SC</option>
        <option value="'Indie Flower', cursive">Indie Flower</option>
        <option value="'Reenie Beanie', cursive">Reenie Beanie</option>
      </select>
    </div>

    <!-- Download PDF Button -->
    <button class="btn btn-warning mb-4" id="downloadPdf">Download PDF</button>

    <!-- A4 Page Preview -->
    <div class="a4-page" id="a4Page">
      <div id="a4Content"></div>
    </div>
  </div>

  <!-- jQuery and Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
  <!-- jsPDF and html2canvas -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>

  <script>
    function updateA4Content() {
      var text = document.getElementById("inputText").value;
      var font = document.getElementById("fontSelect").value;
      var a4Content = document.getElementById("a4Content");
      a4Content.style.fontFamily = font;
      a4Content.style.whiteSpace = "pre-wrap";
      a4Content.textContent = text;
    }
    document.getElementById("inputText").addEventListener("input", updateA4Content);
    document.getElementById("fontSelect").addEventListener("change", updateA4Content);
    updateA4Content();

    document.getElementById("downloadPdf").addEventListener("click", function () {
      var a4Page = document.getElementById("a4Page");
      html2canvas(a4Page, { scale: 2 }).then(function(canvas) {
        const { jsPDF } = window.jspdf;
        var pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
        var imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
        pdf.save("handwritten.pdf");
      });
    });
  </script>
</body>
</html>
