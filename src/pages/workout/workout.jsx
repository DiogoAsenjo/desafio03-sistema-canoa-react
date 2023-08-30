import DataList from '../../componentes/list/list';

function Workout() {

    const data = [
        {
          id: 1,
          date: '2023-08-30',
          timeSpent: '2 hours',
          distance: '10 miles',
          maxSpeed: '30 mph',
          averageSpeed: '15 mph',
        },
      ];
    
  return (
    <div className="workout">
      <DataList data={data} />
    </div>
  );
}

export default Workout;