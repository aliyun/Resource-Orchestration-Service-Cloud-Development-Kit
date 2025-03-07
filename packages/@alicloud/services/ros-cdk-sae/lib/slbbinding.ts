import * as ros from '@alicloud/ros-cdk-core';
import { RosSlbBinding } from './sae.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSlbBinding as SlbBindingProperty };

/**
 * Properties for defining a `SlbBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-slbbinding
 */
export interface SlbBindingProps {

    /**
     * Property appId: Successful application deployment target ID
     */
    readonly appId: string | ros.IResolvable;

    /**
     * Property internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    readonly internet?: string | ros.IResolvable;

    /**
     * Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    readonly internetSlbId?: string | ros.IResolvable;

    /**
     * Property intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    readonly intranet?: string | ros.IResolvable;

    /**
     * Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    readonly intranetSlbId?: string | ros.IResolvable;
}

/**
 * Represents a `SlbBinding`.
 */
export interface ISlbBinding extends ros.IResource {
    readonly props: SlbBindingProps;

    /**
     * Attribute AppId: Successful application deployment target ID
     */
    readonly attrAppId: ros.IResolvable | string;

    /**
     * Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    readonly attrChangeOrderId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAE::SlbBinding`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSlbBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-slbbinding
 */
export class SlbBinding extends ros.Resource implements ISlbBinding {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SlbBindingProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AppId: Successful application deployment target ID
     */
    public readonly attrAppId: ros.IResolvable | string;

    /**
     * Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    public readonly attrChangeOrderId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SlbBindingProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSlbBinding = new RosSlbBinding(this, id,  {
            internetSlbId: props.internetSlbId,
            appId: props.appId,
            intranet: props.intranet,
            intranetSlbId: props.intranetSlbId,
            internet: props.internet,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSlbBinding;
        this.attrAppId = rosSlbBinding.attrAppId;
        this.attrChangeOrderId = rosSlbBinding.attrChangeOrderId;
    }
}
