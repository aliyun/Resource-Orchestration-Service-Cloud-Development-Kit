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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQseURBQTJEO0FBQzNELG1EQUFpRDtBQW9CakQ7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQWEsS0FBTSxTQUFRLDRCQUFTO0lBOERsQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFFBQW9CLEVBQUU7O1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3BELE1BQU0sSUFBSSxLQUFLLENBQ2IsdUJBQXVCLEVBQUUsb0lBQW9JLENBQzlKLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQywrREFBK0Q7UUFDL0Qsa0VBQWtFO1FBRWxFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQUMsSUFBSSxDQUFDLFdBQVcsMENBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQzthQUMvQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBL0VEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFxQjtRQUNwQyxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFNO1FBQzFCLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDO0lBQzFDLENBQUM7SUFnRUQ7Ozs7Ozs7T0FPRztJQUNILElBQVcsVUFBVTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDbkIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDOUIsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7YUFDbkIsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxVQUFpQyxFQUFFO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQVUsQ0FBQyxJQUFJLEVBQUU7Z0JBQy9CLGNBQWMsRUFBRSxPQUFPLENBQUMsY0FBYzthQUN2QyxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU8sYUFBYSxDQUFDLE1BQWU7UUFDbkMsbURBQW1EO1FBQ25ELElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsK0VBQStFO1FBQy9FLGtGQUFrRjtRQUNsRix1QkFBdUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsV0FBVztZQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FDcEQsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDZjtZQUNILENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUFuSUQsc0JBbUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hhcGkgZnJvbSBcIkBhbGljbG91ZC9yb3MtY2RrLWN4YXBpXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QsIElDb25zdHJ1Y3QgfSBmcm9tIFwiLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5pbXBvcnQgeyBzeW50aGVzaXplIH0gZnJvbSBcIi4vcHJpdmF0ZS9zeW50aGVzaXNcIjtcblxuLyoqXG4gKiBJbml0aWFsaXphdGlvbiBwcm9wcyBmb3IgYSBzdGFnZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGFnZVByb3BzIHtcbiAgLyoqXG4gICAqIFRoZSBvdXRwdXQgZGlyZWN0b3J5IGludG8gd2hpY2ggdG8gZW1pdCBzeW50aGVzaXplZCBhcnRpZmFjdHMuXG4gICAqXG4gICAqIENhbiBvbmx5IGJlIHNwZWNpZmllZCBpZiB0aGlzIHN0YWdlIGlzIHRoZSByb290IHN0YWdlIHRoZSBhcHAuIElmIHRoaXMgaXNcbiAgICogc3BlY2lmaWVkIGFuZCB0aGlzIHN0YWdlIGlzIG5lc3RlZCB3aXRoaW4gYW5vdGhlciBzdGFnZSwgYW4gZXJyb3Igd2lsbCBiZVxuICAgKiB0aHJvd24uXG4gICAqXG4gICAqIERlZmF1bHQgLSBmb3IgbmVzdGVkIHN0YWdlcywgb3V0ZGlyIHdpbGwgYmUgZGV0ZXJtaW5lZCBhcyBhIHJlbGF0aXZlXG4gICAqIGRpcmVjdG9yeSB0byB0aGUgb3V0ZGlyIG9mIHRoZSBhcHAuIEZvciBhcHBzLCBpZiBvdXRkaXIgaXMgbm90IHNwZWNpZmllZCwgYVxuICAgKiB0ZW1wb3JhcnkgZGlyZWN0b3J5IHdpbGwgYmUgY3JlYXRlZC5cbiAgICovXG4gIHJlYWRvbmx5IG91dGRpcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBbiBhYnN0cmFjdCBhcHBsaWNhdGlvbiBtb2RlbGluZyB1bml0IGNvbnNpc3Rpbmcgb2YgU3RhY2tzIHRoYXQgc2hvdWxkIGJlXG4gKiBkZXBsb3llZCB0b2dldGhlci5cbiAqXG4gKiBEZXJpdmUgYSBzdWJjbGFzcyBvZiAnU3RhZ2UnIGFuZCB1c2UgaXQgdG8gbW9kZWwgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgeW91clxuICogYXBwbGljYXRpb24uXG4gKlxuICogWW91IGNhbiB0aGVuIGluc3RhbnRpYXRlIHlvdXIgc3ViY2xhc3MgbXVsdGlwbGUgdGltZXMgdG8gbW9kZWwgbXVsdGlwbGVcbiAqIGNvcGllcyBvZiB5b3VyIGFwcGxpY2F0aW9uIHdoaWNoIHNob3VsZCBiZSBiZSBkZXBsb3llZCB0byBkaWZmZXJlbnRcbiAqIGVudmlyb25tZW50cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YWdlIGV4dGVuZHMgQ29uc3RydWN0IHtcbiAgLyoqXG4gICAqIFJldHVybiB0aGUgc3RhZ2UgdGhpcyBjb25zdHJ1Y3QgaXMgY29udGFpbmVkIHdpdGgsIGlmIGF2YWlsYWJsZS4gSWYgY2FsbGVkXG4gICAqIG9uIGEgbmVzdGVkIHN0YWdlLCByZXR1cm5zIGl0cyBwYXJlbnQuXG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgb2YoY29uc3RydWN0OiBJQ29uc3RydWN0KTogU3RhZ2UgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBjb25zdHJ1Y3Qubm9kZS5zY29wZXMucmV2ZXJzZSgpLnNsaWNlKDEpLmZpbmQoU3RhZ2UuaXNTdGFnZSk7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCB3aGV0aGVyIHRoZSBnaXZlbiBjb25zdHJ1Y3QgaXMgYSBzdGFnZS5cbiAgICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc1N0YWdlKHg6IGFueSk6IHggaXMgU3RhZ2Uge1xuICAgIHJldHVybiB4ICE9PSBudWxsICYmIHggaW5zdGFuY2VvZiBTdGFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCByZWdpb24gZm9yIGFsbCByZXNvdXJjZXMgZGVmaW5lZCB3aXRoaW4gdGhpcyBzdGFnZS5cbiAgICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgLy8gcHVibGljIHJlYWRvbmx5IHJlZ2lvbj86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgYWNjb3VudCBmb3IgYWxsIHJlc291cmNlcyBkZWZpbmVkIHdpdGhpbiB0aGlzIHN0YWdlLlxuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICAvLyBwdWJsaWMgcmVhZG9ubHkgYWNjb3VudD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGNsb3VkIGFzc2VtYmx5IGJ1aWxkZXIgdGhhdCBpcyBiZWluZyB1c2VkIGZvciB0aGlzIEFwcFxuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IF9hc3NlbWJseUJ1aWxkZXI6IGN4YXBpLkNsb3VkQXNzZW1ibHlCdWlsZGVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgc3RhZ2UuIEJhc2VkIG9uIG5hbWVzIG9mIHRoZSBwYXJlbnQgc3RhZ2VzIHNlcGFyYXRlZCBieVxuICAgKiBoeXBlbnMuXG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBzdGFnZU5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBhcmVudCBzdGFnZSBvciAndW5kZWZpbmVkJyBpZiB0aGlzIGlzIHRoZSBhcHAuXG4gICAqICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHBhcmVudFN0YWdlPzogU3RhZ2U7XG5cbiAgLyoqXG4gICAqIFRoZSBjYWNoZWQgYXNzZW1ibHkgaWYgaXQgd2FzIGFscmVhZHkgYnVpbHRcbiAgICovXG4gIHByaXZhdGUgYXNzZW1ibHk/OiBjeGFwaS5DbG91ZEFzc2VtYmx5O1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBTdGFnZVByb3BzID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgaWYgKGlkICE9PSBcIlwiICYmICEvXlthLXpdW2EtejAtOVxcLVxcX1xcLl0rJC9pLnRlc3QoaWQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBpbnZhbGlkIHN0YWdlIG5hbWUgXCIke2lkfVwiLiBTdGFnZSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBhbmQgY29udGFpbiBvbmx5IGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLCBoeXBlbnMgKCctJyksIHVuZGVyc2NvcmVzICgnXycpIGFuZCBwZXJpb2RzICgnLicpYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmVudFN0YWdlID0gU3RhZ2Uub2YodGhpcyk7XG5cbiAgICAvLyB0aGlzLnJlZ2lvbiA9IHByb3BzLmVudj8ucmVnaW9uID8/IHRoaXMucGFyZW50U3RhZ2U/LnJlZ2lvbjtcbiAgICAvLyB0aGlzLmFjY291bnQgPSBwcm9wcy5lbnY/LmFjY291bnQgPz8gdGhpcy5wYXJlbnRTdGFnZT8uYWNjb3VudDtcblxuICAgIHRoaXMuX2Fzc2VtYmx5QnVpbGRlciA9IHRoaXMuY3JlYXRlQnVpbGRlcihwcm9wcy5vdXRkaXIpO1xuICAgIHRoaXMuc3RhZ2VOYW1lID0gW3RoaXMucGFyZW50U3RhZ2U/LnN0YWdlTmFtZSwgaWRdXG4gICAgICAuZmlsdGVyKCh4KSA9PiB4KVxuICAgICAgLmpvaW4oXCItXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFydGlmYWN0IElEIG9mIHRoZSBhc3NlbWJseSBpZiBpdCBpcyBhIG5lc3RlZCBzdGFnZS4gVGhlIHJvb3Qgc3RhZ2UgYXBwXG4gICAqIHdpbGwgcmV0dXJuIGFuIGVtcHR5IHN0cmluZy5cbiAgICpcbiAgICogRGVyaXZlZCBmcm9tIHRoZSBjb25zdHJ1Y3QgcGF0aC5cbiAgICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgcHVibGljIGdldCBhcnRpZmFjdElkKCkge1xuICAgIGlmICghdGhpcy5ub2RlLnBhdGgpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gYGFzc2VtYmx5LSR7dGhpcy5ub2RlLnBhdGhcbiAgICAgIC5yZXBsYWNlKC9cXC8vZywgXCItXCIpXG4gICAgICAucmVwbGFjZSgvXi0rfC0rJC9nLCBcIlwiKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRoZXNpemUgdGhpcyBzdGFnZSBpbnRvIGEgY2xvdWQgYXNzZW1ibHkuXG4gICAqXG4gICAqIE9uY2UgYW4gYXNzZW1ibHkgaGFzIGJlZW4gc3ludGhlc2l6ZWQsIGl0IGNhbm5vdCBiZSBtb2RpZmllZC4gU3Vic2VxdWVudFxuICAgKiBjYWxscyB3aWxsIHJldHVybiB0aGUgc2FtZSBhc3NlbWJseS5cbiAgICovXG4gIHB1YmxpYyBzeW50aChvcHRpb25zOiBTdGFnZVN5bnRoZXNpc09wdGlvbnMgPSB7fSk6IGN4YXBpLkNsb3VkQXNzZW1ibHkge1xuICAgIGlmICghdGhpcy5hc3NlbWJseSkge1xuICAgICAgdGhpcy5hc3NlbWJseSA9IHN5bnRoZXNpemUodGhpcywge1xuICAgICAgICBza2lwVmFsaWRhdGlvbjogb3B0aW9ucy5za2lwVmFsaWRhdGlvbixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFzc2VtYmx5O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVCdWlsZGVyKG91dGRpcj86IHN0cmluZykge1xuICAgIC8vIGNhbm5vdCBzcGVjaWZ5IFwib3V0ZGlyXCIgaWYgd2UgYXJlIGEgbmVzdGVkIHN0YWdlXG4gICAgaWYgKHRoaXMucGFyZW50U3RhZ2UgJiYgb3V0ZGlyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wib3V0ZGlyXCIgY2Fubm90IGJlIHNwZWNpZmllZCBmb3IgbmVzdGVkIHN0YWdlcycpO1xuICAgIH1cblxuICAgIC8vIE5lZWQgdG8gZGV0ZXJtaW5lIGZpeGVkIG91dHB1dCBkaXJlY3RvcnkgYWxyZWFkeSwgYmVjYXVzZSB3ZSBtdXN0IGtub3cgd2hlcmVcbiAgICAvLyB0byB3cml0ZSBzdWItYXNzZW1ibGllcyAod2hpY2ggbXVzdCBoYXBwZW4gYmVmb3JlIHdlIGFjdHVhbGx5IGdldCB0byB0aGlzIGFwcCdzXG4gICAgLy8gc3ludGhlc2l6ZSgpIHBoYXNlKS5cbiAgICByZXR1cm4gdGhpcy5wYXJlbnRTdGFnZVxuICAgICAgPyB0aGlzLnBhcmVudFN0YWdlLl9hc3NlbWJseUJ1aWxkZXIuY3JlYXRlTmVzdGVkQXNzZW1ibHkoXG4gICAgICAgICAgdGhpcy5hcnRpZmFjdElkLFxuICAgICAgICAgIHRoaXMubm9kZS5wYXRoXG4gICAgICAgIClcbiAgICAgIDogbmV3IGN4YXBpLkNsb3VkQXNzZW1ibHlCdWlsZGVyKG91dGRpcik7XG4gIH1cbn1cblxuLyoqXG4gKiBPcHRpb25zIGZvciBhc3NlbWx5IHN5bnRoZXNpcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGFnZVN5bnRoZXNpc09wdGlvbnMge1xuICAvKipcbiAgICogU2hvdWxkIHdlIHNraXAgY29uc3RydWN0IHZhbGlkYXRpb24uXG4gICAqIEBkZWZhdWx0IC0gZmFsc2VcbiAgICovXG4gIHJlYWRvbmx5IHNraXBWYWxpZGF0aW9uPzogYm9vbGVhbjtcbn1cbiJdfQ==