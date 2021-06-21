// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::CS::AnyCluster`
 */
export interface RosAnyClusterProps {

    /**
     * @Property clusterConfig: Cluster config.
     */
    readonly clusterConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAnyClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosAnyClusterProps`
 *
 * @returns the result of the validation.
 */
function RosAnyClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterConfig', ros.requiredValidator)(properties.clusterConfig));
    errors.collect(ros.propertyValidator('clusterConfig', ros.hashValidator(ros.validateAny))(properties.clusterConfig));
    return errors.wrap('supplied properties not correct for "RosAnyClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::AnyCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosAnyClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::AnyCluster` resource.
 */
// @ts-ignore TS6133
function rosAnyClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAnyClusterPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterConfig: ros.hashMapper(ros.objectToRosTemplate)(properties.clusterConfig),
    };
}

/**
 * A ROS template type:  `ALIYUN::CS::AnyCluster`
 */
export class RosAnyCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::AnyCluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterConfig: Cluster config.
     */
    public clusterConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Create a new `ALIYUN::CS::AnyCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAnyClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAnyCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrTaskId = this.getAtt('TaskId');
        this.attrWorkerRamRoleName = this.getAtt('WorkerRamRoleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterConfig = props.clusterConfig;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterConfig: this.clusterConfig,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAnyClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::CS::KubernetesCluster`
 */
export interface RosKubernetesClusterProps {

    /**
     * @Property masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
     * List size must be 3, Instance Type can be repeated.
     */
    readonly masterInstanceTypes: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
     */
    readonly masterVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    readonly workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerVSwitchIds: The virtual switch ID of the worker node.
     */
    readonly workerVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    readonly addons?: Array<RosKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;

    /**
     * @Property cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
     */
    readonly cpuPolicy?: string | ros.IResolvable;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    readonly disableRollback?: boolean | ros.IResolvable;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;

    /**
     * @Property masterAutoRenew: Whether the master node automatically renews. It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly masterAutoRenew?: boolean | ros.IResolvable;

    /**
     * @Property masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly masterAutoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
     */
    readonly masterCount?: number | ros.IResolvable;

    /**
     * @Property masterDataDisk: Whether the master node mounts data disks can be selected as:
     * true: mount the data disk
     * false: no data disk is mounted, default is false
     */
    readonly masterDataDisk?: boolean | ros.IResolvable;

    /**
     * @Property masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
     */
    readonly masterDataDisks?: Array<RosKubernetesCluster.MasterDataDisksProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterInstanceChargeType: Master node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly masterInstanceChargeType?: string | ros.IResolvable;

    /**
     * @Property masterPeriod: The duration of the annual subscription and monthly subscription. It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    readonly masterPeriod?: number | ros.IResolvable;

    /**
     * @Property masterPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month
     */
    readonly masterPeriodUnit?: string | ros.IResolvable;

    /**
     * @Property masterSystemDiskCategory: Master disk system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * cloud_essd: ESSD cloud diskDefault to cloud_ssd.
     */
    readonly masterSystemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property masterSystemDiskSize: Master disk system disk size in GiB.
     * Default to 120.
     */
    readonly masterSystemDiskSize?: number | ros.IResolvable;

    /**
     * @Property nodePortRange: Node service port. The value range is [30000, 65535].
     * Default to 30000-65535.
     */
    readonly nodePortRange?: string | ros.IResolvable;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    readonly numOfNodes?: number | ros.IResolvable;

    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, 
     *  you must specify at least one pod vSwitch in the same zone. 
     *  The pod vSwitches cannot be the same as the node vSwitches. 
     *  We recommend that you set the mask length of the CIDR block to a value no 
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network 
     * plug-in is selected for the cluster.
     */
    readonly podVswitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;

    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    readonly snatEntry?: boolean | ros.IResolvable;

    /**
     * @Property sshFlags: Whether to enable public network SSH login:
     * true: open
     * false: not open
     */
    readonly sshFlags?: boolean | ros.IResolvable;

    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosKubernetesCluster.TagsProperty[];

    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    readonly taint?: Array<{ [key: string]: any }> | ros.IResolvable;

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;

