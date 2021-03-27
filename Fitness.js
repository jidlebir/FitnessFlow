GoogleApiClient client = new GoogleApiClient.Builder(context)
    .addApi(Fitness.GOALS_API)
    .addScope(new Scope(Scopes.FITNESS_ACTIVITY_READ))
    .addScope(new Scope(Scopes.FITNESS_LOCATION_READ))
    ...
    .build();
     client.connect();

PendingResult<GoalsResult> pendingResult =
    Fitness.GoalsApi.readCurrentGoals(
        client,
        new GoalsReadRequest.Builder()
        .addDataType(DataType.TYPE_STEP_COUNT_DELTA)
        .addDataType(DataType.TYPE_DISTANCE_DELTA)
        .build());

GoalsResult readDataResult = pendingResult.await();
List<Goal> goals = readDataResult.getGoals();