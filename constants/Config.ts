const todayTotalTimes = 10
const getInitialTodayProgress = () => {
  return new Array(todayTotalTimes).fill({ duration: 0 })
}
const reviewListLimit = 4

export default {
  reviewListLimit,
  todayTotalTimes,
  getInitialTodayProgress,
}
