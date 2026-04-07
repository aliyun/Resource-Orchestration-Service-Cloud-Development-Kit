using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cddc
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::CDDC::DedicatedHost`, which is used to create a host in a dedicated cluster.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHost`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cddc.DedicatedHost), fullyQualifiedName: "@alicloud/ros-cdk-cddc.DedicatedHost", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cddc.DedicatedHostProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class DedicatedHost : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHost
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public DedicatedHost(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHostProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHostProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DedicatedHost(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DedicatedHost(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AutoRenew: Whether Auto Renew.</summary>
        [JsiiProperty(name: "attrAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAutoRenew
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CpuAllocationRatio: CPU Allocation Ratio.</summary>
        [JsiiProperty(name: "attrCpuAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCpuAllocationRatio
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CpuUsed: CPU Used.</summary>
        [JsiiProperty(name: "attrCpuUsed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCpuUsed
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DedicatedHostGroupId: Dedicated Host Group ID.</summary>
        [JsiiProperty(name: "attrDedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDedicatedHostGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DedicatedHostId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrDedicatedHostId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDedicatedHostId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskAllocationRatio: Disk Allocation Ratio.</summary>
        [JsiiProperty(name: "attrDiskAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDiskAllocationRatio
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EcsClassCode: ECS Class Code.</summary>
        [JsiiProperty(name: "attrEcsClassCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEcsClassCode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HostClass: Host Class.</summary>
        [JsiiProperty(name: "attrHostClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHostClass
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HostCpu: Host CPU.</summary>
        [JsiiProperty(name: "attrHostCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHostCpu
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HostMem: Host Memory.</summary>
        [JsiiProperty(name: "attrHostMem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHostMem
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HostName: Host Name.</summary>
        [JsiiProperty(name: "attrHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHostName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HostStorage: Host Storage.</summary>
        [JsiiProperty(name: "attrHostStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHostStorage
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HostType: Host Storage Type.</summary>
        [JsiiProperty(name: "attrHostType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHostType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageCategory: Host Image Category.</summary>
        [JsiiProperty(name: "attrImageCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImageCategory
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IpAddress: Host IP Address.</summary>
        [JsiiProperty(name: "attrIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIpAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MemAllocationRatio: Memory Allocation Ratio.</summary>
        [JsiiProperty(name: "attrMemAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMemAllocationRatio
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MemoryUsed: Host Memory Used.</summary>
        [JsiiProperty(name: "attrMemoryUsed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMemoryUsed
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OpenPermission: Whether Open OS Permission.</summary>
        [JsiiProperty(name: "attrOpenPermission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOpenPermission
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PaymentType: Payment Type.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPaymentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StorageUsed: Storage Used.</summary>
        [JsiiProperty(name: "attrStorageUsed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStorageUsed
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcId: VPC ID.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchId: VSwitch ID.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneId: Zone ID.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cddc.DedicatedHostProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHostProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHostProps>()!;
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
