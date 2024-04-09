"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dataset = exports.DatasetProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const nlpautoml_generated_1 = require("./nlpautoml.generated");
Object.defineProperty(exports, "DatasetProperty", { enumerable: true, get: function () { return nlpautoml_generated_1.RosDataset; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NLPAUTOML::Dataset`, which is used to create a dataset.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDataset`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-dataset
 */
class Dataset extends ros.Resource {
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
        const rosDataset = new nlpautoml_generated_1.RosDataset(this, id, {
            datasetName: props.datasetName,
            projectId: props.projectId,
            datasetRecord: props.datasetRecord,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDataset;
        this.attrDatasetId = rosDataset.attrDatasetId;
    }
}
exports.Dataset = Dataset;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLCtEQUFtRDtBQUU1QixnR0FGZCxnQ0FBVSxPQUVtQjtBQXdCdEM7Ozs7R0FJRztBQUNILE1BQWEsT0FBUSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBV3JDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW1CLEVBQUUsbUNBQTJDLElBQUk7UUFDOUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFVBQVUsR0FBRyxJQUFJLGdDQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUN6QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtTQUNyQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDbEQsQ0FBQztDQUNKO0FBL0JELDBCQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0RhdGFzZXQgfSBmcm9tICcuL25scGF1dG9tbC5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NEYXRhc2V0IGFzIERhdGFzZXRQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYERhdGFzZXRgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbmxwYXV0b21sLWRhdGFzZXRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYXRhc2V0UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGF0YXNldE5hbWU6IFRoZSBuYW1lIG9mIGRhdGFzZXQuIENhbm5vdCBzdGFydCB3aXRoIG51bWJlcnMgYW5kIHN5bWJvbHMsIGFuZCB0aGUgbGVuZ3RoIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gMzIgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYXRhc2V0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJvamVjdElkOiBUaGUgSUQgb2YgcHJvamVjdC4gVG8gY3JlYXRlIGEgZGF0YXNldCB1bmRlciBhIGNlcnRhaW4gcHJvamVjdCwgZmlsbCBpbiB0aGUgdGFyZ2V0IHByb2plY3QgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvamVjdElkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYXRhc2V0UmVjb3JkOiBVcGxvYWQgbGFiZWxlZCBkYXRhIHRvIHRoZSBkYXRhc2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRhdGFzZXRSZWNvcmQ/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpOTFBBVVRPTUw6OkRhdGFzZXRgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIGRhdGFzZXQuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NEYXRhc2V0YGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbmxwYXV0b21sLWRhdGFzZXRcbiAqL1xuZXhwb3J0IGNsYXNzIERhdGFzZXQgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IERhdGFzZXRQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGF0YXNldElkOiBUaGUgZGF0YXNldCBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRhdGFzZXRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERhdGFzZXRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0RhdGFzZXQgPSBuZXcgUm9zRGF0YXNldCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRhdGFzZXROYW1lOiBwcm9wcy5kYXRhc2V0TmFtZSxcbiAgICAgICAgICAgIHByb2plY3RJZDogcHJvcHMucHJvamVjdElkLFxuICAgICAgICAgICAgZGF0YXNldFJlY29yZDogcHJvcHMuZGF0YXNldFJlY29yZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NEYXRhc2V0O1xuICAgICAgICB0aGlzLmF0dHJEYXRhc2V0SWQgPSByb3NEYXRhc2V0LmF0dHJEYXRhc2V0SWQ7XG4gICAgfVxufVxuIl19