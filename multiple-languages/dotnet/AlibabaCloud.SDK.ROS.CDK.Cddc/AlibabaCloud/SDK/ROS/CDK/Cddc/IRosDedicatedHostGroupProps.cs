using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cddc
{
    /// <summary>Properties for defining a `ALIYUN::CDDC::DedicatedHostGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDedicatedHostGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cddc.RosDedicatedHostGroupProps")]
    public interface IRosDedicatedHostGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: engine: Database Engine Type
        /// </remarks>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Engine
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: VPC ID
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: allocationPolicy: Allocation Policy
        /// </remarks>
        [JsiiProperty(name: "allocationPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllocationPolicy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: cpuAllocationRatio: Cpu Allocation Ratio
        /// </remarks>
        [JsiiProperty(name: "cpuAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CpuAllocationRatio
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dedicatedHostGroupDesc: Dedicated Host Group Description
        /// </remarks>
        [JsiiProperty(name: "dedicatedHostGroupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostGroupDesc
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: diskAllocationRatio: Disk Allocation Ratio
        /// </remarks>
        [JsiiProperty(name: "diskAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskAllocationRatio
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: hostReplacePolicy: Host Replace Policy
        /// </remarks>
        [JsiiProperty(name: "hostReplacePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HostReplacePolicy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: memAllocationRatio: Memory Allocation Ratio
        /// </remarks>
        [JsiiProperty(name: "memAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MemAllocationRatio
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: openPermission: Whether Open OS Permission
        /// </remarks>
        [JsiiProperty(name: "openPermission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OpenPermission
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CDDC::DedicatedHostGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDedicatedHostGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cddc.RosDedicatedHostGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cddc.IRosDedicatedHostGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: engine: Database Engine Type
            /// </remarks>
            [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Engine
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: VPC ID
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: allocationPolicy: Allocation Policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allocationPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllocationPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: cpuAllocationRatio: Cpu Allocation Ratio
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpuAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CpuAllocationRatio
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dedicatedHostGroupDesc: Dedicated Host Group Description
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostGroupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostGroupDesc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: diskAllocationRatio: Disk Allocation Ratio
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskAllocationRatio
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: hostReplacePolicy: Host Replace Policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostReplacePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostReplacePolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: memAllocationRatio: Memory Allocation Ratio
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "memAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MemAllocationRatio
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: openPermission: Whether Open OS Permission
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "openPermission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OpenPermission
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
