import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './redis.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `ALIYUN::REDIS::Instance`
 */
export interface InstanceProps {

    /**
     * Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosInstance.BackupPolicyProperty | ros.IResolvable;

    /**
     * Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
     */
    readonly capacity?: number | ros.IResolvable;

    /**
     * Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * Property evictionPolicy: The eviction policy of cache data storage.
     */
    readonly evictionPolicy?: string | ros.IResolvable;

    /**
     * Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    readonly instanceClass?: string | ros.IResolvable;

    /**
     * Property instanceConnection: Instance connection message.
     */
    readonly instanceConnection?: RosInstance.InstanceConnectionProperty | ros.IResolvable;

    /**
     * Property instanceMaintainTime: Instance maintain time.
     */
    readonly instanceMaintainTime?: RosInstance.InstanceMaintainTimeProperty | ros.IResolvable;

    /**
     * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    readonly password?: string | ros.IResolvable;

    /**
     * Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * Property sslEnabled: Modifies the SSL status. Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    readonly sslEnabled?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];

    /**
     * Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;

    /**
     * Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * Property zoneId: The zone id of input region.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::REDIS::Instance`
 */
export class Instance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ConnectionDomain: Connection domain of created instance.
     */
    public readonly attrConnectionDomain: ros.IResolvable;

    /**
     * Attribute InstanceClass: Redis instance type.
     */
    public readonly attrInstanceClass: ros.IResolvable;

    /**
     * Attribute InstanceId: Instance id of created redis instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute InstanceName: Name of created redis instance.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Attribute Port: Port of created instance.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * Create a new `ALIYUN::REDIS::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            engineVersion: props.engineVersion,
            evictionPolicy: props.evictionPolicy,
            zoneId: props.zoneId,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            instanceMaintainTime: props.instanceMaintainTime,
            instanceClass: props.instanceClass,
            vpcPasswordFree: props.vpcPasswordFree,
            instanceConnection: props.instanceConnection,
            instanceName: props.instanceName,
            vpcId: props.vpcId,
            sslEnabled: props.sslEnabled,
            capacity: props.capacity,
            tags: props.tags,
            backupPolicy: props.backupPolicy,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrConnectionDomain = rosInstance.attrConnectionDomain;
        this.attrInstanceClass = rosInstance.attrInstanceClass;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrOrderId = rosInstance.attrOrderId;
        this.attrPort = rosInstance.attrPort;
    }
}
