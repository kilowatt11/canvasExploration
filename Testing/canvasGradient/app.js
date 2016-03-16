  var canvas = document.getElementById('canvas1'),
          ctx = canvas.getContext('2d'),
          grd;
      
      // Create gradient
      grd = ctx.createLinearGradient(146.000, 0.000, 154.000, 300.000);
      
      // Add colors
      grd.addColorStop(0.311, 'rgba(88, 84, 221, 1.000)');
      grd.addColorStop(1.000, 'rgba(255, 255, 255, 1.000)');
      
      // Fill with gradient
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, 300.000, 300.000);