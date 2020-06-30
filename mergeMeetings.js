const mergeInput = (meetings) => {
 
    //sort as per start times.
    const sortedMeetings = meetings.sort((a,b) => a.startTime - b.startTime);

    const mergedMeetings = meetings.reduce((acc, currentMeeting, index, meetings) => {
       
        const lastMergedMeeting = acc[acc.length - 1];
        if(currentMeeting.startTime <= lastMergedMeeting.endTime){
            lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime);
        }else{
            acc.push(currentMeeting);
        }
        return acc;
    }, [sortedMeetings[0]])
    return mergedMeetings;
  };
  
  console.log(mergeInput([
    { startTime: 0,  endTime: 1 },
    { startTime: 1,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ]));