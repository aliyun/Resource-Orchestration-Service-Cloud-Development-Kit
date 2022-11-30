"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudExecutable = void 0;
const logging_1 = require("../logging");
const cloud_assembly_1 = require("./cloud-assembly");
/**
 * Represent the Cloud Executable and the synthesis we can do on it
 */
class CloudExecutable {
    constructor(props) {
        this.props = props;
    }
    /**
     * Return whether there is an app command from the configuration
     */
    get hasApp() {
        return !!this.props.configuration.settings.get(['app']);
    }
    /**
     * Synthesize a set of stacks
     */
    async synthesize() {
        if (!this._cloudAssembly) {
            this._cloudAssembly = await this.doSynthesize();
        }
        return this._cloudAssembly;
    }
    async doSynthesize() {
        // We may need to run the cloud executable multiple times in order to satisfy all missing context
        // (When the executable runs, it will tell us about context it wants to use
        // but it missing. We'll then look up the context and run the executable again, and
        // again, until it doesn't complain anymore or we've stopped making progress).
        let previouslyMissingKeys;
        while (true) {
            const assembly = await this.props.synthesizer(this.props.configuration);
            if (assembly.manifest.missing) {
                const missingKeys = missingContextKeys(assembly.manifest.missing);
                let tryLookup = true;
                if (previouslyMissingKeys && setsEqual(missingKeys, previouslyMissingKeys)) {
                    logging_1.debug('Not making progress trying to resolve environmental context. Giving up.');
                    tryLookup = false;
                }
                previouslyMissingKeys = missingKeys;
                if (tryLookup) {
                    logging_1.debug('Some context information is missing. Fetching...');
                    // await contextproviders.provideContextValues(assembly.manifest.missing, this.props.configuration.context, this.props.sdkProvider);
                    // Cache the new context to disk
                    await this.props.configuration.saveContext();
                    // Execute again
                    continue;
                }
            }
            return new cloud_assembly_1.CloudAssembly(assembly);
        }
    }
}
exports.CloudExecutable = CloudExecutable;
/**
 * Return all keys of missing context items
 */
