import * as ros from '@alicloud/ros-cdk-core';
import { RosSupabaseProject } from './gpdb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSupabaseProject as SupabaseProjectProperty };

/**
 * Properties for defining a `SupabaseProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-supabaseproject
 */
export interface SupabaseProjectProps {

    /**
     * Property accountPassword: The password for the initial account.
     * It consists of three or more types of capital letters, lowercase letters, numbers, and special characters.
     * Supported special characters: !@#$%^&*()_+-=
     * The length is 8~32 characters.
     */
    readonly accountPassword: string | ros.IResolvable;

    /**
     * Property projectName: Project name.The naming rules are as follows:
     * The length is 1~128 characters.
     * Only English letters, numbers, dash (-) and underscore (_).
     * Must start with English letters or underscores (_).
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * Property projectSpec: Supabase instance specification, default is 1C1G.
     */
    readonly projectSpec: string | ros.IResolvable;

    /**
     * Property securityIpList: IP whitelist.
     * 127.0.0.1 means that any external IP access is prohibited. You can call the ModifySecurityIps interface to modify the IP whitelist after the instance is created.
     */
    readonly securityIpList: string | ros.IResolvable;

    /**
     * Property vpcId: VPC ID.
     * illustrate
     * You can call the DescribeRdsVpcs interface to view the available VPC IDs.
     * This parameter must be passed in.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property vSwitchId: vSwitch ID.
     * illustrate
     * vSwitchId is required.
     * The Availability Zone where the vSwitch is located must be consistent with the ZoneId.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * Property zoneId: Availability Zone ID.
     * Description You can call the DescribeRegions interface to view the available Availability Zone ID.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * Property diskPerformanceLevel: Cloud disk PL level, default PL0. Selectable value:
     * PL0
     * PL1
     */
    readonly diskPerformanceLevel?: string | ros.IResolvable;

    /**
     * Property storageSize: Storage space size, unit GB, default 1GB.
     */
    readonly storageSize?: number | ros.IResolvable;
}

/**
 * Represents a `SupabaseProject`.
 */
export interface ISupabaseProject extends ros.IResource {
    readonly props: SupabaseProjectProps;

    /**
     * Attribute ProjectId: Supabase instance ID
     */
    readonly attrProjectId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GPDB::SupabaseProject`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSupabaseProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-supabaseproject
 */
export class SupabaseProject extends ros.Resource implements ISupabaseProject {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SupabaseProjectProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ProjectId: Supabase instance ID
     */
    public readonly attrProjectId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SupabaseProjectProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSupabaseProject = new RosSupabaseProject(this, id,  {
            projectSpec: props.projectSpec,
            vpcId: props.vpcId,
            zoneId: props.zoneId,
            projectName: props.projectName,
            securityIpList: props.securityIpList,
            vSwitchId: props.vSwitchId,
            diskPerformanceLevel: props.diskPerformanceLevel,
            storageSize: props.storageSize,
            accountPassword: props.accountPassword,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSupabaseProject;
        this.attrProjectId = rosSupabaseProject.attrProjectId;
    }
}
