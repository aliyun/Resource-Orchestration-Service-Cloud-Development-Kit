using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cddc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CDDC::DedicatedHostGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cddc.RosDedicatedHostGroupProps")]
    public class RosDedicatedHostGroupProps : AlibabaCloud.SDK.ROS.CDK.Cddc.IRosDedicatedHostGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: engine: Database Engine Type
        /// </remarks>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Engine
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: VPC ID
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: allocationPolicy: Allocation Policy
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "allocationPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AllocationPolicy
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cpuAllocationRatio: Cpu Allocation Ratio
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cpuAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CpuAllocationRatio
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dedicatedHostGroupDesc: Dedicated Host Group Description
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dedicatedHostGroupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DedicatedHostGroupDesc
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskAllocationRatio: Disk Allocation Ratio
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DiskAllocationRatio
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: hostReplacePolicy: Host Replace Policy
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "hostReplacePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HostReplacePolicy
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: memAllocationRatio: Memory Allocation Ratio
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "memAllocationRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MemAllocationRatio
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: openPermission: Whether Open OS Permission
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "openPermission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? OpenPermission
        {
            get;
            set;
        }
    }
}
