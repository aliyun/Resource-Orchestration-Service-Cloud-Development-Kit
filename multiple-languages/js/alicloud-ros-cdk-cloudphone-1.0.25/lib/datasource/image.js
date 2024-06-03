"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.ImageProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cloudphone_generated_1 = require("./cloudphone.generated");
Object.defineProperty(exports, "ImageProperty", { enumerable: true, get: function () { return cloudphone_generated_1.RosImage; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CloudPhone::Image`, which is used to query the information about an image.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-image
 */
class Image extends ros.Resource {
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
        const rosImage = new cloudphone_generated_1.RosImage(this, id, {
            imageId: props.imageId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosImage;
        this.attrCreateTime = rosImage.attrCreateTime;
        this.attrDescription = rosImage.attrDescription;
        this.attrImageCategory = rosImage.attrImageCategory;
        this.attrImageId = rosImage.attrImageId;
        this.attrImageName = rosImage.attrImageName;
        this.attrIsSelfShared = rosImage.attrIsSelfShared;
        this.attrOsName = rosImage.attrOsName;
        this.attrOsNameEn = rosImage.attrOsNameEn;
        this.attrOsType = rosImage.attrOsType;
        this.attrPlatform = rosImage.attrPlatform;
        this.attrProgress = rosImage.attrProgress;
        this.attrStatus = rosImage.attrStatus;
        this.attrUsage = rosImage.attrUsage;
    }
}
exports.Image = Image;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsaUVBQWtEO0FBRTdCLDhGQUZaLCtCQUFRLE9BRWlCO0FBY2xDOzs7O0dBSUc7QUFDSCxNQUFhLEtBQU0sU0FBUSxHQUFHLENBQUMsUUFBUTtJQXVFbkM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBaUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUM1RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sUUFBUSxHQUFHLElBQUksK0JBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztTQUN6QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUM7UUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0NBQ0o7QUFyR0Qsc0JBcUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSW1hZ2UgfSBmcm9tICcuL2Nsb3VkcGhvbmUuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW1hZ2UgYXMgSW1hZ2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEltYWdlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jbG91ZHBob25lLWltYWdlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbWFnZUlkOiBJbWFnZSBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbWFnZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpDbG91ZFBob25lOjpJbWFnZWAsIHdoaWNoIGlzIHVzZWQgdG8gcXVlcnkgdGhlIGluZm9ybWF0aW9uIGFib3V0IGFuIGltYWdlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zSW1hZ2VgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtY2xvdWRwaG9uZS1pbWFnZVxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IEltYWdlUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENyZWF0ZVRpbWU6IEltYWdlIGNyZWF0aW9uIHRpbWUsIGluIElTTyA4NjAxIGZvcm1hdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNyZWF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEZXNjcmlwdGlvbjogSW1hZ2UgZGVzY3JpcHRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZXNjcmlwdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEltYWdlQ2F0ZWdvcnk6IEltYWdlIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbWFnZUNhdGVnb3J5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW1hZ2VJZDogSW1hZ2UgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbWFnZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW1hZ2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgbWlycm9yIGltYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW1hZ2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSXNTZWxmU2hhcmVkOiBXaGV0aGVyIHRoZSBpbWFnZSBoYXMgYmVlbiBzaGFyZWQgd2l0aCBvdGhlciB1c2Vycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklzU2VsZlNoYXJlZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE9zTmFtZTogVGhlIENoaW5lc2UgZGlzcGxheSBuYW1lIG9mIHRoZSBvcGVyYXRpbmcgc3lzdGVtLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyT3NOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3NOYW1lRW46IFRoZSBFbmdsaXNoIGRpc3BsYXkgbmFtZSBvZiB0aGUgb3BlcmF0aW5nIHN5c3RlbS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9zTmFtZUVuOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3NUeXBlOiBPcGVyYXRpbmcgc3lzdGVtIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPc1R5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQbGF0Zm9ybTogT3BlcmF0aW5nIHN5c3RlbSBkaXN0cmlidXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQbGF0Zm9ybTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFByb2dyZXNzOiBUaGUgcHJvZ3Jlc3Mgb2YgbWlycm9yIGltYWdlIHByb2R1Y3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcm9ncmVzczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFN0YXR1czogSW1hZ2Ugc3RhdGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTdGF0dXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBVc2FnZTogV2hldGhlciB0aGUgaW1hZ2UgaXMgYWxyZWFkeSBydW5uaW5nIGluIHRoZSBjbG91ZCBwaG9uZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVzYWdlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW1hZ2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0ltYWdlID0gbmV3IFJvc0ltYWdlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgaW1hZ2VJZDogcHJvcHMuaW1hZ2VJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NJbWFnZTtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHJvc0ltYWdlLmF0dHJDcmVhdGVUaW1lO1xuICAgICAgICB0aGlzLmF0dHJEZXNjcmlwdGlvbiA9IHJvc0ltYWdlLmF0dHJEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5hdHRySW1hZ2VDYXRlZ29yeSA9IHJvc0ltYWdlLmF0dHJJbWFnZUNhdGVnb3J5O1xuICAgICAgICB0aGlzLmF0dHJJbWFnZUlkID0gcm9zSW1hZ2UuYXR0ckltYWdlSWQ7XG4gICAgICAgIHRoaXMuYXR0ckltYWdlTmFtZSA9IHJvc0ltYWdlLmF0dHJJbWFnZU5hbWU7XG4gICAgICAgIHRoaXMuYXR0cklzU2VsZlNoYXJlZCA9IHJvc0ltYWdlLmF0dHJJc1NlbGZTaGFyZWQ7XG4gICAgICAgIHRoaXMuYXR0ck9zTmFtZSA9IHJvc0ltYWdlLmF0dHJPc05hbWU7XG4gICAgICAgIHRoaXMuYXR0ck9zTmFtZUVuID0gcm9zSW1hZ2UuYXR0ck9zTmFtZUVuO1xuICAgICAgICB0aGlzLmF0dHJPc1R5cGUgPSByb3NJbWFnZS5hdHRyT3NUeXBlO1xuICAgICAgICB0aGlzLmF0dHJQbGF0Zm9ybSA9IHJvc0ltYWdlLmF0dHJQbGF0Zm9ybTtcbiAgICAgICAgdGhpcy5hdHRyUHJvZ3Jlc3MgPSByb3NJbWFnZS5hdHRyUHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMuYXR0clN0YXR1cyA9IHJvc0ltYWdlLmF0dHJTdGF0dXM7XG4gICAgICAgIHRoaXMuYXR0clVzYWdlID0gcm9zSW1hZ2UuYXR0clVzYWdlO1xuICAgIH1cbn1cbiJdfQ==