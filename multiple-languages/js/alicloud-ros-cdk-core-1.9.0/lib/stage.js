"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stage = void 0;
const cxapi = require("@alicloud/ros-cdk-cxapi");
const construct_compat_1 = require("./construct-compat");
const synthesis_1 = require("./private/synthesis");
/**
 * An abstract application modeling unit consisting of Stacks that should be
 * deployed together.
 *
 * Derive a subclass of 'Stage' and use it to model a single instance of your
 * application.
 *
 * You can then instantiate your subclass multiple times to model multiple
 * copies of your application which should be be deployed to different
 * environments.
 */
class Stage extends construct_compat_1.Construct {
    /**
     * Return the stage this construct is contained with, if available. If called
     * on a nested stage, returns its parent.
     *
     * @experimental
     */
    static of(construct) {
        return construct.node.scopes.reverse().slice(1).find(Stage.isStage);
    }
    /**
     * The cloud assembly output directory.
     */
    get outdir() {
        return this._assemblyBuilder.outdir;
    }
    /**
     * The cloud assembly asset output directory.
     */
    get assetOutdir() {
        return this._assemblyBuilder.assetOutdir;
    }
    /**
     * Test whether the given construct is a stage.
     *
     * @experimental
     */
    static isStage(x) {
        return x !== null && x instanceof Stage;
    }
    constructor(scope, id, props = {}) {
        super(scope, id);
        if (id !== "" && !/^[a-z][a-z0-9\-\_\.]+$/i.test(id)) {
            throw new Error(`invalid stage name "${id}". Stage name must start with a letter and contain only alphanumeric characters, hypens ('-'), underscores ('_') and periods ('.')`);
        }
        this.parentStage = Stage.of(this);
        // this.region = props.env?.region ?? this.parentStage?.region;
        // this.account = props.env?.account ?? this.parentStage?.account;
        this._assemblyBuilder = this.createBuilder(props.outdir);
        this.stageName = [this.parentStage?.stageName, id]
            .filter((x) => x)
            .join("-");
    }
    /**
     * Artifact ID of the assembly if it is a nested stage. The root stage app
     * will return an empty string.
     *
     * Derived from the construct path.
     *
     * @experimental
     */
    get artifactId() {
        if (!this.node.path) {
            return "";
        }
        return `assembly-${this.node.path
            .replace(/\//g, "-")
            .replace(/^-+|-+$/g, "")}`;
    }
    /**
     * Synthesize this stage into a cloud assembly.
     *
     * Once an assembly has been synthesized, it cannot be modified. Subsequent
     * calls will return the same assembly.
     */
    synth(options = {}) {
        if (!this.assembly) {
            this.assembly = (0, synthesis_1.synthesize)(this, {
                skipValidation: options.skipValidation,
            });
        }
        return this.assembly;
    }
    createBuilder(outdir) {
        // cannot specify "outdir" if we are a nested stage
        if (this.parentStage && outdir) {
            throw new Error('"outdir" cannot be specified for nested stages');
        }
        // Need to determine fixed output directory already, because we must know where
        // to write sub-assemblies (which must happen before we actually get to this app's
        // synthesize() phase).
        return this.parentStage
            ? this.parentStage._assemblyBuilder.createNestedAssembly(this.artifactId, this.node.path)
            : new cxapi.CloudAssemblyBuilder(outdir);
    }
}
exports.Stage = Stage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQseURBQTJEO0FBQzNELG1EQUFpRDtBQW9CakQ7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQWEsS0FBTSxTQUFRLDRCQUFTO0lBQ2xDOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFxQjtRQUNwQyxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztJQUN0QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFNO1FBQzFCLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDO0lBQzFDLENBQUM7SUEwQ0QsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxRQUFvQixFQUFFO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3BELE1BQU0sSUFBSSxLQUFLLENBQ2IsdUJBQXVCLEVBQUUsb0lBQW9JLENBQzlKLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQywrREFBK0Q7UUFDL0Qsa0VBQWtFO1FBRWxFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDO2FBQy9DLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsSUFBVyxVQUFVO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNuQixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTthQUM5QixPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQzthQUNuQixPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLFVBQWlDLEVBQUU7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFBLHNCQUFVLEVBQUMsSUFBSSxFQUFFO2dCQUMvQixjQUFjLEVBQUUsT0FBTyxDQUFDLGNBQWM7YUFDdkMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxNQUFlO1FBQ25DLG1EQUFtRDtRQUNuRCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxFQUFFO1lBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztTQUNuRTtRQUVELCtFQUErRTtRQUMvRSxrRkFBa0Y7UUFDbEYsdUJBQXVCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFdBQVc7WUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQ3BELElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2Y7WUFDSCxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBL0lELHNCQStJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4YXBpIGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1jeGFwaVwiO1xuaW1wb3J0IHsgQ29uc3RydWN0LCBJQ29uc3RydWN0IH0gZnJvbSBcIi4vY29uc3RydWN0LWNvbXBhdFwiO1xuaW1wb3J0IHsgc3ludGhlc2l6ZSB9IGZyb20gXCIuL3ByaXZhdGUvc3ludGhlc2lzXCI7XG5cbi8qKlxuICogSW5pdGlhbGl6YXRpb24gcHJvcHMgZm9yIGEgc3RhZ2UuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RhZ2VQcm9wcyB7XG4gIC8qKlxuICAgKiBUaGUgb3V0cHV0IGRpcmVjdG9yeSBpbnRvIHdoaWNoIHRvIGVtaXQgc3ludGhlc2l6ZWQgYXJ0aWZhY3RzLlxuICAgKlxuICAgKiBDYW4gb25seSBiZSBzcGVjaWZpZWQgaWYgdGhpcyBzdGFnZSBpcyB0aGUgcm9vdCBzdGFnZSB0aGUgYXBwLiBJZiB0aGlzIGlzXG4gICAqIHNwZWNpZmllZCBhbmQgdGhpcyBzdGFnZSBpcyBuZXN0ZWQgd2l0aGluIGFub3RoZXIgc3RhZ2UsIGFuIGVycm9yIHdpbGwgYmVcbiAgICogdGhyb3duLlxuICAgKlxuICAgKiBEZWZhdWx0IC0gZm9yIG5lc3RlZCBzdGFnZXMsIG91dGRpciB3aWxsIGJlIGRldGVybWluZWQgYXMgYSByZWxhdGl2ZVxuICAgKiBkaXJlY3RvcnkgdG8gdGhlIG91dGRpciBvZiB0aGUgYXBwLiBGb3IgYXBwcywgaWYgb3V0ZGlyIGlzIG5vdCBzcGVjaWZpZWQsIGFcbiAgICogdGVtcG9yYXJ5IGRpcmVjdG9yeSB3aWxsIGJlIGNyZWF0ZWQuXG4gICAqL1xuICByZWFkb25seSBvdXRkaXI/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQW4gYWJzdHJhY3QgYXBwbGljYXRpb24gbW9kZWxpbmcgdW5pdCBjb25zaXN0aW5nIG9mIFN0YWNrcyB0aGF0IHNob3VsZCBiZVxuICogZGVwbG95ZWQgdG9nZXRoZXIuXG4gKlxuICogRGVyaXZlIGEgc3ViY2xhc3Mgb2YgJ1N0YWdlJyBhbmQgdXNlIGl0IHRvIG1vZGVsIGEgc2luZ2xlIGluc3RhbmNlIG9mIHlvdXJcbiAqIGFwcGxpY2F0aW9uLlxuICpcbiAqIFlvdSBjYW4gdGhlbiBpbnN0YW50aWF0ZSB5b3VyIHN1YmNsYXNzIG11bHRpcGxlIHRpbWVzIHRvIG1vZGVsIG11bHRpcGxlXG4gKiBjb3BpZXMgb2YgeW91ciBhcHBsaWNhdGlvbiB3aGljaCBzaG91bGQgYmUgYmUgZGVwbG95ZWQgdG8gZGlmZmVyZW50XG4gKiBlbnZpcm9ubWVudHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGFnZSBleHRlbmRzIENvbnN0cnVjdCB7XG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHN0YWdlIHRoaXMgY29uc3RydWN0IGlzIGNvbnRhaW5lZCB3aXRoLCBpZiBhdmFpbGFibGUuIElmIGNhbGxlZFxuICAgKiBvbiBhIG5lc3RlZCBzdGFnZSwgcmV0dXJucyBpdHMgcGFyZW50LlxuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG9mKGNvbnN0cnVjdDogSUNvbnN0cnVjdCk6IFN0YWdlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gY29uc3RydWN0Lm5vZGUuc2NvcGVzLnJldmVyc2UoKS5zbGljZSgxKS5maW5kKFN0YWdlLmlzU3RhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjbG91ZCBhc3NlbWJseSBvdXRwdXQgZGlyZWN0b3J5LlxuICAgKi9cbiAgcHVibGljIGdldCBvdXRkaXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2VtYmx5QnVpbGRlci5vdXRkaXI7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGNsb3VkIGFzc2VtYmx5IGFzc2V0IG91dHB1dCBkaXJlY3RvcnkuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGFzc2V0T3V0ZGlyKCkge1xuICAgIHJldHVybiB0aGlzLl9hc3NlbWJseUJ1aWxkZXIuYXNzZXRPdXRkaXI7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCB3aGV0aGVyIHRoZSBnaXZlbiBjb25zdHJ1Y3QgaXMgYSBzdGFnZS5cbiAgICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc1N0YWdlKHg6IGFueSk6IHggaXMgU3RhZ2Uge1xuICAgIHJldHVybiB4ICE9PSBudWxsICYmIHggaW5zdGFuY2VvZiBTdGFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCByZWdpb24gZm9yIGFsbCByZXNvdXJjZXMgZGVmaW5lZCB3aXRoaW4gdGhpcyBzdGFnZS5cbiAgICpcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSByZWdpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGFjY291bnQgZm9yIGFsbCByZXNvdXJjZXMgZGVmaW5lZCB3aXRoaW4gdGhpcyBzdGFnZS5cbiAgICpcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhY2NvdW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgY2xvdWQgYXNzZW1ibHkgYnVpbGRlciB0aGF0IGlzIGJlaW5nIHVzZWQgZm9yIHRoaXMgQXBwXG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgX2Fzc2VtYmx5QnVpbGRlcjogY3hhcGkuQ2xvdWRBc3NlbWJseUJ1aWxkZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBzdGFnZS4gQmFzZWQgb24gbmFtZXMgb2YgdGhlIHBhcmVudCBzdGFnZXMgc2VwYXJhdGVkIGJ5XG4gICAqIGh5cGVucy5cbiAgICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHN0YWdlTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcGFyZW50IHN0YWdlIG9yICd1bmRlZmluZWQnIGlmIHRoaXMgaXMgdGhlIGFwcC5cbiAgICogKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgcGFyZW50U3RhZ2U/OiBTdGFnZTtcblxuICAvKipcbiAgICogVGhlIGNhY2hlZCBhc3NlbWJseSBpZiBpdCB3YXMgYWxyZWFkeSBidWlsdFxuICAgKi9cbiAgcHJpdmF0ZSBhc3NlbWJseT86IGN4YXBpLkNsb3VkQXNzZW1ibHk7XG5cbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFN0YWdlUHJvcHMgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICBpZiAoaWQgIT09IFwiXCIgJiYgIS9eW2Etel1bYS16MC05XFwtXFxfXFwuXSskL2kudGVzdChpZCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYGludmFsaWQgc3RhZ2UgbmFtZSBcIiR7aWR9XCIuIFN0YWdlIG5hbWUgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIGFuZCBjb250YWluIG9ubHkgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMsIGh5cGVucyAoJy0nKSwgdW5kZXJzY29yZXMgKCdfJykgYW5kIHBlcmlvZHMgKCcuJylgXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMucGFyZW50U3RhZ2UgPSBTdGFnZS5vZih0aGlzKTtcblxuICAgIC8vIHRoaXMucmVnaW9uID0gcHJvcHMuZW52Py5yZWdpb24gPz8gdGhpcy5wYXJlbnRTdGFnZT8ucmVnaW9uO1xuICAgIC8vIHRoaXMuYWNjb3VudCA9IHByb3BzLmVudj8uYWNjb3VudCA/PyB0aGlzLnBhcmVudFN0YWdlPy5hY2NvdW50O1xuXG4gICAgdGhpcy5fYXNzZW1ibHlCdWlsZGVyID0gdGhpcy5jcmVhdGVCdWlsZGVyKHByb3BzLm91dGRpcik7XG4gICAgdGhpcy5zdGFnZU5hbWUgPSBbdGhpcy5wYXJlbnRTdGFnZT8uc3RhZ2VOYW1lLCBpZF1cbiAgICAgIC5maWx0ZXIoKHgpID0+IHgpXG4gICAgICAuam9pbihcIi1cIik7XG4gIH1cblxuICAvKipcbiAgICogQXJ0aWZhY3QgSUQgb2YgdGhlIGFzc2VtYmx5IGlmIGl0IGlzIGEgbmVzdGVkIHN0YWdlLiBUaGUgcm9vdCBzdGFnZSBhcHBcbiAgICogd2lsbCByZXR1cm4gYW4gZW1wdHkgc3RyaW5nLlxuICAgKlxuICAgKiBEZXJpdmVkIGZyb20gdGhlIGNvbnN0cnVjdCBwYXRoLlxuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBwdWJsaWMgZ2V0IGFydGlmYWN0SWQoKSB7XG4gICAgaWYgKCF0aGlzLm5vZGUucGF0aCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBgYXNzZW1ibHktJHt0aGlzLm5vZGUucGF0aFxuICAgICAgLnJlcGxhY2UoL1xcLy9nLCBcIi1cIilcbiAgICAgIC5yZXBsYWNlKC9eLSt8LSskL2csIFwiXCIpfWA7XG4gIH1cblxuICAvKipcbiAgICogU3ludGhlc2l6ZSB0aGlzIHN0YWdlIGludG8gYSBjbG91ZCBhc3NlbWJseS5cbiAgICpcbiAgICogT25jZSBhbiBhc3NlbWJseSBoYXMgYmVlbiBzeW50aGVzaXplZCwgaXQgY2Fubm90IGJlIG1vZGlmaWVkLiBTdWJzZXF1ZW50XG4gICAqIGNhbGxzIHdpbGwgcmV0dXJuIHRoZSBzYW1lIGFzc2VtYmx5LlxuICAgKi9cbiAgcHVibGljIHN5bnRoKG9wdGlvbnM6IFN0YWdlU3ludGhlc2lzT3B0aW9ucyA9IHt9KTogY3hhcGkuQ2xvdWRBc3NlbWJseSB7XG4gICAgaWYgKCF0aGlzLmFzc2VtYmx5KSB7XG4gICAgICB0aGlzLmFzc2VtYmx5ID0gc3ludGhlc2l6ZSh0aGlzLCB7XG4gICAgICAgIHNraXBWYWxpZGF0aW9uOiBvcHRpb25zLnNraXBWYWxpZGF0aW9uLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYXNzZW1ibHk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUJ1aWxkZXIob3V0ZGlyPzogc3RyaW5nKSB7XG4gICAgLy8gY2Fubm90IHNwZWNpZnkgXCJvdXRkaXJcIiBpZiB3ZSBhcmUgYSBuZXN0ZWQgc3RhZ2VcbiAgICBpZiAodGhpcy5wYXJlbnRTdGFnZSAmJiBvdXRkaXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJvdXRkaXJcIiBjYW5ub3QgYmUgc3BlY2lmaWVkIGZvciBuZXN0ZWQgc3RhZ2VzJyk7XG4gICAgfVxuXG4gICAgLy8gTmVlZCB0byBkZXRlcm1pbmUgZml4ZWQgb3V0cHV0IGRpcmVjdG9yeSBhbHJlYWR5LCBiZWNhdXNlIHdlIG11c3Qga25vdyB3aGVyZVxuICAgIC8vIHRvIHdyaXRlIHN1Yi1hc3NlbWJsaWVzICh3aGljaCBtdXN0IGhhcHBlbiBiZWZvcmUgd2UgYWN0dWFsbHkgZ2V0IHRvIHRoaXMgYXBwJ3NcbiAgICAvLyBzeW50aGVzaXplKCkgcGhhc2UpLlxuICAgIHJldHVybiB0aGlzLnBhcmVudFN0YWdlXG4gICAgICA/IHRoaXMucGFyZW50U3RhZ2UuX2Fzc2VtYmx5QnVpbGRlci5jcmVhdGVOZXN0ZWRBc3NlbWJseShcbiAgICAgICAgICB0aGlzLmFydGlmYWN0SWQsXG4gICAgICAgICAgdGhpcy5ub2RlLnBhdGhcbiAgICAgICAgKVxuICAgICAgOiBuZXcgY3hhcGkuQ2xvdWRBc3NlbWJseUJ1aWxkZXIob3V0ZGlyKTtcbiAgfVxufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGFzc2VtbHkgc3ludGhlc2lzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0YWdlU3ludGhlc2lzT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTaG91bGQgd2Ugc2tpcCBjb25zdHJ1Y3QgdmFsaWRhdGlvbi5cbiAgICogQGRlZmF1bHQgLSBmYWxzZVxuICAgKi9cbiAgcmVhZG9ubHkgc2tpcFZhbGlkYXRpb24/OiBib29sZWFuO1xufVxuIl19