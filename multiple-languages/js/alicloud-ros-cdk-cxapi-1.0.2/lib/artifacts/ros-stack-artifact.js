"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosStackArtifact = void 0;
const fs = require("fs");
const path = require("path");
const cloud_artifact_1 = require("../cloud-artifact");
class RosStackArtifact extends cloud_artifact_1.CloudArtifact {
    constructor(assembly, artifactId, artifact) {
        super(assembly, artifactId, artifact);
        const properties = (this.manifest.properties ||
            {});
        if (!properties.templateFile) {
            throw new Error('Invalid ROS stack artifact. Missing "templateFile" property in cloud assembly manifest');
        }
        this.templateFile = properties.templateFile;
        this.parameters = properties.parameters || {};
        this.stackName = properties.stackName || artifactId;
        this.displayName =
            this.stackName === artifactId
                ? this.stackName
                : `${artifactId} (${this.stackName})`;
        this.name = this.stackName; // backwards compat
        this.originalName = this.stackName;
    }
    /**
     * The ROS template for this stack.
     */
    get template() {
        if (this._template === undefined) {
            this._template = JSON.parse(fs.readFileSync(path.join(this.assembly.directory, this.templateFile), "utf-8"));
        }
        return this._template;
    }
}
exports.RosStackArtifact = RosStackArtifact;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLXN0YWNrLWFydGlmYWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9zLXN0YWNrLWFydGlmYWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0Isc0RBQWtEO0FBR2xELE1BQWEsZ0JBQWlCLFNBQVEsOEJBQWE7SUFvQ2pELFlBQ0UsUUFBdUIsRUFDdkIsVUFBa0IsRUFDbEIsUUFBbUM7UUFFbkMsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFdEMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVU7WUFDMUMsRUFBRSxDQUFzQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQ2Isd0ZBQXdGLENBQ3pGLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUM7UUFDcEQsSUFBSSxDQUFDLFdBQVc7WUFDZCxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVU7Z0JBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUztnQkFDaEIsQ0FBQyxDQUFDLEdBQUcsVUFBVSxLQUFLLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxtQkFBbUI7UUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsUUFBUTtRQUNqQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDekIsRUFBRSxDQUFDLFlBQVksQ0FDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDckQsT0FBTyxDQUNSLENBQ0YsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQTVFRCw0Q0E0RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjeHNjaGVtYSBmcm9tIFwiQGFsaWNsb3VkL3Jvcy1jZGstYXNzZW1ibHktc2NoZW1hXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IENsb3VkQXJ0aWZhY3QgfSBmcm9tIFwiLi4vY2xvdWQtYXJ0aWZhY3RcIjtcbmltcG9ydCB7IENsb3VkQXNzZW1ibHkgfSBmcm9tIFwiLi4vY2xvdWQtYXNzZW1ibHlcIjtcblxuZXhwb3J0IGNsYXNzIFJvc1N0YWNrQXJ0aWZhY3QgZXh0ZW5kcyBDbG91ZEFydGlmYWN0IHtcbiAgLyoqXG4gICAqIFRoZSBmaWxlIG5hbWUgb2YgdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHRlbXBsYXRlRmlsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgb3JpZ2luYWwgbmFtZSBhcyBkZWZpbmVkIGluIHRoZSBDREsgYXBwLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG9yaWdpbmFsTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBST1MgcGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSBzdGFjay5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBwYXJhbWV0ZXJzOiB7IFtpZDogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgLyoqXG4gICAqIFRoZSBwaHlzaWNhbCBuYW1lIG9mIHRoaXMgc3RhY2suXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgc3RhY2tOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGlzIHN0YWNrLiBTaG91bGQgb25seSBiZSB1c2VkIGluIHVzZXIgaW50ZXJmYWNlcy5cbiAgICogSWYgdGhlIHN0YWNrTmFtZSBhbmQgYXJ0aWZhY3RJZCBhcmUgdGhlIHNhbWUsIGl0IHdpbGwganVzdCByZXR1cm4gdGhhdC4gT3RoZXJ3aXNlLFxuICAgKiBpdCB3aWxsIHJldHVybiBzb21ldGhpbmcgbGlrZSBcIjxhcnRpZmFjdElkPiAoPHN0YWNrTmFtZT4pXCJcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBkaXNwbGF5TmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcGh5c2ljYWwgbmFtZSBvZiB0aGlzIHN0YWNrLlxuICAgKiBAZGVwcmVjYXRlZCByZW5hbWVkIHRvIGBzdGFja05hbWVgXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3RlbXBsYXRlOiBhbnkgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgYXNzZW1ibHk6IENsb3VkQXNzZW1ibHksXG4gICAgYXJ0aWZhY3RJZDogc3RyaW5nLFxuICAgIGFydGlmYWN0OiBjeHNjaGVtYS5BcnRpZmFjdE1hbmlmZXN0XG4gICkge1xuICAgIHN1cGVyKGFzc2VtYmx5LCBhcnRpZmFjdElkLCBhcnRpZmFjdCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gKHRoaXMubWFuaWZlc3QucHJvcGVydGllcyB8fFxuICAgICAge30pIGFzIGN4c2NoZW1hLkFsaXl1blJvc1N0YWNrUHJvcGVydGllcztcbiAgICBpZiAoIXByb3BlcnRpZXMudGVtcGxhdGVGaWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJbnZhbGlkIFJPUyBzdGFjayBhcnRpZmFjdC4gTWlzc2luZyBcInRlbXBsYXRlRmlsZVwiIHByb3BlcnR5IGluIGNsb3VkIGFzc2VtYmx5IG1hbmlmZXN0J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLnRlbXBsYXRlRmlsZSA9IHByb3BlcnRpZXMudGVtcGxhdGVGaWxlO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHByb3BlcnRpZXMucGFyYW1ldGVycyB8fCB7fTtcbiAgICB0aGlzLnN0YWNrTmFtZSA9IHByb3BlcnRpZXMuc3RhY2tOYW1lIHx8IGFydGlmYWN0SWQ7XG4gICAgdGhpcy5kaXNwbGF5TmFtZSA9XG4gICAgICB0aGlzLnN0YWNrTmFtZSA9PT0gYXJ0aWZhY3RJZFxuICAgICAgICA/IHRoaXMuc3RhY2tOYW1lXG4gICAgICAgIDogYCR7YXJ0aWZhY3RJZH0gKCR7dGhpcy5zdGFja05hbWV9KWA7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5zdGFja05hbWU7IC8vIGJhY2t3YXJkcyBjb21wYXRcbiAgICB0aGlzLm9yaWdpbmFsTmFtZSA9IHRoaXMuc3RhY2tOYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBST1MgdGVtcGxhdGUgZm9yIHRoaXMgc3RhY2suXG4gICAqL1xuICBwdWJsaWMgZ2V0IHRlbXBsYXRlKCk6IGFueSB7XG4gICAgaWYgKHRoaXMuX3RlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlID0gSlNPTi5wYXJzZShcbiAgICAgICAgZnMucmVhZEZpbGVTeW5jKFxuICAgICAgICAgIHBhdGguam9pbih0aGlzLmFzc2VtYmx5LmRpcmVjdG9yeSwgdGhpcy50ZW1wbGF0ZUZpbGUpLFxuICAgICAgICAgIFwidXRmLThcIlxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGU7XG4gIH1cbn1cbiJdfQ==