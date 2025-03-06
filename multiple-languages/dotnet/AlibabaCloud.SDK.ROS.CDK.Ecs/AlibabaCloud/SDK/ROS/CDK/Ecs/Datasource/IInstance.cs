using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IInstance")]
    public interface IInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ActionOnMaintenance: The O&amp;M action attribute of the instance.</summary>
        [JsiiProperty(name: "attrActionOnMaintenance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrActionOnMaintenance
        {
            get;
        }

        /// <summary>Attribute AutoRebootTime: Automatic reboot time after instance configuration change.</summary>
        [JsiiProperty(name: "attrAutoRebootTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoRebootTime
        {
            get;
        }

        /// <summary>Attribute AutoReleaseTime: The time when to automatically release the pay-as-you-go instance.</summary>
        [JsiiProperty(name: "attrAutoReleaseTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoReleaseTime
        {
            get;
        }

        /// <summary>Attribute AutoRenewEnabled: Whether automatic renewal has been set.</summary>
        [JsiiProperty(name: "attrAutoRenewEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoRenewEnabled
        {
            get;
        }

        /// <summary>Attribute ClusterId: The ID of the cluster to which the instance belongs.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterId
        {
            get;
        }

        /// <summary>Attribute Cpu: The number of vCPUs.</summary>
        [JsiiProperty(name: "attrCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCpu
        {
            get;
        }

        /// <summary>Attribute CpuOptions: Details about the CPU options.</summary>
        [JsiiProperty(name: "attrCpuOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCpuOptions
        {
            get;
        }

        /// <summary>Attribute CreateTime: The create time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute CreditSpecification: The performance mode of the burstable instance.</summary>
        [JsiiProperty(name: "attrCreditSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreditSpecification
        {
            get;
        }

        /// <summary>Attribute DedicatedHostAttribute: Details about the dedicated host.</summary>
        /// <remarks>
        /// It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.
        /// </remarks>
        [JsiiProperty(name: "attrDedicatedHostAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedicatedHostAttribute
        {
            get;
        }

        /// <summary>Attribute DedicatedInstanceAttribute: The attributes of the instance on the dedicated host.</summary>
        [JsiiProperty(name: "attrDedicatedInstanceAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedicatedInstanceAttribute
        {
            get;
        }

        /// <summary>Attribute DeletionProtection: The release protection attribute of the instance.</summary>
        /// <remarks>
        /// This parameter indicates whether you can use the ECS console or call the DeleteInstance operation to release the instance.
        /// </remarks>
        [JsiiProperty(name: "attrDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeletionProtection
        {
            get;
        }

        /// <summary>Attribute DeploymentSetGroupNo: The number of the deployment set group to which the instance belongs in a deployment set.</summary>
        [JsiiProperty(name: "attrDeploymentSetGroupNo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeploymentSetGroupNo
        {
            get;
        }

        /// <summary>Attribute DeploymentSetId: The ID of the deployment set in which the instance is deployed.</summary>
        [JsiiProperty(name: "attrDeploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeploymentSetId
        {
            get;
        }

        /// <summary>Attribute Description: The description of the instance.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute DeviceAvailable: Indicates whether data disks can be attached to the instance.</summary>
        [JsiiProperty(name: "attrDeviceAvailable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeviceAvailable
        {
            get;
        }

        /// <summary>Attribute Duration: The duration of automatic renewal.</summary>
        [JsiiProperty(name: "attrDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDuration
        {
            get;
        }

        /// <summary>Attribute EcsCapacityReservationAttr: Details about the capacity reservation related to the instance.</summary>
        [JsiiProperty(name: "attrEcsCapacityReservationAttr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEcsCapacityReservationAttr
        {
            get;
        }

        /// <summary>Attribute EipAddress: Details about the EIP associated with the instance.</summary>
        [JsiiProperty(name: "attrEipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEipAddress
        {
            get;
        }

        /// <summary>Attribute ExpiredTime: The time when the instance expires.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpiredTime
        {
            get;
        }

        /// <summary>Attribute GpuAmount: The number of GPUs for the instance type.</summary>
        [JsiiProperty(name: "attrGpuAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGpuAmount
        {
            get;
        }

        /// <summary>Attribute GpuSpec: The category of GPUs for the instance type.</summary>
        [JsiiProperty(name: "attrGpuSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGpuSpec
        {
            get;
        }

        /// <summary>Attribute HostName: The hostname of the instance.</summary>
        [JsiiProperty(name: "attrHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostName
        {
            get;
        }

        /// <summary>Attribute HpcClusterId: ID of the HPC cluster to which the instance belongs.</summary>
        [JsiiProperty(name: "attrHpcClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHpcClusterId
        {
            get;
        }

        /// <summary>Attribute ImageId: The ID of the image.</summary>
        [JsiiProperty(name: "attrImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageId
        {
            get;
        }

        /// <summary>Attribute InstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute InstanceName: The name of the instance.</summary>
        /// <remarks>
        /// Fuzzy search with the asterisk (*) wildcard characters is supported.
        /// </remarks>
        [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceName
        {
            get;
        }

        /// <summary>Attribute InstanceNetworkType: The network type of the instance.</summary>
        [JsiiProperty(name: "attrInstanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceNetworkType
        {
            get;
        }

        /// <summary>Attribute InstanceType: The instance type of the instance.</summary>
        [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceType
        {
            get;
        }

        /// <summary>Attribute InstanceTypeFamily: The instance family of the instance.</summary>
        [JsiiProperty(name: "attrInstanceTypeFamily", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceTypeFamily
        {
            get;
        }

        /// <summary>Attribute InternetChargeType: The billing method for network usage.</summary>
        [JsiiProperty(name: "attrInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetChargeType
        {
            get;
        }

        /// <summary>Attribute InternetMaxBandwidthIn: The maximum inbound public bandwidth.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "attrInternetMaxBandwidthIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetMaxBandwidthIn
        {
            get;
        }

        /// <summary>Attribute InternetMaxBandwidthOut: The maximum outbound public bandwidth.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "attrInternetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetMaxBandwidthOut
        {
            get;
        }

        /// <summary>Attribute IoOptimized: Specifies whether the instance is I/O optimized.</summary>
        [JsiiProperty(name: "attrIoOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIoOptimized
        {
            get;
        }

        /// <summary>Attribute KeyPairName: The name of the SSH key pair bound to the instance.</summary>
        [JsiiProperty(name: "attrKeyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKeyPairName
        {
            get;
        }

        /// <summary>Attribute LocalStorageAmount: The number of local disks attached to the instance.</summary>
        [JsiiProperty(name: "attrLocalStorageAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLocalStorageAmount
        {
            get;
        }

        /// <summary>Attribute LocalStorageCapacity: The capacity of local disks attached to the instance.</summary>
        [JsiiProperty(name: "attrLocalStorageCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLocalStorageCapacity
        {
            get;
        }

        /// <summary>Attribute MaintenanceWindows: The list of operations window instances.</summary>
        [JsiiProperty(name: "attrMaintenanceWindows", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaintenanceWindows
        {
            get;
        }

        /// <summary>Attribute Memory: The memory size of the instance.</summary>
        /// <remarks>
        /// Unit: MiB.
        /// </remarks>
        [JsiiProperty(name: "attrMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMemory
        {
            get;
        }

        /// <summary>Attribute MetadataOptions: Details about the metadata options.</summary>
        [JsiiProperty(name: "attrMetadataOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMetadataOptions
        {
            get;
        }

        /// <summary>Attribute NetworkInterfaces: Details about the ENIs bound to the instance.</summary>
        [JsiiProperty(name: "attrNetworkInterfaces", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkInterfaces
        {
            get;
        }

        /// <summary>Attribute NotifyOnMaintenance: Whether to send an event notification before the instance goes down.</summary>
        [JsiiProperty(name: "attrNotifyOnMaintenance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNotifyOnMaintenance
        {
            get;
        }

        /// <summary>Attribute OperationLocks: The reasons why the instance was locked.</summary>
        [JsiiProperty(name: "attrOperationLocks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOperationLocks
        {
            get;
        }

        /// <summary>Attribute OsName: The name of the operating system of the instance.</summary>
        [JsiiProperty(name: "attrOsName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOsName
        {
            get;
        }

        /// <summary>Attribute OsNameEn: The English name of the operating system of the instance.</summary>
        [JsiiProperty(name: "attrOsNameEn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOsNameEn
        {
            get;
        }

        /// <summary>Attribute OsType: The type of the operating system of the instance.</summary>
        [JsiiProperty(name: "attrOsType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOsType
        {
            get;
        }

        /// <summary>Attribute PaymentType: The billing method of the instance.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute PeriodUnit: Renewal unit.</summary>
        [JsiiProperty(name: "attrPeriodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPeriodUnit
        {
            get;
        }

        /// <summary>Attribute PrivatePoolOptionsId: Private pool ID.</summary>
        /// <remarks>
        /// When the return value is open, the private pool ID is the private pool ID assigned when the system automatically matches.
        /// </remarks>
        [JsiiProperty(name: "attrPrivatePoolOptionsId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrivatePoolOptionsId
        {
            get;
        }

        /// <summary>Attribute PrivatePoolOptionsMatchCriteria: The private pool matching pattern of the instance.</summary>
        [JsiiProperty(name: "attrPrivatePoolOptionsMatchCriteria", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrivatePoolOptionsMatchCriteria
        {
            get;
        }

        /// <summary>Attribute PublicIpAddress: The public IP addresses of the instance.</summary>
        [JsiiProperty(name: "attrPublicIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicIpAddress
        {
            get;
        }

        /// <summary>Attribute RdmaIpAddress: The RDMA network IP of the HPC instance.</summary>
        [JsiiProperty(name: "attrRdmaIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRdmaIpAddress
        {
            get;
        }

        /// <summary>Attribute Recyclable: Indicates whether the instance can be recycled.</summary>
        [JsiiProperty(name: "attrRecyclable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRecyclable
        {
            get;
        }

        /// <summary>Attribute RenewalStatus: The automatic renewal status of the instance.</summary>
        [JsiiProperty(name: "attrRenewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRenewalStatus
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.</summary>
        /// <remarks>
        /// If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        /// </remarks>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute SaleCycle: Instance billing cycles.</summary>
        [JsiiProperty(name: "attrSaleCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSaleCycle
        {
            get;
        }

        /// <summary>Attribute SecurityGroupIds: The IDs of the security groups to which the instance belongs.</summary>
        [JsiiProperty(name: "attrSecurityGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityGroupIds
        {
            get;
        }

        /// <summary>Attribute SerialNumber: The serial number of the instance.</summary>
        [JsiiProperty(name: "attrSerialNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSerialNumber
        {
            get;
        }

        /// <summary>Attribute SpotDuration: The protection period of the preemptible instance.</summary>
        /// <remarks>
        /// Unit: hours.
        /// </remarks>
        [JsiiProperty(name: "attrSpotDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSpotDuration
        {
            get;
        }

        /// <summary>Attribute SpotPriceLimit: The maximum hourly price of the instance.</summary>
        /// <remarks>
        /// It can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
        /// </remarks>
        [JsiiProperty(name: "attrSpotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSpotPriceLimit
        {
            get;
        }

        /// <summary>Attribute SpotStrategy: The bidding policy for the pay-as-you-go instance.</summary>
        [JsiiProperty(name: "attrSpotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSpotStrategy
        {
            get;
        }

        /// <summary>Attribute StartTime: The time when the instance was last started.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStartTime
        {
            get;
        }

        /// <summary>Attribute StoppedMode: Indicates whether the instance continues to be billed after it is stopped.</summary>
        [JsiiProperty(name: "attrStoppedMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStoppedMode
        {
            get;
        }

        /// <summary>Attribute Tags: The tags of the instance.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute UserData: The custom data of the instance.</summary>
        [JsiiProperty(name: "attrUserData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUserData
        {
            get;
        }

        /// <summary>Attribute VpcAttributes: The VPC attributes of the instance.</summary>
        [JsiiProperty(name: "attrVpcAttributes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcAttributes
        {
            get;
        }

        /// <summary>Attribute ZoneId: The zone ID of the instance.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.InstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ActionOnMaintenance: The O&amp;M action attribute of the instance.</summary>
            [JsiiProperty(name: "attrActionOnMaintenance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrActionOnMaintenance
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AutoRebootTime: Automatic reboot time after instance configuration change.</summary>
            [JsiiProperty(name: "attrAutoRebootTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoRebootTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AutoReleaseTime: The time when to automatically release the pay-as-you-go instance.</summary>
            [JsiiProperty(name: "attrAutoReleaseTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoReleaseTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AutoRenewEnabled: Whether automatic renewal has been set.</summary>
            [JsiiProperty(name: "attrAutoRenewEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoRenewEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterId: The ID of the cluster to which the instance belongs.</summary>
            [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Cpu: The number of vCPUs.</summary>
            [JsiiProperty(name: "attrCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCpu
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CpuOptions: Details about the CPU options.</summary>
            [JsiiProperty(name: "attrCpuOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCpuOptions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The create time.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreditSpecification: The performance mode of the burstable instance.</summary>
            [JsiiProperty(name: "attrCreditSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreditSpecification
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DedicatedHostAttribute: Details about the dedicated host.</summary>
            /// <remarks>
            /// It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.
            /// </remarks>
            [JsiiProperty(name: "attrDedicatedHostAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedicatedHostAttribute
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DedicatedInstanceAttribute: The attributes of the instance on the dedicated host.</summary>
            [JsiiProperty(name: "attrDedicatedInstanceAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedicatedInstanceAttribute
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeletionProtection: The release protection attribute of the instance.</summary>
            /// <remarks>
            /// This parameter indicates whether you can use the ECS console or call the DeleteInstance operation to release the instance.
            /// </remarks>
            [JsiiProperty(name: "attrDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeletionProtection
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeploymentSetGroupNo: The number of the deployment set group to which the instance belongs in a deployment set.</summary>
            [JsiiProperty(name: "attrDeploymentSetGroupNo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeploymentSetGroupNo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeploymentSetId: The ID of the deployment set in which the instance is deployed.</summary>
            [JsiiProperty(name: "attrDeploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeploymentSetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the instance.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeviceAvailable: Indicates whether data disks can be attached to the instance.</summary>
            [JsiiProperty(name: "attrDeviceAvailable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeviceAvailable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Duration: The duration of automatic renewal.</summary>
            [JsiiProperty(name: "attrDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EcsCapacityReservationAttr: Details about the capacity reservation related to the instance.</summary>
            [JsiiProperty(name: "attrEcsCapacityReservationAttr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEcsCapacityReservationAttr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EipAddress: Details about the EIP associated with the instance.</summary>
            [JsiiProperty(name: "attrEipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEipAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpiredTime: The time when the instance expires.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpiredTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GpuAmount: The number of GPUs for the instance type.</summary>
            [JsiiProperty(name: "attrGpuAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGpuAmount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GpuSpec: The category of GPUs for the instance type.</summary>
            [JsiiProperty(name: "attrGpuSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGpuSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HostName: The hostname of the instance.</summary>
            [JsiiProperty(name: "attrHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HpcClusterId: ID of the HPC cluster to which the instance belongs.</summary>
            [JsiiProperty(name: "attrHpcClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHpcClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageId: The ID of the image.</summary>
            [JsiiProperty(name: "attrImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceName: The name of the instance.</summary>
            /// <remarks>
            /// Fuzzy search with the asterisk (*) wildcard characters is supported.
            /// </remarks>
            [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceNetworkType: The network type of the instance.</summary>
            [JsiiProperty(name: "attrInstanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceNetworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceType: The instance type of the instance.</summary>
            [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceTypeFamily: The instance family of the instance.</summary>
            [JsiiProperty(name: "attrInstanceTypeFamily", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceTypeFamily
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetChargeType: The billing method for network usage.</summary>
            [JsiiProperty(name: "attrInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetMaxBandwidthIn: The maximum inbound public bandwidth.</summary>
            /// <remarks>
            /// Unit: Mbit/s.
            /// </remarks>
            [JsiiProperty(name: "attrInternetMaxBandwidthIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetMaxBandwidthIn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetMaxBandwidthOut: The maximum outbound public bandwidth.</summary>
            /// <remarks>
            /// Unit: Mbit/s.
            /// </remarks>
            [JsiiProperty(name: "attrInternetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetMaxBandwidthOut
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IoOptimized: Specifies whether the instance is I/O optimized.</summary>
            [JsiiProperty(name: "attrIoOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIoOptimized
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KeyPairName: The name of the SSH key pair bound to the instance.</summary>
            [JsiiProperty(name: "attrKeyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKeyPairName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LocalStorageAmount: The number of local disks attached to the instance.</summary>
            [JsiiProperty(name: "attrLocalStorageAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLocalStorageAmount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LocalStorageCapacity: The capacity of local disks attached to the instance.</summary>
            [JsiiProperty(name: "attrLocalStorageCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLocalStorageCapacity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaintenanceWindows: The list of operations window instances.</summary>
            [JsiiProperty(name: "attrMaintenanceWindows", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaintenanceWindows
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Memory: The memory size of the instance.</summary>
            /// <remarks>
            /// Unit: MiB.
            /// </remarks>
            [JsiiProperty(name: "attrMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMemory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MetadataOptions: Details about the metadata options.</summary>
            [JsiiProperty(name: "attrMetadataOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMetadataOptions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkInterfaces: Details about the ENIs bound to the instance.</summary>
            [JsiiProperty(name: "attrNetworkInterfaces", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkInterfaces
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NotifyOnMaintenance: Whether to send an event notification before the instance goes down.</summary>
            [JsiiProperty(name: "attrNotifyOnMaintenance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNotifyOnMaintenance
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OperationLocks: The reasons why the instance was locked.</summary>
            [JsiiProperty(name: "attrOperationLocks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOperationLocks
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OsName: The name of the operating system of the instance.</summary>
            [JsiiProperty(name: "attrOsName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOsName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OsNameEn: The English name of the operating system of the instance.</summary>
            [JsiiProperty(name: "attrOsNameEn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOsNameEn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OsType: The type of the operating system of the instance.</summary>
            [JsiiProperty(name: "attrOsType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOsType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: The billing method of the instance.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PeriodUnit: Renewal unit.</summary>
            [JsiiProperty(name: "attrPeriodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPeriodUnit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrivatePoolOptionsId: Private pool ID.</summary>
            /// <remarks>
            /// When the return value is open, the private pool ID is the private pool ID assigned when the system automatically matches.
            /// </remarks>
            [JsiiProperty(name: "attrPrivatePoolOptionsId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrivatePoolOptionsId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrivatePoolOptionsMatchCriteria: The private pool matching pattern of the instance.</summary>
            [JsiiProperty(name: "attrPrivatePoolOptionsMatchCriteria", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrivatePoolOptionsMatchCriteria
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicIpAddress: The public IP addresses of the instance.</summary>
            [JsiiProperty(name: "attrPublicIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicIpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RdmaIpAddress: The RDMA network IP of the HPC instance.</summary>
            [JsiiProperty(name: "attrRdmaIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRdmaIpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Recyclable: Indicates whether the instance can be recycled.</summary>
            [JsiiProperty(name: "attrRecyclable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRecyclable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RenewalStatus: The automatic renewal status of the instance.</summary>
            [JsiiProperty(name: "attrRenewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRenewalStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.</summary>
            /// <remarks>
            /// If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
            /// </remarks>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SaleCycle: Instance billing cycles.</summary>
            [JsiiProperty(name: "attrSaleCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSaleCycle
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityGroupIds: The IDs of the security groups to which the instance belongs.</summary>
            [JsiiProperty(name: "attrSecurityGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityGroupIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SerialNumber: The serial number of the instance.</summary>
            [JsiiProperty(name: "attrSerialNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSerialNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SpotDuration: The protection period of the preemptible instance.</summary>
            /// <remarks>
            /// Unit: hours.
            /// </remarks>
            [JsiiProperty(name: "attrSpotDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSpotDuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SpotPriceLimit: The maximum hourly price of the instance.</summary>
            /// <remarks>
            /// It can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
            /// </remarks>
            [JsiiProperty(name: "attrSpotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSpotPriceLimit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SpotStrategy: The bidding policy for the pay-as-you-go instance.</summary>
            [JsiiProperty(name: "attrSpotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSpotStrategy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StartTime: The time when the instance was last started.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "attrStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StoppedMode: Indicates whether the instance continues to be billed after it is stopped.</summary>
            [JsiiProperty(name: "attrStoppedMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStoppedMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags of the instance.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UserData: The custom data of the instance.</summary>
            [JsiiProperty(name: "attrUserData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUserData
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcAttributes: The VPC attributes of the instance.</summary>
            [JsiiProperty(name: "attrVpcAttributes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcAttributes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneId: The zone ID of the instance.</summary>
            [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.InstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IInstanceProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
