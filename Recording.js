Calendar current = Calendar.getInstance();
PendingResult<DataReadResult> pendingResult = Fitness.HistoryApi.readData(
    client,
    new DataReadRequest.Builder()
        .read(DataType.TYPE_STEP_COUNT_DELTA)
        .setTimeRange(
            goal.getStartTime(current, TimeUnit.NANOSECONDS),
            goal.getEndTime(current, TimeUnit.NANOSECONDS),
            TimeUnit.NANOSECONDS)
        .build());
DataReadResult stepReadResult = pendingResult.await();
List<DataPoint> dataPoints =
stepReadResult.getDataSet(DataType.TYPE_STEP_COUNT_DELTA).getDataPoints();

int total = 0;
for (DataPoint dataPoint : dataPoints) {
    total += dataPoint.getValue(Field.FIELD_STEPS).asInt();
    }
double progress = total / goal.getMetricObjective().getValue();