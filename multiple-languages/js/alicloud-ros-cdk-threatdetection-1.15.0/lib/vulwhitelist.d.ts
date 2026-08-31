import * as ros from '@alicloud/ros-cdk-core';
import { RosVulWhitelist } from './threatdetection.generated';
export { RosVulWhitelist as VulWhitelistProperty };
/**
 * Properties for defining a `VulWhitelist`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist
 */
export interface VulWhitelistProps {
    /**
     * Property targetInfo: The applicable scope of the whitelist. The value of this parameter is in the JSON format and contains the following fields:
     * *   **type**: the type of the applicable scope. Valid values:
     *     *   **GroupId**: the ID of a server group.
     *     *   **Uuid**: the UUID of a server.
     * *   **uuids**: the UUIDs of servers. This field is of the string type.
     * *   **groupIds**: the IDs of server groups. This field is of the long type.
     * >  If you leave this parameter empty, the applicable scope is all servers. If you set the **type** field to **GroupId**, you must also specify the **groupIds** field. If you set the **type** field to **Uuid**, you must also specify the **uuids** field.
     */
    readonly targetInfo: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property whitelist: The information about the vulnerability that you want to add to the whitelist. The value is a JSON string that contains the following fields:
     * *   **Status**: the status of the vulnerability.
     * *   **GmtLast**: the timestamp when the vulnerability was last detected. Unit: milliseconds.
     * *   **LaterCount**: the number of vulnerabilities that have the medium priority.
     * *   **AsapCount**: the number of vulnerabilities that have the high priority.
     * *   **Name**: the name of the vulnerability.
     * *   **Type**: the type of the vulnerability. Valid values:
     *     *   **cve**: Linux software vulnerability
     *     *   **sys**: Windows system vulnerability
     *     *   **cms**: Web-CMS vulnerability
     *     *   **app**: application vulnerability
     *     *   **emg**: urgent vulnerability
     * *   **Related**: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.
     * *   **HandledCount**: the number of handled vulnerabilities.
     * *   **AliasName**: the alias of the vulnerability.
     * *   **RuleModifyTime**: the time when the vulnerability was last disclosed.
     * *   **NntfCount**: the number of vulnerabilities that have the low priority.
     * *   **TotalFixCount**: the total number of fixed vulnerabilities.
     * *   **Tags**: the tag that is added to the vulnerability.
     * >  You can call the [DescribeGroupedVul](~~DescribeGroupedVul~~) operation to query the information about the vulnerability that you want to add to the whitelist.
     */
    readonly whitelist: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property reason: The reason why you add the vulnerability to the whitelist.
     */
    readonly reason?: string | ros.IResolvable;
}
/**
 * Represents a `VulWhitelist`.
 */
export interface IVulWhitelist extends ros.IResource {
    readonly props: VulWhitelistProps;
    /**
     * Attribute Reason: The reason why you add the vulnerability to the whitelist.
     */
    readonly attrReason: ros.IResolvable | string;
    /**
     * Attribute TargetInfo: The applicable scope of the whitelist.
     */
    readonly attrTargetInfo: ros.IResolvable | string;
    /**
     * Attribute VulWhitelistId: The ID of the whitelist.
     */
    readonly attrVulWhitelistId: ros.IResolvable | string;
    /**
     * Attribute Whitelist: The information about the vulnerability that you want to add to the whitelist.
     */
    readonly attrWhitelist: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::VulWhitelist`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVulWhitelist`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist
 */
export declare class VulWhitelist extends ros.Resource implements IVulWhitelist {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VulWhitelistProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Reason: The reason why you add the vulnerability to the whitelist.
     */
    readonly attrReason: ros.IResolvable | string;
    /**
     * Attribute TargetInfo: The applicable scope of the whitelist.
     */
    readonly attrTargetInfo: ros.IResolvable | string;
    /**
     * Attribute VulWhitelistId: The ID of the whitelist.
     */
    readonly attrVulWhitelistId: ros.IResolvable | string;
    /**
     * Attribute Whitelist: The information about the vulnerability that you want to add to the whitelist.
     */
    readonly attrWhitelist: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VulWhitelistProps, enableResourcePropertyConstraint?: boolean);
}
