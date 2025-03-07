import * as ros from '@alicloud/ros-cdk-core';
import { RosSmartAccessGatewayBinding } from './sag.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSmartAccessGatewayBinding as SmartAccessGatewayBindingProperty };

/**
 * Properties for defining a `SmartAccessGatewayBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
 */
export interface SmartAccessGatewayBindingProps {

    /**
     * Property ccnId: The ID of the CCN instance to bind.
     */
    readonly ccnId: string | ros.IResolvable;

    /**
     * Property smartAgId: The ID of the Smart Access Gateway instance.
     */
    readonly smartAgId: string | ros.IResolvable;
}

/**
 * Represents a `SmartAccessGatewayBinding`.
 */
export interface ISmartAccessGatewayBinding extends ros.IResource {
    readonly props: SmartAccessGatewayBindingProps;

    /**
     * Attribute SmartAGId: The ID of the Smart Access Gateway instance.
     */
    readonly attrSmartAgId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::SmartAccessGatewayBinding`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSmartAccessGatewayBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
 */
export class SmartAccessGatewayBinding extends ros.Resource implements ISmartAccessGatewayBinding {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SmartAccessGatewayBindingProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SmartAGId: The ID of the Smart Access Gateway instance.
     */
    public readonly attrSmartAgId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SmartAccessGatewayBindingProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSmartAccessGatewayBinding = new RosSmartAccessGatewayBinding(this, id,  {
            ccnId: props.ccnId,
            smartAgId: props.smartAgId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSmartAccessGatewayBinding;
        this.attrSmartAgId = rosSmartAccessGatewayBinding.attrSmartAgId;
    }
}
