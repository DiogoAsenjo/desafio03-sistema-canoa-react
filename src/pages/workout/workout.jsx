import { Button } from '../../componentes/button/button';
import DataList from '../../componentes/list/list';
import { AddWorkoutModal } from '../../componentes/modal/modal-add-workout/modal-add-workout';
import { ModifyWorkoutModal } from '../../componentes/modal/modal-modify-workout/modal-modify-workout';

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
      <AddWorkoutModal/>
      <ModifyWorkoutModal/>
    </div>
  );
}

export default Workout;