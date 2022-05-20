using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::PrefixList`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.PrefixListProps")]
    public class PrefixListProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IPrefixListProps
    {
        /// <summary>Property addressFamily: The IP address family.</summary>
        /// <remarks>
        /// Valid values: IPv4 IPv6
        /// </remarks>
        [JsiiProperty(name: "addressFamily", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AddressFamily
        {
            get;
            set;
        }

        /// <summary>Property maxEntries: The maximum number of entries that the prefix list can contain.</summary>
        /// <remarks>
        /// Valid values: 1 to 200.
        /// </remarks>
        [JsiiProperty(name: "maxEntries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object MaxEntries
        {
            get;
            set;
        }

        /// <summary>Property prefixListName: The name of the prefix.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "prefixListName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PrefixListName
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the prefix list.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property entries:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "entries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosPrefixList.EntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Entries
        {
            get;
            set;
        }
    }
}
