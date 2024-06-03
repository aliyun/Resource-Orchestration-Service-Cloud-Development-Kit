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
        // Implementation is defined in a separate file to break cyclic dependencies
        void (assembly), void (id), void (artifact);
        throw new Error('Implementation not overridden yet');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYXJ0aWZhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC1hcnRpZmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEQ7QUFFOUQseUNBSW9CO0FBdUJwQjs7R0FFRztBQUNILE1BQWEsYUFBYTtJQXVDeEIsWUFDa0IsUUFBdUIsRUFDdkIsRUFBVSxFQUMxQixRQUFtQztRQUZuQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLE9BQUUsR0FBRixFQUFFLENBQVE7UUFHMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBOUNEOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxZQUFZLENBQ3hCLFFBQXVCLEVBQ3ZCLEVBQVUsRUFDVixRQUFtQztRQUVuQyw0RUFBNEU7UUFDNUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFpQ0Q7O09BRUc7SUFDSCxJQUFXLFlBQVk7UUFDckIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixJQUFJO1FBRUosaURBQWlEO1FBQ2pELGtEQUFrRDtRQUNsRCxnQkFBZ0I7UUFDaEIscUZBQXFGO1FBQ3JGLE1BQU07UUFDTixnQkFBZ0I7UUFDaEIsTUFBTTtRQUVOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksa0JBQWtCLENBQUMsSUFBWTtRQUNwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBdUIsQ0FBQztRQUNoRCxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDNUQsS0FBSyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4RCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDakM7YUFDRjtTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLGNBQWM7UUFDcEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQW9CLENBQUM7UUFFL0MsS0FBSyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDekUsS0FBSyxNQUFNLEtBQUssSUFBSSxRQUFRLEVBQUU7Z0JBQzVCLElBQUksS0FBNEIsQ0FBQztnQkFDakMsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO29CQUNsQixLQUFLLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJO3dCQUMxQyxLQUFLLEdBQUcsZ0NBQXFCLENBQUMsT0FBTyxDQUFDO3dCQUN0QyxNQUFNO29CQUNSLEtBQUssUUFBUSxDQUFDLHlCQUF5QixDQUFDLEtBQUs7d0JBQzNDLEtBQUssR0FBRyxnQ0FBcUIsQ0FBQyxLQUFLLENBQUM7d0JBQ3BDLE1BQU07b0JBQ1IsS0FBSyxRQUFRLENBQUMseUJBQXlCLENBQUMsSUFBSTt3QkFDMUMsS0FBSyxHQUFHLGdDQUFxQixDQUFDLElBQUksQ0FBQzt3QkFDbkMsTUFBTTtvQkFDUjt3QkFDRSxTQUFTO2lCQUNaO2dCQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDckM7U0FDRjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQTlHRCxzQ0E4R0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjeHNjaGVtYSBmcm9tIFwiQGFsaWNsb3VkL3Jvcy1jZGstYXNzZW1ibHktc2NoZW1hXCI7XG5pbXBvcnQgeyBDbG91ZEFzc2VtYmx5IH0gZnJvbSBcIi4vY2xvdWQtYXNzZW1ibHlcIjtcbmltcG9ydCB7XG4gIE1ldGFkYXRhRW50cnlSZXN1bHQsXG4gIFN5bnRoZXNpc01lc3NhZ2UsXG4gIFN5bnRoZXNpc01lc3NhZ2VMZXZlbCxcbn0gZnJvbSBcIi4vbWV0YWRhdGFcIjtcblxuLyoqXG4gKiBBcnRpZmFjdCBwcm9wZXJ0aWVzIGZvciBST1Mgc3RhY2tzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFsaXl1blJvc1N0YWNrUHJvcGVydGllcyB7XG4gIC8qKlxuICAgKiBBIGZpbGUgcmVsYXRpdmUgdG8gdGhlIGFzc2VtYmx5IHJvb3Qgd2hpY2ggY29udGFpbnMgdGhlIFJPUyB0ZW1wbGF0ZSBmb3IgdGhpcyBzdGFjay5cbiAgICovXG4gIHJlYWRvbmx5IHRlbXBsYXRlRmlsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWYWx1ZXMgZm9yIFJPUyBzdGFjayBwYXJhbWV0ZXJzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB3aGVuIHRoZSBzdGFjayBpcyBkZXBsb3llZC5cbiAgICovXG4gIHJlYWRvbmx5IHBhcmFtZXRlcnM/OiB7IFtpZDogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIHRvIHVzZSBmb3IgdGhlIFJPUyBzdGFjay5cbiAgICogQGRlZmF1bHQgLSBuYW1lIGRlcml2ZWQgZnJvbSBhcnRpZmFjdCBJRFxuICAgKi9cbiAgcmVhZG9ubHkgc3RhY2tOYW1lPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYXJ0aWZhY3Qgd2l0aGluIGEgY2xvdWQgYXNzZW1ibHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDbG91ZEFydGlmYWN0IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdWJjbGFzcyBvZiBgQ2xvdWRBcnRpZmFjdGAgYmFzZWQgb24gdGhlIGFydGlmYWN0IHR5cGUgZGVmaW5lZCBpbiB0aGUgYXJ0aWZhY3QgbWFuaWZlc3QuXG4gICAqIEBwYXJhbSBhc3NlbWJseSBUaGUgY2xvdWQgYXNzZW1ibHkgZnJvbSB3aGljaCB0byBsb2FkIHRoZSBhcnRpZmFjdFxuICAgKiBAcGFyYW0gaWQgVGhlIGFydGlmYWN0IElEXG4gICAqIEBwYXJhbSBhcnRpZmFjdCBUaGUgYXJ0aWZhY3QgbWFuaWZlc3RcbiAgICogQHJldHVybnMgdGhlIGBDbG91ZEFydGlmYWN0YCB0aGF0IG1hdGNoZXMgdGhlIGFydGlmYWN0IHR5cGUgb3IgYHVuZGVmaW5lZGAgaWYgaXQncyBhbiBhcnRpZmFjdCB0eXBlIHRoYXQgaXMgdW5yZWNvZ25pemVkIGJ5IHRoaXMgbW9kdWxlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tTWFuaWZlc3QoXG4gICAgYXNzZW1ibHk6IENsb3VkQXNzZW1ibHksXG4gICAgaWQ6IHN0cmluZyxcbiAgICBhcnRpZmFjdDogY3hzY2hlbWEuQXJ0aWZhY3RNYW5pZmVzdFxuICApOiBDbG91ZEFydGlmYWN0IHwgdW5kZWZpbmVkIHtcbiAgICAvLyBJbXBsZW1lbnRhdGlvbiBpcyBkZWZpbmVkIGluIGEgc2VwYXJhdGUgZmlsZSB0byBicmVhayBjeWNsaWMgZGVwZW5kZW5jaWVzXG4gICAgdm9pZChhc3NlbWJseSksIHZvaWQoaWQpLCB2b2lkKGFydGlmYWN0KTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ltcGxlbWVudGF0aW9uIG5vdCBvdmVycmlkZGVuIHlldCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhcnRpZmFjdCdzIG1hbmlmZXN0XG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbWFuaWZlc3Q6IGN4c2NoZW1hLkFydGlmYWN0TWFuaWZlc3Q7XG5cbiAgLyoqXG4gICAqIFRoZSBzZXQgb2YgbWVzc2FnZXMgZXh0cmFjdGVkIGZyb20gdGhlIGFydGlmYWN0J3MgbWV0YWRhdGEuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbWVzc2FnZXM6IFN5bnRoZXNpc01lc3NhZ2VbXTtcblxuICAvKipcbiAgICogSURzIG9mIGFsbCBkZXBlbmRlbmNpZXMuIFVzZWQgd2hlbiB0b3BvbG9naWNhbGx5IHNvcnRpbmcgdGhlIGFydGlmYWN0cyB3aXRoaW4gdGhlIGNsb3VkIGFzc2VtYmx5LlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBfZGVwZW5kZW5jeUlEczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIENhY2hlIG9mIHJlc29sdmVkIGRlcGVuZGVuY2llcy5cbiAgICovXG4gIHByaXZhdGUgX2RlcHM/OiBDbG91ZEFydGlmYWN0W107XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBhc3NlbWJseTogQ2xvdWRBc3NlbWJseSxcbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZyxcbiAgICBtYW5pZmVzdDogY3hzY2hlbWEuQXJ0aWZhY3RNYW5pZmVzdFxuICApIHtcbiAgICB0aGlzLm1hbmlmZXN0ID0gbWFuaWZlc3Q7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHRoaXMucmVuZGVyTWVzc2FnZXMoKTtcbiAgICB0aGlzLl9kZXBlbmRlbmN5SURzID0gbWFuaWZlc3QuZGVwZW5kZW5jaWVzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIHRoZSBhcnRpZmFjdHMgdGhhdCB0aGlzIGFydGlmYWN0IGRlcGVuZHMgb24uXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRlcGVuZGVuY2llcygpOiBDbG91ZEFydGlmYWN0W10gfCB1bmRlZmluZWQge1xuICAgIC8vIGlmICh0aGlzLl9kZXBzKSB7XG4gICAgLy8gICByZXR1cm4gdGhpcy5fZGVwcztcbiAgICAvLyB9XG5cbiAgICAvLyB0aGlzLl9kZXBzID0gdGhpcy5fZGVwZW5kZW5jeUlEcy5tYXAoKGlkKSA9PiB7XG4gICAgLy8gICBjb25zdCBkZXAgPSB0aGlzLmFzc2VtYmx5LnRyeUdldEFydGlmYWN0KGlkKTtcbiAgICAvLyAgIGlmICghZGVwKSB7XG4gICAgLy8gICAgIHRocm93IG5ldyBFcnJvcihgQXJ0aWZhY3QgJHt0aGlzLmlkfSBkZXBlbmRzIG9uIG5vbi1leGlzdGluZyBhcnRpZmFjdCAke2lkfWApO1xuICAgIC8vICAgfVxuICAgIC8vICAgcmV0dXJuIGRlcDtcbiAgICAvLyB9KTtcblxuICAgIHJldHVybiB0aGlzLl9kZXBzO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIGFsbCB0aGUgbWV0YWRhdGEgZW50cmllcyBvZiBhIHNwZWNpZmljIHR5cGUgaW4gdGhpcyBhcnRpZmFjdC5cbiAgICogQHBhcmFtIHR5cGVcbiAgICovXG4gIHB1YmxpYyBmaW5kTWV0YWRhdGFCeVR5cGUodHlwZTogc3RyaW5nKTogTWV0YWRhdGFFbnRyeVJlc3VsdFtdIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8TWV0YWRhdGFFbnRyeVJlc3VsdD4oKTtcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgT2JqZWN0LmtleXModGhpcy5tYW5pZmVzdC5tZXRhZGF0YSB8fCB7fSkpIHtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgKHRoaXMubWFuaWZlc3QubWV0YWRhdGEgfHwge30pW3BhdGhdKSB7XG4gICAgICAgIGlmIChlbnRyeS50eXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goeyBwYXRoLCAuLi5lbnRyeSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJNZXNzYWdlcygpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IG5ldyBBcnJheTxTeW50aGVzaXNNZXNzYWdlPigpO1xuXG4gICAgZm9yIChjb25zdCBbaWQsIG1ldGFkYXRhXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1hbmlmZXN0Lm1ldGFkYXRhIHx8IHt9KSkge1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBtZXRhZGF0YSkge1xuICAgICAgICBsZXQgbGV2ZWw6IFN5bnRoZXNpc01lc3NhZ2VMZXZlbDtcbiAgICAgICAgc3dpdGNoIChlbnRyeS50eXBlKSB7XG4gICAgICAgICAgY2FzZSBjeHNjaGVtYS5BcnRpZmFjdE1ldGFkYXRhRW50cnlUeXBlLldBUk46XG4gICAgICAgICAgICBsZXZlbCA9IFN5bnRoZXNpc01lc3NhZ2VMZXZlbC5XQVJOSU5HO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBjeHNjaGVtYS5BcnRpZmFjdE1ldGFkYXRhRW50cnlUeXBlLkVSUk9SOlxuICAgICAgICAgICAgbGV2ZWwgPSBTeW50aGVzaXNNZXNzYWdlTGV2ZWwuRVJST1I7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGN4c2NoZW1hLkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuSU5GTzpcbiAgICAgICAgICAgIGxldmVsID0gU3ludGhlc2lzTWVzc2FnZUxldmVsLklORk87XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBtZXNzYWdlcy5wdXNoKHsgbGV2ZWwsIGVudHJ5LCBpZCB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZXM7XG4gIH1cbn1cbiJdfQ==