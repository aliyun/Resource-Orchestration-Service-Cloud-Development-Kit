using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cddc
{
    /// <summary>Properties for defining a `ALIYUN::CDDC::DedicatedHostGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IDedicatedHostGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cddc.DedicatedHostGroupProps")]
    public interface IDedicatedHostGroupProps
    {
        /// <summary>Property engine: Database Engine Type.</summary>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Engine
        {
            get;
        }

        /// <summary>Property vpcId: VPC ID.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property allocationPolicy: Allocation Policy.</summary>
        [JsiiProperty(name: "allocationPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllocationPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cpuAllocationRatio: Cpu Allocation Ratio.</summary>
        [JsiiProperty(name: "cpuAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CpuAllocationRatio
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dedicatedHostGroupDesc: Dedicated Host Group Description.</summary>
        [JsiiProperty(name: "dedicatedHostGroupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostGroupDesc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskAllocationRatio: Disk Allocation Ratio.</summary>
        [JsiiProperty(name: "diskAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskAllocationRatio
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hostReplacePolicy: Host Replace Policy.</summary>
        [JsiiProperty(name: "hostReplacePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HostReplacePolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property memAllocationRatio: Memory Allocation Ratio.</summary>
        [JsiiProperty(name: "memAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MemAllocationRatio
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property openPermission: Whether Open OS Permission.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IDedicatedHostGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cddc.DedicatedHostGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHostGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property engine: Database Engine Type.</summary>
            [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Engine
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: VPC ID.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property allocationPolicy: Allocation Policy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "allocationPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllocationPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cpuAllocationRatio: Cpu Allocation Ratio.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cpuAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CpuAllocationRatio
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dedicatedHostGroupDesc: Dedicated Host Group Description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostGroupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostGroupDesc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property diskAllocationRatio: Disk Allocation Ratio.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "diskAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskAllocationRatio
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hostReplacePolicy: Host Replace Policy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "hostReplacePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostReplacePolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property memAllocationRatio: Memory Allocation Ratio.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "memAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MemAllocationRatio
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property openPermission: Whether Open OS Permission.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "openPermission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OpenPermission
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
