import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { eachDayOfInterval, subDays, format, isSameDay } from "date-fns";
import styled from "styled-components";

import { useDarkMode } from "../../context/DarkModeContext";
import Heading from "../../ui/Heading";
import DashboardBox from "./DashboardBox";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function SalesChart({bookings, numDays}) {
  const {isDarkMode} = useDarkMode();

  const allDays = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  })

  const data = allDays.map(date => {
    return {
      label: format(date, "MMM dd"),
      totalSales: bookings.filter(booking => isSameDay(date, new Date(booking.created_at))).reduce((acc, curr) => acc + curr.totalPrice, 0),
      extrasSales: bookings.filter(booking => isSameDay(date, new Date(booking.created_at))).reduce((acc, curr) => acc + curr.extrasPrice, 0),
    }
  })

  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };


  return (
    <StyledSalesChart>
      <Heading as="h2">Sales from {format(allDays.at(0), "MMM dd yyyy")} &mdash; {format(allDays.at(-1), "MMM dd yyyy")}</Heading>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis dataKey="label" tick={{fill: colors.text}} tickLine={{stroke: colors.text}} />
          <YAxis unit="$" tick={{fill: colors.text}} tickLine={{stroke: colors.text}}/>
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{background: colors.background}} />
          <Area 
            type="monotone" 
            dataKey="totalSales" 
            stroke={colors.totalSales.stroke} 
            fill={colors.totalSales.fill} 
            strokeWidth={2}
            name="Total Sales"
            unit="$"
          />
          <Area 
            type="monotone" 
            dataKey="extrasSales" 
            stroke={colors.extrasSales.stroke} 
            fill={colors.extrasSales.fill} 
            strokeWidth={2}
            name="Extras Sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  )
}

export default SalesChart;
