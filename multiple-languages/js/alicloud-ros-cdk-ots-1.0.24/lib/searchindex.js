"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchIndex = exports.SearchIndexProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ots_generated_1 = require("./ots.generated");
Object.defineProperty(exports, "SearchIndexProperty", { enumerable: true, get: function () { return ots_generated_1.RosSearchIndex; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OTS::SearchIndex`, which is used to create a search index for a data table. You can create multiple search indexes for a data table.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSearchIndex`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-searchindex
 */
class SearchIndex extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosSearchIndex = new ots_generated_1.RosSearchIndex(this, id, {
            indexName: props.indexName,
            instanceName: props.instanceName,
            tableName: props.tableName,
            fieldSchemas: props.fieldSchemas,
            indexSort: props.indexSort,
            indexSetting: props.indexSetting,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSearchIndex;
        this.attrIndexName = rosSearchIndex.attrIndexName;
    }
}
exports.SearchIndex = SearchIndex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2hpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQXlDOUM7Ozs7R0FJRztBQUNILE1BQWEsV0FBWSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBV3pDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVCLEVBQUUsbUNBQTJDLElBQUk7UUFDbEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtTQUNuQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUM7SUFDdEQsQ0FBQztDQUNKO0FBbENELGtDQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1NlYXJjaEluZGV4IH0gZnJvbSAnLi9vdHMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU2VhcmNoSW5kZXggYXMgU2VhcmNoSW5kZXhQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFNlYXJjaEluZGV4YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW90cy1zZWFyY2hpbmRleFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaEluZGV4UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZmllbGRTY2hlbWFzOiBsaXN0IG9mIGZpZWxkX3NjaGVtYS5cbiAgICAgKi9cbiAgICByZWFkb25seSBmaWVsZFNjaGVtYXM6IEFycmF5PFJvc1NlYXJjaEluZGV4LkZpZWxkU2NoZW1hc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluZGV4TmFtZTogVGhlIGluZGV4IG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5kZXhOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBPVFMgaW5zdGFuY2UgaW4gd2hpY2ggdGFibGUgd2lsbCBsb2NhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWJsZU5hbWU6IFRoZSB0YWJsZSBuYW1lIG9mIHRoZSBPVFMgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFibGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbmRleFNldHRpbmc6IEluZGV4IHNldHRpbmdzXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5kZXhTZXR0aW5nPzogUm9zU2VhcmNoSW5kZXguSW5kZXhTZXR0aW5nUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbmRleFNvcnQ6IFRoaXMgcGFyYW1ldGVyIHNwZWNpZmllcyBob3cgZGF0YSBpcyBzb3J0ZWQuIFxuICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBkYXRhIGlzIHNvcnRlZCBpbiB0aGUgc2FtZSB3YXkgYXMgdGhlIHByaW1hcnkga2V5IG9mIHRoZSB0YWJsZS4gXG4gICAgICogSWYgdGhlIHNlYXJjaCBpbmRleCBjb250YWlucyBORVNURUQgZmllbGRzLCBkYXRhIGlzIG5vdCBzb3J0ZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbmRleFNvcnQ/OiBSb3NTZWFyY2hJbmRleC5JbmRleFNvcnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleGAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgc2VhcmNoIGluZGV4IGZvciBhIGRhdGEgdGFibGUuIFlvdSBjYW4gY3JlYXRlIG11bHRpcGxlIHNlYXJjaCBpbmRleGVzIGZvciBhIGRhdGEgdGFibGUuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NTZWFyY2hJbmRleGBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW90cy1zZWFyY2hpbmRleFxuICovXG5leHBvcnQgY2xhc3MgU2VhcmNoSW5kZXggZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFNlYXJjaEluZGV4UHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluZGV4TmFtZTogSW5kZXggbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluZGV4TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNlYXJjaEluZGV4UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NTZWFyY2hJbmRleCA9IG5ldyBSb3NTZWFyY2hJbmRleCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGluZGV4TmFtZTogcHJvcHMuaW5kZXhOYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2VOYW1lOiBwcm9wcy5pbnN0YW5jZU5hbWUsXG4gICAgICAgICAgICB0YWJsZU5hbWU6IHByb3BzLnRhYmxlTmFtZSxcbiAgICAgICAgICAgIGZpZWxkU2NoZW1hczogcHJvcHMuZmllbGRTY2hlbWFzLFxuICAgICAgICAgICAgaW5kZXhTb3J0OiBwcm9wcy5pbmRleFNvcnQsXG4gICAgICAgICAgICBpbmRleFNldHRpbmc6IHByb3BzLmluZGV4U2V0dGluZyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NTZWFyY2hJbmRleDtcbiAgICAgICAgdGhpcy5hdHRySW5kZXhOYW1lID0gcm9zU2VhcmNoSW5kZXguYXR0ckluZGV4TmFtZTtcbiAgICB9XG59XG4iXX0=