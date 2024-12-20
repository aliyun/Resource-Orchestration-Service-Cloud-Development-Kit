"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageBundle = exports.StorageBundleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cloudstoragegateway_generated_1 = require("./cloudstoragegateway.generated");
Object.defineProperty(exports, "StorageBundleProperty", { enumerable: true, get: function () { return cloudstoragegateway_generated_1.RosStorageBundle; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CloudStorageGateway::StorageBundle`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStorageBundle`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundle
 */
class StorageBundle extends ros.Resource {
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
        const rosStorageBundle = new cloudstoragegateway_generated_1.RosStorageBundle(this, id, {
            storageBundleId: props.storageBundleId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStorageBundle;
        this.attrCreateTime = rosStorageBundle.attrCreateTime;
        this.attrDescription = rosStorageBundle.attrDescription;
        this.attrStorageBundleId = rosStorageBundle.attrStorageBundleId;
        this.attrStorageBundleName = rosStorageBundle.attrStorageBundleName;
    }
}
exports.StorageBundle = StorageBundle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZWJ1bmRsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0b3JhZ2VidW5kbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1GQUFtRTtBQUV0QyxzR0FGcEIsZ0RBQWdCLE9BRXlCO0FBc0JsRDs7OztHQUlHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUEwQjNDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLGdCQUFnQixHQUFHLElBQUksZ0RBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjO1NBQ3ZILEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFDdEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFDeEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO1FBQ2hFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztJQUN4RSxDQUFDO0NBQ0o7QUFoREQsc0NBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zU3RvcmFnZUJ1bmRsZSB9IGZyb20gJy4vY2xvdWRzdG9yYWdlZ2F0ZXdheS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTdG9yYWdlQnVuZGxlIGFzIFN0b3JhZ2VCdW5kbGVQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFN0b3JhZ2VCdW5kbGVgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNsb3Vkc3RvcmFnZWdhdGV3YXktc3RvcmFnZWJ1bmRsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VCdW5kbGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzdG9yYWdlQnVuZGxlSWQ6IFRoZSBJRCBvZiB0aGUgZ2F0ZXdheSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0b3JhZ2VCdW5kbGVJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmcmVzaE9wdGlvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpDbG91ZFN0b3JhZ2VHYXRld2F5OjpTdG9yYWdlQnVuZGxlYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc1N0b3JhZ2VCdW5kbGVgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtY2xvdWRzdG9yYWdlZ2F0ZXdheS1zdG9yYWdlYnVuZGxlXG4gKi9cbmV4cG9ydCBjbGFzcyBTdG9yYWdlQnVuZGxlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBTdG9yYWdlQnVuZGxlUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENyZWF0ZVRpbWU6IFRoZSB0aW1lc3RhbXAgd2hlbiB0aGUgZ2F0ZXdheSBjbHVzdGVyIHdhcyBjcmVhdGVkLiBVbml0OiBzZWNvbmRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlYXRlVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGdhdGV3YXkgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlc2NyaXB0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU3RvcmFnZUJ1bmRsZUlkOiBUaGUgSUQgb2YgdGhlIGdhdGV3YXkgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clN0b3JhZ2VCdW5kbGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFN0b3JhZ2VCdW5kbGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZ2F0ZXdheSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3RvcmFnZUJ1bmRsZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBTdG9yYWdlQnVuZGxlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NTdG9yYWdlQnVuZGxlID0gbmV3IFJvc1N0b3JhZ2VCdW5kbGUodGhpcywgaWQsICB7XG4gICAgICAgICAgICBzdG9yYWdlQnVuZGxlSWQ6IHByb3BzLnN0b3JhZ2VCdW5kbGVJZCxcbiAgICAgICAgICAgIHJlZnJlc2hPcHRpb25zOiBwcm9wcy5yZWZyZXNoT3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnJlZnJlc2hPcHRpb25zID09PSBudWxsID8gJ05ldmVyJyA6IHByb3BzLnJlZnJlc2hPcHRpb25zLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1N0b3JhZ2VCdW5kbGU7XG4gICAgICAgIHRoaXMuYXR0ckNyZWF0ZVRpbWUgPSByb3NTdG9yYWdlQnVuZGxlLmF0dHJDcmVhdGVUaW1lO1xuICAgICAgICB0aGlzLmF0dHJEZXNjcmlwdGlvbiA9IHJvc1N0b3JhZ2VCdW5kbGUuYXR0ckRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmF0dHJTdG9yYWdlQnVuZGxlSWQgPSByb3NTdG9yYWdlQnVuZGxlLmF0dHJTdG9yYWdlQnVuZGxlSWQ7XG4gICAgICAgIHRoaXMuYXR0clN0b3JhZ2VCdW5kbGVOYW1lID0gcm9zU3RvcmFnZUJ1bmRsZS5hdHRyU3RvcmFnZUJ1bmRsZU5hbWU7XG4gICAgfVxufVxuIl19