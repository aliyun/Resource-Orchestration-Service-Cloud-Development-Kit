"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudArtifact = void 0;
const cxschema = require("@alicloud/ros-cdk-assembly-schema");
const metadata_1 = require("./metadata");
/**
 * Represents an artifact within a cloud assembly.
 */
class CloudArtifact {
    constructor(assembly, id, manifest) {
        this.assembly = assembly;
        this.id = id;
        this.manifest = manifest;
        this.messages = this.renderMessages();
        this._dependencyIDs = manifest.dependencies || [];
    }
    /**
     * Returns a subclass of `CloudArtifact` based on the artifact type defined in the artifact manifest.
     * @param assembly The cloud assembly from which to load the artifact
     * @param id The artifact ID
     * @param artifact The artifact manifest
     * @returns the `CloudArtifact` that matches the artifact type or `undefined` if it's an artifact type that is unrecognized by this module.
     */
    static fromManifest(assembly, id, artifact) {
        switch (artifact.type) {
            case cxschema.ArtifactType.ALIYUN_ROS_STACK:
                return new ros_stack_artifact_1.RosStackArtifact(assembly, id, artifact);
            case cxschema.ArtifactType.CDK_TREE:
                return new tree_cloud_artifact_1.TreeCloudArtifact(assembly, id, artifact);
            case cxschema.ArtifactType.NESTED_CLOUD_ASSEMBLY:
                return new nested_cloud_assembly_artifact_1.NestedCloudAssemblyArtifact(assembly, id, artifact);
            default:
                return undefined;
        }
    }
    /**
     * Returns all the artifacts that this artifact depends on.
     */
    get dependencies() {
        // if (this._deps) {
        //   return this._deps;
        // }
        // this._deps = this._dependencyIDs.map((id) => {
        //   const dep = this.assembly.tryGetArtifact(id);
        //   if (!dep) {
        //     throw new Error(`Artifact ${this.id} depends on non-existing artifact ${id}`);
        //   }
        //   return dep;
        // });
        return this._deps;
    }
    /**
     * @returns all the metadata entries of a specific type in this artifact.
     * @param type
     */
    findMetadataByType(type) {
        const result = new Array();
        for (const path of Object.keys(this.manifest.metadata || {})) {
            for (const entry of (this.manifest.metadata || {})[path]) {
                if (entry.type === type) {
                    result.push({ path, ...entry });
                }
            }
        }
        return result;
    }
    renderMessages() {
        const messages = new Array();
        for (const [id, metadata] of Object.entries(this.manifest.metadata || {})) {
            for (const entry of metadata) {
                let level;
                switch (entry.type) {
                    case cxschema.ArtifactMetadataEntryType.WARN:
                        level = metadata_1.SynthesisMessageLevel.WARNING;
                        break;
                    case cxschema.ArtifactMetadataEntryType.ERROR:
                        level = metadata_1.SynthesisMessageLevel.ERROR;
                        break;
                    case cxschema.ArtifactMetadataEntryType.INFO:
                        level = metadata_1.SynthesisMessageLevel.INFO;
                        break;
                    default:
                        continue;
                }
                messages.push({ level, entry, id });
            }
        }
        return messages;
    }
}
exports.CloudArtifact = CloudArtifact;
// needs to be defined at the end to avoid a cyclic dependency
const ros_stack_artifact_1 = require("./artifacts/ros-stack-artifact");
const nested_cloud_assembly_artifact_1 = require("./artifacts/nested-cloud-assembly-artifact");
const tree_cloud_artifact_1 = require("./artifacts/tree-cloud-artifact");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYXJ0aWZhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC1hcnRpZmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEQ7QUFFOUQseUNBSW9CO0FBdUJwQjs7R0FFRztBQUNILE1BQWEsYUFBYTtJQThDeEIsWUFDa0IsUUFBdUIsRUFDdkIsRUFBVSxFQUMxQixRQUFtQztRQUZuQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLE9BQUUsR0FBRixFQUFFLENBQVE7UUFHMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBckREOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxZQUFZLENBQ3hCLFFBQXVCLEVBQ3ZCLEVBQVUsRUFDVixRQUFtQztRQUVuQyxRQUFRLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDckIsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLGdCQUFnQjtnQkFDekMsT0FBTyxJQUFJLHFDQUFnQixDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdEQsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVE7Z0JBQ2pDLE9BQU8sSUFBSSx1Q0FBaUIsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxxQkFBcUI7Z0JBQzlDLE9BQU8sSUFBSSw0REFBMkIsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2pFO2dCQUNFLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQWlDRDs7T0FFRztJQUNILElBQVcsWUFBWTtRQUNyQixvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLElBQUk7UUFFSixpREFBaUQ7UUFDakQsa0RBQWtEO1FBQ2xELGdCQUFnQjtRQUNoQixxRkFBcUY7UUFDckYsTUFBTTtRQUNOLGdCQUFnQjtRQUNoQixNQUFNO1FBRU4sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxrQkFBa0IsQ0FBQyxJQUFZO1FBQ3BDLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUF1QixDQUFDO1FBQ2hELEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUM1RCxLQUFLLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNqQzthQUNGO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sY0FBYztRQUNwQixNQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBb0IsQ0FBQztRQUUvQyxLQUFLLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUN6RSxLQUFLLE1BQU0sS0FBSyxJQUFJLFFBQVEsRUFBRTtnQkFDNUIsSUFBSSxLQUE0QixDQUFDO2dCQUNqQyxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7b0JBQ2xCLEtBQUssUUFBUSxDQUFDLHlCQUF5QixDQUFDLElBQUk7d0JBQzFDLEtBQUssR0FBRyxnQ0FBcUIsQ0FBQyxPQUFPLENBQUM7d0JBQ3RDLE1BQU07b0JBQ1IsS0FBSyxRQUFRLENBQUMseUJBQXlCLENBQUMsS0FBSzt3QkFDM0MsS0FBSyxHQUFHLGdDQUFxQixDQUFDLEtBQUssQ0FBQzt3QkFDcEMsTUFBTTtvQkFDUixLQUFLLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJO3dCQUMxQyxLQUFLLEdBQUcsZ0NBQXFCLENBQUMsSUFBSSxDQUFDO3dCQUNuQyxNQUFNO29CQUNSO3dCQUNFLFNBQVM7aUJBQ1o7Z0JBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNyQztTQUNGO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBckhELHNDQXFIQztBQUVELDhEQUE4RDtBQUM5RCx1RUFBa0U7QUFDbEUsK0ZBQXlGO0FBQ3pGLHlFQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4c2NoZW1hIGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1hc3NlbWJseS1zY2hlbWFcIjtcbmltcG9ydCB7IENsb3VkQXNzZW1ibHkgfSBmcm9tIFwiLi9jbG91ZC1hc3NlbWJseVwiO1xuaW1wb3J0IHtcbiAgTWV0YWRhdGFFbnRyeVJlc3VsdCxcbiAgU3ludGhlc2lzTWVzc2FnZSxcbiAgU3ludGhlc2lzTWVzc2FnZUxldmVsLFxufSBmcm9tIFwiLi9tZXRhZGF0YVwiO1xuXG4vKipcbiAqIEFydGlmYWN0IHByb3BlcnRpZXMgZm9yIFJPUyBzdGFja3MuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWxpeXVuUm9zU3RhY2tQcm9wZXJ0aWVzIHtcbiAgLyoqXG4gICAqIEEgZmlsZSByZWxhdGl2ZSB0byB0aGUgYXNzZW1ibHkgcm9vdCB3aGljaCBjb250YWlucyB0aGUgUk9TIHRlbXBsYXRlIGZvciB0aGlzIHN0YWNrLlxuICAgKi9cbiAgcmVhZG9ubHkgdGVtcGxhdGVGaWxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZhbHVlcyBmb3IgUk9TIHN0YWNrIHBhcmFtZXRlcnMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHdoZW4gdGhlIHN0YWNrIGlzIGRlcGxveWVkLlxuICAgKi9cbiAgcmVhZG9ubHkgcGFyYW1ldGVycz86IHsgW2lkOiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICAvKipcbiAgICogVGhlIG5hbWUgdG8gdXNlIGZvciB0aGUgUk9TIHN0YWNrLlxuICAgKiBAZGVmYXVsdCAtIG5hbWUgZGVyaXZlZCBmcm9tIGFydGlmYWN0IElEXG4gICAqL1xuICByZWFkb25seSBzdGFja05hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBhcnRpZmFjdCB3aXRoaW4gYSBjbG91ZCBhc3NlbWJseS5cbiAqL1xuZXhwb3J0IGNsYXNzIENsb3VkQXJ0aWZhY3Qge1xuICAvKipcbiAgICogUmV0dXJucyBhIHN1YmNsYXNzIG9mIGBDbG91ZEFydGlmYWN0YCBiYXNlZCBvbiB0aGUgYXJ0aWZhY3QgdHlwZSBkZWZpbmVkIGluIHRoZSBhcnRpZmFjdCBtYW5pZmVzdC5cbiAgICogQHBhcmFtIGFzc2VtYmx5IFRoZSBjbG91ZCBhc3NlbWJseSBmcm9tIHdoaWNoIHRvIGxvYWQgdGhlIGFydGlmYWN0XG4gICAqIEBwYXJhbSBpZCBUaGUgYXJ0aWZhY3QgSURcbiAgICogQHBhcmFtIGFydGlmYWN0IFRoZSBhcnRpZmFjdCBtYW5pZmVzdFxuICAgKiBAcmV0dXJucyB0aGUgYENsb3VkQXJ0aWZhY3RgIHRoYXQgbWF0Y2hlcyB0aGUgYXJ0aWZhY3QgdHlwZSBvciBgdW5kZWZpbmVkYCBpZiBpdCdzIGFuIGFydGlmYWN0IHR5cGUgdGhhdCBpcyB1bnJlY29nbml6ZWQgYnkgdGhpcyBtb2R1bGUuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb21NYW5pZmVzdChcbiAgICBhc3NlbWJseTogQ2xvdWRBc3NlbWJseSxcbiAgICBpZDogc3RyaW5nLFxuICAgIGFydGlmYWN0OiBjeHNjaGVtYS5BcnRpZmFjdE1hbmlmZXN0XG4gICk6IENsb3VkQXJ0aWZhY3QgfCB1bmRlZmluZWQge1xuICAgIHN3aXRjaCAoYXJ0aWZhY3QudHlwZSkge1xuICAgICAgY2FzZSBjeHNjaGVtYS5BcnRpZmFjdFR5cGUuQUxJWVVOX1JPU19TVEFDSzpcbiAgICAgICAgcmV0dXJuIG5ldyBSb3NTdGFja0FydGlmYWN0KGFzc2VtYmx5LCBpZCwgYXJ0aWZhY3QpO1xuICAgICAgY2FzZSBjeHNjaGVtYS5BcnRpZmFjdFR5cGUuQ0RLX1RSRUU6XG4gICAgICAgIHJldHVybiBuZXcgVHJlZUNsb3VkQXJ0aWZhY3QoYXNzZW1ibHksIGlkLCBhcnRpZmFjdCk7XG4gICAgICBjYXNlIGN4c2NoZW1hLkFydGlmYWN0VHlwZS5ORVNURURfQ0xPVURfQVNTRU1CTFk6XG4gICAgICAgIHJldHVybiBuZXcgTmVzdGVkQ2xvdWRBc3NlbWJseUFydGlmYWN0KGFzc2VtYmx5LCBpZCwgYXJ0aWZhY3QpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFydGlmYWN0J3MgbWFuaWZlc3RcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBtYW5pZmVzdDogY3hzY2hlbWEuQXJ0aWZhY3RNYW5pZmVzdDtcblxuICAvKipcbiAgICogVGhlIHNldCBvZiBtZXNzYWdlcyBleHRyYWN0ZWQgZnJvbSB0aGUgYXJ0aWZhY3QncyBtZXRhZGF0YS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBtZXNzYWdlczogU3ludGhlc2lzTWVzc2FnZVtdO1xuXG4gIC8qKlxuICAgKiBJRHMgb2YgYWxsIGRlcGVuZGVuY2llcy4gVXNlZCB3aGVuIHRvcG9sb2dpY2FsbHkgc29ydGluZyB0aGUgYXJ0aWZhY3RzIHdpdGhpbiB0aGUgY2xvdWQgYXNzZW1ibHkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IF9kZXBlbmRlbmN5SURzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQ2FjaGUgb2YgcmVzb2x2ZWQgZGVwZW5kZW5jaWVzLlxuICAgKi9cbiAgcHJpdmF0ZSBfZGVwcz86IENsb3VkQXJ0aWZhY3RbXTtcblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGFzc2VtYmx5OiBDbG91ZEFzc2VtYmx5LFxuICAgIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nLFxuICAgIG1hbmlmZXN0OiBjeHNjaGVtYS5BcnRpZmFjdE1hbmlmZXN0XG4gICkge1xuICAgIHRoaXMubWFuaWZlc3QgPSBtYW5pZmVzdDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdGhpcy5yZW5kZXJNZXNzYWdlcygpO1xuICAgIHRoaXMuX2RlcGVuZGVuY3lJRHMgPSBtYW5pZmVzdC5kZXBlbmRlbmNpZXMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgdGhlIGFydGlmYWN0cyB0aGF0IHRoaXMgYXJ0aWZhY3QgZGVwZW5kcyBvbi5cbiAgICovXG4gIHB1YmxpYyBnZXQgZGVwZW5kZW5jaWVzKCk6IENsb3VkQXJ0aWZhY3RbXSB8IHVuZGVmaW5lZCB7XG4gICAgLy8gaWYgKHRoaXMuX2RlcHMpIHtcbiAgICAvLyAgIHJldHVybiB0aGlzLl9kZXBzO1xuICAgIC8vIH1cblxuICAgIC8vIHRoaXMuX2RlcHMgPSB0aGlzLl9kZXBlbmRlbmN5SURzLm1hcCgoaWQpID0+IHtcbiAgICAvLyAgIGNvbnN0IGRlcCA9IHRoaXMuYXNzZW1ibHkudHJ5R2V0QXJ0aWZhY3QoaWQpO1xuICAgIC8vICAgaWYgKCFkZXApIHtcbiAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKGBBcnRpZmFjdCAke3RoaXMuaWR9IGRlcGVuZHMgb24gbm9uLWV4aXN0aW5nIGFydGlmYWN0ICR7aWR9YCk7XG4gICAgLy8gICB9XG4gICAgLy8gICByZXR1cm4gZGVwO1xuICAgIC8vIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuX2RlcHM7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgYWxsIHRoZSBtZXRhZGF0YSBlbnRyaWVzIG9mIGEgc3BlY2lmaWMgdHlwZSBpbiB0aGlzIGFydGlmYWN0LlxuICAgKiBAcGFyYW0gdHlwZVxuICAgKi9cbiAgcHVibGljIGZpbmRNZXRhZGF0YUJ5VHlwZSh0eXBlOiBzdHJpbmcpOiBNZXRhZGF0YUVudHJ5UmVzdWx0W10ge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxNZXRhZGF0YUVudHJ5UmVzdWx0PigpO1xuICAgIGZvciAoY29uc3QgcGF0aCBvZiBPYmplY3Qua2V5cyh0aGlzLm1hbmlmZXN0Lm1ldGFkYXRhIHx8IHt9KSkge1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiAodGhpcy5tYW5pZmVzdC5tZXRhZGF0YSB8fCB7fSlbcGF0aF0pIHtcbiAgICAgICAgaWYgKGVudHJ5LnR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh7IHBhdGgsIC4uLmVudHJ5IH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlck1lc3NhZ2VzKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gbmV3IEFycmF5PFN5bnRoZXNpc01lc3NhZ2U+KCk7XG5cbiAgICBmb3IgKGNvbnN0IFtpZCwgbWV0YWRhdGFdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWFuaWZlc3QubWV0YWRhdGEgfHwge30pKSB7XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIG1ldGFkYXRhKSB7XG4gICAgICAgIGxldCBsZXZlbDogU3ludGhlc2lzTWVzc2FnZUxldmVsO1xuICAgICAgICBzd2l0Y2ggKGVudHJ5LnR5cGUpIHtcbiAgICAgICAgICBjYXNlIGN4c2NoZW1hLkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuV0FSTjpcbiAgICAgICAgICAgIGxldmVsID0gU3ludGhlc2lzTWVzc2FnZUxldmVsLldBUk5JTkc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGN4c2NoZW1hLkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuRVJST1I6XG4gICAgICAgICAgICBsZXZlbCA9IFN5bnRoZXNpc01lc3NhZ2VMZXZlbC5FUlJPUjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgY3hzY2hlbWEuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5JTkZPOlxuICAgICAgICAgICAgbGV2ZWwgPSBTeW50aGVzaXNNZXNzYWdlTGV2ZWwuSU5GTztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2VzLnB1c2goeyBsZXZlbCwgZW50cnksIGlkIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlcztcbiAgfVxufVxuXG4vLyBuZWVkcyB0byBiZSBkZWZpbmVkIGF0IHRoZSBlbmQgdG8gYXZvaWQgYSBjeWNsaWMgZGVwZW5kZW5jeVxuaW1wb3J0IHsgUm9zU3RhY2tBcnRpZmFjdCB9IGZyb20gXCIuL2FydGlmYWN0cy9yb3Mtc3RhY2stYXJ0aWZhY3RcIjtcbmltcG9ydCB7IE5lc3RlZENsb3VkQXNzZW1ibHlBcnRpZmFjdCB9IGZyb20gXCIuL2FydGlmYWN0cy9uZXN0ZWQtY2xvdWQtYXNzZW1ibHktYXJ0aWZhY3RcIjtcbmltcG9ydCB7IFRyZWVDbG91ZEFydGlmYWN0IH0gZnJvbSBcIi4vYXJ0aWZhY3RzL3RyZWUtY2xvdWQtYXJ0aWZhY3RcIjtcbiJdfQ==