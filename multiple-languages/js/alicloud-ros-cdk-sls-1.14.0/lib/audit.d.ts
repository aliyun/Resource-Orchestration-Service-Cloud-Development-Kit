import * as ros from '@alicloud/ros-cdk-core';
import { RosAudit } from './sls.generated';
export { RosAudit as AuditProperty };
/**
 * Properties for defining a `Audit`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit
 */
export interface AuditProps {
    /**
     * Property displayName: Name of SLS log audit.
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * Property variableMap: Log audit detailed configuration.
     */
    readonly variableMap: RosAudit.VariableMapProperty | ros.IResolvable;
    /**
     * Property multiAccount: Multi-account configuration, please fill in multiple aliuid.
     */
    readonly multiAccount?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `Audit`.
 */
export interface IAudit extends ros.IResource {
    readonly props: AuditProps;
    /**
     * Attribute DisplayName: Name of SLS log audit.
     */
    readonly attrDisplayName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::Audit`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAudit`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit
 */
export declare class Audit extends ros.Resource implements IAudit {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AuditProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DisplayName: Name of SLS log audit.
     */
    readonly attrDisplayName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AuditProps, enableResourcePropertyConstraint?: boolean);
}
