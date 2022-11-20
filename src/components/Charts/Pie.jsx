import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip} from '@syncfusion/ej2-react-charts'

import { UseStateContext } from '../../context/ContextProvider';
import {ChartsHeader} from '../../components';

const Pie = ({ id, data, legendVisibility, height }) => {
  const { currentMode } = UseStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Pie" title="Project Cost BreakDown" />
      <div className='w-full'>
        <AccumulationChartComponent 
          id={id}
          legendSettings={{ visible:legendVisibility, background: 'white' }}
          height={height}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          tooltip={{ enable: true }}
        >
          <Inject services={[ PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip ]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name='Sale'
              dataSource={data}
              xName='x'
              yName='y'
              innerRadius="40%"
              startAngle={0}
              endAngle={360}
              radius="70%"
              explode
              explodeOffset="10%"
              explodeIndex={2}
              dataLabel={{
                visible: true,
                name: 'text',
                position: 'Inside',
                font: {
                  fontWeight: '600',
                  color: '#fff',
                },
              }}
            /> 
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pie