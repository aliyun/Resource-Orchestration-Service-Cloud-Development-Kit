import * as ros from '@alicloud/ros-cdk-core';
import { RosImageEventOperation } from './threatdetection.generated';
export { RosImageEventOperation as ImageEventOperationProperty };
/**
 * Properties for defining a `ImageEventOperation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
 */
export interface ImageEventOperationProps {
    /**
     * Property conditions: The rule conditions. Specify a value in the JSON format. You can specify the following keys:
     * *   **condition**: the matching condition.
     * *   **type**: the matching type.
     * *   **value**: the matching value.
     */
    readonly conditions: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property eventType: Image Event Type.
     */
    readonly eventType: string | ros.IResolvable;
    /**
     * Property operationCode: Event Operation Code.
     */
    readonly operationCode: string | ros.IResolvable;
    /**
     * Property eventKey: The keyword of the alert item.
     */
    readonly eventKey?: string | ros.IResolvable;
    /**
     * Property eventName: The name of the alert item.
     */
    readonly eventName?: string | ros.IResolvable;
    /**
     * Property note: The remarks that you want to add.
     */
    readonly note?: string | ros.IResolvable;
    /**
     * Property scenarios: The application scope of the rule. The value is in the JSON format. Valid values of keys:
     * type
     * value
     * Example: {"type": "repo", "value": "test-aaa\/shenzhen-repo-01"}
     */
    readonly scenarios?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property source: The source of the whitelist. Valid values:
     * *   **default**: image.
     * *   **agentless**: agentless detection.
     */
    readonly source?: string | ros.IResolvable;
}
/**
 * Represents a `ImageEventOperation`.
 */
export interface IImageEventOperation extends ros.IResource {
    readonly props: ImageEventOperationProps;
    /**
     * Attribute Conditions: The rule conditions. Specify a value in the JSON format.
     */
    readonly attrConditions: ros.IResolvable | string;
    /**
     * Attribute EventKey: Image Event Key.
     */
    readonly attrEventKey: ros.IResolvable | string;
    /**
     * Attribute EventName: Image Event Name.
     */
    readonly attrEventName: ros.IResolvable | string;
    /**
     * Attribute EventType: Image Event Type.
     */
    readonly attrEventType: ros.IResolvable | string;
    /**
     * Attribute ImageEventOperationId: The first ID of the resource.
     */
    readonly attrImageEventOperationId: ros.IResolvable | string;
    /**
     * Attribute Note: The remarks.
     */
    readonly attrNote: ros.IResolvable | string;
    /**
     * Attribute OperationCode: Event Operation Code.
     */
    readonly attrOperationCode: ros.IResolvable | string;
    /**
     * Attribute Scenarios: Event Scenarios.
     */
    readonly attrScenarios: ros.IResolvable | string;
    /**
     * Attribute Source: The source of the whitelist.
     */
    readonly attrSource: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::ImageEventOperation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImageEventOperation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
 */
export declare class ImageEventOperation extends ros.Resource implements IImageEventOperation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ImageEventOperationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Conditions: The rule conditions. Specify a value in the JSON format.
     */
    readonly attrConditions: ros.IResolvable | string;
    /**
     * Attribute EventKey: Image Event Key.
     */
    readonly attrEventKey: ros.IResolvable | string;
    /**
     * Attribute EventName: Image Event Name.
     */
    readonly attrEventName: ros.IResolvable | string;
    /**
     * Attribute EventType: Image Event Type.
     */
    readonly attrEventType: ros.IResolvable | string;
    /**
     * Attribute ImageEventOperationId: The first ID of the resource.
     */
    readonly attrImageEventOperationId: ros.IResolvable | string;
    /**
     * Attribute Note: The remarks.
     */
    readonly attrNote: ros.IResolvable | string;
    /**
     * Attribute OperationCode: Event Operation Code.
     */
    readonly attrOperationCode: ros.IResolvable | string;
    /**
     * Attribute Scenarios: Event Scenarios.
     */
    readonly attrScenarios: ros.IResolvable | string;
    /**
     * Attribute Source: The source of the whitelist.
     */
    readonly attrSource: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageEventOperationProps, enableResourcePropertyConstraint?: boolean);
}
