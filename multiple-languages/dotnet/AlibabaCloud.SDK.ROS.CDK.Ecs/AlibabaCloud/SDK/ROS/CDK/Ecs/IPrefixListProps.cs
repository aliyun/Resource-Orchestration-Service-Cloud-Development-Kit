using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::PrefixList`.</summary>
    [JsiiInterface(nativeType: typeof(IPrefixListProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.PrefixListProps")]
    public interface IPrefixListProps
    {
        /// <summary>Property addressFamily: The IP address family.</summary>
        /// <remarks>
        /// Valid values: IPv4 IPv6
        /// </remarks>
        [JsiiProperty(name: "addressFamily", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AddressFamily
        {
            get;
        }

        /// <summary>Property maxEntries: The maximum number of entries that the prefix list can contain.</summary>
        /// <remarks>
        /// Valid values: 1 to 200.
        /// </remarks>
        [JsiiProperty(name: "maxEntries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MaxEntries
        {
            get;
        }

        /// <summary>Property prefixListName: The name of the prefix.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "prefixListName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrefixListName
        {
            get;
        }

        /// <summary>Property description: The description of the prefix list.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property entries:.</summary>
        [JsiiProperty(name: "entries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosPrefixList.EntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Entries
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::PrefixList`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPrefixListProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.PrefixListProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IPrefixListProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property addressFamily: The IP address family.</summary>
            /// <remarks>
            /// Valid values: IPv4 IPv6
            /// </remarks>
            [JsiiProperty(name: "addressFamily", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AddressFamily
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property maxEntries: The maximum number of entries that the prefix list can contain.</summary>
            /// <remarks>
            /// Valid values: 1 to 200.
            /// </remarks>
            [JsiiProperty(name: "maxEntries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MaxEntries
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property prefixListName: The name of the prefix.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "prefixListName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrefixListName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the prefix list.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property entries:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "entries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosPrefixList.EntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Entries
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
