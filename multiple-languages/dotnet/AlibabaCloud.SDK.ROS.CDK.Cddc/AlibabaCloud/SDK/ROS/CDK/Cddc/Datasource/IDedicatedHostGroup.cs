using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cddc.Datasource
{
    /// <summary>Represents a `DedicatedHostGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IDedicatedHostGroup), fullyQualifiedName: "@alicloud/ros-cdk-cddc.datasource.IDedicatedHostGroup")]
    public interface IDedicatedHostGroup : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AllocationPolicy: Allocation Policy.</summary>
        [JsiiProperty(name: "attrAllocationPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAllocationPolicy
        {
            get;
        }

        /// <summary>Attribute BastionInstanceId: BastionInstanceId.</summary>
        [JsiiProperty(name: "attrBastionInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBastionInstanceId
        {
            get;
        }

        /// <summary>Attribute Category: The dedicated cluster family to which the host belongs.</summary>
        [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCategory
        {
            get;
        }

        /// <summary>Attribute CpuAllocatedAmount: CpuAllocatedAmount.</summary>
        [JsiiProperty(name: "attrCpuAllocatedAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCpuAllocatedAmount
        {
            get;
        }

        /// <summary>Attribute CpuAllocateRation: CpuAllocateRation.</summary>
        [JsiiProperty(name: "attrCpuAllocateRation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCpuAllocateRation
        {
            get;
        }

        /// <summary>Attribute CpuAllocationRatio: Cpu Allocation Ratio.</summary>
        [JsiiProperty(name: "attrCpuAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCpuAllocationRatio
        {
            get;
        }

        /// <summary>Attribute CreateTime: Create Time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DedicatedHostCountGroupByHostType: DedicatedHostCountGroupByHostType.</summary>
        [JsiiProperty(name: "attrDedicatedHostCountGroupByHostType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedicatedHostCountGroupByHostType
        {
            get;
        }

        /// <summary>Attribute DedicatedHostGroupDesc: Dedicated Host Group Description.</summary>
        [JsiiProperty(name: "attrDedicatedHostGroupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedicatedHostGroupDesc
        {
            get;
        }

        /// <summary>Attribute DedicatedHostGroupId: Dedicated Host Group ID.</summary>
        [JsiiProperty(name: "attrDedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedicatedHostGroupId
        {
            get;
        }

        /// <summary>Attribute DeployType: DeployType.</summary>
        [JsiiProperty(name: "attrDeployType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeployType
        {
            get;
        }

        /// <summary>Attribute DiskAllocatedAmount: DiskAllocatedAmount.</summary>
        [JsiiProperty(name: "attrDiskAllocatedAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskAllocatedAmount
        {
            get;
        }

        /// <summary>Attribute DiskAllocateRation: DiskAllocateRation.</summary>
        [JsiiProperty(name: "attrDiskAllocateRation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskAllocateRation
        {
            get;
        }

        /// <summary>Attribute DiskAllocationRatio: Disk Allocation Ratio.</summary>
        [JsiiProperty(name: "attrDiskAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskAllocationRatio
        {
            get;
        }

        /// <summary>Attribute DiskUsedAmount: DiskUsedAmount.</summary>
        [JsiiProperty(name: "attrDiskUsedAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskUsedAmount
        {
            get;
        }

        /// <summary>Attribute DiskUtility: DiskUtility.</summary>
        [JsiiProperty(name: "attrDiskUtility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskUtility
        {
            get;
        }

        /// <summary>Attribute Engine: Database Engine Type.</summary>
        [JsiiProperty(name: "attrEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEngine
        {
            get;
        }

        /// <summary>Attribute HostNumber: Total Host Number.</summary>
        [JsiiProperty(name: "attrHostNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostNumber
        {
            get;
        }

        /// <summary>Attribute HostReplacePolicy: Host Replace Policy.</summary>
        [JsiiProperty(name: "attrHostReplacePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostReplacePolicy
        {
            get;
        }

        /// <summary>Attribute InstanceNumber: Total Instance Number.</summary>
        [JsiiProperty(name: "attrInstanceNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceNumber
        {
            get;
        }

        /// <summary>Attribute MemAllocatedAmount: MemAllocatedAmount.</summary>
        [JsiiProperty(name: "attrMemAllocatedAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMemAllocatedAmount
        {
            get;
        }

        /// <summary>Attribute MemAllocateRation: MemAllocateRation.</summary>
        [JsiiProperty(name: "attrMemAllocateRation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMemAllocateRation
        {
            get;
        }

        /// <summary>Attribute MemAllocationRatio: Memory Allocation Ratio.</summary>
        [JsiiProperty(name: "attrMemAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMemAllocationRatio
        {
            get;
        }

        /// <summary>Attribute MemUsedAmount: MemUsedAmount.</summary>
        [JsiiProperty(name: "attrMemUsedAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMemUsedAmount
        {
            get;
        }

        /// <summary>Attribute MemUtility: MemUtility.</summary>
        [JsiiProperty(name: "attrMemUtility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMemUtility
        {
            get;
        }

        /// <summary>Attribute OpenPermission: Whether Open OS Permission.</summary>
        [JsiiProperty(name: "attrOpenPermission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOpenPermission
        {
            get;
        }

        /// <summary>Attribute Text: Text.</summary>
        [JsiiProperty(name: "attrText", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrText
        {
            get;
        }

        /// <summary>Attribute VpcId: VPC ID.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute ZoneIdList: ZoneIDList.</summary>
        [JsiiProperty(name: "attrZoneIdList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneIdList
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cddc.datasource.DedicatedHostGroupProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cddc.Datasource.IDedicatedHostGroupProps Props
        {
            get;
        }

        /// <summary>Represents a `DedicatedHostGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDedicatedHostGroup), fullyQualifiedName: "@alicloud/ros-cdk-cddc.datasource.IDedicatedHostGroup")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cddc.Datasource.IDedicatedHostGroup
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AllocationPolicy: Allocation Policy.</summary>
            [JsiiProperty(name: "attrAllocationPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAllocationPolicy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BastionInstanceId: BastionInstanceId.</summary>
            [JsiiProperty(name: "attrBastionInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBastionInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Category: The dedicated cluster family to which the host belongs.</summary>
            [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CpuAllocatedAmount: CpuAllocatedAmount.</summary>
            [JsiiProperty(name: "attrCpuAllocatedAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCpuAllocatedAmount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CpuAllocateRation: CpuAllocateRation.</summary>
            [JsiiProperty(name: "attrCpuAllocateRation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCpuAllocateRation
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CpuAllocationRatio: Cpu Allocation Ratio.</summary>
            [JsiiProperty(name: "attrCpuAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCpuAllocationRatio
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: Create Time.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DedicatedHostCountGroupByHostType: DedicatedHostCountGroupByHostType.</summary>
            [JsiiProperty(name: "attrDedicatedHostCountGroupByHostType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedicatedHostCountGroupByHostType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DedicatedHostGroupDesc: Dedicated Host Group Description.</summary>
            [JsiiProperty(name: "attrDedicatedHostGroupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedicatedHostGroupDesc
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DedicatedHostGroupId: Dedicated Host Group ID.</summary>
            [JsiiProperty(name: "attrDedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedicatedHostGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeployType: DeployType.</summary>
            [JsiiProperty(name: "attrDeployType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeployType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskAllocatedAmount: DiskAllocatedAmount.</summary>
            [JsiiProperty(name: "attrDiskAllocatedAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskAllocatedAmount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskAllocateRation: DiskAllocateRation.</summary>
            [JsiiProperty(name: "attrDiskAllocateRation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskAllocateRation
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskAllocationRatio: Disk Allocation Ratio.</summary>
            [JsiiProperty(name: "attrDiskAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskAllocationRatio
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskUsedAmount: DiskUsedAmount.</summary>
            [JsiiProperty(name: "attrDiskUsedAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskUsedAmount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskUtility: DiskUtility.</summary>
            [JsiiProperty(name: "attrDiskUtility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskUtility
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Engine: Database Engine Type.</summary>
            [JsiiProperty(name: "attrEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEngine
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HostNumber: Total Host Number.</summary>
            [JsiiProperty(name: "attrHostNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HostReplacePolicy: Host Replace Policy.</summary>
            [JsiiProperty(name: "attrHostReplacePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostReplacePolicy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceNumber: Total Instance Number.</summary>
            [JsiiProperty(name: "attrInstanceNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MemAllocatedAmount: MemAllocatedAmount.</summary>
            [JsiiProperty(name: "attrMemAllocatedAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMemAllocatedAmount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MemAllocateRation: MemAllocateRation.</summary>
            [JsiiProperty(name: "attrMemAllocateRation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMemAllocateRation
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MemAllocationRatio: Memory Allocation Ratio.</summary>
            [JsiiProperty(name: "attrMemAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMemAllocationRatio
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MemUsedAmount: MemUsedAmount.</summary>
            [JsiiProperty(name: "attrMemUsedAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMemUsedAmount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MemUtility: MemUtility.</summary>
            [JsiiProperty(name: "attrMemUtility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMemUtility
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OpenPermission: Whether Open OS Permission.</summary>
            [JsiiProperty(name: "attrOpenPermission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOpenPermission
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Text: Text.</summary>
            [JsiiProperty(name: "attrText", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrText
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: VPC ID.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneIdList: ZoneIDList.</summary>
            [JsiiProperty(name: "attrZoneIdList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneIdList
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cddc.datasource.DedicatedHostGroupProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cddc.Datasource.IDedicatedHostGroupProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cddc.Datasource.IDedicatedHostGroupProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
