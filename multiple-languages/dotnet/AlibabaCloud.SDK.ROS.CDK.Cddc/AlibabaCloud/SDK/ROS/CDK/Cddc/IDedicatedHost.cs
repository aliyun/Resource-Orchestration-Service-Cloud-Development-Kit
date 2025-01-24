using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cddc
{
    /// <summary>Represents a `DedicatedHost`.</summary>
    [JsiiInterface(nativeType: typeof(IDedicatedHost), fullyQualifiedName: "@alicloud/ros-cdk-cddc.IDedicatedHost")]
    public interface IDedicatedHost : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AutoRenew: Whether Auto Renew.</summary>
        [JsiiProperty(name: "attrAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoRenew
        {
            get;
        }

        /// <summary>Attribute CpuAllocationRatio: CPU Allocation Ratio.</summary>
        [JsiiProperty(name: "attrCpuAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCpuAllocationRatio
        {
            get;
        }

        /// <summary>Attribute CpuUsed: CPU Used.</summary>
        [JsiiProperty(name: "attrCpuUsed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCpuUsed
        {
            get;
        }

        /// <summary>Attribute DedicatedHostGroupId: Dedicated Host Group ID.</summary>
        [JsiiProperty(name: "attrDedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedicatedHostGroupId
        {
            get;
        }

        /// <summary>Attribute DedicatedHostId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrDedicatedHostId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedicatedHostId
        {
            get;
        }

        /// <summary>Attribute DiskAllocationRatio: Disk Allocation Ratio.</summary>
        [JsiiProperty(name: "attrDiskAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskAllocationRatio
        {
            get;
        }

        /// <summary>Attribute EcsClassCode: ECS Class Code.</summary>
        [JsiiProperty(name: "attrEcsClassCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEcsClassCode
        {
            get;
        }

        /// <summary>Attribute HostClass: Host Class.</summary>
        [JsiiProperty(name: "attrHostClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostClass
        {
            get;
        }

        /// <summary>Attribute HostCpu: Host CPU.</summary>
        [JsiiProperty(name: "attrHostCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostCpu
        {
            get;
        }

        /// <summary>Attribute HostMem: Host Memory.</summary>
        [JsiiProperty(name: "attrHostMem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostMem
        {
            get;
        }

        /// <summary>Attribute HostName: Host Name.</summary>
        [JsiiProperty(name: "attrHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostName
        {
            get;
        }

        /// <summary>Attribute HostStorage: Host Storage.</summary>
        [JsiiProperty(name: "attrHostStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostStorage
        {
            get;
        }

        /// <summary>Attribute HostType: Host Storage Type.</summary>
        [JsiiProperty(name: "attrHostType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostType
        {
            get;
        }

        /// <summary>Attribute ImageCategory: Host Image Category.</summary>
        [JsiiProperty(name: "attrImageCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageCategory
        {
            get;
        }

        /// <summary>Attribute IpAddress: Host IP Address.</summary>
        [JsiiProperty(name: "attrIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpAddress
        {
            get;
        }

        /// <summary>Attribute MemAllocationRatio: Memory Allocation Ratio.</summary>
        [JsiiProperty(name: "attrMemAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMemAllocationRatio
        {
            get;
        }

        /// <summary>Attribute MemoryUsed: Host Memory Used.</summary>
        [JsiiProperty(name: "attrMemoryUsed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMemoryUsed
        {
            get;
        }

        /// <summary>Attribute OpenPermission: Whether Open OS Permission.</summary>
        [JsiiProperty(name: "attrOpenPermission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOpenPermission
        {
            get;
        }

        /// <summary>Attribute PaymentType: Payment Type.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute StorageUsed: Storage Used.</summary>
        [JsiiProperty(name: "attrStorageUsed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorageUsed
        {
            get;
        }

        /// <summary>Attribute VpcId: VPC ID.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VSwitchId: VSwitch ID.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchId
        {
            get;
        }

        /// <summary>Attribute ZoneId: Zone ID.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cddc.DedicatedHostProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHostProps Props
        {
            get;
        }

        /// <summary>Represents a `DedicatedHost`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDedicatedHost), fullyQualifiedName: "@alicloud/ros-cdk-cddc.IDedicatedHost")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHost
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AutoRenew: Whether Auto Renew.</summary>
            [JsiiProperty(name: "attrAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoRenew
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CpuAllocationRatio: CPU Allocation Ratio.</summary>
            [JsiiProperty(name: "attrCpuAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCpuAllocationRatio
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CpuUsed: CPU Used.</summary>
            [JsiiProperty(name: "attrCpuUsed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCpuUsed
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DedicatedHostGroupId: Dedicated Host Group ID.</summary>
            [JsiiProperty(name: "attrDedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedicatedHostGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DedicatedHostId: The first ID of the resource.</summary>
            [JsiiProperty(name: "attrDedicatedHostId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedicatedHostId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskAllocationRatio: Disk Allocation Ratio.</summary>
            [JsiiProperty(name: "attrDiskAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskAllocationRatio
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EcsClassCode: ECS Class Code.</summary>
            [JsiiProperty(name: "attrEcsClassCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEcsClassCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HostClass: Host Class.</summary>
            [JsiiProperty(name: "attrHostClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HostCpu: Host CPU.</summary>
            [JsiiProperty(name: "attrHostCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostCpu
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HostMem: Host Memory.</summary>
            [JsiiProperty(name: "attrHostMem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostMem
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HostName: Host Name.</summary>
            [JsiiProperty(name: "attrHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HostStorage: Host Storage.</summary>
            [JsiiProperty(name: "attrHostStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostStorage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HostType: Host Storage Type.</summary>
            [JsiiProperty(name: "attrHostType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageCategory: Host Image Category.</summary>
            [JsiiProperty(name: "attrImageCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpAddress: Host IP Address.</summary>
            [JsiiProperty(name: "attrIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MemAllocationRatio: Memory Allocation Ratio.</summary>
            [JsiiProperty(name: "attrMemAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMemAllocationRatio
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MemoryUsed: Host Memory Used.</summary>
            [JsiiProperty(name: "attrMemoryUsed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMemoryUsed
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OpenPermission: Whether Open OS Permission.</summary>
            [JsiiProperty(name: "attrOpenPermission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOpenPermission
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: Payment Type.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StorageUsed: Storage Used.</summary>
            [JsiiProperty(name: "attrStorageUsed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorageUsed
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: VPC ID.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchId: VSwitch ID.</summary>
            [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneId: Zone ID.</summary>
            [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cddc.DedicatedHostProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHostProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHostProps>()!;
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