    /**
     * @Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly workerAutoRenew?: boolean | ros.IResolvable;

    /**
     * @Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly workerAutoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    readonly workerDataDisk?: boolean | ros.IResolvable;

    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    readonly workerDataDisks?: Array<RosKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerInstanceChargeType: Worker node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly workerInstanceChargeType?: string | ros.IResolvable;

    /**
     * @Property workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    readonly workerPeriod?: number | ros.IResolvable;

    /**
     * @Property workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month.
     */
    readonly workerPeriodUnit?: string | ros.IResolvable;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    readonly workerSystemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    readonly workerSystemDiskSize?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosKubernetesClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosKubernetesClusterProps`
 *
 * @returns the result of the validation.
 */
function RosKubernetesClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('endpointPublicAccess', ros.validateBoolean)(properties.endpointPublicAccess));
    if(properties.workerPeriod && (typeof properties.workerPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('workerPeriod', ros.validateAllowedValues)({
          data: properties.workerPeriod,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('workerPeriod', ros.validateNumber)(properties.workerPeriod));
    if(properties.workerPeriodUnit && (typeof properties.workerPeriodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('workerPeriodUnit', ros.validateAllowedValues)({
          data: properties.workerPeriodUnit,
          allowedValues: ["Week","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('workerPeriodUnit', ros.validateString)(properties.workerPeriodUnit));
    errors.collect(ros.propertyValidator('masterSystemDiskCategory', ros.validateString)(properties.masterSystemDiskCategory));
    errors.collect(ros.propertyValidator('addons', ros.listValidator(RosKubernetesCluster_AddonsPropertyValidator))(properties.addons));
    if(properties.masterSystemDiskSize && (typeof properties.masterSystemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('masterSystemDiskSize', ros.validateRange)({
            data: properties.masterSystemDiskSize,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('masterSystemDiskSize', ros.validateNumber)(properties.masterSystemDiskSize));
    errors.collect(ros.propertyValidator('workerSystemDiskCategory', ros.validateString)(properties.workerSystemDiskCategory));
    errors.collect(ros.propertyValidator('nodePortRange', ros.validateString)(properties.nodePortRange));
    if(properties.masterCount && (typeof properties.masterCount) !== 'object') {
        errors.collect(ros.propertyValidator('masterCount', ros.validateAllowedValues)({
          data: properties.masterCount,
          allowedValues: [3,5],
        }));
    }
    errors.collect(ros.propertyValidator('masterCount', ros.validateNumber)(properties.masterCount));
    if(properties.workerSystemDiskSize && (typeof properties.workerSystemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateRange)({
            data: properties.workerSystemDiskSize,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateNumber)(properties.workerSystemDiskSize));
    errors.collect(ros.propertyValidator('sshFlags', ros.validateBoolean)(properties.sshFlags));
    errors.collect(ros.propertyValidator('masterVSwitchIds', ros.requiredValidator)(properties.masterVSwitchIds));
    if(properties.masterVSwitchIds && (Array.isArray(properties.masterVSwitchIds) || (typeof properties.masterVSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('masterVSwitchIds', ros.validateLength)({
            data: properties.masterVSwitchIds.length,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('masterVSwitchIds', ros.listValidator(ros.validateAny))(properties.masterVSwitchIds));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('taint', ros.listValidator(ros.validateAnyDict))(properties.taint));
    errors.collect(ros.propertyValidator('masterDataDisks', ros.listValidator(RosKubernetesCluster_MasterDataDisksPropertyValidator))(properties.masterDataDisks));
    errors.collect(ros.propertyValidator('cloudMonitorFlags', ros.validateBoolean)(properties.cloudMonitorFlags));
    errors.collect(ros.propertyValidator('serviceCidr', ros.validateString)(properties.serviceCidr));
    errors.collect(ros.propertyValidator('podVswitchIds', ros.listValidator(ros.validateString))(properties.podVswitchIds));
    errors.collect(ros.propertyValidator('workerAutoRenew', ros.validateBoolean)(properties.workerAutoRenew));
    errors.collect(ros.propertyValidator('proxyMode', ros.validateString)(properties.proxyMode));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosKubernetesCluster_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('disableRollback', ros.validateBoolean)(properties.disableRollback));
    errors.collect(ros.propertyValidator('workerInstanceTypes', ros.requiredValidator)(properties.workerInstanceTypes));
    if(properties.workerInstanceTypes && (Array.isArray(properties.workerInstanceTypes) || (typeof properties.workerInstanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('workerInstanceTypes', ros.validateLength)({
            data: properties.workerInstanceTypes.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('workerInstanceTypes', ros.listValidator(ros.validateString))(properties.workerInstanceTypes));
    errors.collect(ros.propertyValidator('loginPassword', ros.validateString)(properties.loginPassword));
    if(properties.masterPeriod && (typeof properties.masterPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('masterPeriod', ros.validateAllowedValues)({
          data: properties.masterPeriod,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('masterPeriod', ros.validateNumber)(properties.masterPeriod));
    errors.collect(ros.propertyValidator('kubernetesVersion', ros.validateString)(properties.kubernetesVersion));
    if(properties.masterInstanceChargeType && (typeof properties.masterInstanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('masterInstanceChargeType', ros.validateAllowedValues)({
          data: properties.masterInstanceChargeType,
          allowedValues: ["Subscription","PrePaid","PrePay","Prepaid","PayAsYouGo","PostPaid","PayOnDemand","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('masterInstanceChargeType', ros.validateString)(properties.masterInstanceChargeType));
    errors.collect(ros.propertyValidator('containerCidr', ros.validateString)(properties.containerCidr));
    if(properties.workerInstanceChargeType && (typeof properties.workerInstanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('workerInstanceChargeType', ros.validateAllowedValues)({
          data: properties.workerInstanceChargeType,
          allowedValues: ["Subscription","PrePaid","PrePay","Prepaid","PayAsYouGo","PostPaid","PayOnDemand","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('workerInstanceChargeType', ros.validateString)(properties.workerInstanceChargeType));
    errors.collect(ros.propertyValidator('cpuPolicy', ros.validateString)(properties.cpuPolicy));
    errors.collect(ros.propertyValidator('keyPair', ros.validateString)(properties.keyPair));
    errors.collect(ros.propertyValidator('masterInstanceTypes', ros.requiredValidator)(properties.masterInstanceTypes));
    if(properties.masterInstanceTypes && (Array.isArray(properties.masterInstanceTypes) || (typeof properties.masterInstanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('masterInstanceTypes', ros.validateLength)({
            data: properties.masterInstanceTypes.length,
            min: 3,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('masterInstanceTypes', ros.listValidator(ros.validateAny))(properties.masterInstanceTypes));
    errors.collect(ros.propertyValidator('workerDataDisks', ros.listValidator(RosKubernetesCluster_WorkerDataDisksPropertyValidator))(properties.workerDataDisks));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('timeoutMins', ros.validateNumber)(properties.timeoutMins));
    if(properties.masterPeriodUnit && (typeof properties.masterPeriodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('masterPeriodUnit', ros.validateAllowedValues)({
          data: properties.masterPeriodUnit,
          allowedValues: ["Week","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('masterPeriodUnit', ros.validateString)(properties.masterPeriodUnit));
    if(properties.masterAutoRenewPeriod && (typeof properties.masterAutoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('masterAutoRenewPeriod', ros.validateAllowedValues)({
          data: properties.masterAutoRenewPeriod,
          allowedValues: [1,2,3,6,12],
        }));
    }
    errors.collect(ros.propertyValidator('masterAutoRenewPeriod', ros.validateNumber)(properties.masterAutoRenewPeriod));
    errors.collect(ros.propertyValidator('workerDataDisk', ros.validateBoolean)(properties.workerDataDisk));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.numOfNodes && (typeof properties.numOfNodes) !== 'object') {
        errors.collect(ros.propertyValidator('numOfNodes', ros.validateRange)({
            data: properties.numOfNodes,
            min: 0,
            max: 300,
          }));
    }
    errors.collect(ros.propertyValidator('numOfNodes', ros.validateNumber)(properties.numOfNodes));
    errors.collect(ros.propertyValidator('masterAutoRenew', ros.validateBoolean)(properties.masterAutoRenew));
    if(properties.workerAutoRenewPeriod && (typeof properties.workerAutoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('workerAutoRenewPeriod', ros.validateAllowedValues)({
          data: properties.workerAutoRenewPeriod,
          allowedValues: [1,2,3,6,12],
        }));
    }
    errors.collect(ros.propertyValidator('workerAutoRenewPeriod', ros.validateNumber)(properties.workerAutoRenewPeriod));
    errors.collect(ros.propertyValidator('workerVSwitchIds', ros.requiredValidator)(properties.workerVSwitchIds));
    if(properties.workerVSwitchIds && (Array.isArray(properties.workerVSwitchIds) || (typeof properties.workerVSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('workerVSwitchIds', ros.validateLength)({
            data: properties.workerVSwitchIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workerVSwitchIds', ros.listValidator(ros.validateAny))(properties.workerVSwitchIds));
    errors.collect(ros.propertyValidator('snatEntry', ros.validateBoolean)(properties.snatEntry));
    errors.collect(ros.propertyValidator('masterDataDisk', ros.validateBoolean)(properties.masterDataDisk));
    return errors.wrap('supplied properties not correct for "RosKubernetesClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosKubernetesClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKubernetesClusterPropsValidator(properties).assertSuccess();
    }
    return {
      MasterInstanceTypes: ros.listMapper(ros.objectToRosTemplate)(properties.masterInstanceTypes),
      MasterVSwitchIds: ros.listMapper(ros.objectToRosTemplate)(properties.masterVSwitchIds),
      Name: ros.stringToRosTemplate(properties.name),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      WorkerInstanceTypes: ros.listMapper(ros.stringToRosTemplate)(properties.workerInstanceTypes),
      WorkerVSwitchIds: ros.listMapper(ros.objectToRosTemplate)(properties.workerVSwitchIds),
      Addons: ros.listMapper(rosKubernetesClusterAddonsPropertyToRosTemplate)(properties.addons),
      CloudMonitorFlags: ros.booleanToRosTemplate(properties.cloudMonitorFlags),
      ContainerCidr: ros.stringToRosTemplate(properties.containerCidr),
      CpuPolicy: ros.stringToRosTemplate(properties.cpuPolicy),
      DisableRollback: ros.booleanToRosTemplate(properties.disableRollback),
      EndpointPublicAccess: ros.booleanToRosTemplate(properties.endpointPublicAccess),
      KeyPair: ros.stringToRosTemplate(properties.keyPair),
      KubernetesVersion: ros.stringToRosTemplate(properties.kubernetesVersion),
      LoginPassword: ros.stringToRosTemplate(properties.loginPassword),
      MasterAutoRenew: ros.booleanToRosTemplate(properties.masterAutoRenew),
      MasterAutoRenewPeriod: ros.numberToRosTemplate(properties.masterAutoRenewPeriod),
      MasterCount: ros.numberToRosTemplate(properties.masterCount),
      MasterDataDisk: ros.booleanToRosTemplate(properties.masterDataDisk),
      MasterDataDisks: ros.listMapper(rosKubernetesClusterMasterDataDisksPropertyToRosTemplate)(properties.masterDataDisks),
      MasterInstanceChargeType: ros.stringToRosTemplate(properties.masterInstanceChargeType),
      MasterPeriod: ros.numberToRosTemplate(properties.masterPeriod),
      MasterPeriodUnit: ros.stringToRosTemplate(properties.masterPeriodUnit),
      MasterSystemDiskCategory: ros.stringToRosTemplate(properties.masterSystemDiskCategory),
      MasterSystemDiskSize: ros.numberToRosTemplate(properties.masterSystemDiskSize),
      NodePortRange: ros.stringToRosTemplate(properties.nodePortRange),
      NumOfNodes: ros.numberToRosTemplate(properties.numOfNodes),
      PodVswitchIds: ros.listMapper(ros.stringToRosTemplate)(properties.podVswitchIds),
      ProxyMode: ros.stringToRosTemplate(properties.proxyMode),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      ServiceCidr: ros.stringToRosTemplate(properties.serviceCidr),
      SnatEntry: ros.booleanToRosTemplate(properties.snatEntry),
      SshFlags: ros.booleanToRosTemplate(properties.sshFlags),
      Tags: ros.listMapper(rosKubernetesClusterTagsPropertyToRosTemplate)(properties.tags),
      Taint: ros.listMapper(ros.anyDictToRosTemplate)(properties.taint),
      TimeoutMins: ros.numberToRosTemplate(properties.timeoutMins),
      WorkerAutoRenew: ros.booleanToRosTemplate(properties.workerAutoRenew),
      WorkerAutoRenewPeriod: ros.numberToRosTemplate(properties.workerAutoRenewPeriod),
      WorkerDataDisk: ros.booleanToRosTemplate(properties.workerDataDisk),
      WorkerDataDisks: ros.listMapper(rosKubernetesClusterWorkerDataDisksPropertyToRosTemplate)(properties.workerDataDisks),
      WorkerInstanceChargeType: ros.stringToRosTemplate(properties.workerInstanceChargeType),
      WorkerPeriod: ros.numberToRosTemplate(properties.workerPeriod),
      WorkerPeriodUnit: ros.stringToRosTemplate(properties.workerPeriodUnit),
      WorkerSystemDiskCategory: ros.stringToRosTemplate(properties.workerSystemDiskCategory),
      WorkerSystemDiskSize: ros.numberToRosTemplate(properties.workerSystemDiskSize),
    };
}

/**
 * A ROS template type:  `ALIYUN::CS::KubernetesCluster`
 */
export class RosKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::KubernetesCluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
     * List size must be 3, Instance Type can be repeated.
     */
    public masterInstanceTypes: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
     */
    public masterVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    public workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerVSwitchIds: The virtual switch ID of the worker node.
     */
    public workerVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    public addons: Array<RosKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    public cloudMonitorFlags: boolean | ros.IResolvable | undefined;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    public containerCidr: string | ros.IResolvable | undefined;

    /**
     * @Property cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
     */
    public cpuPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    public disableRollback: boolean | ros.IResolvable | undefined;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    public endpointPublicAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    public keyPair: string | ros.IResolvable | undefined;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    public kubernetesVersion: string | ros.IResolvable | undefined;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    public loginPassword: string | ros.IResolvable | undefined;

    /**
     * @Property masterAutoRenew: Whether the master node automatically renews. It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    public masterAutoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    public masterAutoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
     */
    public masterCount: number | ros.IResolvable | undefined;

    /**
     * @Property masterDataDisk: Whether the master node mounts data disks can be selected as:
     * true: mount the data disk
     * false: no data disk is mounted, default is false
     */
    public masterDataDisk: boolean | ros.IResolvable | undefined;

    /**
     * @Property masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
     */
    public masterDataDisks: Array<RosKubernetesCluster.MasterDataDisksProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property masterInstanceChargeType: Master node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    public masterInstanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property masterPeriod: The duration of the annual subscription and monthly subscription. It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    public masterPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property masterPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month
     */
    public masterPeriodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property masterSystemDiskCategory: Master disk system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * cloud_essd: ESSD cloud diskDefault to cloud_ssd.
     */
    public masterSystemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property masterSystemDiskSize: Master disk system disk size in GiB.
     * Default to 120.
     */
    public masterSystemDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property nodePortRange: Node service port. The value range is [30000, 65535].
     * Default to 30000-65535.
     */
    public nodePortRange: string | ros.IResolvable | undefined;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    public numOfNodes: number | ros.IResolvable | undefined;

    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, 
     *  you must specify at least one pod vSwitch in the same zone. 
     *  The pod vSwitches cannot be the same as the node vSwitches. 
     *  We recommend that you set the mask length of the CIDR block to a value no 
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network 
     * plug-in is selected for the cluster.
     */
    public podVswitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    public proxyMode: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    public serviceCidr: string | ros.IResolvable | undefined;

    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    public snatEntry: boolean | ros.IResolvable | undefined;

    /**
     * @Property sshFlags: Whether to enable public network SSH login:
     * true: open
     * false: not open
     */
    public sshFlags: boolean | ros.IResolvable | undefined;

    /**
     * @Property tags: Tag the cluster.
     */
    public tags: RosKubernetesCluster.TagsProperty[] | undefined;

    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    public taint: Array<{ [key: string]: any }> | ros.IResolvable | undefined;

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    public timeoutMins: number | ros.IResolvable | undefined;

    /**
     * @Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    public workerAutoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    public workerAutoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    public workerDataDisk: boolean | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    public workerDataDisks: Array<RosKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property workerInstanceChargeType: Worker node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    public workerInstanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    public workerPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month.
     */
    public workerPeriodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    public workerSystemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    public workerSystemDiskSize: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CS::KubernetesCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKubernetesClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKubernetesCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrTaskId = this.getAtt('TaskId');
        this.attrWorkerRamRoleName = this.getAtt('WorkerRamRoleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.masterInstanceTypes = props.masterInstanceTypes;
        this.masterVSwitchIds = props.masterVSwitchIds;
        this.name = props.name;
        this.vpcId = props.vpcId;
        this.workerInstanceTypes = props.workerInstanceTypes;
        this.workerVSwitchIds = props.workerVSwitchIds;
        this.addons = props.addons;
        this.cloudMonitorFlags = props.cloudMonitorFlags;
        this.containerCidr = props.containerCidr;
        this.cpuPolicy = props.cpuPolicy;
        this.disableRollback = props.disableRollback;
        this.endpointPublicAccess = props.endpointPublicAccess;
        this.keyPair = props.keyPair;
        this.kubernetesVersion = props.kubernetesVersion;
        this.loginPassword = props.loginPassword;
        this.masterAutoRenew = props.masterAutoRenew;
        this.masterAutoRenewPeriod = props.masterAutoRenewPeriod;
        this.masterCount = props.masterCount;
        this.masterDataDisk = props.masterDataDisk;
        this.masterDataDisks = props.masterDataDisks;
        this.masterInstanceChargeType = props.masterInstanceChargeType;
        this.masterPeriod = props.masterPeriod;
        this.masterPeriodUnit = props.masterPeriodUnit;
        this.masterSystemDiskCategory = props.masterSystemDiskCategory;
        this.masterSystemDiskSize = props.masterSystemDiskSize;
        this.nodePortRange = props.nodePortRange;
        this.numOfNodes = props.numOfNodes;
        this.podVswitchIds = props.podVswitchIds;
        this.proxyMode = props.proxyMode;
        this.securityGroupId = props.securityGroupId;
        this.serviceCidr = props.serviceCidr;
        this.snatEntry = props.snatEntry;
        this.sshFlags = props.sshFlags;
        this.tags = props.tags;
        this.taint = props.taint;
        this.timeoutMins = props.timeoutMins;
        this.workerAutoRenew = props.workerAutoRenew;
        this.workerAutoRenewPeriod = props.workerAutoRenewPeriod;
        this.workerDataDisk = props.workerDataDisk;
        this.workerDataDisks = props.workerDataDisks;
        this.workerInstanceChargeType = props.workerInstanceChargeType;
        this.workerPeriod = props.workerPeriod;
        this.workerPeriodUnit = props.workerPeriodUnit;
        this.workerSystemDiskCategory = props.workerSystemDiskCategory;
        this.workerSystemDiskSize = props.workerSystemDiskSize;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            masterInstanceTypes: this.masterInstanceTypes,
            masterVSwitchIds: this.masterVSwitchIds,
            name: this.name,
            vpcId: this.vpcId,
            workerInstanceTypes: this.workerInstanceTypes,
            workerVSwitchIds: this.workerVSwitchIds,
            addons: this.addons,
            cloudMonitorFlags: this.cloudMonitorFlags,
            containerCidr: this.containerCidr,
            cpuPolicy: this.cpuPolicy,
            disableRollback: this.disableRollback,
            endpointPublicAccess: this.endpointPublicAccess,
            keyPair: this.keyPair,
            kubernetesVersion: this.kubernetesVersion,
            loginPassword: this.loginPassword,
            masterAutoRenew: this.masterAutoRenew,
            masterAutoRenewPeriod: this.masterAutoRenewPeriod,
            masterCount: this.masterCount,
            masterDataDisk: this.masterDataDisk,
            masterDataDisks: this.masterDataDisks,
            masterInstanceChargeType: this.masterInstanceChargeType,
            masterPeriod: this.masterPeriod,
            masterPeriodUnit: this.masterPeriodUnit,
            masterSystemDiskCategory: this.masterSystemDiskCategory,
            masterSystemDiskSize: this.masterSystemDiskSize,
            nodePortRange: this.nodePortRange,
            numOfNodes: this.numOfNodes,
            podVswitchIds: this.podVswitchIds,
            proxyMode: this.proxyMode,
            securityGroupId: this.securityGroupId,
            serviceCidr: this.serviceCidr,
            snatEntry: this.snatEntry,
            sshFlags: this.sshFlags,
            tags: this.tags,
            taint: this.taint,
            timeoutMins: this.timeoutMins,
            workerAutoRenew: this.workerAutoRenew,
            workerAutoRenewPeriod: this.workerAutoRenewPeriod,
            workerDataDisk: this.workerDataDisk,
            workerDataDisks: this.workerDataDisks,
            workerInstanceChargeType: this.workerInstanceChargeType,
            workerPeriod: this.workerPeriod,
            workerPeriodUnit: this.workerPeriodUnit,
            workerSystemDiskCategory: this.workerSystemDiskCategory,
            workerSystemDiskSize: this.workerSystemDiskSize,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKubernetesClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface AddonsProperty {
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: Addon plugin name
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AddonsProperty`
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_AddonsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AddonsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Addons` resource
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Addons` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterAddonsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_AddonsPropertyValidator(properties).assertSuccess();
    return {
      Config: ros.stringToRosTemplate(properties.config),
      Disabled: ros.booleanToRosTemplate(properties.disabled),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface MasterDataDisksProperty {
        /**
         * @Property category: Data disk type. Value includes:
     * cloud: ordinary cloud disk
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: Data disk size in GiB.
         */
        readonly size: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MasterDataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `MasterDataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_MasterDataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    return errors.wrap('supplied properties not correct for "MasterDataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.MasterDataDisks` resource
 *
 * @param properties - the TypeScript properties of a `MasterDataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.MasterDataDisks` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterMasterDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_MasterDataDisksPropertyValidator(properties).assertSuccess();
    return {
      Category: ros.stringToRosTemplate(properties.category),
      Size: ros.numberToRosTemplate(properties.size),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface WorkerDataDisksProperty {
        /**
         * @Property category: Data disk type. Value includes:
     * cloud: ordinary cloud disk
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: Data disk size in GiB.
         */
        readonly size: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WorkerDataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `WorkerDataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_WorkerDataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    return errors.wrap('supplied properties not correct for "WorkerDataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.WorkerDataDisks` resource
 *
 * @param properties - the TypeScript properties of a `WorkerDataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.WorkerDataDisks` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterWorkerDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_WorkerDataDisksPropertyValidator(properties).assertSuccess();
    return {
      Category: ros.stringToRosTemplate(properties.category),
      Size: ros.numberToRosTemplate(properties.size),
    };
}

/**
 * Properties for defining a `ALIYUN::CS::ManagedEdgeKubernetesCluster`
 */
export interface RosManagedEdgeKubernetesClusterProps {

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300]
     */
    readonly numOfNodes: number | ros.IResolvable;

    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    readonly addons?: Array<RosManagedEdgeKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;

    /**
     * @Property clusterSpec: The edge managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    readonly clusterSpec?: string | ros.IResolvable;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    readonly disableRollback?: boolean | ros.IResolvable;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;

    /**
     * @Property profile: Edge cluster ID. The default value is Edge.
     */
    readonly profile?: string | ros.IResolvable;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;

    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    readonly snatEntry?: boolean | ros.IResolvable;

    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosManagedEdgeKubernetesCluster.TagsProperty[];

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16. 
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    readonly vSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    readonly workerDataDisk?: boolean | ros.IResolvable;

    /**
     * @Property workerDataDiskCategory: Data disk type.
     */
    readonly workerDataDiskCategory?: string | ros.IResolvable;

    /**
     * @Property workerDataDiskSize: Data disk size in GiB.
     */
    readonly workerDataDiskSize?: number | ros.IResolvable;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    readonly workerInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. 
     * Default to cloud_efficiency.
     */
    readonly workerSystemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    readonly workerSystemDiskSize?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosManagedEdgeKubernetesClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosManagedEdgeKubernetesClusterProps`
 *
 * @returns the result of the validation.
 */
function RosManagedEdgeKubernetesClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('endpointPublicAccess', ros.validateBoolean)(properties.endpointPublicAccess));
    errors.collect(ros.propertyValidator('containerCidr', ros.validateString)(properties.containerCidr));
    errors.collect(ros.propertyValidator('keyPair', ros.validateString)(properties.keyPair));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateAny))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('timeoutMins', ros.validateNumber)(properties.timeoutMins));
    errors.collect(ros.propertyValidator('addons', ros.listValidator(RosManagedEdgeKubernetesCluster_AddonsPropertyValidator))(properties.addons));
    errors.collect(ros.propertyValidator('clusterSpec', ros.validateString)(properties.clusterSpec));
    errors.collect(ros.propertyValidator('workerSystemDiskCategory', ros.validateString)(properties.workerSystemDiskCategory));
    if(properties.workerSystemDiskSize && (typeof properties.workerSystemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateRange)({
            data: properties.workerSystemDiskSize,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateNumber)(properties.workerSystemDiskSize));
    errors.collect(ros.propertyValidator('profile', ros.validateString)(properties.profile));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('workerDataDisk', ros.validateBoolean)(properties.workerDataDisk));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.workerDataDiskSize && (typeof properties.workerDataDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('workerDataDiskSize', ros.validateRange)({
            data: properties.workerDataDiskSize,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workerDataDiskSize', ros.validateNumber)(properties.workerDataDiskSize));
    errors.collect(ros.propertyValidator('cloudMonitorFlags', ros.validateBoolean)(properties.cloudMonitorFlags));
    errors.collect(ros.propertyValidator('numOfNodes', ros.requiredValidator)(properties.numOfNodes));
    if(properties.numOfNodes && (typeof properties.numOfNodes) !== 'object') {
        errors.collect(ros.propertyValidator('numOfNodes', ros.validateRange)({
            data: properties.numOfNodes,
            min: 0,
            max: 300,
          }));
    }
    errors.collect(ros.propertyValidator('numOfNodes', ros.validateNumber)(properties.numOfNodes));
    errors.collect(ros.propertyValidator('serviceCidr', ros.validateString)(properties.serviceCidr));
    errors.collect(ros.propertyValidator('workerDataDiskCategory', ros.validateString)(properties.workerDataDiskCategory));
    errors.collect(ros.propertyValidator('snatEntry', ros.validateBoolean)(properties.snatEntry));
    errors.collect(ros.propertyValidator('proxyMode', ros.validateString)(properties.proxyMode));
    errors.collect(ros.propertyValidator('disableRollback', ros.validateBoolean)(properties.disableRollback));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosManagedEdgeKubernetesCluster_TagsPropertyValidator))(properties.tags));
    if(properties.workerInstanceTypes && (Array.isArray(properties.workerInstanceTypes) || (typeof properties.workerInstanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('workerInstanceTypes', ros.validateLength)({
            data: properties.workerInstanceTypes.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('workerInstanceTypes', ros.listValidator(ros.validateString))(properties.workerInstanceTypes));
    errors.collect(ros.propertyValidator('loginPassword', ros.validateString)(properties.loginPassword));
    return errors.wrap('supplied properties not correct for "RosManagedEdgeKubernetesClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosManagedEdgeKubernetesClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster` resource.
 */
// @ts-ignore TS6133
function rosManagedEdgeKubernetesClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosManagedEdgeKubernetesClusterPropsValidator(properties).assertSuccess();
    }
    return {
      Name: ros.stringToRosTemplate(properties.name),
      NumOfNodes: ros.numberToRosTemplate(properties.numOfNodes),
      Addons: ros.listMapper(rosManagedEdgeKubernetesClusterAddonsPropertyToRosTemplate)(properties.addons),
      CloudMonitorFlags: ros.booleanToRosTemplate(properties.cloudMonitorFlags),
      ClusterSpec: ros.stringToRosTemplate(properties.clusterSpec),
      ContainerCidr: ros.stringToRosTemplate(properties.containerCidr),
      DisableRollback: ros.booleanToRosTemplate(properties.disableRollback),
      EndpointPublicAccess: ros.booleanToRosTemplate(properties.endpointPublicAccess),
      KeyPair: ros.stringToRosTemplate(properties.keyPair),
      LoginPassword: ros.stringToRosTemplate(properties.loginPassword),
      Profile: ros.stringToRosTemplate(properties.profile),
      ProxyMode: ros.stringToRosTemplate(properties.proxyMode),
      ServiceCidr: ros.stringToRosTemplate(properties.serviceCidr),
      SnatEntry: ros.booleanToRosTemplate(properties.snatEntry),
      Tags: ros.listMapper(rosManagedEdgeKubernetesClusterTagsPropertyToRosTemplate)(properties.tags),
      TimeoutMins: ros.numberToRosTemplate(properties.timeoutMins),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchIds: ros.listMapper(ros.objectToRosTemplate)(properties.vSwitchIds),
      WorkerDataDisk: ros.booleanToRosTemplate(properties.workerDataDisk),
      WorkerDataDiskCategory: ros.stringToRosTemplate(properties.workerDataDiskCategory),
      WorkerDataDiskSize: ros.numberToRosTemplate(properties.workerDataDiskSize),
      WorkerInstanceTypes: ros.listMapper(ros.stringToRosTemplate)(properties.workerInstanceTypes),
      WorkerSystemDiskCategory: ros.stringToRosTemplate(properties.workerSystemDiskCategory),
      WorkerSystemDiskSize: ros.numberToRosTemplate(properties.workerSystemDiskSize),
    };
}

/**
 * A ROS template type:  `ALIYUN::CS::ManagedEdgeKubernetesCluster`
 */
export class RosManagedEdgeKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ManagedEdgeKubernetesCluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300]
     */
    public numOfNodes: number | ros.IResolvable;

    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    public addons: Array<RosManagedEdgeKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    public cloudMonitorFlags: boolean | ros.IResolvable | undefined;

