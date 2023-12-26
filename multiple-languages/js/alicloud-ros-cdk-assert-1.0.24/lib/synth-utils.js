"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynthUtils = void 0;
const cxapi = require("@alicloud/ros-cdk-cxapi");
const core = require("@alicloud/ros-cdk-core");
const fs = require("fs");
const path = require("path");
class SynthUtils {
    static synthesize(stack, options = {}) {
        // always synthesize against the root (be it an App or whatever) so all artifacts will be included
        const root = stack.node.root;
        // if the root is an app, invoke "synth" to avoid double synthesis
        const assembly = root instanceof core.App ? root.synth() : core.ConstructNode.synth(root.node, options);
        return assembly.getStackArtifact(stack.artifactId);
    }
    /**
     * Synthesizes the stack and returns the resulting template.
     */
    static toRosTemplate(stack, options = {}) {
        const synth = this._synthesizeWithNested(stack, options);
        if (synth instanceof cxapi.RosStackArtifact) {
            return synth.template;
        }
        else {
            return synth;
        }
    }
    /**
     * @returns Returns a subset of the synthesized template (only specific resource types).
     */
    static subset(stack, options) {
        const template = this.toRosTemplate(stack);
        if (template.Resources) {
            for (const [key, resource] of Object.entries(template.Resources)) {
                if (options.resourceTypes && !options.resourceTypes.includes(resource.Type)) {
                    delete template.Resources[key];
                }
            }
        }
        return template;
    }
    /**
     * Synthesizes the stack and returns a `RosStackArtifact` which can be inspected.
     * Supports nested stacks as well as normal stacks.
     *
     * @return RosStackArtifact for normal stacks or the actual template for nested stacks
     * @internal
     */
    static _synthesizeWithNested(stack, options = {}) {
        // always synthesize against the root (be it an App or whatever) so all artifacts will be included
        const root = stack.node.root;
        // if the root is an app, invoke "synth" to avoid double synthesis
        const assembly = root instanceof core.App ? root.synth() : core.ConstructNode.synth(root.node, options);
        // if this is a nested stack (it has a parent), then just read the template as a string
        if (stack.nestedStackParent) {
            return JSON.parse(fs.readFileSync(path.join(assembly.directory, stack.templateFile)).toString('utf-8'));
        }
        return assembly.getStackArtifact(stack.artifactId);
    }
}
exports.SynthUtils = SynthUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ludGgtdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzeW50aC11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQsK0NBQStDO0FBQy9DLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFFN0IsTUFBYSxVQUFVO0lBQ2QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFpQixFQUFFLFVBQWlDLEVBQUU7UUFDN0Usa0dBQWtHO1FBQ2xHLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTdCLGtFQUFrRTtRQUNsRSxNQUFNLFFBQVEsR0FBRyxJQUFJLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXhHLE9BQU8sUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQWlCLEVBQUUsVUFBaUMsRUFBRTtRQUNoRixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksS0FBSyxZQUFZLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzQyxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDdkI7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQWlCLEVBQUUsT0FBc0I7UUFDNUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNoRSxJQUFJLE9BQU8sQ0FBQyxhQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBRSxRQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNwRixPQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2hDO2FBQ0Y7U0FDRjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMscUJBQXFCLENBQ2pDLEtBQWlCLEVBQ2pCLFVBQWlDLEVBQUU7UUFFbkMsa0dBQWtHO1FBQ2xHLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTdCLGtFQUFrRTtRQUNsRSxNQUFNLFFBQVEsR0FBRyxJQUFJLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXhHLHVGQUF1RjtRQUN2RixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDekc7UUFFRCxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGO0FBL0RELGdDQStEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4YXBpIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWN4YXBpJztcbmltcG9ydCAqIGFzIGNvcmUgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY2xhc3MgU3ludGhVdGlscyB7XG4gIHB1YmxpYyBzdGF0aWMgc3ludGhlc2l6ZShzdGFjazogY29yZS5TdGFjaywgb3B0aW9uczogY29yZS5TeW50aGVzaXNPcHRpb25zID0ge30pOiBjeGFwaS5Sb3NTdGFja0FydGlmYWN0IHtcbiAgICAvLyBhbHdheXMgc3ludGhlc2l6ZSBhZ2FpbnN0IHRoZSByb290IChiZSBpdCBhbiBBcHAgb3Igd2hhdGV2ZXIpIHNvIGFsbCBhcnRpZmFjdHMgd2lsbCBiZSBpbmNsdWRlZFxuICAgIGNvbnN0IHJvb3QgPSBzdGFjay5ub2RlLnJvb3Q7XG5cbiAgICAvLyBpZiB0aGUgcm9vdCBpcyBhbiBhcHAsIGludm9rZSBcInN5bnRoXCIgdG8gYXZvaWQgZG91YmxlIHN5bnRoZXNpc1xuICAgIGNvbnN0IGFzc2VtYmx5ID0gcm9vdCBpbnN0YW5jZW9mIGNvcmUuQXBwID8gcm9vdC5zeW50aCgpIDogY29yZS5Db25zdHJ1Y3ROb2RlLnN5bnRoKHJvb3Qubm9kZSwgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gYXNzZW1ibHkuZ2V0U3RhY2tBcnRpZmFjdChzdGFjay5hcnRpZmFjdElkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW50aGVzaXplcyB0aGUgc3RhY2sgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyB0ZW1wbGF0ZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgdG9Sb3NUZW1wbGF0ZShzdGFjazogY29yZS5TdGFjaywgb3B0aW9uczogY29yZS5TeW50aGVzaXNPcHRpb25zID0ge30pOiBhbnkge1xuICAgIGNvbnN0IHN5bnRoID0gdGhpcy5fc3ludGhlc2l6ZVdpdGhOZXN0ZWQoc3RhY2ssIG9wdGlvbnMpO1xuICAgIGlmIChzeW50aCBpbnN0YW5jZW9mIGN4YXBpLlJvc1N0YWNrQXJ0aWZhY3QpIHtcbiAgICAgIHJldHVybiBzeW50aC50ZW1wbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN5bnRoO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgc3Vic2V0IG9mIHRoZSBzeW50aGVzaXplZCB0ZW1wbGF0ZSAob25seSBzcGVjaWZpYyByZXNvdXJjZSB0eXBlcykuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHN1YnNldChzdGFjazogY29yZS5TdGFjaywgb3B0aW9uczogU3Vic2V0T3B0aW9ucyk6IGFueSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLnRvUm9zVGVtcGxhdGUoc3RhY2spO1xuICAgIGlmICh0ZW1wbGF0ZS5SZXNvdXJjZXMpIHtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgcmVzb3VyY2VdIG9mIE9iamVjdC5lbnRyaWVzKHRlbXBsYXRlLlJlc291cmNlcykpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMucmVzb3VyY2VUeXBlcyAmJiAhb3B0aW9ucy5yZXNvdXJjZVR5cGVzLmluY2x1ZGVzKChyZXNvdXJjZSBhcyBhbnkpLlR5cGUpKSB7XG4gICAgICAgICAgZGVsZXRlIHRlbXBsYXRlLlJlc291cmNlc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRoZXNpemVzIHRoZSBzdGFjayBhbmQgcmV0dXJucyBhIGBSb3NTdGFja0FydGlmYWN0YCB3aGljaCBjYW4gYmUgaW5zcGVjdGVkLlxuICAgKiBTdXBwb3J0cyBuZXN0ZWQgc3RhY2tzIGFzIHdlbGwgYXMgbm9ybWFsIHN0YWNrcy5cbiAgICpcbiAgICogQHJldHVybiBSb3NTdGFja0FydGlmYWN0IGZvciBub3JtYWwgc3RhY2tzIG9yIHRoZSBhY3R1YWwgdGVtcGxhdGUgZm9yIG5lc3RlZCBzdGFja3NcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIF9zeW50aGVzaXplV2l0aE5lc3RlZChcbiAgICBzdGFjazogY29yZS5TdGFjayxcbiAgICBvcHRpb25zOiBjb3JlLlN5bnRoZXNpc09wdGlvbnMgPSB7fSxcbiAgKTogY3hhcGkuUm9zU3RhY2tBcnRpZmFjdCB8IG9iamVjdCB7XG4gICAgLy8gYWx3YXlzIHN5bnRoZXNpemUgYWdhaW5zdCB0aGUgcm9vdCAoYmUgaXQgYW4gQXBwIG9yIHdoYXRldmVyKSBzbyBhbGwgYXJ0aWZhY3RzIHdpbGwgYmUgaW5jbHVkZWRcbiAgICBjb25zdCByb290ID0gc3RhY2subm9kZS5yb290O1xuXG4gICAgLy8gaWYgdGhlIHJvb3QgaXMgYW4gYXBwLCBpbnZva2UgXCJzeW50aFwiIHRvIGF2b2lkIGRvdWJsZSBzeW50aGVzaXNcbiAgICBjb25zdCBhc3NlbWJseSA9IHJvb3QgaW5zdGFuY2VvZiBjb3JlLkFwcCA/IHJvb3Quc3ludGgoKSA6IGNvcmUuQ29uc3RydWN0Tm9kZS5zeW50aChyb290Lm5vZGUsIG9wdGlvbnMpO1xuXG4gICAgLy8gaWYgdGhpcyBpcyBhIG5lc3RlZCBzdGFjayAoaXQgaGFzIGEgcGFyZW50KSwgdGhlbiBqdXN0IHJlYWQgdGhlIHRlbXBsYXRlIGFzIGEgc3RyaW5nXG4gICAgaWYgKHN0YWNrLm5lc3RlZFN0YWNrUGFyZW50KSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKGFzc2VtYmx5LmRpcmVjdG9yeSwgc3RhY2sudGVtcGxhdGVGaWxlKSkudG9TdHJpbmcoJ3V0Zi04JykpO1xuICAgIH1cblxuICAgIHJldHVybiBhc3NlbWJseS5nZXRTdGFja0FydGlmYWN0KHN0YWNrLmFydGlmYWN0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Vic2V0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBNYXRjaCBhbGwgcmVzb3VyY2VzIG9mIHRoZSBnaXZlbiB0eXBlXG4gICAqL1xuICByZXNvdXJjZVR5cGVzPzogc3RyaW5nW107XG59XG4iXX0=