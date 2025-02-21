import * as ros from '@alicloud/ros-cdk-core';
import { RosTGW } from './waf3.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTGW as TGWProperty };

/**
 * Properties for defining a `TGW`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-tgw
 */
export interface TGWProps {

    /**
     * Property instanceId: The ID of the WAF instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property listen: Listening information.
     */
    readonly listen: RosTGW.ListenProperty | ros.IResolvable;

    /**
     * Property redirect: Forwarding information.
     */
    readonly redirect?: RosTGW.RedirectProperty | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Represents a `TGW`.
 */
export interface ITgw extends ros.IResource {
    readonly props: TGWProps;

    /**
     * Attribute InstanceId: The ID of the WAF instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute Port: Access the cloud product port of WAF.
     */
    readonly attrPort: ros.IResolvable | string;

    /**
     * Attribute ResourceProduct: Access to WAF cloud products.
     */
    readonly attrResourceProduct: ros.IResolvable | string;

    /**
     * Attribute TgwId: The protection object ID of the transparent access resource.
     */
    readonly attrTgwId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::WAF3::TGW`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTGW`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-tgw
 */
export class Tgw extends ros.Resource implements ITgw {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TGWProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceId: The ID of the WAF instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute Port: Access the cloud product port of WAF.
     */
    public readonly attrPort: ros.IResolvable | string;

    /**
     * Attribute ResourceProduct: Access to WAF cloud products.
     */
    public readonly attrResourceProduct: ros.IResolvable | string;

    /**
     * Attribute TgwId: The protection object ID of the transparent access resource.
     */
    public readonly attrTgwId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TGWProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTGW = new RosTGW(this, id,  {
            resourceGroupId: props.resourceGroupId,
            instanceId: props.instanceId,
            listen: props.listen,
            redirect: props.redirect,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTGW;
        this.attrInstanceId = rosTGW.attrInstanceId;
        this.attrPort = rosTGW.attrPort;
        this.attrResourceProduct = rosTGW.attrResourceProduct;
        this.attrTgwId = rosTGW.attrTgwId;
    }
}
