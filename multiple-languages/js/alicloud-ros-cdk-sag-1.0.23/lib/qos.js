"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Qos = exports.QosProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sag_generated_1 = require("./sag.generated");
Object.defineProperty(exports, "QosProperty", { enumerable: true, get: function () { return sag_generated_1.RosQos; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::Qos`ALIYUN::SAG::QoS is used to create a quality of service (QoS) policy for a Smart Access Gateway (SAG) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosQos`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qos
 */
class Qos extends ros.Resource {
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
        const rosQos = new sag_generated_1.RosQos(this, id, {
            qosName: props.qosName,
            qosDescription: props.qosDescription,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosQos;
        this.attrQosId = rosQos.attrQosId;
    }
}
exports.Qos = Qos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicW9zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicW9zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBeUM7QUFFdEIsNEZBRlYsc0JBQU0sT0FFZTtBQXVCOUI7Ozs7R0FJRztBQUNILE1BQWEsR0FBSSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBV2pDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWUsRUFBRSxtQ0FBMkMsSUFBSTtRQUMxRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sTUFBTSxHQUFHLElBQUksc0JBQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ2pDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7U0FDdkMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7Q0FDSjtBQTlCRCxrQkE4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NRb3MgfSBmcm9tICcuL3NhZy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NRb3MgYXMgUW9zUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBRb3NgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tc2FnLXFvc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFFvc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHFvc05hbWU6IFRoZSBuYW1lIG9mIHRoZSBRb1MgcG9saWN5LlxuICAgICAqIFRoZSBuYW1lIG11c3QgYmUgMiB0byAxMDAgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgcGVyaW9kc1xuICAgICAqICguKSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBxb3NOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBxb3NEZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBRb1MgcG9saWN5LlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBtdXN0IGJlIDEgdG8gNTEyIGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsXG4gICAgICogdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBxb3NEZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6U0FHOjpRb3NgQUxJWVVOOjpTQUc6OlFvUyBpcyB1c2VkIHRvIGNyZWF0ZSBhIHF1YWxpdHkgb2Ygc2VydmljZSAoUW9TKSBwb2xpY3kgZm9yIGEgU21hcnQgQWNjZXNzIEdhdGV3YXkgKFNBRykgaW5zdGFuY2UuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NRb3NgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1zYWctcW9zXG4gKi9cbmV4cG9ydCBjbGFzcyBRb3MgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFFvc1Byb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBRb3NJZDogVGhlIElEIG9mIHRoZSBRb1MgcG9saWN5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUW9zSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBRb3NQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc1FvcyA9IG5ldyBSb3NRb3ModGhpcywgaWQsICB7XG4gICAgICAgICAgICBxb3NOYW1lOiBwcm9wcy5xb3NOYW1lLFxuICAgICAgICAgICAgcW9zRGVzY3JpcHRpb246IHByb3BzLnFvc0Rlc2NyaXB0aW9uLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1FvcztcbiAgICAgICAgdGhpcy5hdHRyUW9zSWQgPSByb3NRb3MuYXR0clFvc0lkO1xuICAgIH1cbn1cbiJdfQ==