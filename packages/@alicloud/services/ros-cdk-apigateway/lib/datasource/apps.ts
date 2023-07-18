import * as ros from '@alicloud/ros-cdk-core';
import { RosApps } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApps as AppsProperty };

/**
 * Properties for defining a `DATASOURCE::ApiGateway::Apps`
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
}

/**
 * A ROS resource type:  `DATASOURCE::ApiGateway::Apps`
 */
export class Apps extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AppIds: The list of The ApiGateway app ids.
     */
    public readonly attrAppIds: ros.IResolvable;

    /**
     * Attribute Apps: The information about ApiGateway apps.
     */
    public readonly attrApps: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::ApiGateway::Apps`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AppsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosApps = new RosApps(this, id,  {
            appOwner: props.appOwner,
            appId: props.appId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApps;
        this.attrAppIds = rosApps.attrAppIds;
        this.attrApps = rosApps.attrApps;
    }
}
