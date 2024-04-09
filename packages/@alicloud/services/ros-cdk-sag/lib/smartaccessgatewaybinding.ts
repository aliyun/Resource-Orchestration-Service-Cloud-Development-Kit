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
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::SmartAccessGatewayBinding`, which is used to bind a Smart Access Gateway (SAG) instance to a specified Cloud Connect Network (CCN) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSmartAccessGatewayBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
 */
export class SmartAccessGatewayBinding extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SmartAccessGatewayBindingProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SmartAGId: The ID of the Smart Access Gateway instance.
     */
    public readonly attrSmartAgId: ros.IResolvable;

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
