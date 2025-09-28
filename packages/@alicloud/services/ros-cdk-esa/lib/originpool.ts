import * as ros from '@alicloud/ros-cdk-core';
import { RosOriginPool } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosOriginPool as OriginPoolProperty };

/**
 * Properties for defining a `OriginPool`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originpool
 */
export interface OriginPoolProps {

    /**
     * Property originPoolName: The source address pool name.
     */
    readonly originPoolName: string | ros.IResolvable;

    /**
     * Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * Property enabled: Whether the source address pool is enabled:
     * - `true`: Enabled;
     * - `false`: Not enabled.
     */
    readonly enabled?: boolean | ros.IResolvable;

    /**
     * Property origins: The Source station information added to the source address pool. Multiple Source stations use arrays to transfer values.
     */
    readonly origins?: Array<RosOriginPool.OriginsProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `OriginPool`.
 */
export interface IOriginPool extends ros.IResource {
    readonly props: OriginPoolProps;

    /**
     * Attribute Enabled: Whether the source address pool is enabled:.
     */
    readonly attrEnabled: ros.IResolvable | string;

    /**
     * Attribute OriginPoolId: OriginPool Id.
     */
    readonly attrOriginPoolId: ros.IResolvable | string;

    /**
     * Attribute OriginPoolName: The source address pool name.
     */
    readonly attrOriginPoolName: ros.IResolvable | string;

    /**
     * Attribute Origins: The Source station information added to the source address pool. Multiple Source stations use arrays to transfer values.
     */
    readonly attrOrigins: ros.IResolvable | string;

    /**
     * Attribute RecordName: The domain name assigned to the source address pool can be used as the source address recorded under the site.
     */
    readonly attrRecordName: ros.IResolvable | string;

    /**
     * Attribute ReferenceLBCount: How many load balancers are referenced.
     */
    readonly attrReferenceLbCount: ros.IResolvable | string;

    /**
     * Attribute References: The source address pool is referred to when the source address pool is configured by the load balancer or recorded as the source station.
     */
    readonly attrReferences: ros.IResolvable | string;

    /**
     * Attribute SiteId: The site ID.
     */
    readonly attrSiteId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::OriginPool`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOriginPool`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originpool
 */
export class OriginPool extends ros.Resource implements IOriginPool {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: OriginPoolProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Enabled: Whether the source address pool is enabled:.
     */
    public readonly attrEnabled: ros.IResolvable | string;

    /**
     * Attribute OriginPoolId: OriginPool Id.
     */
    public readonly attrOriginPoolId: ros.IResolvable | string;

    /**
     * Attribute OriginPoolName: The source address pool name.
     */
    public readonly attrOriginPoolName: ros.IResolvable | string;

    /**
     * Attribute Origins: The Source station information added to the source address pool. Multiple Source stations use arrays to transfer values.
     */
    public readonly attrOrigins: ros.IResolvable | string;

    /**
     * Attribute RecordName: The domain name assigned to the source address pool can be used as the source address recorded under the site.
     */
    public readonly attrRecordName: ros.IResolvable | string;

    /**
     * Attribute ReferenceLBCount: How many load balancers are referenced.
     */
    public readonly attrReferenceLbCount: ros.IResolvable | string;

    /**
     * Attribute References: The source address pool is referred to when the source address pool is configured by the load balancer or recorded as the source station.
     */
    public readonly attrReferences: ros.IResolvable | string;

    /**
     * Attribute SiteId: The site ID.
     */
    public readonly attrSiteId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: OriginPoolProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosOriginPool = new RosOriginPool(this, id,  {
            origins: props.origins,
            siteId: props.siteId,
            enabled: props.enabled,
            originPoolName: props.originPoolName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosOriginPool;
        this.attrEnabled = rosOriginPool.attrEnabled;
        this.attrOriginPoolId = rosOriginPool.attrOriginPoolId;
        this.attrOriginPoolName = rosOriginPool.attrOriginPoolName;
        this.attrOrigins = rosOriginPool.attrOrigins;
        this.attrRecordName = rosOriginPool.attrRecordName;
        this.attrReferenceLbCount = rosOriginPool.attrReferenceLbCount;
        this.attrReferences = rosOriginPool.attrReferences;
        this.attrSiteId = rosOriginPool.attrSiteId;
    }
}
