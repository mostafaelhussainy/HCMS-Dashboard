import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryPie, VictoryLabel, Slice, VictoryLegend, Border } from 'victory';

function Chart() {
    const data = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
      ];
    const handleClick = () => {
        return [{
          target: "x",
          mutation: (props) => {
            console.log(props)
          }
        }];
    }
  return (
    <div>
        <h1>Victory Tutorial</h1>
        <div style={{display:"flex"}}>
            <VictoryPie
                dataComponent={<Slice />}
                labels={({ datum }) => `${datum.y}`}
                labelComponent={<VictoryLabel />}
                colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                data={[
                    { x: "Cats", y: 1 },
                    { x: "Dogs", y: 1 },
                    { x: "Birds", y: 2 }
                ]}
                events={[
                    {
                      target: "data",
                      eventHandlers: {
                        onClick: () => {
                          return [{
                            target: "data",
                            mutation: (props) => {
                              console.log(props)
                            }
                          }];
                        }
                      }
                    }
                ]}
            />
            <VictoryChart
                theme={VictoryTheme.material} // adding the material theme provided with Victory
                domainPadding={20} // domainPadding will add space to each side of VictoryBar to prevent it from overlapping the axis
            >
                  <VictoryLegend x={100} y={0}
                    title="Legend"
                    centerTitle // make the title in the center
                    orientation="horizontal"
                    colorScale={[ "navy", "blue", "cyan" ]}
                    gutter={5}
                    style={{border: { stroke: "black" }, title: {fontSize: 20 } }}
                    data={[
                      { name: "One", symbol: { fill: "tomato", type: "star" } },
                      { name: "Two", symbol: { fill: "orange" } },
                      { name: "Three", symbol: { fill: "gold" } }
                    ]}
                    borderComponent={<Border width={150}/>}
                    borderPadding={{ top: 2, bottom: 2 }}
                  />
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                />
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x) => (`$${x / 1000}k`)}
                />
                <VictoryBar
                    data={data}
                    x="quarter" // data accessor for x values
                    y="earnings" // data accessor for y values
                    style={{
                        data: {
                        fill: 'orange'
                        }
                    }}
                    events={[
                        {
                          target: "data",
                          eventHandlers: {
                            onClick: () => {
                              return [{
                                target: "data",
                                mutation: (props) => {
                                  console.log(props)
                                }
                              }];
                            }
                          }
                        }
                    ]}
                />
                
            </VictoryChart>
            
        </div>
      </div>
  )
}

export default Chart