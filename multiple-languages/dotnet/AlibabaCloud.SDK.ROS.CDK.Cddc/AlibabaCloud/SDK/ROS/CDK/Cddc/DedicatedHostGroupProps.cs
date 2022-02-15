using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cddc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CDDC::DedicatedHostGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cddc.DedicatedHostGroupProps")]
    public class DedicatedHostGroupProps : AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHostGroupProps
    {
        /// <summary>Property engine: Database Engine Type.</summary>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Engine
        {
            get;
            set;
        }

        /// <summary>Property vpcId: VPC ID.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpcId
        {
            get;
            set;
        }

        /// <summary>Property allocationPolicy: Allocation Policy.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "allocationPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AllocationPolicy
        {
            get;
            set;
        }

        /// <summary>Property cpuAllocationRatio: Cpu Allocation Ratio.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "cpuAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CpuAllocationRatio
        {
            get;
            set;
        }

        /// <summary>Property dedicatedHostGroupDesc: Dedicated Host Group Description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dedicatedHostGroupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DedicatedHostGroupDesc
        {
            get;
            set;
        }

        /// <summary>Property diskAllocationRatio: Disk Allocation Ratio.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "diskAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DiskAllocationRatio
        {
            get;
            set;
        }

        /// <summary>Property hostReplacePolicy: Host Replace Policy.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "hostReplacePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HostReplacePolicy
        {
            get;
            set;
        }

        /// <summary>Property memAllocationRatio: Memory Allocation Ratio.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "memAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MemAllocationRatio
        {
            get;
            set;
        }

        /// <summary>Property openPermission: Whether Open OS Permission.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "openPermission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? OpenPermission
        {
            get;
            set;
        }
    }
}
