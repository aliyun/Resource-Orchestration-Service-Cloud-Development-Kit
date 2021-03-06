"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitOrder = exports.WaitOrderProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const bss_generated_1 = require("./bss.generated");
Object.defineProperty(exports, "WaitOrderProperty", { enumerable: true, get: function () { return bss_generated_1.RosWaitOrder; } });
/**
 * A ROS resource type:  `ALIYUN::BSS::WaitOrder`
 */
class WaitOrder extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::BSS::WaitOrder`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosWaitOrder = new bss_generated_1.RosWaitOrder(this, id, {
            cancelOnDelete: props.cancelOnDelete === undefined || props.cancelOnDelete === null ? true : props.cancelOnDelete,
            orderIds: props.orderIds,
            waitForOrderProduced: props.waitForOrderProduced === undefined || props.waitForOrderProduced === null ? false : props.waitForOrderProduced,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWaitOrder;
    }
}
exports.WaitOrder = WaitOrder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdG9yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2FpdG9yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBd0IxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBRXZDOzs7T0FHRztJQUVIOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBcUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNoSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sWUFBWSxHQUFHLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYztZQUNqSCxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsb0JBQW9CLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0I7U0FDN0ksRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7SUFDakMsQ0FBQztDQUNKO0FBeEJELDhCQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1dhaXRPcmRlciB9IGZyb20gJy4vYnNzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1dhaXRPcmRlciBhcyBXYWl0T3JkZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6QlNTOjpXYWl0T3JkZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgV2FpdE9yZGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3JkZXJJZHM6IEEgbGlzdCBvZiBvcmRlciBpZHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3JkZXJJZHM6IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjYW5jZWxPbkRlbGV0ZTogQ2FuY2VsIG9yZGVyIHdoZXJlIGRlbGV0ZSB0aGUgcmVzb3VyY2UuIElnbm9yZSB0aGUgcGFpZCBvcmRlci4gRGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2FuY2VsT25EZWxldGU/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd2FpdEZvck9yZGVyUHJvZHVjZWQ6IFdhaXQgdXRpbCBhbGwgb3JkZXJzIHJlbGF0ZWQgUk9TIHJlc291cmNlcyBhcmUgcHJvZHVjZWQuIFxuICAgICAqIFN1cHBvcnQgQUxJWVVOOjpFQ1M6OlByZXBheUluc3RhbmNlLCBBTElZVU46OlJEUzo6UHJlcGF5REJJbnN0YW5jZSwgQUxJWVVOOjpSRURJUzo6UHJlcGF5SW5zdGFuY2UsIEFMSVlVTjo6U0xCOjpMb2FkQmFsYW5jZXIsIEFMSVlVTjo6VlBDOjpFSVAsIEFMSVlVTjo6VlBDOjpWcG5HYXRld2F5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdhaXRGb3JPcmRlclByb2R1Y2VkPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6QlNTOjpXYWl0T3JkZXJgXG4gKi9cbmV4cG9ydCBjbGFzcyBXYWl0T3JkZXIgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkJTUzo6V2FpdE9yZGVyYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBXYWl0T3JkZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NXYWl0T3JkZXIgPSBuZXcgUm9zV2FpdE9yZGVyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgY2FuY2VsT25EZWxldGU6IHByb3BzLmNhbmNlbE9uRGVsZXRlID09PSB1bmRlZmluZWQgfHwgcHJvcHMuY2FuY2VsT25EZWxldGUgPT09IG51bGwgPyB0cnVlIDogcHJvcHMuY2FuY2VsT25EZWxldGUsXG4gICAgICAgICAgICBvcmRlcklkczogcHJvcHMub3JkZXJJZHMsXG4gICAgICAgICAgICB3YWl0Rm9yT3JkZXJQcm9kdWNlZDogcHJvcHMud2FpdEZvck9yZGVyUHJvZHVjZWQgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy53YWl0Rm9yT3JkZXJQcm9kdWNlZCA9PT0gbnVsbCA/IGZhbHNlIDogcHJvcHMud2FpdEZvck9yZGVyUHJvZHVjZWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zV2FpdE9yZGVyO1xuICAgIH1cbn1cbiJdfQ==