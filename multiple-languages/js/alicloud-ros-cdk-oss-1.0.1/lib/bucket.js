"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bucket = exports.BucketProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const oss_generated_1 = require("./oss.generated");
Object.defineProperty(exports, "BucketProperty", { enumerable: true, get: function () { return oss_generated_1.RosBucket; } });
/**
 * A ROS resource type:  `ALIYUN::OSS::Bucket`
 */
class Bucket extends ros.Resource {
    /**
     * Create a new `ALIYUN::OSS::Bucket`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosBucket = new oss_generated_1.RosBucket(this, id, {
            policy: props.policy,
            corsConfiguration: props.corsConfiguration,
            deletionForce: props.deletionForce ? props.deletionForce : false,
            bucketName: props.bucketName,
            storageClass: props.storageClass,
            loggingConfiguration: props.loggingConfiguration,
            websiteConfiguration: props.websiteConfiguration,
            refererConfiguration: props.refererConfiguration,
            lifecycleConfiguration: props.lifecycleConfiguration,
            serverSideEncryptionConfiguration: props.serverSideEncryptionConfiguration,
            accessControl: props.accessControl ? props.accessControl : 'private',
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBucket;
        this.attrDomainName = rosBucket.attrDomainName;
        this.attrInternalDomainName = rosBucket.attrInternalDomainName;
        this.attrName = rosBucket.attrName;
    }
}
exports.Bucket = Bucket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBNEM7QUFFdEIsK0ZBRmIseUJBQVMsT0FFa0I7QUFvRXBDOztHQUVHO0FBQ0gsTUFBYSxNQUFPLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFzQnBDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBa0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUM3RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sU0FBUyxHQUFHLElBQUkseUJBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3ZDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ2hFLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtZQUNoRCxvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLHNCQUFzQjtZQUNwRCxpQ0FBaUMsRUFBRSxLQUFLLENBQUMsaUNBQWlDO1lBQzFFLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ3BFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUM7UUFDL0MsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztDQUNKO0FBbkRELHdCQW1EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0J1Y2tldCB9IGZyb20gJy4vb3NzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0J1Y2tldCBhcyBCdWNrZXRQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6T1NTOjpCdWNrZXRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQnVja2V0UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYnVja2V0TmFtZTogYnVja2V0IG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYnVja2V0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNjZXNzQ29udHJvbDogVGhlIGFjY2VzcyBjb250cm9sIGxpc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjZXNzQ29udHJvbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvcnNDb25maWd1cmF0aW9uOiBSdWxlcyB0aGF0IGRlZmluZSBjcm9zcy1vcmlnaW4gcmVzb3VyY2Ugc2hhcmluZyBvZiBvYmplY3RzIGluIHRoaXMgYnVja2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvcnNDb25maWd1cmF0aW9uPzogUm9zQnVja2V0LkNPUlNDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWxldGlvbkZvcmNlOiBXaGV0aGVyIGZvcmNlIGRlbGV0ZSB0aGUgcmVsYXRpdmUgb2JqZWN0cyBpbiB0aGUgYnVja2V0LiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uRm9yY2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbGlmZWN5Y2xlQ29uZmlndXJhdGlvbjogUnVsZXMgdGhhdCBkZWZpbmUgaG93IG9zcyBidWNrZXQgbWFuYWdlcyBvYmplY3RzIGR1cmluZyB0aGVpciBsaWZldGltZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsaWZlY3ljbGVDb25maWd1cmF0aW9uPzogUm9zQnVja2V0LkxpZmVjeWNsZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvZ2dpbmdDb25maWd1cmF0aW9uOiBTZXR0aW5ncyB0aGF0IGRlZmluZXMgd2hlcmUgbG9ncyBhcmUgc3RvcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvZ2dpbmdDb25maWd1cmF0aW9uPzogUm9zQnVja2V0LkxvZ2dpbmdDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwb2xpY3k6IEJ1Y2tldCBwb2xpY3lcbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xpY3k/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZWZlcmVyQ29uZmlndXJhdGlvbjogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmZXJlckNvbmZpZ3VyYXRpb24/OiBSb3NCdWNrZXQuUmVmZXJlckNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbjogU3BlY2lmaWVzIHRoZSBidWNrZXQgdXNlZCB0byBzdG9yZSB0aGUgc2VydmVyLXNpZGUgZW5jcnlwdGlvbiBydWxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbj86IFJvc0J1Y2tldC5TZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN0b3JhZ2VDbGFzczogU3BlY2lmaWVzIHRoZSBzdG9yYWdlIGNsYXNzIG9mIHRoZSBidWNrZXQuIERlZmF1bHQgaXMgXCJTdGFuZGFyZFwiLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0b3JhZ2VDbGFzcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IEJ1Y2tldCB0YWdzIGluIGstdiBwYWlycyBmb3JtYXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogKGFueSkgfTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHdlYnNpdGVDb25maWd1cmF0aW9uOiBUaGUgcHJvcGVydGllcyBvZiB3ZWJzaXRlIGNvbmZpZy5cbiAgICAgKi9cbiAgICByZWFkb25seSB3ZWJzaXRlQ29uZmlndXJhdGlvbj86IFJvc0J1Y2tldC5XZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpPU1M6OkJ1Y2tldGBcbiAqL1xuZXhwb3J0IGNsYXNzIEJ1Y2tldCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRG9tYWluTmFtZTogVGhlIHB1YmxpYyBETlMgbmFtZSBvZiB0aGUgc3BlY2lmaWVkIGJ1Y2tldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRvbWFpbk5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnRlcm5hbERvbWFpbk5hbWU6IFRoZSBpbnRlcm5hbCBETlMgbmFtZSBvZiB0aGUgc3BlY2lmaWVkIGJ1Y2tldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckludGVybmFsRG9tYWluTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5hbWU6IFRoZSBuYW1lIG9mIEJ1Y2tldFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46Ok9TUzo6QnVja2V0YC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBCdWNrZXRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NCdWNrZXQgPSBuZXcgUm9zQnVja2V0KHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcG9saWN5OiBwcm9wcy5wb2xpY3ksXG4gICAgICAgICAgICBjb3JzQ29uZmlndXJhdGlvbjogcHJvcHMuY29yc0NvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICBkZWxldGlvbkZvcmNlOiBwcm9wcy5kZWxldGlvbkZvcmNlID8gcHJvcHMuZGVsZXRpb25Gb3JjZSA6IGZhbHNlLFxuICAgICAgICAgICAgYnVja2V0TmFtZTogcHJvcHMuYnVja2V0TmFtZSxcbiAgICAgICAgICAgIHN0b3JhZ2VDbGFzczogcHJvcHMuc3RvcmFnZUNsYXNzLFxuICAgICAgICAgICAgbG9nZ2luZ0NvbmZpZ3VyYXRpb246IHByb3BzLmxvZ2dpbmdDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgd2Vic2l0ZUNvbmZpZ3VyYXRpb246IHByb3BzLndlYnNpdGVDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgcmVmZXJlckNvbmZpZ3VyYXRpb246IHByb3BzLnJlZmVyZXJDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgbGlmZWN5Y2xlQ29uZmlndXJhdGlvbjogcHJvcHMubGlmZWN5Y2xlQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIHNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbjogcHJvcHMuc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uLFxuICAgICAgICAgICAgYWNjZXNzQ29udHJvbDogcHJvcHMuYWNjZXNzQ29udHJvbCA/IHByb3BzLmFjY2Vzc0NvbnRyb2wgOiAncHJpdmF0ZScsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0J1Y2tldDtcbiAgICAgICAgdGhpcy5hdHRyRG9tYWluTmFtZSA9IHJvc0J1Y2tldC5hdHRyRG9tYWluTmFtZTtcbiAgICAgICAgdGhpcy5hdHRySW50ZXJuYWxEb21haW5OYW1lID0gcm9zQnVja2V0LmF0dHJJbnRlcm5hbERvbWFpbk5hbWU7XG4gICAgICAgIHRoaXMuYXR0ck5hbWUgPSByb3NCdWNrZXQuYXR0ck5hbWU7XG4gICAgfVxufVxuIl19