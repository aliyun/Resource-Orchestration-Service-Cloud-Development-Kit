import * as ros from '@alicloud/ros-cdk-core';
import { RosApps } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApps as AppsProperty };

/**
 * Properties for defining a `Apps`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apps
 */
export interface AppsProps {

    /**
     * Property appId: Unique ID of the app.
     */
    readonly appId?: string | ros.IResolvable;

    /**
     * Property appOwner: Alibaba Cloud account ID of the app owner.
     */
    readonly appOwner?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Apps`.
 */
export interface IApps extends ros.IResource {
    readonly props: AppsProps;

    /**
     * Attribute AppIds: The list of The ApiGateway app ids.
     */
    readonly attrAppIds: ros.IResolvable | string;

    /**
     * Attribute Apps: The information about ApiGateway apps.
     */
    readonly attrApps: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ApiGateway::Apps`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApps`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apps
 */
export class Apps extends ros.Resource implements IApps {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AppsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AppIds: The list of The ApiGateway app ids.
     */
    public readonly attrAppIds: ros.IResolvable | string;

    /**
     * Attribute Apps: The information about ApiGateway apps.
     */
    public readonly attrApps: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AppsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosApps = new RosApps(this, id,  {
            appOwner: props.appOwner,
            appId: props.appId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApps;
        this.attrAppIds = rosApps.attrAppIds;
        this.attrApps = rosApps.attrApps;
    }
}