    /**
     * @Property clusterSpec: The edge managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    public clusterSpec: string | ros.IResolvable | undefined;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    public containerCidr: string | ros.IResolvable | undefined;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    public disableRollback: boolean | ros.IResolvable | undefined;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
     */
    public endpointPublicAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    public keyPair: string | ros.IResolvable | undefined;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    public loginPassword: string | ros.IResolvable | undefined;

    /**
     * @Property profile: Edge cluster ID. The default value is Edge.
     */
    public profile: string | ros.IResolvable | undefined;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    public proxyMode: string | ros.IResolvable | undefined;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    public serviceCidr: string | ros.IResolvable | undefined;

    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    public snatEntry: boolean | ros.IResolvable | undefined;

    /**
     * @Property tags: Tag the cluster.
     */
    public tags: RosManagedEdgeKubernetesCluster.TagsProperty[] | undefined;

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    public timeoutMins: number | ros.IResolvable | undefined;

    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16. 
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    public vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    public workerDataDisk: boolean | ros.IResolvable | undefined;

    /**
     * @Property workerDataDiskCategory: Data disk type.
     */
    public workerDataDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property workerDataDiskSize: Data disk size in GiB.
     */
    public workerDataDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    public workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. 
     * Default to cloud_efficiency.
     */
    public workerSystemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    public workerSystemDiskSize: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CS::ManagedEdgeKubernetesCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedEdgeKubernetesClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosManagedEdgeKubernetesCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrTaskId = this.getAtt('TaskId');
        this.attrWorkerRamRoleName = this.getAtt('WorkerRamRoleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.numOfNodes = props.numOfNodes;
        this.addons = props.addons;
        this.cloudMonitorFlags = props.cloudMonitorFlags;
        this.clusterSpec = props.clusterSpec;
        this.containerCidr = props.containerCidr;
        this.disableRollback = props.disableRollback;
        this.endpointPublicAccess = props.endpointPublicAccess;
        this.keyPair = props.keyPair;
        this.loginPassword = props.loginPassword;
        this.profile = props.profile;
        this.proxyMode = props.proxyMode;
        this.serviceCidr = props.serviceCidr;
        this.snatEntry = props.snatEntry;
        this.tags = props.tags;
        this.timeoutMins = props.timeoutMins;
        this.vpcId = props.vpcId;
        this.vSwitchIds = props.vSwitchIds;
        this.workerDataDisk = props.workerDataDisk;
        this.workerDataDiskCategory = props.workerDataDiskCategory;
        this.workerDataDiskSize = props.workerDataDiskSize;
        this.workerInstanceTypes = props.workerInstanceTypes;
        this.workerSystemDiskCategory = props.workerSystemDiskCategory;
        this.workerSystemDiskSize = props.workerSystemDiskSize;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            numOfNodes: this.numOfNodes,
            addons: this.addons,
            cloudMonitorFlags: this.cloudMonitorFlags,
            clusterSpec: this.clusterSpec,
            containerCidr: this.containerCidr,
            disableRollback: this.disableRollback,
            endpointPublicAccess: this.endpointPublicAccess,
            keyPair: this.keyPair,
            loginPassword: this.loginPassword,
            profile: this.profile,
            proxyMode: this.proxyMode,
            serviceCidr: this.serviceCidr,
            snatEntry: this.snatEntry,
            tags: this.tags,
            timeoutMins: this.timeoutMins,
            vpcId: this.vpcId,
            vSwitchIds: this.vSwitchIds,
            workerDataDisk: this.workerDataDisk,
            workerDataDiskCategory: this.workerDataDiskCategory,
            workerDataDiskSize: this.workerDataDiskSize,
            workerInstanceTypes: this.workerInstanceTypes,
            workerSystemDiskCategory: this.workerSystemDiskCategory,
            workerSystemDiskSize: this.workerSystemDiskSize,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosManagedEdgeKubernetesClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    export interface AddonsProperty {
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: The name of the add-on.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AddonsProperty`
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedEdgeKubernetesCluster_AddonsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AddonsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster.Addons` resource
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster.Addons` resource.
 */
// @ts-ignore TS6133
function rosManagedEdgeKubernetesClusterAddonsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedEdgeKubernetesCluster_AddonsPropertyValidator(properties).assertSuccess();
    return {
      Config: ros.stringToRosTemplate(properties.config),
      Disabled: ros.booleanToRosTemplate(properties.disabled),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedEdgeKubernetesCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosManagedEdgeKubernetesClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedEdgeKubernetesCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::CS::ManagedKubernetesCluster`
 */
export interface RosManagedKubernetesClusterProps {

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    readonly vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    readonly workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    readonly addons?: Array<RosManagedKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;

    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    readonly clusterSpec?: string | ros.IResolvable;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    readonly disableRollback?: boolean | ros.IResolvable;

    /**
     * @Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
     */
    readonly encryptionProviderKey?: string | ros.IResolvable;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    readonly numOfNodes?: number | ros.IResolvable;

    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, 
     *  you must specify at least one pod vSwitch in the same zone. 
     *  The pod vSwitches cannot be the same as the node vSwitches. 
     *  We recommend that you set the mask length of the CIDR block to a value no 
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network 
     * plug-in is selected for the cluster.
     */
    readonly podVswitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;

    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    readonly snatEntry?: boolean | ros.IResolvable;

    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosManagedKubernetesCluster.TagsProperty[];

    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    readonly taint?: Array<{ [key: string]: any }> | ros.IResolvable;

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;

    /**
     * @Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly workerAutoRenew?: boolean | ros.IResolvable;

    /**
     * @Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly workerAutoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    readonly workerDataDisk?: boolean | ros.IResolvable;

    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    readonly workerDataDisks?: Array<RosManagedKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerInstanceChargeType: Worker node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly workerInstanceChargeType?: string | ros.IResolvable;

    /**
     * @Property workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    readonly workerPeriod?: number | ros.IResolvable;

    /**
     * @Property workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month.
     */
    readonly workerPeriodUnit?: string | ros.IResolvable;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    readonly workerSystemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    readonly workerSystemDiskSize?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosManagedKubernetesClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosManagedKubernetesClusterProps`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('endpointPublicAccess', ros.validateBoolean)(properties.endpointPublicAccess));
    if(properties.workerPeriod && (typeof properties.workerPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('workerPeriod', ros.validateAllowedValues)({
          data: properties.workerPeriod,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('workerPeriod', ros.validateNumber)(properties.workerPeriod));
    if(properties.workerPeriodUnit && (typeof properties.workerPeriodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('workerPeriodUnit', ros.validateAllowedValues)({
          data: properties.workerPeriodUnit,
          allowedValues: ["Week","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('workerPeriodUnit', ros.validateString)(properties.workerPeriodUnit));
    errors.collect(ros.propertyValidator('addons', ros.listValidator(RosManagedKubernetesCluster_AddonsPropertyValidator))(properties.addons));
    errors.collect(ros.propertyValidator('workerSystemDiskCategory', ros.validateString)(properties.workerSystemDiskCategory));
    if(properties.workerSystemDiskSize && (typeof properties.workerSystemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateRange)({
            data: properties.workerSystemDiskSize,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateNumber)(properties.workerSystemDiskSize));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('taint', ros.listValidator(ros.validateAnyDict))(properties.taint));
    errors.collect(ros.propertyValidator('cloudMonitorFlags', ros.validateBoolean)(properties.cloudMonitorFlags));
    errors.collect(ros.propertyValidator('serviceCidr', ros.validateString)(properties.serviceCidr));
    errors.collect(ros.propertyValidator('podVswitchIds', ros.listValidator(ros.validateString))(properties.podVswitchIds));
    errors.collect(ros.propertyValidator('workerAutoRenew', ros.validateBoolean)(properties.workerAutoRenew));
    errors.collect(ros.propertyValidator('proxyMode', ros.validateString)(properties.proxyMode));
    errors.collect(ros.propertyValidator('disableRollback', ros.validateBoolean)(properties.disableRollback));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosManagedKubernetesCluster_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('workerInstanceTypes', ros.requiredValidator)(properties.workerInstanceTypes));
    if(properties.workerInstanceTypes && (Array.isArray(properties.workerInstanceTypes) || (typeof properties.workerInstanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('workerInstanceTypes', ros.validateLength)({
            data: properties.workerInstanceTypes.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('workerInstanceTypes', ros.listValidator(ros.validateString))(properties.workerInstanceTypes));
    errors.collect(ros.propertyValidator('loginPassword', ros.validateString)(properties.loginPassword));
    errors.collect(ros.propertyValidator('kubernetesVersion', ros.validateString)(properties.kubernetesVersion));
    errors.collect(ros.propertyValidator('containerCidr', ros.validateString)(properties.containerCidr));
    if(properties.workerInstanceChargeType && (typeof properties.workerInstanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('workerInstanceChargeType', ros.validateAllowedValues)({
          data: properties.workerInstanceChargeType,
          allowedValues: ["Subscription","PrePaid","PrePay","Prepaid","PayAsYouGo","PostPaid","PayOnDemand","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('workerInstanceChargeType', ros.validateString)(properties.workerInstanceChargeType));
    errors.collect(ros.propertyValidator('keyPair', ros.validateString)(properties.keyPair));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.requiredValidator)(properties.vSwitchIds));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateAny))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('workerDataDisks', ros.listValidator(RosManagedKubernetesCluster_WorkerDataDisksPropertyValidator))(properties.workerDataDisks));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('timeoutMins', ros.validateNumber)(properties.timeoutMins));
    errors.collect(ros.propertyValidator('clusterSpec', ros.validateString)(properties.clusterSpec));
    errors.collect(ros.propertyValidator('workerDataDisk', ros.validateBoolean)(properties.workerDataDisk));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.numOfNodes && (typeof properties.numOfNodes) !== 'object') {
        errors.collect(ros.propertyValidator('numOfNodes', ros.validateRange)({
            data: properties.numOfNodes,
            min: 2,
            max: 300,
          }));
    }
    errors.collect(ros.propertyValidator('numOfNodes', ros.validateNumber)(properties.numOfNodes));
    errors.collect(ros.propertyValidator('encryptionProviderKey', ros.validateString)(properties.encryptionProviderKey));
    if(properties.workerAutoRenewPeriod && (typeof properties.workerAutoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('workerAutoRenewPeriod', ros.validateAllowedValues)({
          data: properties.workerAutoRenewPeriod,
          allowedValues: [1,2,3,6,12],
        }));
    }
    errors.collect(ros.propertyValidator('workerAutoRenewPeriod', ros.validateNumber)(properties.workerAutoRenewPeriod));
    errors.collect(ros.propertyValidator('snatEntry', ros.validateBoolean)(properties.snatEntry));
    return errors.wrap('supplied properties not correct for "RosManagedKubernetesClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosManagedKubernetesClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosManagedKubernetesClusterPropsValidator(properties).assertSuccess();
    }
    return {
      Name: ros.stringToRosTemplate(properties.name),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchIds: ros.listMapper(ros.objectToRosTemplate)(properties.vSwitchIds),
      WorkerInstanceTypes: ros.listMapper(ros.stringToRosTemplate)(properties.workerInstanceTypes),
      Addons: ros.listMapper(rosManagedKubernetesClusterAddonsPropertyToRosTemplate)(properties.addons),
      CloudMonitorFlags: ros.booleanToRosTemplate(properties.cloudMonitorFlags),
      ClusterSpec: ros.stringToRosTemplate(properties.clusterSpec),
      ContainerCidr: ros.stringToRosTemplate(properties.containerCidr),
      DisableRollback: ros.booleanToRosTemplate(properties.disableRollback),
      EncryptionProviderKey: ros.stringToRosTemplate(properties.encryptionProviderKey),
      EndpointPublicAccess: ros.booleanToRosTemplate(properties.endpointPublicAccess),
      KeyPair: ros.stringToRosTemplate(properties.keyPair),
      KubernetesVersion: ros.stringToRosTemplate(properties.kubernetesVersion),
      LoginPassword: ros.stringToRosTemplate(properties.loginPassword),
      NumOfNodes: ros.numberToRosTemplate(properties.numOfNodes),
      PodVswitchIds: ros.listMapper(ros.stringToRosTemplate)(properties.podVswitchIds),
      ProxyMode: ros.stringToRosTemplate(properties.proxyMode),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      ServiceCidr: ros.stringToRosTemplate(properties.serviceCidr),
      SnatEntry: ros.booleanToRosTemplate(properties.snatEntry),
      Tags: ros.listMapper(rosManagedKubernetesClusterTagsPropertyToRosTemplate)(properties.tags),
      Taint: ros.listMapper(ros.anyDictToRosTemplate)(properties.taint),
      TimeoutMins: ros.numberToRosTemplate(properties.timeoutMins),
      WorkerAutoRenew: ros.booleanToRosTemplate(properties.workerAutoRenew),
      WorkerAutoRenewPeriod: ros.numberToRosTemplate(properties.workerAutoRenewPeriod),
      WorkerDataDisk: ros.booleanToRosTemplate(properties.workerDataDisk),
      WorkerDataDisks: ros.listMapper(rosManagedKubernetesClusterWorkerDataDisksPropertyToRosTemplate)(properties.workerDataDisks),
      WorkerInstanceChargeType: ros.stringToRosTemplate(properties.workerInstanceChargeType),
      WorkerPeriod: ros.numberToRosTemplate(properties.workerPeriod),
      WorkerPeriodUnit: ros.stringToRosTemplate(properties.workerPeriodUnit),
      WorkerSystemDiskCategory: ros.stringToRosTemplate(properties.workerSystemDiskCategory),
      WorkerSystemDiskSize: ros.numberToRosTemplate(properties.workerSystemDiskSize),
    };
}

/**
 * A ROS template type:  `ALIYUN::CS::ManagedKubernetesCluster`
 */
export class RosManagedKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ManagedKubernetesCluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    public vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    public workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    public addons: Array<RosManagedKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    public cloudMonitorFlags: boolean | ros.IResolvable | undefined;

    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    public clusterSpec: string | ros.IResolvable | undefined;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    public containerCidr: string | ros.IResolvable | undefined;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    public disableRollback: boolean | ros.IResolvable | undefined;

    /**
     * @Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
     */
    public encryptionProviderKey: string | ros.IResolvable | undefined;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    public endpointPublicAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    public keyPair: string | ros.IResolvable | undefined;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    public kubernetesVersion: string | ros.IResolvable | undefined;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    public loginPassword: string | ros.IResolvable | undefined;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    public numOfNodes: number | ros.IResolvable | undefined;

    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, 
     *  you must specify at least one pod vSwitch in the same zone. 
     *  The pod vSwitches cannot be the same as the node vSwitches. 
     *  We recommend that you set the mask length of the CIDR block to a value no 
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network 
     * plug-in is selected for the cluster.
     */
    public podVswitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    public proxyMode: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    public serviceCidr: string | ros.IResolvable | undefined;

    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    public snatEntry: boolean | ros.IResolvable | undefined;

    /**
     * @Property tags: Tag the cluster.
     */
    public tags: RosManagedKubernetesCluster.TagsProperty[] | undefined;

    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    public taint: Array<{ [key: string]: any }> | ros.IResolvable | undefined;

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    public timeoutMins: number | ros.IResolvable | undefined;

    /**
     * @Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    public workerAutoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    public workerAutoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    public workerDataDisk: boolean | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    public workerDataDisks: Array<RosManagedKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property workerInstanceChargeType: Worker node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    public workerInstanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    public workerPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month.
     */
    public workerPeriodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    public workerSystemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    public workerSystemDiskSize: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CS::ManagedKubernetesCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedKubernetesClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosManagedKubernetesCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrTaskId = this.getAtt('TaskId');
        this.attrWorkerRamRoleName = this.getAtt('WorkerRamRoleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.vpcId = props.vpcId;
        this.vSwitchIds = props.vSwitchIds;
        this.workerInstanceTypes = props.workerInstanceTypes;
        this.addons = props.addons;
        this.cloudMonitorFlags = props.cloudMonitorFlags;
        this.clusterSpec = props.clusterSpec;
        this.containerCidr = props.containerCidr;
        this.disableRollback = props.disableRollback;
        this.encryptionProviderKey = props.encryptionProviderKey;
        this.endpointPublicAccess = props.endpointPublicAccess;
        this.keyPair = props.keyPair;
        this.kubernetesVersion = props.kubernetesVersion;
        this.loginPassword = props.loginPassword;
        this.numOfNodes = props.numOfNodes;
        this.podVswitchIds = props.podVswitchIds;
        this.proxyMode = props.proxyMode;
        this.securityGroupId = props.securityGroupId;
        this.serviceCidr = props.serviceCidr;
        this.snatEntry = props.snatEntry;
        this.tags = props.tags;
        this.taint = props.taint;
        this.timeoutMins = props.timeoutMins;
        this.workerAutoRenew = props.workerAutoRenew;
        this.workerAutoRenewPeriod = props.workerAutoRenewPeriod;
        this.workerDataDisk = props.workerDataDisk;
        this.workerDataDisks = props.workerDataDisks;
        this.workerInstanceChargeType = props.workerInstanceChargeType;
        this.workerPeriod = props.workerPeriod;
        this.workerPeriodUnit = props.workerPeriodUnit;
        this.workerSystemDiskCategory = props.workerSystemDiskCategory;
        this.workerSystemDiskSize = props.workerSystemDiskSize;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            vpcId: this.vpcId,
            vSwitchIds: this.vSwitchIds,
            workerInstanceTypes: this.workerInstanceTypes,
            addons: this.addons,
            cloudMonitorFlags: this.cloudMonitorFlags,
            clusterSpec: this.clusterSpec,
            containerCidr: this.containerCidr,
            disableRollback: this.disableRollback,
            encryptionProviderKey: this.encryptionProviderKey,
            endpointPublicAccess: this.endpointPublicAccess,
            keyPair: this.keyPair,
            kubernetesVersion: this.kubernetesVersion,
            loginPassword: this.loginPassword,
            numOfNodes: this.numOfNodes,
            podVswitchIds: this.podVswitchIds,
            proxyMode: this.proxyMode,
            securityGroupId: this.securityGroupId,
            serviceCidr: this.serviceCidr,
            snatEntry: this.snatEntry,
            tags: this.tags,
            taint: this.taint,
            timeoutMins: this.timeoutMins,
            workerAutoRenew: this.workerAutoRenew,
            workerAutoRenewPeriod: this.workerAutoRenewPeriod,
            workerDataDisk: this.workerDataDisk,
            workerDataDisks: this.workerDataDisks,
            workerInstanceChargeType: this.workerInstanceChargeType,
            workerPeriod: this.workerPeriod,
            workerPeriodUnit: this.workerPeriodUnit,
            workerSystemDiskCategory: this.workerSystemDiskCategory,
            workerSystemDiskSize: this.workerSystemDiskSize,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosManagedKubernetesClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface AddonsProperty {
        /**
         * @Property version: When the value is empty, the latest version is selected by default.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: Addon plugin name
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AddonsProperty`
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_AddonsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AddonsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Addons` resource
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Addons` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterAddonsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_AddonsPropertyValidator(properties).assertSuccess();
    return {
      Version: ros.stringToRosTemplate(properties.version),
      Config: ros.stringToRosTemplate(properties.config),
      Disabled: ros.booleanToRosTemplate(properties.disabled),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface WorkerDataDisksProperty {
        /**
         * @Property category: Data disk type. Value includes:
     * cloud: ordinary cloud disk
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: Data disk size in GiB.
         */
        readonly size: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WorkerDataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `WorkerDataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_WorkerDataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    return errors.wrap('supplied properties not correct for "WorkerDataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.WorkerDataDisks` resource
 *
 * @param properties - the TypeScript properties of a `WorkerDataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.WorkerDataDisks` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterWorkerDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_WorkerDataDisksPropertyValidator(properties).assertSuccess();
    return {
      Category: ros.stringToRosTemplate(properties.category),
      Size: ros.numberToRosTemplate(properties.size),
    };
}

/**
 * Properties for defining a `ALIYUN::CS::ServerlessKubernetesCluster`
 */
export interface RosServerlessKubernetesClusterProps {

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    readonly addons?: Array<RosServerlessKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;

    /**
     * @Property natGateway: Whether to create a NAT gateway. The value can be true or false. If not set, the system defaults to false.
     */
    readonly natGateway?: boolean | ros.IResolvable;

    /**
     * @Property privateZone: Whether to enable PrivateZone for service discovery.
     */
    readonly privateZone?: boolean | ros.IResolvable;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;

    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosServerlessKubernetesCluster.TagsProperty[];

    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16. 
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    readonly vSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServerlessKubernetesClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosServerlessKubernetesClusterProps`
 *
 * @returns the result of the validation.
 */
function RosServerlessKubernetesClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('kubernetesVersion', ros.validateString)(properties.kubernetesVersion));
    errors.collect(ros.propertyValidator('endpointPublicAccess', ros.validateBoolean)(properties.endpointPublicAccess));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateAny))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('addons', ros.listValidator(RosServerlessKubernetesCluster_AddonsPropertyValidator))(properties.addons));
    errors.collect(ros.propertyValidator('natGateway', ros.validateBoolean)(properties.natGateway));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('serviceCidr', ros.validateString)(properties.serviceCidr));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosServerlessKubernetesCluster_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('privateZone', ros.validateBoolean)(properties.privateZone));
    return errors.wrap('supplied properties not correct for "RosServerlessKubernetesClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ServerlessKubernetesCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosServerlessKubernetesClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ServerlessKubernetesCluster` resource.
 */
// @ts-ignore TS6133
function rosServerlessKubernetesClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServerlessKubernetesClusterPropsValidator(properties).assertSuccess();
    }
    return {
      Name: ros.stringToRosTemplate(properties.name),
      Addons: ros.listMapper(rosServerlessKubernetesClusterAddonsPropertyToRosTemplate)(properties.addons),
      EndpointPublicAccess: ros.booleanToRosTemplate(properties.endpointPublicAccess),
      KubernetesVersion: ros.stringToRosTemplate(properties.kubernetesVersion),
      NatGateway: ros.booleanToRosTemplate(properties.natGateway),
      PrivateZone: ros.booleanToRosTemplate(properties.privateZone),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      ServiceCidr: ros.stringToRosTemplate(properties.serviceCidr),
      Tags: ros.listMapper(rosServerlessKubernetesClusterTagsPropertyToRosTemplate)(properties.tags),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      VSwitchIds: ros.listMapper(ros.objectToRosTemplate)(properties.vSwitchIds),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::CS::ServerlessKubernetesCluster`
 */
export class RosServerlessKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ServerlessKubernetesCluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    public addons: Array<RosServerlessKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
     */
    public endpointPublicAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    public kubernetesVersion: string | ros.IResolvable | undefined;

    /**
     * @Property natGateway: Whether to create a NAT gateway. The value can be true or false. If not set, the system defaults to false.
     */
    public natGateway: boolean | ros.IResolvable | undefined;

    /**
     * @Property privateZone: Whether to enable PrivateZone for service discovery.
     */
    public privateZone: boolean | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    public serviceCidr: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tag the cluster.
     */
    public tags: RosServerlessKubernetesCluster.TagsProperty[] | undefined;

    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16. 
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    public vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone ID.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CS::ServerlessKubernetesCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServerlessKubernetesClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServerlessKubernetesCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrTaskId = this.getAtt('TaskId');
        this.attrWorkerRamRoleName = this.getAtt('WorkerRamRoleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.addons = props.addons;
        this.endpointPublicAccess = props.endpointPublicAccess;
        this.kubernetesVersion = props.kubernetesVersion;
        this.natGateway = props.natGateway;
        this.privateZone = props.privateZone;
        this.securityGroupId = props.securityGroupId;
        this.serviceCidr = props.serviceCidr;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.vSwitchIds = props.vSwitchIds;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            addons: this.addons,
            endpointPublicAccess: this.endpointPublicAccess,
            kubernetesVersion: this.kubernetesVersion,
            natGateway: this.natGateway,
            privateZone: this.privateZone,
            securityGroupId: this.securityGroupId,
            serviceCidr: this.serviceCidr,
            tags: this.tags,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            vSwitchIds: this.vSwitchIds,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServerlessKubernetesClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosServerlessKubernetesCluster {
    /**
     * @stability external
     */
    export interface AddonsProperty {
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: The name of the add-on.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AddonsProperty`
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the result of the validation.
 */
function RosServerlessKubernetesCluster_AddonsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AddonsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ServerlessKubernetesCluster.Addons` resource
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ServerlessKubernetesCluster.Addons` resource.
 */
// @ts-ignore TS6133
function rosServerlessKubernetesClusterAddonsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServerlessKubernetesCluster_AddonsPropertyValidator(properties).assertSuccess();
    return {
      Config: ros.stringToRosTemplate(properties.config),
      Disabled: ros.booleanToRosTemplate(properties.disabled),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosServerlessKubernetesCluster {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosServerlessKubernetesCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ServerlessKubernetesCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ServerlessKubernetesCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosServerlessKubernetesClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServerlessKubernetesCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}
