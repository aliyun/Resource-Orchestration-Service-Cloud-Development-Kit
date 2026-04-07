using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cddc
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::CDDC::DedicatedHostGroup`, which is used to create a dedicated cluster.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHostGroup`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostgroup
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cddc.DedicatedHostGroup), fullyQualifiedName: "@alicloud/ros-cdk-cddc.DedicatedHostGroup", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cddc.DedicatedHostGroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class DedicatedHostGroup : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHostGroup
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public DedicatedHostGroup(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHostGroupProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHostGroupProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DedicatedHostGroup(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DedicatedHostGroup(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AllocationPolicy: Allocation Policy.</summary>
        [JsiiProperty(name: "attrAllocationPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAllocationPolicy
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BastionInstanceId: BastionInstanceId.</summary>
        [JsiiProperty(name: "attrBastionInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBastionInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CpuAllocatedAmount: CpuAllocatedAmount.</summary>
        [JsiiProperty(name: "attrCpuAllocatedAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCpuAllocatedAmount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CpuAllocateRation: CpuAllocateRation.</summary>
        [JsiiProperty(name: "attrCpuAllocateRation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCpuAllocateRation
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CpuAllocationRatio: Cpu Allocation Ratio.</summary>
        [JsiiProperty(name: "attrCpuAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCpuAllocationRatio
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DedicatedHostGroupDesc: Dedicated Host Group Description.</summary>
        [JsiiProperty(name: "attrDedicatedHostGroupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDedicatedHostGroupDesc
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DedicatedHostGroupId: Dedicated Host Group ID.</summary>
        [JsiiProperty(name: "attrDedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDedicatedHostGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DeployType: DeployType.</summary>
        [JsiiProperty(name: "attrDeployType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDeployType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskAllocatedAmount: DiskAllocatedAmount.</summary>
        [JsiiProperty(name: "attrDiskAllocatedAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDiskAllocatedAmount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskAllocateRation: DiskAllocateRation.</summary>
        [JsiiProperty(name: "attrDiskAllocateRation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDiskAllocateRation
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskAllocationRatio: Disk Allocation Ratio.</summary>
        [JsiiProperty(name: "attrDiskAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDiskAllocationRatio
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskUsedAmount: DiskUsedAmount.</summary>
        [JsiiProperty(name: "attrDiskUsedAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDiskUsedAmount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskUtility: DiskUtility.</summary>
        [JsiiProperty(name: "attrDiskUtility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDiskUtility
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Engine: Database Engine Type.</summary>
        [JsiiProperty(name: "attrEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEngine
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HostNumber: Total Host Number.</summary>
        [JsiiProperty(name: "attrHostNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHostNumber
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HostReplacePolicy: Host Replace Policy.</summary>
        [JsiiProperty(name: "attrHostReplacePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHostReplacePolicy
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceNumber: Total Instance Number.</summary>
        [JsiiProperty(name: "attrInstanceNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceNumber
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MemAllocatedAmount: MemAllocatedAmount.</summary>
        [JsiiProperty(name: "attrMemAllocatedAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMemAllocatedAmount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MemAllocateRation: MemAllocateRation.</summary>
        [JsiiProperty(name: "attrMemAllocateRation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMemAllocateRation
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MemAllocationRatio: Memory Allocation Ratio.</summary>
        [JsiiProperty(name: "attrMemAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMemAllocationRatio
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MemUsedAmount: MemUsedAmount.</summary>
        [JsiiProperty(name: "attrMemUsedAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMemUsedAmount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MemUtility: MemUtility.</summary>
        [JsiiProperty(name: "attrMemUtility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMemUtility
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OpenPermission: Whether Open OS Permission.</summary>
        [JsiiProperty(name: "attrOpenPermission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOpenPermission
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Text: Text.</summary>
        [JsiiProperty(name: "attrText", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrText
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcId: VPC ID.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cddc.DedicatedHostGroupProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHostGroupProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHostGroupProps>()!;
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
