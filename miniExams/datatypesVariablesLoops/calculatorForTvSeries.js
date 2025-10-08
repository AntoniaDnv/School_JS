function tvSeries(movieName, seasons, episodes, durationEpisode){
    let totalDurationEpisode = durationEpisode + durationEpisode*0.2;
    let bonusMinutes = seasons * 10;
    let totalMinutesWatchTime = seasons *episodes *totalDurationEpisode + bonusMinutes;

    console.log(`Total time needed to watch the ${movieName} series is ${totalMinutesWatchTime} minutes.`);
}
tvSeries('Lucifer', 3, 18, 55)
tvSeries('Flash', 5, 20, 51)