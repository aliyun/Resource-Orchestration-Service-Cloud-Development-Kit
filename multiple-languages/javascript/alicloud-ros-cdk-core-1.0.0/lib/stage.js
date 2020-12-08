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
 * Derive a subclass of `Stage` and use it to model a single instance of your
 * application.
 *
 * You can then instantiate your subclass multiple times to model multiple
 * copies of your application which should be be deployed to different
 * environments.
 */
class Stage extends construct_compat_1.Construct {
    constructor(scope, id, props = {}) {
        var _a;
        super(scope, id);
        if (id !== "" && !/^[a-z][a-z0-9\-\_\.]+$/i.test(id)) {
            throw new Error(`invalid stage name "${id}". Stage name must start with a letter and contain only alphanumeric characters, hypens ('-'), underscores ('_') and periods ('.')`);
        }
        this.parentStage = Stage.of(this);
        // this.region = props.env?.region ?? this.parentStage?.region;
        // this.account = props.env?.account ?? this.parentStage?.account;
        this._assemblyBuilder = this.createBuilder(props.outdir);
        this.stageName = [(_a = this.parentStage) === null || _a === void 0 ? void 0 : _a.stageName, id]
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
     * Artifact ID of the assembly if it is a nested stage. The root stage (app)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQseURBQTJEO0FBQzNELG1EQUFpRDtBQW9CakQ7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQWEsS0FBTSxTQUFRLDRCQUFTO0lBOERsQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFFBQW9CLEVBQUU7O1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3BELE1BQU0sSUFBSSxLQUFLLENBQ2IsdUJBQXVCLEVBQUUsb0lBQW9JLENBQzlKLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQywrREFBK0Q7UUFDL0Qsa0VBQWtFO1FBRWxFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQUMsSUFBSSxDQUFDLFdBQVcsMENBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQzthQUMvQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBL0VEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFxQjtRQUNwQyxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFNO1FBQzFCLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDO0lBQzFDLENBQUM7SUFnRUQ7Ozs7Ozs7T0FPRztJQUNILElBQVcsVUFBVTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDbkIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDOUIsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7YUFDbkIsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxVQUFpQyxFQUFFO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQVUsQ0FBQyxJQUFJLEVBQUU7Z0JBQy9CLGNBQWMsRUFBRSxPQUFPLENBQUMsY0FBYzthQUN2QyxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU8sYUFBYSxDQUFDLE1BQWU7UUFDbkMsbURBQW1EO1FBQ25ELElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsK0VBQStFO1FBQy9FLGtGQUFrRjtRQUNsRix1QkFBdUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsV0FBVztZQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FDcEQsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDZjtZQUNILENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUFuSUQsc0JBbUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hhcGkgZnJvbSBcIkBhbGljbG91ZC9yb3MtY2RrLWN4YXBpXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QsIElDb25zdHJ1Y3QgfSBmcm9tIFwiLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5pbXBvcnQgeyBzeW50aGVzaXplIH0gZnJvbSBcIi4vcHJpdmF0ZS9zeW50aGVzaXNcIjtcblxuLyoqXG4gKiBJbml0aWFsaXphdGlvbiBwcm9wcyBmb3IgYSBzdGFnZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGFnZVByb3BzIHtcbiAgLyoqXG4gICAqIFRoZSBvdXRwdXQgZGlyZWN0b3J5IGludG8gd2hpY2ggdG8gZW1pdCBzeW50aGVzaXplZCBhcnRpZmFjdHMuXG4gICAqXG4gICAqIENhbiBvbmx5IGJlIHNwZWNpZmllZCBpZiB0aGlzIHN0YWdlIGlzIHRoZSByb290IHN0YWdlICh0aGUgYXBwKS4gSWYgdGhpcyBpc1xuICAgKiBzcGVjaWZpZWQgYW5kIHRoaXMgc3RhZ2UgaXMgbmVzdGVkIHdpdGhpbiBhbm90aGVyIHN0YWdlLCBhbiBlcnJvciB3aWxsIGJlXG4gICAqIHRocm93bi5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBmb3IgbmVzdGVkIHN0YWdlcywgb3V0ZGlyIHdpbGwgYmUgZGV0ZXJtaW5lZCBhcyBhIHJlbGF0aXZlXG4gICAqIGRpcmVjdG9yeSB0byB0aGUgb3V0ZGlyIG9mIHRoZSBhcHAuIEZvciBhcHBzLCBpZiBvdXRkaXIgaXMgbm90IHNwZWNpZmllZCwgYVxuICAgKiB0ZW1wb3JhcnkgZGlyZWN0b3J5IHdpbGwgYmUgY3JlYXRlZC5cbiAgICovXG4gIHJlYWRvbmx5IG91dGRpcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBbiBhYnN0cmFjdCBhcHBsaWNhdGlvbiBtb2RlbGluZyB1bml0IGNvbnNpc3Rpbmcgb2YgU3RhY2tzIHRoYXQgc2hvdWxkIGJlXG4gKiBkZXBsb3llZCB0b2dldGhlci5cbiAqXG4gKiBEZXJpdmUgYSBzdWJjbGFzcyBvZiBgU3RhZ2VgIGFuZCB1c2UgaXQgdG8gbW9kZWwgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgeW91clxuICogYXBwbGljYXRpb24uXG4gKlxuICogWW91IGNhbiB0aGVuIGluc3RhbnRpYXRlIHlvdXIgc3ViY2xhc3MgbXVsdGlwbGUgdGltZXMgdG8gbW9kZWwgbXVsdGlwbGVcbiAqIGNvcGllcyBvZiB5b3VyIGFwcGxpY2F0aW9uIHdoaWNoIHNob3VsZCBiZSBiZSBkZXBsb3llZCB0byBkaWZmZXJlbnRcbiAqIGVudmlyb25tZW50cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YWdlIGV4dGVuZHMgQ29uc3RydWN0IHtcbiAgLyoqXG4gICAqIFJldHVybiB0aGUgc3RhZ2UgdGhpcyBjb25zdHJ1Y3QgaXMgY29udGFpbmVkIHdpdGgsIGlmIGF2YWlsYWJsZS4gSWYgY2FsbGVkXG4gICAqIG9uIGEgbmVzdGVkIHN0YWdlLCByZXR1cm5zIGl0cyBwYXJlbnQuXG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgb2YoY29uc3RydWN0OiBJQ29uc3RydWN0KTogU3RhZ2UgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBjb25zdHJ1Y3Qubm9kZS5zY29wZXMucmV2ZXJzZSgpLnNsaWNlKDEpLmZpbmQoU3RhZ2UuaXNTdGFnZSk7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCB3aGV0aGVyIHRoZSBnaXZlbiBjb25zdHJ1Y3QgaXMgYSBzdGFnZS5cbiAgICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc1N0YWdlKHg6IGFueSk6IHggaXMgU3RhZ2Uge1xuICAgIHJldHVybiB4ICE9PSBudWxsICYmIHggaW5zdGFuY2VvZiBTdGFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCByZWdpb24gZm9yIGFsbCByZXNvdXJjZXMgZGVmaW5lZCB3aXRoaW4gdGhpcyBzdGFnZS5cbiAgICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgLy8gcHVibGljIHJlYWRvbmx5IHJlZ2lvbj86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgYWNjb3VudCBmb3IgYWxsIHJlc291cmNlcyBkZWZpbmVkIHdpdGhpbiB0aGlzIHN0YWdlLlxuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICAvLyBwdWJsaWMgcmVhZG9ubHkgYWNjb3VudD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGNsb3VkIGFzc2VtYmx5IGJ1aWxkZXIgdGhhdCBpcyBiZWluZyB1c2VkIGZvciB0aGlzIEFwcFxuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IF9hc3NlbWJseUJ1aWxkZXI6IGN4YXBpLkNsb3VkQXNzZW1ibHlCdWlsZGVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgc3RhZ2UuIEJhc2VkIG9uIG5hbWVzIG9mIHRoZSBwYXJlbnQgc3RhZ2VzIHNlcGFyYXRlZCBieVxuICAgKiBoeXBlbnMuXG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBzdGFnZU5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBhcmVudCBzdGFnZSBvciBgdW5kZWZpbmVkYCBpZiB0aGlzIGlzIHRoZSBhcHAuXG4gICAqICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHBhcmVudFN0YWdlPzogU3RhZ2U7XG5cbiAgLyoqXG4gICAqIFRoZSBjYWNoZWQgYXNzZW1ibHkgaWYgaXQgd2FzIGFscmVhZHkgYnVpbHRcbiAgICovXG4gIHByaXZhdGUgYXNzZW1ibHk/OiBjeGFwaS5DbG91ZEFzc2VtYmx5O1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBTdGFnZVByb3BzID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgaWYgKGlkICE9PSBcIlwiICYmICEvXlthLXpdW2EtejAtOVxcLVxcX1xcLl0rJC9pLnRlc3QoaWQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBpbnZhbGlkIHN0YWdlIG5hbWUgXCIke2lkfVwiLiBTdGFnZSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBhbmQgY29udGFpbiBvbmx5IGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLCBoeXBlbnMgKCctJyksIHVuZGVyc2NvcmVzICgnXycpIGFuZCBwZXJpb2RzICgnLicpYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmVudFN0YWdlID0gU3RhZ2Uub2YodGhpcyk7XG5cbiAgICAvLyB0aGlzLnJlZ2lvbiA9IHByb3BzLmVudj8ucmVnaW9uID8/IHRoaXMucGFyZW50U3RhZ2U/LnJlZ2lvbjtcbiAgICAvLyB0aGlzLmFjY291bnQgPSBwcm9wcy5lbnY/LmFjY291bnQgPz8gdGhpcy5wYXJlbnRTdGFnZT8uYWNjb3VudDtcblxuICAgIHRoaXMuX2Fzc2VtYmx5QnVpbGRlciA9IHRoaXMuY3JlYXRlQnVpbGRlcihwcm9wcy5vdXRkaXIpO1xuICAgIHRoaXMuc3RhZ2VOYW1lID0gW3RoaXMucGFyZW50U3RhZ2U/LnN0YWdlTmFtZSwgaWRdXG4gICAgICAuZmlsdGVyKCh4KSA9PiB4KVxuICAgICAgLmpvaW4oXCItXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFydGlmYWN0IElEIG9mIHRoZSBhc3NlbWJseSBpZiBpdCBpcyBhIG5lc3RlZCBzdGFnZS4gVGhlIHJvb3Qgc3RhZ2UgKGFwcClcbiAgICogd2lsbCByZXR1cm4gYW4gZW1wdHkgc3RyaW5nLlxuICAgKlxuICAgKiBEZXJpdmVkIGZyb20gdGhlIGNvbnN0cnVjdCBwYXRoLlxuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBwdWJsaWMgZ2V0IGFydGlmYWN0SWQoKSB7XG4gICAgaWYgKCF0aGlzLm5vZGUucGF0aCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBgYXNzZW1ibHktJHt0aGlzLm5vZGUucGF0aFxuICAgICAgLnJlcGxhY2UoL1xcLy9nLCBcIi1cIilcbiAgICAgIC5yZXBsYWNlKC9eLSt8LSskL2csIFwiXCIpfWA7XG4gIH1cblxuICAvKipcbiAgICogU3ludGhlc2l6ZSB0aGlzIHN0YWdlIGludG8gYSBjbG91ZCBhc3NlbWJseS5cbiAgICpcbiAgICogT25jZSBhbiBhc3NlbWJseSBoYXMgYmVlbiBzeW50aGVzaXplZCwgaXQgY2Fubm90IGJlIG1vZGlmaWVkLiBTdWJzZXF1ZW50XG4gICAqIGNhbGxzIHdpbGwgcmV0dXJuIHRoZSBzYW1lIGFzc2VtYmx5LlxuICAgKi9cbiAgcHVibGljIHN5bnRoKG9wdGlvbnM6IFN0YWdlU3ludGhlc2lzT3B0aW9ucyA9IHt9KTogY3hhcGkuQ2xvdWRBc3NlbWJseSB7XG4gICAgaWYgKCF0aGlzLmFzc2VtYmx5KSB7XG4gICAgICB0aGlzLmFzc2VtYmx5ID0gc3ludGhlc2l6ZSh0aGlzLCB7XG4gICAgICAgIHNraXBWYWxpZGF0aW9uOiBvcHRpb25zLnNraXBWYWxpZGF0aW9uLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYXNzZW1ibHk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUJ1aWxkZXIob3V0ZGlyPzogc3RyaW5nKSB7XG4gICAgLy8gY2Fubm90IHNwZWNpZnkgXCJvdXRkaXJcIiBpZiB3ZSBhcmUgYSBuZXN0ZWQgc3RhZ2VcbiAgICBpZiAodGhpcy5wYXJlbnRTdGFnZSAmJiBvdXRkaXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJvdXRkaXJcIiBjYW5ub3QgYmUgc3BlY2lmaWVkIGZvciBuZXN0ZWQgc3RhZ2VzJyk7XG4gICAgfVxuXG4gICAgLy8gTmVlZCB0byBkZXRlcm1pbmUgZml4ZWQgb3V0cHV0IGRpcmVjdG9yeSBhbHJlYWR5LCBiZWNhdXNlIHdlIG11c3Qga25vdyB3aGVyZVxuICAgIC8vIHRvIHdyaXRlIHN1Yi1hc3NlbWJsaWVzICh3aGljaCBtdXN0IGhhcHBlbiBiZWZvcmUgd2UgYWN0dWFsbHkgZ2V0IHRvIHRoaXMgYXBwJ3NcbiAgICAvLyBzeW50aGVzaXplKCkgcGhhc2UpLlxuICAgIHJldHVybiB0aGlzLnBhcmVudFN0YWdlXG4gICAgICA/IHRoaXMucGFyZW50U3RhZ2UuX2Fzc2VtYmx5QnVpbGRlci5jcmVhdGVOZXN0ZWRBc3NlbWJseShcbiAgICAgICAgICB0aGlzLmFydGlmYWN0SWQsXG4gICAgICAgICAgdGhpcy5ub2RlLnBhdGhcbiAgICAgICAgKVxuICAgICAgOiBuZXcgY3hhcGkuQ2xvdWRBc3NlbWJseUJ1aWxkZXIob3V0ZGlyKTtcbiAgfVxufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGFzc2VtbHkgc3ludGhlc2lzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0YWdlU3ludGhlc2lzT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTaG91bGQgd2Ugc2tpcCBjb25zdHJ1Y3QgdmFsaWRhdGlvbi5cbiAgICogQGRlZmF1bHQgLSBmYWxzZVxuICAgKi9cbiAgcmVhZG9ubHkgc2tpcFZhbGlkYXRpb24/OiBib29sZWFuO1xufVxuIl19