var line_counter = 0;
var near_y_right = [];
var near_y_left = [];
var options = {
    tooltipTemplate: "<%=label%> <%= value %>%",
    onAnimationComplete: function() {
        this.showTooltip(this.segments, true);
    },
    tooltipEvents: [],
    customTooltips: function(tooltip) {
        line_counter++;
        if (!tooltip) {
            return;
        }
        else{
          if(tooltip.x > (tooltip.chart.width/2)){
            near_y_right.forEach(function(y_axis){
              if((tooltip.y >= y_axis - 10) && (tooltip.y <= y_axis + 10)){
                tooltip.y -= 20;
              }
            });
            near_y_right[line_counter] = tooltip.y;

            tooltip.chart.ctx.beginPath();
            tooltip.chart.ctx.strokeStyle = '#000';
            tooltip.chart.ctx.lineWidth=1;
            tooltip.chart.ctx.moveTo(tooltip.x,tooltip.y);
            tooltip.chart.ctx.lineTo(tooltip.chart.width - 100,tooltip.y);
            tooltip.chart.ctx.stroke();
            tooltip.chart.ctx.textAlign="left";
            tooltip.chart.ctx.fillText(tooltip.text,(tooltip.chart.width - 100) + 3,tooltip.y+5);
          }
          else{
            near_y_left.forEach(function(y_axis){
              if((tooltip.y >= y_axis - 10) && (tooltip.y <= y_axis + 10)){
                tooltip.y -= 20;
              }
            });
            near_y_left[line_counter] = tooltip.y;

            tooltip.chart.ctx.beginPath();
            tooltip.chart.ctx.strokeStyle = '#000';
            tooltip.chart.ctx.moveTo(tooltip.x,tooltip.y);
            tooltip.chart.ctx.lineTo(100,tooltip.y);
            tooltip.chart.ctx.stroke();
            tooltip.chart.ctx.textAlign="right";
            tooltip.chart.ctx.fillText(tooltip.text,95,tooltip.y+5);
          }
        }
    },
    showTooltips: false
};
