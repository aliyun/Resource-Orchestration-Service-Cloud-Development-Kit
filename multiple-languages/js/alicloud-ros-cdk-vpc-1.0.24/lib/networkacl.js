"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkAcl = exports.NetworkAclProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "NetworkAclProperty", { enumerable: true, get: function () { return vpc_generated_1.RosNetworkAcl; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::NetworkAcl`, which is used to create a network access control list (ACL).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkAcl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkacl
 */
class NetworkAcl extends ros.Resource {
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
        const rosNetworkAcl = new vpc_generated_1.RosNetworkAcl(this, id, {
            ingressAclEntries: props.ingressAclEntries,
            description: props.description,
            vpcId: props.vpcId,
            egressAclEntries: props.egressAclEntries,
            networkAclName: props.networkAclName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkAcl;
        this.attrNetworkAclEntryName = rosNetworkAcl.attrNetworkAclEntryName;
        this.attrNetworkAclId = rosNetworkAcl.attrNetworkAclId;
    }
}
exports.NetworkAcl = NetworkAcl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya2FjbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldHdvcmthY2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUF1QzVDOzs7O0dBSUc7QUFDSCxNQUFhLFVBQVcsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWdCeEM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNqSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9DLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztTQUN2QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsYUFBYSxDQUFDLHVCQUF1QixDQUFDO1FBQ3JFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7SUFDM0QsQ0FBQztDQUNKO0FBdkNELGdDQXVDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc05ldHdvcmtBY2wgfSBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NOZXR3b3JrQWNsIGFzIE5ldHdvcmtBY2xQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYE5ldHdvcmtBY2xgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tdnBjLW5ldHdvcmthY2xcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrQWNsUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFRoZSBJRCBvZiB0aGUgdmlydHVhbCBwcml2YXRlIGNsb3VkIChWUEMpIHRvIHdoaWNoIHRoZSBuZXR3b3JrIEFDTCBiZWxvbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBuZXR3b3JrIEFDTC5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gbXVzdCBiZSAyIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gVGhlIGRlc2NyaXB0aW9uIG11c3Qgc3RhcnRcbiAgICAgKiB3aXRoIGEgbGV0dGVyIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOlxcL1xcLyBvciBodHRwczpcXC9cXC8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlZ3Jlc3NBY2xFbnRyaWVzOiBUaGUgbGlzdCBvZiBlZ3Jlc3MgbmV0d29yayBBQ0wgZW50cmllcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBlZ3Jlc3NBY2xFbnRyaWVzPzogQXJyYXk8Um9zTmV0d29ya0FjbC5FZ3Jlc3NBY2xFbnRyaWVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5ncmVzc0FjbEVudHJpZXM6IFRoZSBsaXN0IG9mIGluZ3Jlc3MgbmV0d29yayBBQ0wgZW50cmllcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbmdyZXNzQWNsRW50cmllcz86IEFycmF5PFJvc05ldHdvcmtBY2wuSW5ncmVzc0FjbEVudHJpZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuZXR3b3JrQWNsTmFtZTogVGhlIG5hbWUgb2YgdGhlIG5ldHdvcmsgQUNMLlxuICAgICAqIFRoZSBuYW1lIG11c3QgYmUgMiB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgcGVyaW9kc1xuICAgICAqICguKSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIFRoZSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBhbmQgY2Fubm90XG4gICAgICogc3RhcnQgd2l0aCBodHRwOlxcL1xcLyBvciBodHRwczpcXC9cXC8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV0d29ya0FjbE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlZQQzo6TmV0d29ya0FjbGAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgbmV0d29yayBhY2Nlc3MgY29udHJvbCBsaXN0IChBQ0wpLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zTmV0d29ya0FjbGBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXZwYy1uZXR3b3JrYWNsXG4gKi9cbmV4cG9ydCBjbGFzcyBOZXR3b3JrQWNsIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBOZXR3b3JrQWNsUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5ldHdvcmtBY2xFbnRyeU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBpbmJvdW5kIHJ1bGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOZXR3b3JrQWNsRW50cnlOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTmV0d29ya0FjbElkOiBUaGUgSUQgb2YgdGhlIG5ldHdvcmsgQUNMLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmV0d29ya0FjbElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogTmV0d29ya0FjbFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zTmV0d29ya0FjbCA9IG5ldyBSb3NOZXR3b3JrQWNsKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgaW5ncmVzc0FjbEVudHJpZXM6IHByb3BzLmluZ3Jlc3NBY2xFbnRyaWVzLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgZWdyZXNzQWNsRW50cmllczogcHJvcHMuZWdyZXNzQWNsRW50cmllcyxcbiAgICAgICAgICAgIG5ldHdvcmtBY2xOYW1lOiBwcm9wcy5uZXR3b3JrQWNsTmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NOZXR3b3JrQWNsO1xuICAgICAgICB0aGlzLmF0dHJOZXR3b3JrQWNsRW50cnlOYW1lID0gcm9zTmV0d29ya0FjbC5hdHRyTmV0d29ya0FjbEVudHJ5TmFtZTtcbiAgICAgICAgdGhpcy5hdHRyTmV0d29ya0FjbElkID0gcm9zTmV0d29ya0FjbC5hdHRyTmV0d29ya0FjbElkO1xuICAgIH1cbn1cbiJdfQ==