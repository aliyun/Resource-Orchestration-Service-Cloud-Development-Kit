using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLB::LoadBalancerClone`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.LoadBalancerCloneProps")]
    public class LoadBalancerCloneProps : AlibabaCloud.SDK.ROS.CDK.Slb.ILoadBalancerCloneProps
    {
        /// <summary>Property sourceLoadBalancerId: Source load balancer id to clone.</summary>
        [JsiiProperty(name: "sourceLoadBalancerId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SourceLoadBalancerId
        {
            get;
            set;
        }

        /// <summary>Property backendServers: The list of ECS instance, which will attached to load balancer.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosLoadBalancerClone.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? BackendServers
        {
            get;
            set;
        }

        /// <summary>Property backendServersPolicy: Solution for handle the backend server and weights.</summary>
        /// <remarks>
        /// If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backendServersPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BackendServersPolicy
        {
            get;
            set;
        }

        /// <summary>Property loadBalancerName: Name of created load balancer.</summary>
        /// <remarks>
        /// Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loadBalancerName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? LoadBalancerName
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to slb.</summary>
        /// <remarks>
        /// Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property tagsPolicy: Solution for handle the tags.</summary>
        /// <remarks>
        /// If select 'clone', it will clone from source load balancer. If select 'empty' it will not coppy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
        /// Default is 'empty'.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tagsPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? TagsPolicy
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: The new VSwitch ID to create load balancer instance.</summary>
        /// <remarks>
        /// For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }
    }
}
