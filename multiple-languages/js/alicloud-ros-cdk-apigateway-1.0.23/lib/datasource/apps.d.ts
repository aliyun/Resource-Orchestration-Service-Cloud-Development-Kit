import * as ros from '@alicloud/ros-cdk-core';
import { RosApps } from './apigateway.generated';
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
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ApiGateway::Apps`, which is used to query applications.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApps`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apps
 */
export declare class Apps extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AppsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AppIds: The list of The ApiGateway app ids.
     */
    readonly attrAppIds: ros.IResolvable;
    /**
     * Attribute Apps: The information about ApiGateway apps.
     */
    readonly attrApps: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AppsProps, enableResourcePropertyConstraint?: boolean);
}
