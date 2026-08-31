"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudArtifact = void 0;
const cxschema = require("@alicloud/ros-cdk-assembly-schema");
const metadata_1 = require("./metadata");
/**
 * Represents an artifact within a cloud assembly.
 */
class CloudArtifact {
    /**
     * Returns a subclass of `CloudArtifact` based on the artifact type defined in the artifact manifest.
     * @param assembly The cloud assembly from which to load the artifact
     * @param id The artifact ID
     * @param artifact The artifact manifest
     * @returns the `CloudArtifact` that matches the artifact type or `undefined` if it's an artifact type that is unrecognized by this module.
     */
    static fromManifest(assembly, id, artifact) {
        // Implementation is defined in a separate file to break cyclic dependencies
        void (assembly), void (id), void (artifact);
        throw new Error('Implementation not overridden yet');
    }
    constructor(assembly, id, manifest) {
        this.assembly = assembly;
        this.id = id;
        this.manifest = manifest;
        this.messages = this.renderMessages();
        this._dependencyIDs = manifest.dependencies || [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYXJ0aWZhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC1hcnRpZmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEQ7QUFFOUQseUNBSW9CO0FBdUJwQjs7R0FFRztBQUNILE1BQWEsYUFBYTtJQUN4Qjs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsWUFBWSxDQUN4QixRQUF1QixFQUN2QixFQUFVLEVBQ1YsUUFBbUM7UUFFbkMsNEVBQTRFO1FBQzVFLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBdUJELFlBQ2tCLFFBQXVCLEVBQ3ZCLEVBQVUsRUFDMUIsUUFBbUM7UUFGbkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBRzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxZQUFZO1FBQ3JCLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsSUFBSTtRQUVKLGlEQUFpRDtRQUNqRCxrREFBa0Q7UUFDbEQsZ0JBQWdCO1FBQ2hCLHFGQUFxRjtRQUNyRixNQUFNO1FBQ04sZ0JBQWdCO1FBQ2hCLE1BQU07UUFFTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGtCQUFrQixDQUFDLElBQVk7UUFDcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQXVCLENBQUM7UUFDaEQsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQzVELEtBQUssTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDeEQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ2pDO2FBQ0Y7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxjQUFjO1FBQ3BCLE1BQU0sUUFBUSxHQUFHLElBQUksS0FBSyxFQUFvQixDQUFDO1FBRS9DLEtBQUssTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ3pFLEtBQUssTUFBTSxLQUFLLElBQUksUUFBUSxFQUFFO2dCQUM1QixJQUFJLEtBQTRCLENBQUM7Z0JBQ2pDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtvQkFDbEIsS0FBSyxRQUFRLENBQUMseUJBQXlCLENBQUMsSUFBSTt3QkFDMUMsS0FBSyxHQUFHLGdDQUFxQixDQUFDLE9BQU8sQ0FBQzt3QkFDdEMsTUFBTTtvQkFDUixLQUFLLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLO3dCQUMzQyxLQUFLLEdBQUcsZ0NBQXFCLENBQUMsS0FBSyxDQUFDO3dCQUNwQyxNQUFNO29CQUNSLEtBQUssUUFBUSxDQUFDLHlCQUF5QixDQUFDLElBQUk7d0JBQzFDLEtBQUssR0FBRyxnQ0FBcUIsQ0FBQyxJQUFJLENBQUM7d0JBQ25DLE1BQU07b0JBQ1I7d0JBQ0UsU0FBUztpQkFDWjtnQkFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ3JDO1NBQ0Y7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUE5R0Qsc0NBOEdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hzY2hlbWEgZnJvbSBcIkBhbGljbG91ZC9yb3MtY2RrLWFzc2VtYmx5LXNjaGVtYVwiO1xuaW1wb3J0IHsgQ2xvdWRBc3NlbWJseSB9IGZyb20gXCIuL2Nsb3VkLWFzc2VtYmx5XCI7XG5pbXBvcnQge1xuICBNZXRhZGF0YUVudHJ5UmVzdWx0LFxuICBTeW50aGVzaXNNZXNzYWdlLFxuICBTeW50aGVzaXNNZXNzYWdlTGV2ZWwsXG59IGZyb20gXCIuL21ldGFkYXRhXCI7XG5cbi8qKlxuICogQXJ0aWZhY3QgcHJvcGVydGllcyBmb3IgUk9TIHN0YWNrcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbGl5dW5Sb3NTdGFja1Byb3BlcnRpZXMge1xuICAvKipcbiAgICogQSBmaWxlIHJlbGF0aXZlIHRvIHRoZSBhc3NlbWJseSByb290IHdoaWNoIGNvbnRhaW5zIHRoZSBST1MgdGVtcGxhdGUgZm9yIHRoaXMgc3RhY2suXG4gICAqL1xuICByZWFkb25seSB0ZW1wbGF0ZUZpbGU6IHN0cmluZztcblxuICAvKipcbiAgICogVmFsdWVzIGZvciBST1Mgc3RhY2sgcGFyYW1ldGVycyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgd2hlbiB0aGUgc3RhY2sgaXMgZGVwbG95ZWQuXG4gICAqL1xuICByZWFkb25seSBwYXJhbWV0ZXJzPzogeyBbaWQ6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSB0byB1c2UgZm9yIHRoZSBST1Mgc3RhY2suXG4gICAqIEBkZWZhdWx0IC0gbmFtZSBkZXJpdmVkIGZyb20gYXJ0aWZhY3QgSURcbiAgICovXG4gIHJlYWRvbmx5IHN0YWNrTmFtZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGFydGlmYWN0IHdpdGhpbiBhIGNsb3VkIGFzc2VtYmx5LlxuICovXG5leHBvcnQgY2xhc3MgQ2xvdWRBcnRpZmFjdCB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3ViY2xhc3Mgb2YgYENsb3VkQXJ0aWZhY3RgIGJhc2VkIG9uIHRoZSBhcnRpZmFjdCB0eXBlIGRlZmluZWQgaW4gdGhlIGFydGlmYWN0IG1hbmlmZXN0LlxuICAgKiBAcGFyYW0gYXNzZW1ibHkgVGhlIGNsb3VkIGFzc2VtYmx5IGZyb20gd2hpY2ggdG8gbG9hZCB0aGUgYXJ0aWZhY3RcbiAgICogQHBhcmFtIGlkIFRoZSBhcnRpZmFjdCBJRFxuICAgKiBAcGFyYW0gYXJ0aWZhY3QgVGhlIGFydGlmYWN0IG1hbmlmZXN0XG4gICAqIEByZXR1cm5zIHRoZSBgQ2xvdWRBcnRpZmFjdGAgdGhhdCBtYXRjaGVzIHRoZSBhcnRpZmFjdCB0eXBlIG9yIGB1bmRlZmluZWRgIGlmIGl0J3MgYW4gYXJ0aWZhY3QgdHlwZSB0aGF0IGlzIHVucmVjb2duaXplZCBieSB0aGlzIG1vZHVsZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZnJvbU1hbmlmZXN0KFxuICAgIGFzc2VtYmx5OiBDbG91ZEFzc2VtYmx5LFxuICAgIGlkOiBzdHJpbmcsXG4gICAgYXJ0aWZhY3Q6IGN4c2NoZW1hLkFydGlmYWN0TWFuaWZlc3RcbiAgKTogQ2xvdWRBcnRpZmFjdCB8IHVuZGVmaW5lZCB7XG4gICAgLy8gSW1wbGVtZW50YXRpb24gaXMgZGVmaW5lZCBpbiBhIHNlcGFyYXRlIGZpbGUgdG8gYnJlYWsgY3ljbGljIGRlcGVuZGVuY2llc1xuICAgIHZvaWQoYXNzZW1ibHkpLCB2b2lkKGlkKSwgdm9pZChhcnRpZmFjdCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbXBsZW1lbnRhdGlvbiBub3Qgb3ZlcnJpZGRlbiB5ZXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYXJ0aWZhY3QncyBtYW5pZmVzdFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG1hbmlmZXN0OiBjeHNjaGVtYS5BcnRpZmFjdE1hbmlmZXN0O1xuXG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIG1lc3NhZ2VzIGV4dHJhY3RlZCBmcm9tIHRoZSBhcnRpZmFjdCdzIG1ldGFkYXRhLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG1lc3NhZ2VzOiBTeW50aGVzaXNNZXNzYWdlW107XG5cbiAgLyoqXG4gICAqIElEcyBvZiBhbGwgZGVwZW5kZW5jaWVzLiBVc2VkIHdoZW4gdG9wb2xvZ2ljYWxseSBzb3J0aW5nIHRoZSBhcnRpZmFjdHMgd2l0aGluIHRoZSBjbG91ZCBhc3NlbWJseS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgX2RlcGVuZGVuY3lJRHM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBDYWNoZSBvZiByZXNvbHZlZCBkZXBlbmRlbmNpZXMuXG4gICAqL1xuICBwcml2YXRlIF9kZXBzPzogQ2xvdWRBcnRpZmFjdFtdO1xuXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgYXNzZW1ibHk6IENsb3VkQXNzZW1ibHksXG4gICAgcHVibGljIHJlYWRvbmx5IGlkOiBzdHJpbmcsXG4gICAgbWFuaWZlc3Q6IGN4c2NoZW1hLkFydGlmYWN0TWFuaWZlc3RcbiAgKSB7XG4gICAgdGhpcy5tYW5pZmVzdCA9IG1hbmlmZXN0O1xuICAgIHRoaXMubWVzc2FnZXMgPSB0aGlzLnJlbmRlck1lc3NhZ2VzKCk7XG4gICAgdGhpcy5fZGVwZW5kZW5jeUlEcyA9IG1hbmlmZXN0LmRlcGVuZGVuY2llcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCB0aGUgYXJ0aWZhY3RzIHRoYXQgdGhpcyBhcnRpZmFjdCBkZXBlbmRzIG9uLlxuICAgKi9cbiAgcHVibGljIGdldCBkZXBlbmRlbmNpZXMoKTogQ2xvdWRBcnRpZmFjdFtdIHwgdW5kZWZpbmVkIHtcbiAgICAvLyBpZiAodGhpcy5fZGVwcykge1xuICAgIC8vICAgcmV0dXJuIHRoaXMuX2RlcHM7XG4gICAgLy8gfVxuXG4gICAgLy8gdGhpcy5fZGVwcyA9IHRoaXMuX2RlcGVuZGVuY3lJRHMubWFwKChpZCkgPT4ge1xuICAgIC8vICAgY29uc3QgZGVwID0gdGhpcy5hc3NlbWJseS50cnlHZXRBcnRpZmFjdChpZCk7XG4gICAgLy8gICBpZiAoIWRlcCkge1xuICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoYEFydGlmYWN0ICR7dGhpcy5pZH0gZGVwZW5kcyBvbiBub24tZXhpc3RpbmcgYXJ0aWZhY3QgJHtpZH1gKTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIHJldHVybiBkZXA7XG4gICAgLy8gfSk7XG5cbiAgICByZXR1cm4gdGhpcy5fZGVwcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBhbGwgdGhlIG1ldGFkYXRhIGVudHJpZXMgb2YgYSBzcGVjaWZpYyB0eXBlIGluIHRoaXMgYXJ0aWZhY3QuXG4gICAqIEBwYXJhbSB0eXBlXG4gICAqL1xuICBwdWJsaWMgZmluZE1ldGFkYXRhQnlUeXBlKHR5cGU6IHN0cmluZyk6IE1ldGFkYXRhRW50cnlSZXN1bHRbXSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PE1ldGFkYXRhRW50cnlSZXN1bHQ+KCk7XG4gICAgZm9yIChjb25zdCBwYXRoIG9mIE9iamVjdC5rZXlzKHRoaXMubWFuaWZlc3QubWV0YWRhdGEgfHwge30pKSB7XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mICh0aGlzLm1hbmlmZXN0Lm1ldGFkYXRhIHx8IHt9KVtwYXRoXSkge1xuICAgICAgICBpZiAoZW50cnkudHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHsgcGF0aCwgLi4uZW50cnkgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyTWVzc2FnZXMoKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBuZXcgQXJyYXk8U3ludGhlc2lzTWVzc2FnZT4oKTtcblxuICAgIGZvciAoY29uc3QgW2lkLCBtZXRhZGF0YV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tYW5pZmVzdC5tZXRhZGF0YSB8fCB7fSkpIHtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgbWV0YWRhdGEpIHtcbiAgICAgICAgbGV0IGxldmVsOiBTeW50aGVzaXNNZXNzYWdlTGV2ZWw7XG4gICAgICAgIHN3aXRjaCAoZW50cnkudHlwZSkge1xuICAgICAgICAgIGNhc2UgY3hzY2hlbWEuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5XQVJOOlxuICAgICAgICAgICAgbGV2ZWwgPSBTeW50aGVzaXNNZXNzYWdlTGV2ZWwuV0FSTklORztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgY3hzY2hlbWEuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5FUlJPUjpcbiAgICAgICAgICAgIGxldmVsID0gU3ludGhlc2lzTWVzc2FnZUxldmVsLkVSUk9SO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBjeHNjaGVtYS5BcnRpZmFjdE1ldGFkYXRhRW50cnlUeXBlLklORk86XG4gICAgICAgICAgICBsZXZlbCA9IFN5bnRoZXNpc01lc3NhZ2VMZXZlbC5JTkZPO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZXMucHVzaCh7IGxldmVsLCBlbnRyeSwgaWQgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2VzO1xuICB9XG59XG4iXX0=