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
                    (0, logging_1.debug)('Not making progress trying to resolve environmental context. Giving up.');
                    tryLookup = false;
                }
                previouslyMissingKeys = missingKeys;
                if (tryLookup) {
                    (0, logging_1.debug)('Some context information is missing. Fetching...');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtZXhlY3V0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsb3VkLWV4ZWN1dGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esd0NBQW1DO0FBRW5DLHFEQUFpRDtBQW1CakQ7O0dBRUc7QUFDSCxNQUFhLGVBQWU7SUFHMUIsWUFBNkIsS0FBMkI7UUFBM0IsVUFBSyxHQUFMLEtBQUssQ0FBc0I7SUFBRyxDQUFDO0lBRTVEOztPQUVHO0lBQ0gsSUFBVyxNQUFNO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLFVBQVU7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNqRDtRQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRU8sS0FBSyxDQUFDLFlBQVk7UUFFeEIsaUdBQWlHO1FBQ2pHLDJFQUEyRTtRQUMzRSxtRkFBbUY7UUFDbkYsOEVBQThFO1FBQzlFLElBQUkscUJBQThDLENBQUM7UUFDbkQsT0FBTyxJQUFJLEVBQUU7WUFDWCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFeEUsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDN0IsTUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFbEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLHFCQUFxQixJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUUscUJBQXFCLENBQUMsRUFBRTtvQkFDMUUsSUFBQSxlQUFLLEVBQUMseUVBQXlFLENBQUMsQ0FBQztvQkFDakYsU0FBUyxHQUFHLEtBQUssQ0FBQztpQkFDbkI7Z0JBRUQscUJBQXFCLEdBQUcsV0FBVyxDQUFDO2dCQUVwQyxJQUFJLFNBQVMsRUFBRTtvQkFDYixJQUFBLGVBQUssRUFBQyxrREFBa0QsQ0FBQyxDQUFDO29CQUUxRCxvSUFBb0k7b0JBRXBJLGdDQUFnQztvQkFDaEMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFFN0MsZ0JBQWdCO29CQUNoQixTQUFTO2lCQUNWO2FBQ0Y7WUFFRCxPQUFPLElBQUksOEJBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Q0FDRjtBQTNERCwwQ0EyREM7QUFFRDs7R0FFRztBQUNILFNBQVMsa0JBQWtCLENBQUMsT0FBZ0M7SUFDMUQsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBSSxDQUFTLEVBQUUsQ0FBUztJQUN4QyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRTtRQUNyQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDakIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDYixPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjeGFwaSBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jeGFwaSc7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJy4uL2xvZ2dpbmcnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NldHRpbmdzJztcbmltcG9ydCB7IENsb3VkQXNzZW1ibHkgfSBmcm9tICcuL2Nsb3VkLWFzc2VtYmx5JztcblxuLyoqXG4gKiBAcmV0dXJucyBvdXRwdXQgZGlyZWN0b3J5XG4gKi9cbnR5cGUgU3ludGhlc2l6ZXIgPSAoY29uZmlnOiBDb25maWd1cmF0aW9uKSA9PiBQcm9taXNlPGN4YXBpLkNsb3VkQXNzZW1ibHk+O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkRXhlY3V0YWJsZVByb3BzIHtcbiAgLyoqXG4gICAqIEFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gKHNldHRpbmdzIGFuZCBjb250ZXh0KVxuICAgKi9cbiAgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbjtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgaW52b2tlZCB0byBzeW50aGVzaXplIHRoZSBhY3R1YWwgc3RhY2tzXG4gICAqL1xuICBzeW50aGVzaXplcjogU3ludGhlc2l6ZXI7XG59XG5cbi8qKlxuICogUmVwcmVzZW50IHRoZSBDbG91ZCBFeGVjdXRhYmxlIGFuZCB0aGUgc3ludGhlc2lzIHdlIGNhbiBkbyBvbiBpdFxuICovXG5leHBvcnQgY2xhc3MgQ2xvdWRFeGVjdXRhYmxlIHtcbiAgcHJpdmF0ZSBfY2xvdWRBc3NlbWJseT86IENsb3VkQXNzZW1ibHk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwcm9wczogQ2xvdWRFeGVjdXRhYmxlUHJvcHMpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoZXJlIGlzIGFuIGFwcCBjb21tYW5kIGZyb20gdGhlIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIHB1YmxpYyBnZXQgaGFzQXBwKCkge1xuICAgIHJldHVybiAhIXRoaXMucHJvcHMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5nZXQoWydhcHAnXSk7XG4gIH1cblxuICAvKipcbiAgICogU3ludGhlc2l6ZSBhIHNldCBvZiBzdGFja3NcbiAgICovXG4gIHB1YmxpYyBhc3luYyBzeW50aGVzaXplKCk6IFByb21pc2U8Q2xvdWRBc3NlbWJseT4ge1xuICAgIGlmICghdGhpcy5fY2xvdWRBc3NlbWJseSkge1xuICAgICAgdGhpcy5fY2xvdWRBc3NlbWJseSA9IGF3YWl0IHRoaXMuZG9TeW50aGVzaXplKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jbG91ZEFzc2VtYmx5O1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBkb1N5bnRoZXNpemUoKTogUHJvbWlzZTxDbG91ZEFzc2VtYmx5PiB7XG5cbiAgICAvLyBXZSBtYXkgbmVlZCB0byBydW4gdGhlIGNsb3VkIGV4ZWN1dGFibGUgbXVsdGlwbGUgdGltZXMgaW4gb3JkZXIgdG8gc2F0aXNmeSBhbGwgbWlzc2luZyBjb250ZXh0XG4gICAgLy8gKFdoZW4gdGhlIGV4ZWN1dGFibGUgcnVucywgaXQgd2lsbCB0ZWxsIHVzIGFib3V0IGNvbnRleHQgaXQgd2FudHMgdG8gdXNlXG4gICAgLy8gYnV0IGl0IG1pc3NpbmcuIFdlJ2xsIHRoZW4gbG9vayB1cCB0aGUgY29udGV4dCBhbmQgcnVuIHRoZSBleGVjdXRhYmxlIGFnYWluLCBhbmRcbiAgICAvLyBhZ2FpbiwgdW50aWwgaXQgZG9lc24ndCBjb21wbGFpbiBhbnltb3JlIG9yIHdlJ3ZlIHN0b3BwZWQgbWFraW5nIHByb2dyZXNzKS5cbiAgICBsZXQgcHJldmlvdXNseU1pc3NpbmdLZXlzOiBTZXQ8c3RyaW5nPiB8IHVuZGVmaW5lZDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLnByb3BzLnN5bnRoZXNpemVyKHRoaXMucHJvcHMuY29uZmlndXJhdGlvbik7XG5cbiAgICAgIGlmIChhc3NlbWJseS5tYW5pZmVzdC5taXNzaW5nKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdLZXlzID0gbWlzc2luZ0NvbnRleHRLZXlzKGFzc2VtYmx5Lm1hbmlmZXN0Lm1pc3NpbmcpO1xuXG4gICAgICAgIGxldCB0cnlMb29rdXAgPSB0cnVlO1xuICAgICAgICBpZiAocHJldmlvdXNseU1pc3NpbmdLZXlzICYmIHNldHNFcXVhbChtaXNzaW5nS2V5cywgcHJldmlvdXNseU1pc3NpbmdLZXlzKSkge1xuICAgICAgICAgIGRlYnVnKCdOb3QgbWFraW5nIHByb2dyZXNzIHRyeWluZyB0byByZXNvbHZlIGVudmlyb25tZW50YWwgY29udGV4dC4gR2l2aW5nIHVwLicpO1xuICAgICAgICAgIHRyeUxvb2t1cCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldmlvdXNseU1pc3NpbmdLZXlzID0gbWlzc2luZ0tleXM7XG5cbiAgICAgICAgaWYgKHRyeUxvb2t1cCkge1xuICAgICAgICAgIGRlYnVnKCdTb21lIGNvbnRleHQgaW5mb3JtYXRpb24gaXMgbWlzc2luZy4gRmV0Y2hpbmcuLi4nKTtcblxuICAgICAgICAgIC8vIGF3YWl0IGNvbnRleHRwcm92aWRlcnMucHJvdmlkZUNvbnRleHRWYWx1ZXMoYXNzZW1ibHkubWFuaWZlc3QubWlzc2luZywgdGhpcy5wcm9wcy5jb25maWd1cmF0aW9uLmNvbnRleHQsIHRoaXMucHJvcHMuc2RrUHJvdmlkZXIpO1xuXG4gICAgICAgICAgLy8gQ2FjaGUgdGhlIG5ldyBjb250ZXh0IHRvIGRpc2tcbiAgICAgICAgICBhd2FpdCB0aGlzLnByb3BzLmNvbmZpZ3VyYXRpb24uc2F2ZUNvbnRleHQoKTtcblxuICAgICAgICAgIC8vIEV4ZWN1dGUgYWdhaW5cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IENsb3VkQXNzZW1ibHkoYXNzZW1ibHkpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJldHVybiBhbGwga2V5cyBvZiBtaXNzaW5nIGNvbnRleHQgaXRlbXNcbiAqL1xuZnVuY3Rpb24gbWlzc2luZ0NvbnRleHRLZXlzKG1pc3Npbmc/OiBjeGFwaS5NaXNzaW5nQ29udGV4dFtdKTogU2V0PHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFNldCgobWlzc2luZyB8fCBbXSkubWFwKChtKSA9PiBtLmtleSkpO1xufVxuXG5mdW5jdGlvbiBzZXRzRXF1YWw8QT4oYTogU2V0PEE+LCBiOiBTZXQ8QT4pIHtcbiAgaWYgKGEuc2l6ZSAhPT0gYi5zaXplKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZvciAoY29uc3QgeCBvZiBhKSB7XG4gICAgaWYgKCFiLmhhcyh4KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiJdfQ==