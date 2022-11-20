import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DataLabel, Legend, ColumnSeries, Tooltip, Category } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy';
import { UseStateContext } from '../../context/ContextProvider';
import { Header } from '../../components';
const Bar = () => {
  const { currentMode } = UseStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header
        category="Chart" title="Inflation Rate in Percentage"
      />
      <ChartComponent
        id="charts"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white' }}
      >
        <Inject services={[ColumnSeries, DataLabel, Legend, Tooltip, Category]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => <SeriesDirective  key={index} {...item}/>)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar;