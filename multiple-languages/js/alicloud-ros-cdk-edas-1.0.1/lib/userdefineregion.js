"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDefineRegion = exports.UserDefineRegionProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const edas_generated_1 = require("./edas.generated");
Object.defineProperty(exports, "UserDefineRegionProperty", { enumerable: true, get: function () { return edas_generated_1.RosUserDefineRegion; } });
/**
 * A ROS resource type:  `ALIYUN::EDAS::UserDefineRegion`
 */
class UserDefineRegion extends ros.Resource {
    /**
     * Create a new `ALIYUN::EDAS::UserDefineRegion`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosUserDefineRegion = new edas_generated_1.RosUserDefineRegion(this, id, {
            description: props.description,
            regionName: props.regionName,
            regionTag: props.regionTag,
            debugEnable: props.debugEnable,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUserDefineRegion;
        this.attrBelongRegion = rosUserDefineRegion.attrBelongRegion;
        this.attrDebugEnable = rosUserDefineRegion.attrDebugEnable;
        this.attrId = rosUserDefineRegion.attrId;
        this.attrRegionName = rosUserDefineRegion.attrRegionName;
        this.attrUserId = rosUserDefineRegion.attrUserId;
    }
}
exports.UserDefineRegion = UserDefineRegion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmRlZmluZXJlZ2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJkZWZpbmVyZWdpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHFEQUF1RDtBQUV2Qix5R0FGdkIsb0NBQW1CLE9BRTRCO0FBNEJ4RDs7R0FFRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQzlDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBNEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN2SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxvQ0FBbUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztTQUNqQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxHQUFHLG1CQUFtQixDQUFDLGVBQWUsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFtQixDQUFDLFVBQVUsQ0FBQztJQUNyRCxDQUFDO0NBQ0o7QUF2REQsNENBdURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zVXNlckRlZmluZVJlZ2lvbiB9IGZyb20gJy4vZWRhcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NVc2VyRGVmaW5lUmVnaW9uIGFzIFVzZXJEZWZpbmVSZWdpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RURBUzo6VXNlckRlZmluZVJlZ2lvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVc2VyRGVmaW5lUmVnaW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVnaW9uTmFtZTogTG9naWNhbCByZWdpb24gKG9yIG5hbWVzcGFjZSkgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZ2lvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlZ2lvblRhZzogTG9naWMgcmVnaW9uIChvciBuYW1lc3BhY2UpIElEIChmb3JtYXQ6IFwicGh5c2ljYWwgcmVnaW9uIElEOiBsb2dpY2FsIHpvbmUgaWRlbnRpZmllclwiLCBvciBcImxvZ2ljYWwgem9uZSBpZGVudGlmaWVyXCIpXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVnaW9uVGFnOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWJ1Z0VuYWJsZTogV2hldGhlciBkZWJ1ZyBpcyBlbmFibGVcbiAgICAgKi9cbiAgICByZWFkb25seSBkZWJ1Z0VuYWJsZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogTG9naWMgcmVnaW9uIChvciBuYW1lc3BhY2UpIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVEQVM6OlVzZXJEZWZpbmVSZWdpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyRGVmaW5lUmVnaW9uIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBCZWxvbmdSZWdpb246IFVuZGVyIHRoZSBwaHlzaWNhbCByZWdpb24gSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckJlbG9uZ1JlZ2lvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERlYnVnRW5hYmxlOiBXaGV0aGVyIGRlYnVnIGlzIGVuYWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVidWdFbmFibGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJZDogUmVzb3VyY2UgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVnaW9uTmFtZTogUmVnaW9uIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlZ2lvbk5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBVc2VySWQ6IFVzZXIgYWNjb3VudCBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVXNlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RURBUzo6VXNlckRlZmluZVJlZ2lvbmAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogVXNlckRlZmluZVJlZ2lvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1VzZXJEZWZpbmVSZWdpb24gPSBuZXcgUm9zVXNlckRlZmluZVJlZ2lvbih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJlZ2lvbk5hbWU6IHByb3BzLnJlZ2lvbk5hbWUsXG4gICAgICAgICAgICByZWdpb25UYWc6IHByb3BzLnJlZ2lvblRhZyxcbiAgICAgICAgICAgIGRlYnVnRW5hYmxlOiBwcm9wcy5kZWJ1Z0VuYWJsZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NVc2VyRGVmaW5lUmVnaW9uO1xuICAgICAgICB0aGlzLmF0dHJCZWxvbmdSZWdpb24gPSByb3NVc2VyRGVmaW5lUmVnaW9uLmF0dHJCZWxvbmdSZWdpb247XG4gICAgICAgIHRoaXMuYXR0ckRlYnVnRW5hYmxlID0gcm9zVXNlckRlZmluZVJlZ2lvbi5hdHRyRGVidWdFbmFibGU7XG4gICAgICAgIHRoaXMuYXR0cklkID0gcm9zVXNlckRlZmluZVJlZ2lvbi5hdHRySWQ7XG4gICAgICAgIHRoaXMuYXR0clJlZ2lvbk5hbWUgPSByb3NVc2VyRGVmaW5lUmVnaW9uLmF0dHJSZWdpb25OYW1lO1xuICAgICAgICB0aGlzLmF0dHJVc2VySWQgPSByb3NVc2VyRGVmaW5lUmVnaW9uLmF0dHJVc2VySWQ7XG4gICAgfVxufVxuIl19