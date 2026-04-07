using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Instance`, which is used to query the information about an Elastic Compute Service (ECS) instance.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instance
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.Instance), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.Instance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.InstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Instance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IInstance
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Instance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IInstanceProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IInstanceProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ActionOnMaintenance: The O&amp;M action attribute of the instance.</summary>
        [JsiiProperty(name: "attrActionOnMaintenance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrActionOnMaintenance
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AutoRebootTime: Automatic reboot time after instance configuration change.</summary>
        [JsiiProperty(name: "attrAutoRebootTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAutoRebootTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AutoReleaseTime: The time when to automatically release the pay-as-you-go instance.</summary>
        [JsiiProperty(name: "attrAutoReleaseTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAutoReleaseTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AutoRenewEnabled: Whether automatic renewal has been set.</summary>
        [JsiiProperty(name: "attrAutoRenewEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAutoRenewEnabled
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterId: The ID of the cluster to which the instance belongs.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Cpu: The number of vCPUs.</summary>
        [JsiiProperty(name: "attrCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCpu
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CpuOptions: Details about the CPU options.</summary>
        [JsiiProperty(name: "attrCpuOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCpuOptions
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: The create time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreditSpecification: The performance mode of the burstable instance.</summary>
        [JsiiProperty(name: "attrCreditSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreditSpecification
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DedicatedHostAttribute: Details about the dedicated host.</summary>
        /// <remarks>
        /// It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.
        /// </remarks>
        [JsiiProperty(name: "attrDedicatedHostAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDedicatedHostAttribute
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DedicatedInstanceAttribute: The attributes of the instance on the dedicated host.</summary>
        [JsiiProperty(name: "attrDedicatedInstanceAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDedicatedInstanceAttribute
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DeletionProtection: The release protection attribute of the instance.</summary>
        /// <remarks>
        /// This parameter indicates whether you can use the ECS console or call the DeleteInstance operation to release the instance.
        /// </remarks>
        [JsiiProperty(name: "attrDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDeletionProtection
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DeploymentSetGroupNo: The number of the deployment set group to which the instance belongs in a deployment set.</summary>
        [JsiiProperty(name: "attrDeploymentSetGroupNo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDeploymentSetGroupNo
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DeploymentSetId: The ID of the deployment set in which the instance is deployed.</summary>
        [JsiiProperty(name: "attrDeploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDeploymentSetId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Description: The description of the instance.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DeviceAvailable: Indicates whether data disks can be attached to the instance.</summary>
        [JsiiProperty(name: "attrDeviceAvailable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDeviceAvailable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Duration: The duration of automatic renewal.</summary>
        [JsiiProperty(name: "attrDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDuration
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EcsCapacityReservationAttr: Details about the capacity reservation related to the instance.</summary>
        [JsiiProperty(name: "attrEcsCapacityReservationAttr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEcsCapacityReservationAttr
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EipAddress: Details about the EIP associated with the instance.</summary>
        [JsiiProperty(name: "attrEipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEipAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExpiredTime: The time when the instance expires.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExpiredTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute GpuAmount: The number of GPUs for the instance type.</summary>
        [JsiiProperty(name: "attrGpuAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrGpuAmount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute GpuSpec: The category of GPUs for the instance type.</summary>
        [JsiiProperty(name: "attrGpuSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrGpuSpec
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HostName: The hostname of the instance.</summary>
        [JsiiProperty(name: "attrHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHostName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HpcClusterId: ID of the HPC cluster to which the instance belongs.</summary>
        [JsiiProperty(name: "attrHpcClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHpcClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageId: The ID of the image.</summary>
        [JsiiProperty(name: "attrImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImageId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceName: The name of the instance.</summary>
        /// <remarks>
        /// Fuzzy search with the asterisk (*) wildcard characters is supported.
        /// </remarks>
        [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceNetworkType: The network type of the instance.</summary>
        [JsiiProperty(name: "attrInstanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceNetworkType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceType: The instance type of the instance.</summary>
        [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceTypeFamily: The instance family of the instance.</summary>
        [JsiiProperty(name: "attrInstanceTypeFamily", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceTypeFamily
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetChargeType: The billing method for network usage.</summary>
        [JsiiProperty(name: "attrInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInternetChargeType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetMaxBandwidthIn: The maximum inbound public bandwidth.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "attrInternetMaxBandwidthIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInternetMaxBandwidthIn
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetMaxBandwidthOut: The maximum outbound public bandwidth.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "attrInternetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInternetMaxBandwidthOut
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IoOptimized: Specifies whether the instance is I/O optimized.</summary>
        [JsiiProperty(name: "attrIoOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIoOptimized
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute KeyPairName: The name of the SSH key pair bound to the instance.</summary>
        [JsiiProperty(name: "attrKeyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrKeyPairName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LocalStorageAmount: The number of local disks attached to the instance.</summary>
        [JsiiProperty(name: "attrLocalStorageAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLocalStorageAmount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LocalStorageCapacity: The capacity of local disks attached to the instance.</summary>
        [JsiiProperty(name: "attrLocalStorageCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLocalStorageCapacity
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaintenanceWindows: The list of operations window instances.</summary>
        [JsiiProperty(name: "attrMaintenanceWindows", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaintenanceWindows
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Memory: The memory size of the instance.</summary>
        /// <remarks>
        /// Unit: MiB.
        /// </remarks>
        [JsiiProperty(name: "attrMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMemory
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MetadataOptions: Details about the metadata options.</summary>
        [JsiiProperty(name: "attrMetadataOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMetadataOptions
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NetworkInterfaces: Details about the ENIs bound to the instance.</summary>
        [JsiiProperty(name: "attrNetworkInterfaces", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNetworkInterfaces
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NotifyOnMaintenance: Whether to send an event notification before the instance goes down.</summary>
        [JsiiProperty(name: "attrNotifyOnMaintenance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNotifyOnMaintenance
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OperationLocks: The reasons why the instance was locked.</summary>
        [JsiiProperty(name: "attrOperationLocks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOperationLocks
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OsName: The name of the operating system of the instance.</summary>
        [JsiiProperty(name: "attrOsName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOsName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OsNameEn: The English name of the operating system of the instance.</summary>
        [JsiiProperty(name: "attrOsNameEn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOsNameEn
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OsType: The type of the operating system of the instance.</summary>
        [JsiiProperty(name: "attrOsType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOsType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PaymentType: The billing method of the instance.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPaymentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PeriodUnit: Renewal unit.</summary>
        [JsiiProperty(name: "attrPeriodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPeriodUnit
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrivatePoolOptionsId: Private pool ID.</summary>
        /// <remarks>
        /// When the return value is open, the private pool ID is the private pool ID assigned when the system automatically matches.
        /// </remarks>
        [JsiiProperty(name: "attrPrivatePoolOptionsId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPrivatePoolOptionsId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrivatePoolOptionsMatchCriteria: The private pool matching pattern of the instance.</summary>
        [JsiiProperty(name: "attrPrivatePoolOptionsMatchCriteria", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPrivatePoolOptionsMatchCriteria
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PublicIpAddress: The public IP addresses of the instance.</summary>
        [JsiiProperty(name: "attrPublicIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPublicIpAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RdmaIpAddress: The RDMA network IP of the HPC instance.</summary>
        [JsiiProperty(name: "attrRdmaIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRdmaIpAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Recyclable: Indicates whether the instance can be recycled.</summary>
        [JsiiProperty(name: "attrRecyclable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRecyclable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RenewalStatus: The automatic renewal status of the instance.</summary>
        [JsiiProperty(name: "attrRenewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRenewalStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.</summary>
        /// <remarks>
        /// If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        /// </remarks>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SaleCycle: Instance billing cycles.</summary>
        [JsiiProperty(name: "attrSaleCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSaleCycle
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityGroupIds: The IDs of the security groups to which the instance belongs.</summary>
        [JsiiProperty(name: "attrSecurityGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecurityGroupIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SerialNumber: The serial number of the instance.</summary>
        [JsiiProperty(name: "attrSerialNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSerialNumber
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SpotDuration: The protection period of the preemptible instance.</summary>
        /// <remarks>
        /// Unit: hours.
        /// </remarks>
        [JsiiProperty(name: "attrSpotDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSpotDuration
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SpotPriceLimit: The maximum hourly price of the instance.</summary>
        /// <remarks>
        /// It can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
        /// </remarks>
        [JsiiProperty(name: "attrSpotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSpotPriceLimit
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SpotStrategy: The bidding policy for the pay-as-you-go instance.</summary>
        [JsiiProperty(name: "attrSpotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSpotStrategy
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StartTime: The time when the instance was last started.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStartTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StoppedMode: Indicates whether the instance continues to be billed after it is stopped.</summary>
        [JsiiProperty(name: "attrStoppedMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStoppedMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Tags: The tags of the instance.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTags
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserData: The custom data of the instance.</summary>
        [JsiiProperty(name: "attrUserData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUserData
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcAttributes: The VPC attributes of the instance.</summary>
        [JsiiProperty(name: "attrVpcAttributes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcAttributes
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneId: The zone ID of the instance.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.InstanceProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IInstanceProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IInstanceProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
