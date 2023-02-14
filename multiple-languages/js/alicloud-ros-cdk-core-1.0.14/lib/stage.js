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
     * Return the stage this construct is contained with, if available. If called
     * on a nested stage, returns its parent.
     *
     * @experimental
     */
    static of(construct) {
        return construct.node.scopes.reverse().slice(1).find(Stage.isStage);
    }
    /**
     * Test whether the given construct is a stage.
     *
     * @experimental
     */
    static isStage(x) {
        return x !== null && x instanceof Stage;
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
            this.assembly = synthesis_1.synthesize(this, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQseURBQTJEO0FBQzNELG1EQUFpRDtBQW9CakQ7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQWEsS0FBTSxTQUFRLDRCQUFTO0lBOERsQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFFBQW9CLEVBQUU7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDcEQsTUFBTSxJQUFJLEtBQUssQ0FDYix1QkFBdUIsRUFBRSxvSUFBb0ksQ0FDOUosQ0FBQztTQUNIO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxDLCtEQUErRDtRQUMvRCxrRUFBa0U7UUFFbEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUM7YUFDL0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQS9FRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBcUI7UUFDcEMsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBTTtRQUMxQixPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBZ0VEOzs7Ozs7O09BT0c7SUFDSCxJQUFXLFVBQVU7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ25CLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQzlCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO2FBQ25CLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsVUFBaUMsRUFBRTtRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFVLENBQUMsSUFBSSxFQUFFO2dCQUMvQixjQUFjLEVBQUUsT0FBTyxDQUFDLGNBQWM7YUFDdkMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxNQUFlO1FBQ25DLG1EQUFtRDtRQUNuRCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxFQUFFO1lBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztTQUNuRTtRQUVELCtFQUErRTtRQUMvRSxrRkFBa0Y7UUFDbEYsdUJBQXVCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFdBQVc7WUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQ3BELElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2Y7WUFDSCxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBbklELHNCQW1JQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4YXBpIGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1jeGFwaVwiO1xuaW1wb3J0IHsgQ29uc3RydWN0LCBJQ29uc3RydWN0IH0gZnJvbSBcIi4vY29uc3RydWN0LWNvbXBhdFwiO1xuaW1wb3J0IHsgc3ludGhlc2l6ZSB9IGZyb20gXCIuL3ByaXZhdGUvc3ludGhlc2lzXCI7XG5cbi8qKlxuICogSW5pdGlhbGl6YXRpb24gcHJvcHMgZm9yIGEgc3RhZ2UuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RhZ2VQcm9wcyB7XG4gIC8qKlxuICAgKiBUaGUgb3V0cHV0IGRpcmVjdG9yeSBpbnRvIHdoaWNoIHRvIGVtaXQgc3ludGhlc2l6ZWQgYXJ0aWZhY3RzLlxuICAgKlxuICAgKiBDYW4gb25seSBiZSBzcGVjaWZpZWQgaWYgdGhpcyBzdGFnZSBpcyB0aGUgcm9vdCBzdGFnZSB0aGUgYXBwLiBJZiB0aGlzIGlzXG4gICAqIHNwZWNpZmllZCBhbmQgdGhpcyBzdGFnZSBpcyBuZXN0ZWQgd2l0aGluIGFub3RoZXIgc3RhZ2UsIGFuIGVycm9yIHdpbGwgYmVcbiAgICogdGhyb3duLlxuICAgKlxuICAgKiBEZWZhdWx0IC0gZm9yIG5lc3RlZCBzdGFnZXMsIG91dGRpciB3aWxsIGJlIGRldGVybWluZWQgYXMgYSByZWxhdGl2ZVxuICAgKiBkaXJlY3RvcnkgdG8gdGhlIG91dGRpciBvZiB0aGUgYXBwLiBGb3IgYXBwcywgaWYgb3V0ZGlyIGlzIG5vdCBzcGVjaWZpZWQsIGFcbiAgICogdGVtcG9yYXJ5IGRpcmVjdG9yeSB3aWxsIGJlIGNyZWF0ZWQuXG4gICAqL1xuICByZWFkb25seSBvdXRkaXI/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQW4gYWJzdHJhY3QgYXBwbGljYXRpb24gbW9kZWxpbmcgdW5pdCBjb25zaXN0aW5nIG9mIFN0YWNrcyB0aGF0IHNob3VsZCBiZVxuICogZGVwbG95ZWQgdG9nZXRoZXIuXG4gKlxuICogRGVyaXZlIGEgc3ViY2xhc3Mgb2YgJ1N0YWdlJyBhbmQgdXNlIGl0IHRvIG1vZGVsIGEgc2luZ2xlIGluc3RhbmNlIG9mIHlvdXJcbiAqIGFwcGxpY2F0aW9uLlxuICpcbiAqIFlvdSBjYW4gdGhlbiBpbnN0YW50aWF0ZSB5b3VyIHN1YmNsYXNzIG11bHRpcGxlIHRpbWVzIHRvIG1vZGVsIG11bHRpcGxlXG4gKiBjb3BpZXMgb2YgeW91ciBhcHBsaWNhdGlvbiB3aGljaCBzaG91bGQgYmUgYmUgZGVwbG95ZWQgdG8gZGlmZmVyZW50XG4gKiBlbnZpcm9ubWVudHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGFnZSBleHRlbmRzIENvbnN0cnVjdCB7XG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHN0YWdlIHRoaXMgY29uc3RydWN0IGlzIGNvbnRhaW5lZCB3aXRoLCBpZiBhdmFpbGFibGUuIElmIGNhbGxlZFxuICAgKiBvbiBhIG5lc3RlZCBzdGFnZSwgcmV0dXJucyBpdHMgcGFyZW50LlxuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG9mKGNvbnN0cnVjdDogSUNvbnN0cnVjdCk6IFN0YWdlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gY29uc3RydWN0Lm5vZGUuc2NvcGVzLnJldmVyc2UoKS5zbGljZSgxKS5maW5kKFN0YWdlLmlzU3RhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlc3Qgd2hldGhlciB0aGUgZ2l2ZW4gY29uc3RydWN0IGlzIGEgc3RhZ2UuXG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNTdGFnZSh4OiBhbnkpOiB4IGlzIFN0YWdlIHtcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiB4IGluc3RhbmNlb2YgU3RhZ2U7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgcmVnaW9uIGZvciBhbGwgcmVzb3VyY2VzIGRlZmluZWQgd2l0aGluIHRoaXMgc3RhZ2UuXG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIC8vIHB1YmxpYyByZWFkb25seSByZWdpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGFjY291bnQgZm9yIGFsbCByZXNvdXJjZXMgZGVmaW5lZCB3aXRoaW4gdGhpcyBzdGFnZS5cbiAgICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgLy8gcHVibGljIHJlYWRvbmx5IGFjY291bnQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBjbG91ZCBhc3NlbWJseSBidWlsZGVyIHRoYXQgaXMgYmVpbmcgdXNlZCBmb3IgdGhpcyBBcHBcbiAgICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBfYXNzZW1ibHlCdWlsZGVyOiBjeGFwaS5DbG91ZEFzc2VtYmx5QnVpbGRlcjtcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIHN0YWdlLiBCYXNlZCBvbiBuYW1lcyBvZiB0aGUgcGFyZW50IHN0YWdlcyBzZXBhcmF0ZWQgYnlcbiAgICogaHlwZW5zLlxuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgc3RhZ2VOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJlbnQgc3RhZ2Ugb3IgJ3VuZGVmaW5lZCcgaWYgdGhpcyBpcyB0aGUgYXBwLlxuICAgKiAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBwYXJlbnRTdGFnZT86IFN0YWdlO1xuXG4gIC8qKlxuICAgKiBUaGUgY2FjaGVkIGFzc2VtYmx5IGlmIGl0IHdhcyBhbHJlYWR5IGJ1aWx0XG4gICAqL1xuICBwcml2YXRlIGFzc2VtYmx5PzogY3hhcGkuQ2xvdWRBc3NlbWJseTtcblxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogU3RhZ2VQcm9wcyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgIGlmIChpZCAhPT0gXCJcIiAmJiAhL15bYS16XVthLXowLTlcXC1cXF9cXC5dKyQvaS50ZXN0KGlkKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgaW52YWxpZCBzdGFnZSBuYW1lIFwiJHtpZH1cIi4gU3RhZ2UgbmFtZSBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgYW5kIGNvbnRhaW4gb25seSBhbHBoYW51bWVyaWMgY2hhcmFjdGVycywgaHlwZW5zICgnLScpLCB1bmRlcnNjb3JlcyAoJ18nKSBhbmQgcGVyaW9kcyAoJy4nKWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJlbnRTdGFnZSA9IFN0YWdlLm9mKHRoaXMpO1xuXG4gICAgLy8gdGhpcy5yZWdpb24gPSBwcm9wcy5lbnY/LnJlZ2lvbiA/PyB0aGlzLnBhcmVudFN0YWdlPy5yZWdpb247XG4gICAgLy8gdGhpcy5hY2NvdW50ID0gcHJvcHMuZW52Py5hY2NvdW50ID8/IHRoaXMucGFyZW50U3RhZ2U/LmFjY291bnQ7XG5cbiAgICB0aGlzLl9hc3NlbWJseUJ1aWxkZXIgPSB0aGlzLmNyZWF0ZUJ1aWxkZXIocHJvcHMub3V0ZGlyKTtcbiAgICB0aGlzLnN0YWdlTmFtZSA9IFt0aGlzLnBhcmVudFN0YWdlPy5zdGFnZU5hbWUsIGlkXVxuICAgICAgLmZpbHRlcigoeCkgPT4geClcbiAgICAgIC5qb2luKFwiLVwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcnRpZmFjdCBJRCBvZiB0aGUgYXNzZW1ibHkgaWYgaXQgaXMgYSBuZXN0ZWQgc3RhZ2UuIFRoZSByb290IHN0YWdlIGFwcFxuICAgKiB3aWxsIHJldHVybiBhbiBlbXB0eSBzdHJpbmcuXG4gICAqXG4gICAqIERlcml2ZWQgZnJvbSB0aGUgY29uc3RydWN0IHBhdGguXG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHB1YmxpYyBnZXQgYXJ0aWZhY3RJZCgpIHtcbiAgICBpZiAoIXRoaXMubm9kZS5wYXRoKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIGBhc3NlbWJseS0ke3RoaXMubm9kZS5wYXRoXG4gICAgICAucmVwbGFjZSgvXFwvL2csIFwiLVwiKVxuICAgICAgLnJlcGxhY2UoL14tK3wtKyQvZywgXCJcIil9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW50aGVzaXplIHRoaXMgc3RhZ2UgaW50byBhIGNsb3VkIGFzc2VtYmx5LlxuICAgKlxuICAgKiBPbmNlIGFuIGFzc2VtYmx5IGhhcyBiZWVuIHN5bnRoZXNpemVkLCBpdCBjYW5ub3QgYmUgbW9kaWZpZWQuIFN1YnNlcXVlbnRcbiAgICogY2FsbHMgd2lsbCByZXR1cm4gdGhlIHNhbWUgYXNzZW1ibHkuXG4gICAqL1xuICBwdWJsaWMgc3ludGgob3B0aW9uczogU3RhZ2VTeW50aGVzaXNPcHRpb25zID0ge30pOiBjeGFwaS5DbG91ZEFzc2VtYmx5IHtcbiAgICBpZiAoIXRoaXMuYXNzZW1ibHkpIHtcbiAgICAgIHRoaXMuYXNzZW1ibHkgPSBzeW50aGVzaXplKHRoaXMsIHtcbiAgICAgICAgc2tpcFZhbGlkYXRpb246IG9wdGlvbnMuc2tpcFZhbGlkYXRpb24sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hc3NlbWJseTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQnVpbGRlcihvdXRkaXI/OiBzdHJpbmcpIHtcbiAgICAvLyBjYW5ub3Qgc3BlY2lmeSBcIm91dGRpclwiIGlmIHdlIGFyZSBhIG5lc3RlZCBzdGFnZVxuICAgIGlmICh0aGlzLnBhcmVudFN0YWdlICYmIG91dGRpcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIm91dGRpclwiIGNhbm5vdCBiZSBzcGVjaWZpZWQgZm9yIG5lc3RlZCBzdGFnZXMnKTtcbiAgICB9XG5cbiAgICAvLyBOZWVkIHRvIGRldGVybWluZSBmaXhlZCBvdXRwdXQgZGlyZWN0b3J5IGFscmVhZHksIGJlY2F1c2Ugd2UgbXVzdCBrbm93IHdoZXJlXG4gICAgLy8gdG8gd3JpdGUgc3ViLWFzc2VtYmxpZXMgKHdoaWNoIG11c3QgaGFwcGVuIGJlZm9yZSB3ZSBhY3R1YWxseSBnZXQgdG8gdGhpcyBhcHAnc1xuICAgIC8vIHN5bnRoZXNpemUoKSBwaGFzZSkuXG4gICAgcmV0dXJuIHRoaXMucGFyZW50U3RhZ2VcbiAgICAgID8gdGhpcy5wYXJlbnRTdGFnZS5fYXNzZW1ibHlCdWlsZGVyLmNyZWF0ZU5lc3RlZEFzc2VtYmx5KFxuICAgICAgICAgIHRoaXMuYXJ0aWZhY3RJZCxcbiAgICAgICAgICB0aGlzLm5vZGUucGF0aFxuICAgICAgICApXG4gICAgICA6IG5ldyBjeGFwaS5DbG91ZEFzc2VtYmx5QnVpbGRlcihvdXRkaXIpO1xuICB9XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgYXNzZW1seSBzeW50aGVzaXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RhZ2VTeW50aGVzaXNPcHRpb25zIHtcbiAgLyoqXG4gICAqIFNob3VsZCB3ZSBza2lwIGNvbnN0cnVjdCB2YWxpZGF0aW9uLlxuICAgKiBAZGVmYXVsdCAtIGZhbHNlXG4gICAqL1xuICByZWFkb25seSBza2lwVmFsaWRhdGlvbj86IGJvb2xlYW47XG59XG4iXX0=