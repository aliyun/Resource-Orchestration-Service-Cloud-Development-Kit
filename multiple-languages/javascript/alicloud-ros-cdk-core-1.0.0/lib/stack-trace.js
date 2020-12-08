"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.captureStackTrace = void 0;
// tslint:disable-next-line:ban-types
function captureStackTrace(below) {
    if (process.env.CDK_DISABLE_STACK_TRACE) {
        return ["stack traces disabled"];
    }
    below = below || captureStackTrace; // hide myself if nothing else
    const object = { stack: "" };
    const previousLimit = Error.stackTraceLimit;
    try {
        Error.stackTraceLimit = Number.MAX_SAFE_INTEGER;
        Error.captureStackTrace(object, below);
    }
    finally {
        Error.stackTraceLimit = previousLimit;
    }
    if (!object.stack) {
        return [];
    }
    return object.stack
        .split("\n")
        .slice(1)
        .map((s) => s.replace(/^\s*at\s+/, ""));
}
exports.captureStackTrace = captureStackTrace;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stdHJhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFjay10cmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsU0FBZ0IsaUJBQWlCLENBQUMsS0FBZ0I7SUFDaEQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFO1FBQ3ZDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0tBQ2xDO0lBRUQsS0FBSyxHQUFHLEtBQUssSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLDhCQUE4QjtJQUNsRSxNQUFNLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUM3QixNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO0lBQzVDLElBQUk7UUFDRixLQUFLLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3hDO1lBQVM7UUFDUixLQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQztLQUN2QztJQUNELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1FBQ2pCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxPQUFPLE1BQU0sQ0FBQyxLQUFLO1NBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDWCxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ1IsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFyQkQsOENBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmJhbi10eXBlc1xuZXhwb3J0IGZ1bmN0aW9uIGNhcHR1cmVTdGFja1RyYWNlKGJlbG93PzogRnVuY3Rpb24pOiBzdHJpbmdbXSB7XG4gIGlmIChwcm9jZXNzLmVudi5DREtfRElTQUJMRV9TVEFDS19UUkFDRSkge1xuICAgIHJldHVybiBbXCJzdGFjayB0cmFjZXMgZGlzYWJsZWRcIl07XG4gIH1cblxuICBiZWxvdyA9IGJlbG93IHx8IGNhcHR1cmVTdGFja1RyYWNlOyAvLyBoaWRlIG15c2VsZiBpZiBub3RoaW5nIGVsc2VcbiAgY29uc3Qgb2JqZWN0ID0geyBzdGFjazogXCJcIiB9O1xuICBjb25zdCBwcmV2aW91c0xpbWl0ID0gRXJyb3Iuc3RhY2tUcmFjZUxpbWl0O1xuICB0cnkge1xuICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKG9iamVjdCwgYmVsb3cpO1xuICB9IGZpbmFsbHkge1xuICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IHByZXZpb3VzTGltaXQ7XG4gIH1cbiAgaWYgKCFvYmplY3Quc3RhY2spIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIG9iamVjdC5zdGFja1xuICAgIC5zcGxpdChcIlxcblwiKVxuICAgIC5zbGljZSgxKVxuICAgIC5tYXAoKHMpID0+IHMucmVwbGFjZSgvXlxccyphdFxccysvLCBcIlwiKSk7XG59XG4iXX0=