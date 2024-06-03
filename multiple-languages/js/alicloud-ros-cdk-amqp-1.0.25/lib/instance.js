"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const amqp_generated_1 = require("./amqp.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return amqp_generated_1.RosInstance; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::AMQP::Instance`, which is used to create an ApsaraMQ for RabbitMQ instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-instance
 */
class Instance extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosInstance = new amqp_generated_1.RosInstance(this, id, {
            maxTps: props.maxTps,
            maxEipTps: props.maxEipTps,
            supportEip: props.supportEip,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            storageSize: props.storageSize,
            payType: props.payType === undefined || props.payType === null ? 'Subscription' : props.payType,
            queueCapacity: props.queueCapacity,
            tracingStorageTime: props.tracingStorageTime,
            instanceName: props.instanceName,
            orderNum: props.orderNum === undefined || props.orderNum === null ? 1 : props.orderNum,
            supportTracing: props.supportTracing,
            instanceType: props.instanceType,
            periodUnit: props.periodUnit === undefined || props.periodUnit === null ? 'Month' : props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrClassicEndpoint = rosInstance.attrClassicEndpoint;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrPrivateEndpoint = rosInstance.attrPrivateEndpoint;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMscURBQStDO0FBRXZCLGlHQUZmLDRCQUFXLE9BRW9CO0FBeUZ4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFxQnRDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQXVCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUNwSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sV0FBVyxHQUFHLElBQUksNEJBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUM5RSxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQy9GLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFDdEYsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVU7U0FDdkcsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztRQUMzRCxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDakQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztJQUMvRCxDQUFDO0NBQ0o7QUFyREQsNEJBcURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSW5zdGFuY2UgfSBmcm9tICcuL2FtcXAuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW5zdGFuY2UgYXMgSW5zdGFuY2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEluc3RhbmNlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFtcXAtaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlTmFtZTogVGhlIGluc3RhbmNlIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VUeXBlOiBUaGUgSW5zdGFuY2UgVHlwZS4gVmFsaWQgdmFsdWVzOiBwcm9mZXNzaW9uYWwsIGVudGVycHJpc2UsIHZpcC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXhFaXBUcHM6IFRoZSBtYXggZWlwIHRwcy4gSXQgaXMgdmFsaWQgd2hlbiBzdXBwb3J0X2VpcCBpcyB0cnVlLiBcbiAgICAgKiBUaGUgbWluaW11bSB2YWx1ZSBpcyAxMjgsIHdpdGggdGhlIHN0ZXAgc2l6ZSAxMjguXG4gICAgICpcbiAgICAgKi9cbiAgICByZWFkb25seSBtYXhFaXBUcHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXhUcHM6IElmIGluc3RhbmNlIHR5cGUgaXMgcHJvZmVzc2lvbmFsLCB0aGUgdmFsaWQgdmFsdWUgaXMgWzEwMDAsIDE1MDAsIDIwMDAsIDI1MDAsIDMwMDAsIDQwMDAsIDUwMDBdLlxuICAgICAqIElmIGluc3RhbmNlIHR5cGUgaXMgZW50ZXJwcmlzZSwgdGhlIHZhbGlkIHZhbHVlIGlzIFszMDAwLCA1MDAwLCA4MDAwLCAxMDAwMCwgMTUwMDAsIDIwMDAwLCAzMDAwMDQwMDAwLCA1MDAwMCwgODAwMDAsIDEwMDAwXS5cbiAgICAgKiBJZiBpbnN0YW5jZSB0eXBlIGlzIHZpcCwgdGhlIHZhbGlkIHZhbHVlIGlzIFs4MDAwLCAxNTAwMCwgMjUwMDAsIDQwMDAwLCA1MDAwMCwgMTAwMDAwLCAyMDAwMDAsIDMwMDAwMCwgNTAwMDAwLCA4MDAwMDAsIDEwMDAwMDBdLlxuICAgICAqXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWF4VHBzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3JkZXJOdW06IFNldCB0aGUgbnVtYmVyIG9mIGluc3RhbmNlcyB0byBiZSBjcmVhdGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9yZGVyTnVtPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGF5VHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kIG9mIHRoZSBpbnN0YW5jZS4gVGhlIE1lc3NhZ2UgUXVldWUgUmFiYml0TVEgdmVyc2lvbiBkb2VzIG5vdCBzdXBwb3J0IG5ldyBwYXktYXMteW91LWdvIGluc3RhbmNlcy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIFByZVBhaWQ6IHN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBheVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IFRoZSBwZXJpb2QuIFZhbGlkIHZhbHVlczogMSwgMiwgMywgNiwgMTIsIDI0LCAzNi5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2RVbml0OiBUaGUgdW5pdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGR1cmF0aW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogTW9udGhcbiAgICAgKiBZZWFyXG4gICAgICogRGVmYXVsdCB2YWx1ZTogTW9udGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kVW5pdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHF1ZXVlQ2FwYWNpdHk6IFRoZSBxdWV1ZSBjYXBhY2l0eS4gSWYgaW5zdGFuY2UgdHlwZSBpcyBwcm9mZXNzaW9uYWwsIHRoZSB2YWxpZCB2YWx1ZSBpcyBbNTAsIDEwMDBdIHdpdGggdGhlIHN0ZXAgc2l6ZSA1LlxuICAgICAqIElmIGluc3RhbmNlIHR5cGUgaXMgZW50ZXJwcmlzZSwgdGhlIHZhbGlkIHZhbHVlIGlzIFsyMDAsIDYwMDBdIHdpdGggdGhlIHN0ZXAgc2l6ZSAxMDBcbiAgICAgKiBJZiBpbnN0YW5jZSB0eXBlIGlzIHZpcCwgdGhlIHZhbGlkIHZhbHVlIGlzIFsyMDAsIDgwMDAwXSB3aXRoIHRoZSBzdGVwIHNpemUgMTAwXG4gICAgICovXG4gICAgcmVhZG9ubHkgcXVldWVDYXBhY2l0eT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN0b3JhZ2VTaXplOiBUaGUgc3RvcmFnZSBzaXplLiBJdCBpcyB2YWxpZCB3aGVuIGluc3RhbmNlX3R5cGUgaXMgdmlwLlxuICAgICAqIElmIGluc3RhbmNlIHR5cGUgaXMgcHJvZmVzc2lvbmFsIG9yIGVudGVycHJpc2UsIHRoZSB2YWxpZCB2YWx1ZSBpcyAwLklmIGluc3RhbmNlIHR5cGUgaXMgdmlwLCB0aGUgdmFsaWQgdmFsdWUgaXMgWzcwMCwgMjgwMF0gd2l0aCB0aGUgc3RlcCBzaXplIDEwMFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0b3JhZ2VTaXplPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3VwcG9ydEVpcDogV2hldGhlciB0byBzdXBwb3J0IEVJUC4gVmFsaWQgdmFsdWVzOiB0cnVlLCBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdXBwb3J0RWlwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3VwcG9ydFRyYWNpbmc6IFdoZXRoZXIgdG8gc3VwcG9ydCB0cmFjaW5nLiBWYWxpZCB2YWx1ZXM6IHRydWUsIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN1cHBvcnRUcmFjaW5nPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHJhY2luZ1N0b3JhZ2VUaW1lOiBUaGUgcmV0ZW50aW9uIHBlcmlvZCBvZiBtZXNzYWdlIHRyYWNlcyB3YXMgc2V0LiBWYWxpZCB2YWx1ZXM6IDMsIDcsIDE1LlxuICAgICAqIElmIGluc3RhbmNlX3R5cGU9dmlwLCB0aGUgdmFsaWQgdmFsdWVzIGlzIDE1LlxuICAgICAqIElmIGluc3RhbmNlX3R5cGUhPXZpcCwgdGhlIHZhbGlkIHZhbHVlcyBpcyAzLCA3LCAxNS5cbiAgICAgKiBJZiBzdXBwb3J0X3RyYWNpbmcgPT0gdHJhY2luZ19mYWxzZSwgdGhlIHZhbGlkIHZhbHVlcyBpcyAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYWNpbmdTdG9yYWdlVGltZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6QU1RUDo6SW5zdGFuY2VgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhbiBBcHNhcmFNUSBmb3IgUmFiYml0TVEgaW5zdGFuY2UuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NJbnN0YW5jZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFtcXAtaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEluc3RhbmNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBJbnN0YW5jZVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbGFzc2ljRW5kcG9pbnQ6IFRoZSBjbGFzc2ljIGVuZHBvaW50IG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsYXNzaWNFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJpdmF0ZUVuZHBvaW50OiBUaGUgcHJpdmF0ZSBlbmRwb2ludCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcml2YXRlRW5kcG9pbnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBJbnN0YW5jZVByb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NJbnN0YW5jZSA9IG5ldyBSb3NJbnN0YW5jZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIG1heFRwczogcHJvcHMubWF4VHBzLFxuICAgICAgICAgICAgbWF4RWlwVHBzOiBwcm9wcy5tYXhFaXBUcHMsXG4gICAgICAgICAgICBzdXBwb3J0RWlwOiBwcm9wcy5zdXBwb3J0RWlwLFxuICAgICAgICAgICAgcGVyaW9kOiBwcm9wcy5wZXJpb2QgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5wZXJpb2QgPT09IG51bGwgPyAxIDogcHJvcHMucGVyaW9kLFxuICAgICAgICAgICAgc3RvcmFnZVNpemU6IHByb3BzLnN0b3JhZ2VTaXplLFxuICAgICAgICAgICAgcGF5VHlwZTogcHJvcHMucGF5VHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnBheVR5cGUgPT09IG51bGwgPyAnU3Vic2NyaXB0aW9uJyA6IHByb3BzLnBheVR5cGUsXG4gICAgICAgICAgICBxdWV1ZUNhcGFjaXR5OiBwcm9wcy5xdWV1ZUNhcGFjaXR5LFxuICAgICAgICAgICAgdHJhY2luZ1N0b3JhZ2VUaW1lOiBwcm9wcy50cmFjaW5nU3RvcmFnZVRpbWUsXG4gICAgICAgICAgICBpbnN0YW5jZU5hbWU6IHByb3BzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICAgIG9yZGVyTnVtOiBwcm9wcy5vcmRlck51bSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLm9yZGVyTnVtID09PSBudWxsID8gMSA6IHByb3BzLm9yZGVyTnVtLFxuICAgICAgICAgICAgc3VwcG9ydFRyYWNpbmc6IHByb3BzLnN1cHBvcnRUcmFjaW5nLFxuICAgICAgICAgICAgaW5zdGFuY2VUeXBlOiBwcm9wcy5pbnN0YW5jZVR5cGUsXG4gICAgICAgICAgICBwZXJpb2RVbml0OiBwcm9wcy5wZXJpb2RVbml0ID09PSB1bmRlZmluZWQgfHwgcHJvcHMucGVyaW9kVW5pdCA9PT0gbnVsbCA/ICdNb250aCcgOiBwcm9wcy5wZXJpb2RVbml0LFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0luc3RhbmNlO1xuICAgICAgICB0aGlzLmF0dHJDbGFzc2ljRW5kcG9pbnQgPSByb3NJbnN0YW5jZS5hdHRyQ2xhc3NpY0VuZHBvaW50O1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gcm9zSW5zdGFuY2UuYXR0ckluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuYXR0clByaXZhdGVFbmRwb2ludCA9IHJvc0luc3RhbmNlLmF0dHJQcml2YXRlRW5kcG9pbnQ7XG4gICAgfVxufVxuIl19