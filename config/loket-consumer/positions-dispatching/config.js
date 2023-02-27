const BATCH_SIZE = parseInt(process.env.BATCH_SIZE) || 100;
const MU_CALL_SCOPE_ID_INITIAL_SYNC =
  process.env.MU_CALL_SCOPE_ID_INITIAL_SYNC ||
  "http://redpencil.data.gift/id/concept/muScope/deltas/consumer/initialSync";
const BYPASS_MU_AUTH_FOR_EXPENSIVE_QUERIES =
  process.env.BYPASS_MU_AUTH_FOR_EXPENSIVE_QUERIES == "true" ? true : false;
const DIRECT_DATABASE_ENDPOINT =
  process.env.DIRECT_DATABASE_ENDPOINT || "http://virtuoso:8890/sparql";
const MAX_DB_RETRY_ATTEMPTS = parseInt(process.env.MAX_DB_RETRY_ATTEMPTS || 5);
const MAX_REASONING_RETRY_ATTEMPTS = parseInt(
  process.env.MAX_REASONING_RETRY_ATTEMPTS || 5
);
const SLEEP_BETWEEN_BATCHES = parseInt(
  process.env.SLEEP_BETWEEN_BATCHES || 1000
);
const SLEEP_TIME_AFTER_FAILED_REASONING_OPERATION = parseInt(
  process.env.SLEEP_TIME_AFTER_FAILED_REASONING_OPERATION || 10000
);
const SLEEP_TIME_AFTER_FAILED_DB_OPERATION = parseInt(
  process.env.SLEEP_TIME_AFTER_FAILED_DB_OPERATION || 60000
);
const INGEST_GRAPH =
  process.env.INGEST_GRAPH || `http://mu.semte.ch/graphs/worship-service`;
const PRIVACY_SENSITIVE_GRAPH =
  process.env.PRIVACY_SENSITIVE_GRAPH ||
  `http://mu.semte.ch/graphs/worship-privacy-centric-graph`;
const UNFILTERED_MAPPING = "main";
const MAIN_INFO_MAPPING = "main-info";
const PRIVATE_INFO_MAPPING = "private-info";

if (!process.env.FILE_SYNC_GRAPH)
  throw `Expected 'FILE_SYNC_GRAPH' to be provided.`;
const FILE_SYNC_GRAPH = process.env.FILE_SYNC_GRAPH;

module.exports = {
  BATCH_SIZE,
  MU_CALL_SCOPE_ID_INITIAL_SYNC,
  BYPASS_MU_AUTH_FOR_EXPENSIVE_QUERIES,
  DIRECT_DATABASE_ENDPOINT,
  MAX_DB_RETRY_ATTEMPTS,
  MAX_REASONING_RETRY_ATTEMPTS,
  SLEEP_BETWEEN_BATCHES,
  SLEEP_TIME_AFTER_FAILED_DB_OPERATION,
  SLEEP_TIME_AFTER_FAILED_REASONING_OPERATION,
  INGEST_GRAPH,
  PRIVACY_SENSITIVE_GRAPH,
  UNFILTERED_MAPPING,
  MAIN_INFO_MAPPING,
  PRIVATE_INFO_MAPPING,
  FILE_SYNC_GRAPH,
};
