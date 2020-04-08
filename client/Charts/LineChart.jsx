import React, { useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import _filter from 'lodash/filter';
import {
  Box,
  Grid,
  Typography,
} from '@material-ui/core';

function LineChart({
  data,
}) {
  const ref = useRef(null);
  const margin = ({top: 20, right: 30, bottom: 30, left: 40});
  const height = 305;
  const width = 305;
  const healthyData = useMemo(() => _filter(data, ({ status }) => status === 'Healthy'), [data]);
  const unhealthyData = useMemo(() => _filter(data, ({ status }) => status !== 'Healthy'), [data]);

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.x)])
    .range([margin.left, width - margin.right])

  const y = d3.scaleLinear()
    .domain([(d3.min(data, d => d.y)), d3.max(data, d => d.y)]).nice()
    .range([height - margin.bottom, margin.top])

  function xAxis(g) {
    return g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));
  }

  function yAxis(g) {
    return g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(height / 60))
      .call(g => g.select(".domain").remove())
      .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y));
  }

  const line = d3.line()
    .x(d => x(d.x))
    .y(d => y(d.y));

  function renderChart() {
    const svg = d3
      .select(ref.current);

    svg.selectAll("*").remove();

    svg.append("g")
      .call(xAxis);

    svg.append("g")
      .call(yAxis);

    svg.append("path")
      .datum(unhealthyData)
      .attr("fill", "none")
      .attr("stroke", "#c6110a")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", line);

    svg.append("path")
      .datum(healthyData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", line);

  }

  useEffect(renderChart, [data]);

  return (
    <>
      <svg height={height} width={width} ref={ref} viewBox={`0,0,${width},${height}`} />
      <Grid container spacing={1} wrap="nowrap" alignItems="center">
        <Grid item>
          <Box
            bgcolor="#c6110a"
            height={20}
            width={20}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>COVID-19</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} wrap="nowrap" alignItems="center">
        <Grid item>
          <Box
            bgcolor="steelblue"
            height={20}
            width={20}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>You</Typography>
        </Grid>
      </Grid>
    </>
  )
}

LineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default LineChart;
