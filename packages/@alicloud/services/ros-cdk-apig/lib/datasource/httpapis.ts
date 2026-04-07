import * as ros from '@alicloud/ros-cdk-core';
import { RosHttpApis } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHttpApis as HttpApisProperty };

/**
 * Properties for defining a `HttpApis`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-httpapis
 */
export interface HttpApisProps {

    /**
     * Property httpApiName: The name of the API.
     */
    readonly httpApiName?: string | ros.IResolvable;

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
}

/**
 * Represents a `HttpApis`.
 */
export interface IHttpApis extends ros.IResource {
    readonly props: HttpApisProps;

    /**
     * Attribute HttpApiIds: The list of http api IDs.
     */
    readonly attrHttpApiIds: ros.IResolvable | string;

    /**
     * Attribute HttpApis: The list of http apis.
     */
    readonly attrHttpApis: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::HttpApis`, which is used to query HTTP APIs.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHttpApis`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-httpapis
 */
export class HttpApis extends ros.Resource implements IHttpApis {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: HttpApisProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute HttpApiIds: The list of http api IDs.
     */
    public readonly attrHttpApiIds: ros.IResolvable | string;

    /**
     * Attribute HttpApis: The list of http apis.
     */
    public readonly attrHttpApis: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HttpApisProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosHttpApis = new RosHttpApis(this, id,  {
            httpApiName: props.httpApiName,
            resourceGroupId: props.resourceGroupId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHttpApis;
        this.attrHttpApiIds = rosHttpApis.attrHttpApiIds;
        this.attrHttpApis = rosHttpApis.attrHttpApis;
    }
}
