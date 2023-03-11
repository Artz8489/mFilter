/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useEffect } from "react";
import objectPath from "object-path";
import ApexCharts from "apexcharts";

import { useHtmlClassService } from "../../../../_metronic/layout";


export function WidgetTwo({ className, symbolShape, baseColor, loading, count }) {
    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => {
        return {
            colorsGrayGray500: objectPath.get(
                uiService.config,
                "js.colors.gray.gray500"
            ),
            colorsGrayGray200: objectPath.get(
                uiService.config,
                "js.colors.gray.gray200"
            ),
            colorsGrayGray300: objectPath.get(
                uiService.config,
                "js.colors.gray.gray300"
            ),
            colorsThemeBaseSuccess: objectPath.get(
                uiService.config,
                `js.colors.theme.base.${baseColor}`
            ),
            colorsThemeLightSuccess: objectPath.get(
                uiService.config,
                `js.colors.theme.light.${baseColor}`
            ),
            fontFamily: objectPath.get(uiService.config, "js.fontFamily"),
        };
    }, [uiService, baseColor]);

    useEffect(() => {
        const element = document.getElementById("kt_stats_widget_13_chart");

        if (!element) {
            return;
        }

        const options = getChartOption(layoutProps);
        const chart = new ApexCharts(element, options);
        chart.render();
        return function cleanUp() {
            chart.destroy();
        };
    }, [layoutProps]);

    return (
        <div className={`card card-custom ${className}`}>
            <div className="card-body p-0">
             
                   
                          <div className="d-flex flex-column text-right newchart">
                        
                  
                </div>
                <div
                    id="kt_stats_widget_13_chart"
                    className="card-rounded-bottom"
                    style={{ height: "90px" }}>
                </div>
            </div>
        </div>
    );
}

function getChartOption(layoutProps) {
    const options = {
        series: [{
            name: "Revenue",
            data: [40, 40, 30, 30, 35, 35, 50],
        }, ],
        chart: {
            type: "area",
            height: 110,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {},
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: "solid",
            opacity: 1,
        },
        stroke: {
            curve: "smooth",
            show: true,
            width: 2,
            colors: [layoutProps.colorsThemeBaseSuccess],
        },
        xaxis: {
            categories: ["Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                style: {
                    colors: layoutProps.colorsGrayGray500,
                    fontSize: "12px",
                    fontFamily: layoutProps.fontFamily,
                },
            },
            crosshairs: {
                show: false,
                position: "front",
                stroke: {
                    color: layoutProps.colorsGrayGray300,
                    width: 1,
                    dashArray: 3,
                },
            },
            // tooltip: {
            //     enabled: true,
            //     formatter: undefined,
            //     offsetY: 0,
            //     style: {
            //         fontSize: "12px",
            //         fontFamily: layoutProps.fontFamily,
            //     },
            // },
        },
        yaxis: {
            min: 0,
            max: 55,
            labels: {
                show: false,
                style: {
                    colors: layoutProps.colorsGrayGray500,
                    fontSize: "12px",
                    fontFamily: layoutProps.fontFamily,
                },
            },
        },
        states: {
            normal: {
                filter: {
                    type: "none",
                    value: 0,
                },
            },
            hover: {
                filter: {
                    type: "none",
                    value: 0,
                },
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: "none",
                    value: 0,
                },
            },
        },
        tooltip: {
            style: {
                fontSize: "12px",
                fontFamily: layoutProps.fontFamily,
            },
            y: {
                formatter: function(val) {
                    return "$" + val + " thousands";
                },
            },
        },
        colors: [layoutProps.colorsThemeLightSuccess],
        markers: {
            colors: [layoutProps.colorsThemeLightSuccess],
            strokeColor: [layoutProps.colorsThemeBaseSuccess],
            strokeWidth: 2,
        },
    };
    return options;
}