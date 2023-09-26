// src/App.tsx
import React, { useState } from 'react';
import PopUp from './components/popUp/PopUp';
import Video from './components/video/Video';






const stepList = [
  'PopUp',
  'Video',
  'SelechHsChangeBgRefactor',
  'SelectAvatar',
  'Scene360',
  'Space360',
  'Scene360holdPoint',
  'SwitchStep',
  'ControlPoint360',
  'Scene360video',
  'Questions',
  'QuestionWithView',
  'QuestionLateral',
  'SelectHotspot',
  'SelectHotspotWithTime',
  'DragAndDropItems',
  'DragAndDropTargets',
  'DragAndDropChangeBg',
  'ClickPairChangeBackground',
  'AccordionStep',
  'Feedback',
  'ListOrdered',
  'SelectHotspotOrder',
  'SelectHotspotReactive',
  'SelectHotspotInteractive',
  'SelechHsChangeBg',
  'JoinWithArrows',
  'Meassure',
  'VideoSelect',
  'Rcp',
  'Ambu',
  'Driver',
  'TurnPage',
  'TargetReactive',
  'VideoWithControls',
  'TargetReactiveHorizontal',
  'CropImg',
  'Roulette',
  'DynamicForm',
  'Cuestionario',
  'QuestionReactivo',
  'StaticHtml',
  'ImageZoomSelect',
  'PositionCorrect'


  
  // Agrega el resto de los "steps" aquí
];

const App: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);

  const handleStepSelect = (stepName: string) => {
    setSelectedStep(stepName);
  };

  const renderSelectedStep = () => {
    switch (selectedStep) {
      case 'PopUp':
        return <PopUp />;
      case 'Video':
        return <Video />;
      case 'SelechHsChangeBgRefactor':
        // return <SelechHsChangeBgRefactor />;
      // case 'SelectAvatar':
      //   return <SelectAvatar />; // Reemplaza con el componente correspondiente
      // case 'Scene360':
      //   return <Scene360 />;
      // case 'Space360':
      //   return <Space360 />;
      // case 'Scene360holdPoint':
      //   return <Scene360holdPoint />;
      // case 'SwitchStep':
      //   return <SwitchStep />;
      // case 'ControlPoint360':
      //   return <ControlPoint360 />;
      // case 'Scene360video':
      //   return <Scene360video />;
      // case 'Questions':
      //   return <Questions />;
      // case 'QuestionWithView':
      //   return <QuestionWithView />;
      // case 'QuestionLateral':
      //   return <QuestionLateral />;
      // case 'SelectHotspot':
      //   return <SelectHotspot />;
      // case 'SelectHotspotWithTime':
      //   return <SelectHotspotWithTime />;
      // case 'DragAndDropItems':
      //   return <DragAndDropItems />;
      // case 'DragAndDropTargets':
      //   return <DragAndDropTargets />;
      // case 'DragAndDropChangeBg':
      //   return <DragAndDropChangeBg />;
      // case 'ClickPairChangeBackground':
      //   return <ClickPairChangeBackground />;
      // case 'AccordionStep':
      //   return <AccordionStep />;
      // case 'Feedback':
      //   return <Feedback />;
      // case 'ListOrdered':
      //   return <ListOrdered />;
      // case 'SelectHotspotOrder':
      //   return <SelectHotspotOrder />;
      // case 'SelectHotspotReactive':
      //   return <SelectHotspotReactive />;
      // case 'SelectHotspotInteractive':
      //   return <SelectHotspotInteractive />;
      // case 'SelechHsChangeBg':
      //   return <SelechHsChangeBg />;
      // case 'JoinWithArrows':
      //   return <JoinWithArrows />;
      // case 'Meassure':
      //   return <Meassure />;
      // case 'VideoSelect':
      //   return <VideoSelect />;
      // case 'Rcp':
      //   return <Rcp />;
      // case 'Ambu':
      //   return <Ambu />;
      // case 'Driver':
      //   return <Driver />;
      // case 'TurnPage':
      //   return <TurnPage />;
      // case 'TargetReactive':
      //   return <TargetReactive />;
      // case 'VideoWithControls':
      //   return <VideoWithControls />;
      // case 'TargetReactiveHorizontal':
      //   return <TargetReactiveHorizontal />;
      // case 'CropImg':
      //   return <CropImg />;
      // case 'Roulette':
      //   return <Roulette />;
      // case 'DynamicForm':
      //   return <DynamicForm />;
      // case 'Cuestionario':
      //   return <Cuestionario />;
      // case 'QuestionReactivo':
      //   return <QuestionReactivo />;
      // case 'StaticHtml':
      //   return <StaticHtml />;
      // case 'ImageZoomSelect':
      //   return <ImageZoomSelect />;
      // case 'PositionCorrect':
      //   return <PositionCorrect />;
      default:
        return null;
    }
  };

  return (
    // <div>
    //   <h1>Selecciona un paso:</h1>
    //   <div className="flex space-x-2">
    //     {stepList.map((stepName) => (
    //       <button
    //         key={stepName}
    //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //         onClick={() => handleStepSelect(stepName)}
    //       >
    //         {stepName}
    //       </button>
    //     ))}
    //   </div>
    //   {selectedStep && renderSelectedStep()}
    // </div>
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200 p-4">
        <h1>Selecciona un paso:</h1>
        <ul className="mt-4">
          {stepList.map((stepName) => (
            <li key={stepName}>
              <button
                className={`w-full text-left p-2 mb-2 rounded ${
                  selectedStep === stepName ? 'bg-blue-500 text-white' : 'bg-white text-black'
                }`}
                onClick={() => handleStepSelect(stepName)}
              >
                {stepName}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="w-3/4 p-4">
        {selectedStep && renderSelectedStep()}
      </div>
    </div>
  );
};

export default App;