function missingContextKeys(missing) {
    return new Set((missing || []).map((m) => m.key));
}
function setsEqual(a, b) {
    if (a.size !== b.size) {
        return false;
    }
    for (const x of a) {
        if (!b.has(x)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtZXhlY3V0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsb3VkLWV4ZWN1dGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esd0NBQW1DO0FBRW5DLHFEQUFpRDtBQW1CakQ7O0dBRUc7QUFDSCxNQUFhLGVBQWU7SUFHMUIsWUFBNkIsS0FBMkI7UUFBM0IsVUFBSyxHQUFMLEtBQUssQ0FBc0I7SUFBRyxDQUFDO0lBRTVEOztPQUVHO0lBQ0gsSUFBVyxNQUFNO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLFVBQVU7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNqRDtRQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRU8sS0FBSyxDQUFDLFlBQVk7UUFFeEIsaUdBQWlHO1FBQ2pHLDJFQUEyRTtRQUMzRSxtRkFBbUY7UUFDbkYsOEVBQThFO1FBQzlFLElBQUkscUJBQThDLENBQUM7UUFDbkQsT0FBTyxJQUFJLEVBQUU7WUFDWCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFeEUsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDN0IsTUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFbEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLHFCQUFxQixJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUUscUJBQXFCLENBQUMsRUFBRTtvQkFDMUUsZUFBSyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7b0JBQ2pGLFNBQVMsR0FBRyxLQUFLLENBQUM7aUJBQ25CO2dCQUVELHFCQUFxQixHQUFHLFdBQVcsQ0FBQztnQkFFcEMsSUFBSSxTQUFTLEVBQUU7b0JBQ2IsZUFBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7b0JBRTFELG9JQUFvSTtvQkFFcEksZ0NBQWdDO29CQUNoQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUU3QyxnQkFBZ0I7b0JBQ2hCLFNBQVM7aUJBQ1Y7YUFDRjtZQUVELE9BQU8sSUFBSSw4QkFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztDQUNGO0FBM0RELDBDQTJEQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FBQyxPQUFnQztJQUMxRCxPQUFPLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFJLENBQVMsRUFBRSxDQUFTO0lBQ3hDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQ3JCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNqQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNiLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4YXBpIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWN4YXBpJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnLi4vbG9nZ2luZyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vc2V0dGluZ3MnO1xuaW1wb3J0IHsgQ2xvdWRBc3NlbWJseSB9IGZyb20gJy4vY2xvdWQtYXNzZW1ibHknO1xuXG4vKipcbiAqIEByZXR1cm5zIG91dHB1dCBkaXJlY3RvcnlcbiAqL1xudHlwZSBTeW50aGVzaXplciA9IChjb25maWc6IENvbmZpZ3VyYXRpb24pID0+IFByb21pc2U8Y3hhcGkuQ2xvdWRBc3NlbWJseT47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRFeGVjdXRhYmxlUHJvcHMge1xuICAvKipcbiAgICogQXBwbGljYXRpb24gY29uZmlndXJhdGlvbiAoc2V0dGluZ3MgYW5kIGNvbnRleHQpXG4gICAqL1xuICBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uO1xuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBpbnZva2VkIHRvIHN5bnRoZXNpemUgdGhlIGFjdHVhbCBzdGFja3NcbiAgICovXG4gIHN5bnRoZXNpemVyOiBTeW50aGVzaXplcjtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnQgdGhlIENsb3VkIEV4ZWN1dGFibGUgYW5kIHRoZSBzeW50aGVzaXMgd2UgY2FuIGRvIG9uIGl0XG4gKi9cbmV4cG9ydCBjbGFzcyBDbG91ZEV4ZWN1dGFibGUge1xuICBwcml2YXRlIF9jbG91ZEFzc2VtYmx5PzogQ2xvdWRBc3NlbWJseTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByb3BzOiBDbG91ZEV4ZWN1dGFibGVQcm9wcykge31cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhlcmUgaXMgYW4gYXBwIGNvbW1hbmQgZnJvbSB0aGUgY29uZmlndXJhdGlvblxuICAgKi9cbiAgcHVibGljIGdldCBoYXNBcHAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5wcm9wcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLmdldChbJ2FwcCddKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW50aGVzaXplIGEgc2V0IG9mIHN0YWNrc1xuICAgKi9cbiAgcHVibGljIGFzeW5jIHN5bnRoZXNpemUoKTogUHJvbWlzZTxDbG91ZEFzc2VtYmx5PiB7XG4gICAgaWYgKCF0aGlzLl9jbG91ZEFzc2VtYmx5KSB7XG4gICAgICB0aGlzLl9jbG91ZEFzc2VtYmx5ID0gYXdhaXQgdGhpcy5kb1N5bnRoZXNpemUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3VkQXNzZW1ibHk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGRvU3ludGhlc2l6ZSgpOiBQcm9taXNlPENsb3VkQXNzZW1ibHk+IHtcblxuICAgIC8vIFdlIG1heSBuZWVkIHRvIHJ1biB0aGUgY2xvdWQgZXhlY3V0YWJsZSBtdWx0aXBsZSB0aW1lcyBpbiBvcmRlciB0byBzYXRpc2Z5IGFsbCBtaXNzaW5nIGNvbnRleHRcbiAgICAvLyAoV2hlbiB0aGUgZXhlY3V0YWJsZSBydW5zLCBpdCB3aWxsIHRlbGwgdXMgYWJvdXQgY29udGV4dCBpdCB3YW50cyB0byB1c2VcbiAgICAvLyBidXQgaXQgbWlzc2luZy4gV2UnbGwgdGhlbiBsb29rIHVwIHRoZSBjb250ZXh0IGFuZCBydW4gdGhlIGV4ZWN1dGFibGUgYWdhaW4sIGFuZFxuICAgIC8vIGFnYWluLCB1bnRpbCBpdCBkb2Vzbid0IGNvbXBsYWluIGFueW1vcmUgb3Igd2UndmUgc3RvcHBlZCBtYWtpbmcgcHJvZ3Jlc3MpLlxuICAgIGxldCBwcmV2aW91c2x5TWlzc2luZ0tleXM6IFNldDxzdHJpbmc+IHwgdW5kZWZpbmVkO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMucHJvcHMuc3ludGhlc2l6ZXIodGhpcy5wcm9wcy5jb25maWd1cmF0aW9uKTtcblxuICAgICAgaWYgKGFzc2VtYmx5Lm1hbmlmZXN0Lm1pc3NpbmcpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ0tleXMgPSBtaXNzaW5nQ29udGV4dEtleXMoYXNzZW1ibHkubWFuaWZlc3QubWlzc2luZyk7XG5cbiAgICAgICAgbGV0IHRyeUxvb2t1cCA9IHRydWU7XG4gICAgICAgIGlmIChwcmV2aW91c2x5TWlzc2luZ0tleXMgJiYgc2V0c0VxdWFsKG1pc3NpbmdLZXlzLCBwcmV2aW91c2x5TWlzc2luZ0tleXMpKSB7XG4gICAgICAgICAgZGVidWcoJ05vdCBtYWtpbmcgcHJvZ3Jlc3MgdHJ5aW5nIHRvIHJlc29sdmUgZW52aXJvbm1lbnRhbCBjb250ZXh0LiBHaXZpbmcgdXAuJyk7XG4gICAgICAgICAgdHJ5TG9va3VwID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2aW91c2x5TWlzc2luZ0tleXMgPSBtaXNzaW5nS2V5cztcblxuICAgICAgICBpZiAodHJ5TG9va3VwKSB7XG4gICAgICAgICAgZGVidWcoJ1NvbWUgY29udGV4dCBpbmZvcm1hdGlvbiBpcyBtaXNzaW5nLiBGZXRjaGluZy4uLicpO1xuXG4gICAgICAgICAgLy8gYXdhaXQgY29udGV4dHByb3ZpZGVycy5wcm92aWRlQ29udGV4dFZhbHVlcyhhc3NlbWJseS5tYW5pZmVzdC5taXNzaW5nLCB0aGlzLnByb3BzLmNvbmZpZ3VyYXRpb24uY29udGV4dCwgdGhpcy5wcm9wcy5zZGtQcm92aWRlcik7XG5cbiAgICAgICAgICAvLyBDYWNoZSB0aGUgbmV3IGNvbnRleHQgdG8gZGlza1xuICAgICAgICAgIGF3YWl0IHRoaXMucHJvcHMuY29uZmlndXJhdGlvbi5zYXZlQ29udGV4dCgpO1xuXG4gICAgICAgICAgLy8gRXhlY3V0ZSBhZ2FpblxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgQ2xvdWRBc3NlbWJseShhc3NlbWJseSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJuIGFsbCBrZXlzIG9mIG1pc3NpbmcgY29udGV4dCBpdGVtc1xuICovXG5mdW5jdGlvbiBtaXNzaW5nQ29udGV4dEtleXMobWlzc2luZz86IGN4YXBpLk1pc3NpbmdDb250ZXh0W10pOiBTZXQ8c3RyaW5nPiB7XG4gIHJldHVybiBuZXcgU2V0KChtaXNzaW5nIHx8IFtdKS5tYXAoKG0pID0+IG0ua2V5KSk7XG59XG5cbmZ1bmN0aW9uIHNldHNFcXVhbDxBPihhOiBTZXQ8QT4sIGI6IFNldDxBPikge1xuICBpZiAoYS5zaXplICE9PSBiLnNpemUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChjb25zdCB4IG9mIGEpIHtcbiAgICBpZiAoIWIuaGFzKHgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIl19