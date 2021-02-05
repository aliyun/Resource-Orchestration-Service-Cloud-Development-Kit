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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtZXhlY3V0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsb3VkLWV4ZWN1dGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esd0NBQW1DO0FBRW5DLHFEQUFpRDtBQW1CakQ7O0dBRUc7QUFDSCxNQUFhLGVBQWU7SUFHMUIsWUFBNkIsS0FBMkI7UUFBM0IsVUFBSyxHQUFMLEtBQUssQ0FBc0I7SUFBRyxDQUFDO0lBRTVEOztPQUVHO0lBQ0gsSUFBVyxNQUFNO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLFVBQVU7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNqRDtRQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRU8sS0FBSyxDQUFDLFlBQVk7UUFFeEIsaUdBQWlHO1FBQ2pHLDJFQUEyRTtRQUMzRSxtRkFBbUY7UUFDbkYsOEVBQThFO1FBQzlFLElBQUkscUJBQThDLENBQUM7UUFDbkQsT0FBTyxJQUFJLEVBQUU7WUFDWCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFeEUsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDN0IsTUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFbEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLHFCQUFxQixJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUUscUJBQXFCLENBQUMsRUFBRTtvQkFDMUUsZUFBSyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7b0JBQ2pGLFNBQVMsR0FBRyxLQUFLLENBQUM7aUJBQ25CO2dCQUVELHFCQUFxQixHQUFHLFdBQVcsQ0FBQztnQkFFcEMsSUFBSSxTQUFTLEVBQUU7b0JBQ2IsZUFBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7b0JBRTFELG9JQUFvSTtvQkFFcEksZ0NBQWdDO29CQUNoQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUU3QyxnQkFBZ0I7b0JBQ2hCLFNBQVM7aUJBQ1Y7YUFDRjtZQUVELE9BQU8sSUFBSSw4QkFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztDQUNGO0FBM0RELDBDQTJEQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FBQyxPQUFnQztJQUMxRCxPQUFPLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFJLENBQVMsRUFBRSxDQUFTO0lBQ3hDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQ3JCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNqQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNiLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4YXBpIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWN4YXBpJztcclxuaW1wb3J0IHsgZGVidWcgfSBmcm9tICcuLi9sb2dnaW5nJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgQ2xvdWRBc3NlbWJseSB9IGZyb20gJy4vY2xvdWQtYXNzZW1ibHknO1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm5zIG91dHB1dCBkaXJlY3RvcnlcclxuICovXHJcbnR5cGUgU3ludGhlc2l6ZXIgPSAoY29uZmlnOiBDb25maWd1cmF0aW9uKSA9PiBQcm9taXNlPGN4YXBpLkNsb3VkQXNzZW1ibHk+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDbG91ZEV4ZWN1dGFibGVQcm9wcyB7XHJcbiAgLyoqXHJcbiAgICogQXBwbGljYXRpb24gY29uZmlndXJhdGlvbiAoc2V0dGluZ3MgYW5kIGNvbnRleHQpXHJcbiAgICovXHJcbiAgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgaW52b2tlZCB0byBzeW50aGVzaXplIHRoZSBhY3R1YWwgc3RhY2tzXHJcbiAgICovXHJcbiAgc3ludGhlc2l6ZXI6IFN5bnRoZXNpemVyO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50IHRoZSBDbG91ZCBFeGVjdXRhYmxlIGFuZCB0aGUgc3ludGhlc2lzIHdlIGNhbiBkbyBvbiBpdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsb3VkRXhlY3V0YWJsZSB7XHJcbiAgcHJpdmF0ZSBfY2xvdWRBc3NlbWJseT86IENsb3VkQXNzZW1ibHk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcHJvcHM6IENsb3VkRXhlY3V0YWJsZVByb3BzKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm4gd2hldGhlciB0aGVyZSBpcyBhbiBhcHAgY29tbWFuZCBmcm9tIHRoZSBjb25maWd1cmF0aW9uXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBoYXNBcHAoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLnByb3BzLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuZ2V0KFsnYXBwJ10pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3ludGhlc2l6ZSBhIHNldCBvZiBzdGFja3NcclxuICAgKi9cclxuICBwdWJsaWMgYXN5bmMgc3ludGhlc2l6ZSgpOiBQcm9taXNlPENsb3VkQXNzZW1ibHk+IHtcclxuICAgIGlmICghdGhpcy5fY2xvdWRBc3NlbWJseSkge1xyXG4gICAgICB0aGlzLl9jbG91ZEFzc2VtYmx5ID0gYXdhaXQgdGhpcy5kb1N5bnRoZXNpemUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9jbG91ZEFzc2VtYmx5O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBkb1N5bnRoZXNpemUoKTogUHJvbWlzZTxDbG91ZEFzc2VtYmx5PiB7XHJcblxyXG4gICAgLy8gV2UgbWF5IG5lZWQgdG8gcnVuIHRoZSBjbG91ZCBleGVjdXRhYmxlIG11bHRpcGxlIHRpbWVzIGluIG9yZGVyIHRvIHNhdGlzZnkgYWxsIG1pc3NpbmcgY29udGV4dFxyXG4gICAgLy8gKFdoZW4gdGhlIGV4ZWN1dGFibGUgcnVucywgaXQgd2lsbCB0ZWxsIHVzIGFib3V0IGNvbnRleHQgaXQgd2FudHMgdG8gdXNlXHJcbiAgICAvLyBidXQgaXQgbWlzc2luZy4gV2UnbGwgdGhlbiBsb29rIHVwIHRoZSBjb250ZXh0IGFuZCBydW4gdGhlIGV4ZWN1dGFibGUgYWdhaW4sIGFuZFxyXG4gICAgLy8gYWdhaW4sIHVudGlsIGl0IGRvZXNuJ3QgY29tcGxhaW4gYW55bW9yZSBvciB3ZSd2ZSBzdG9wcGVkIG1ha2luZyBwcm9ncmVzcykuXHJcbiAgICBsZXQgcHJldmlvdXNseU1pc3NpbmdLZXlzOiBTZXQ8c3RyaW5nPiB8IHVuZGVmaW5lZDtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5wcm9wcy5zeW50aGVzaXplcih0aGlzLnByb3BzLmNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgICAgaWYgKGFzc2VtYmx5Lm1hbmlmZXN0Lm1pc3NpbmcpIHtcclxuICAgICAgICBjb25zdCBtaXNzaW5nS2V5cyA9IG1pc3NpbmdDb250ZXh0S2V5cyhhc3NlbWJseS5tYW5pZmVzdC5taXNzaW5nKTtcclxuXHJcbiAgICAgICAgbGV0IHRyeUxvb2t1cCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHByZXZpb3VzbHlNaXNzaW5nS2V5cyAmJiBzZXRzRXF1YWwobWlzc2luZ0tleXMsIHByZXZpb3VzbHlNaXNzaW5nS2V5cykpIHtcclxuICAgICAgICAgIGRlYnVnKCdOb3QgbWFraW5nIHByb2dyZXNzIHRyeWluZyB0byByZXNvbHZlIGVudmlyb25tZW50YWwgY29udGV4dC4gR2l2aW5nIHVwLicpO1xyXG4gICAgICAgICAgdHJ5TG9va3VwID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcmV2aW91c2x5TWlzc2luZ0tleXMgPSBtaXNzaW5nS2V5cztcclxuXHJcbiAgICAgICAgaWYgKHRyeUxvb2t1cCkge1xyXG4gICAgICAgICAgZGVidWcoJ1NvbWUgY29udGV4dCBpbmZvcm1hdGlvbiBpcyBtaXNzaW5nLiBGZXRjaGluZy4uLicpO1xyXG5cclxuICAgICAgICAgIC8vIGF3YWl0IGNvbnRleHRwcm92aWRlcnMucHJvdmlkZUNvbnRleHRWYWx1ZXMoYXNzZW1ibHkubWFuaWZlc3QubWlzc2luZywgdGhpcy5wcm9wcy5jb25maWd1cmF0aW9uLmNvbnRleHQsIHRoaXMucHJvcHMuc2RrUHJvdmlkZXIpO1xyXG5cclxuICAgICAgICAgIC8vIENhY2hlIHRoZSBuZXcgY29udGV4dCB0byBkaXNrXHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnByb3BzLmNvbmZpZ3VyYXRpb24uc2F2ZUNvbnRleHQoKTtcclxuXHJcbiAgICAgICAgICAvLyBFeGVjdXRlIGFnYWluXHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgQ2xvdWRBc3NlbWJseShhc3NlbWJseSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJuIGFsbCBrZXlzIG9mIG1pc3NpbmcgY29udGV4dCBpdGVtc1xyXG4gKi9cclxuZnVuY3Rpb24gbWlzc2luZ0NvbnRleHRLZXlzKG1pc3Npbmc/OiBjeGFwaS5NaXNzaW5nQ29udGV4dFtdKTogU2V0PHN0cmluZz4ge1xyXG4gIHJldHVybiBuZXcgU2V0KChtaXNzaW5nIHx8IFtdKS5tYXAoKG0pID0+IG0ua2V5KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHNFcXVhbDxBPihhOiBTZXQ8QT4sIGI6IFNldDxBPikge1xyXG4gIGlmIChhLnNpemUgIT09IGIuc2l6ZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBmb3IgKGNvbnN0IHggb2YgYSkge1xyXG4gICAgaWYgKCFiLmhhcyh4KSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcbiJdfQ==