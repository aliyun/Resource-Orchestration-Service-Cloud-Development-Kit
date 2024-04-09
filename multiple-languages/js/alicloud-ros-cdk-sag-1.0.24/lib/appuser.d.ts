import * as ros from '@alicloud/ros-cdk-core';
import { RosAppUser } from './sag.generated';
export { RosAppUser as AppUserProperty };
/**
 * Properties for defining a `AppUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-appuser
 */
export interface AppUserProps {
    /**
     * Property bandwidth: The bandwidth. Unit: Kbit\/s. Maximum bandwidth: 2,000 Kbit\/s.
     */
    readonly bandwidth: number | ros.IResolvable;
    /**
     * Property smartAgId: The ID of the SAG APP instance.
     */
    readonly smartAgId: string | ros.IResolvable;
    /**
     * Property userMail: The email address of the user. The username and password are sent to the specified
     * email address.
     */
    readonly userMail: string | ros.IResolvable;
    /**
     * Property clientIp: After this feature is enabled, you must specify the IP address of SAG APP. In this
     * case, SAG APP connects to Alibaba Cloud through the specified IP address.
     * Note The IP address must fall into the CIDR block of the private network.
     * After this feature is disabled, an IP address within the CIDR block of the private
     * network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
     * IP address.
     */
    readonly clientIp?: string | ros.IResolvable;
    /**
     * Property disable: Disable user or not.
     */
    readonly disable?: boolean | ros.IResolvable;
    /**
     * Property password: The password used to log on to SAG APP.
     * For a client account, if you specify the username, you must also specify the password.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * Property userName: The username of the client account. Usernames of client accounts added to the same
     * SAG APP instance must be unique.
     * For a client account, if you specify the username, you must also specify the password.
     */
    readonly userName?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::AppUser`, which is used to create a client account for a Smart Access Gateway (SAG) app instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAppUser`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-appuser
 */
export declare class AppUser extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AppUserProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SmartAGId: The ID of the SAG APP instance.
     */
    readonly attrSmartAgId: ros.IResolvable;
    /**
     * Attribute UserName: <heat.engine.properties.Schema object at 0x7f16e13a8b50>
     */
    readonly attrUserName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AppUserProps, enableResourcePropertyConstraint?: boolean);
}
