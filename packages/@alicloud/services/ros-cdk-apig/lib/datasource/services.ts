import * as ros from '@alicloud/ros-cdk-core';
import { RosServices } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosServices as ServicesProperty };

/**
 * Properties for defining a `Services`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-services
 */
export interface ServicesProps {

    /**
     * Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    readonly gatewayId?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property sourceType: service source type, optional value is K8S\/MSE_NACOS\/FC3\/SAE_K8S_SERVICE\/VIP\/DNS\/AI.
     */
    readonly sourceType?: string | ros.IResolvable;
}

/**
 * Represents a `Services`.
 */
export interface IServices extends ros.IResource {
    readonly props: ServicesProps;

    /**
     * Attribute ServiceIds: The list of service IDs.
     */
    readonly attrServiceIds: ros.IResolvable | string;

    /**
     * Attribute Services: The list of services.
     */
    readonly attrServices: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::Services`, which is used to query services.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServices`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-services
 */
export class Services extends ros.Resource implements IServices {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ServicesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ServiceIds: The list of service IDs.
     */
    public readonly attrServiceIds: ros.IResolvable | string;

    /**
     * Attribute Services: The list of services.
     */
    public readonly attrServices: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServicesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosServices = new RosServices(this, id,  {
            resourceGroupId: props.resourceGroupId,
            sourceType: props.sourceType,
            gatewayId: props.gatewayId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServices;
        this.attrServiceIds = rosServices.attrServiceIds;
        this.attrServices = rosServices.attrServices;
    }
}
