import * as ros from '@alicloud/ros-cdk-core';
import { RosAudit } from './sls.generated';
export { RosAudit as AuditProperty };
/**
 * Properties for defining a `ALIYUN::SLS::Audit`
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
 * A ROS resource type:  `ALIYUN::SLS::Audit`
 */
export declare class Audit extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DisplayName: Name of SLS log audit.
     */
    readonly attrDisplayName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SLS::Audit`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AuditProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=audit.d.ts.map