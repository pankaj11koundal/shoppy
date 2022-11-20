import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PyramidSeries, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection } from '@syncfusion/ej2-react-charts'

import { UseStateContext } from '../../context/ContextProvider';
import { ChartsHeader } from '../../components';
import { PyramidData } from '../../data/dummy';
const Pyramid = () => {
  const { currentMode } = UseStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Pyramid" title="Food Comparision Chart" />
      <div className='w-full'>
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={{ background: 'white' }}
          height="full"
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          tooltip={{ enable: true }}
        >
          <Inject services={[PyramidSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name='Food'
              dataSource={PyramidData}
              xName='x'
              yName='y'
              type='Pyramid'
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visible: true,
                name: 'text',
                position: 'Inside',
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pyramid;