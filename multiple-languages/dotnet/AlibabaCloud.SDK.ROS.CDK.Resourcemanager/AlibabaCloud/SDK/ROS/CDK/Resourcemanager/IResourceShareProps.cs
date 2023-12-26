using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ResourceShare`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshare
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IResourceShareProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ResourceShareProps")]
    public interface IResourceShareProps
    {
        /// <summary>Property resourceShareName: The name of the resource share.</summary>
        /// <remarks>
        /// The name must be 1 to 50 characters in length.
        /// It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "resourceShareName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceShareName
        {
            get;
        }

        /// <summary>Property allowExternalTargets: Whether to allow sharing to accounts outside the resource directory.</summary>
        /// <remarks>
        /// Value:
        /// false (default): Only allow sharing within the resource directory.
        /// true: Allow sharing to any account.
        /// </remarks>
        [JsiiProperty(name: "allowExternalTargets", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllowExternalTargets
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property permissionNames: Sharing permission name.</summary>
        /// <remarks>
        /// When empty, the system automatically binds the default permissions associated with the resource type.
        /// </remarks>
        [JsiiProperty(name: "permissionNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PermissionNames
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resources:.</summary>
        [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosResourceShare.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Resources
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property targets: The shared target.</summary>
        /// <remarks>
        /// A shared target shares the resources of resource owners. You can share your resources
        /// only with the member accounts in your resource directory. A shared target is indicated
        /// by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
        /// </remarks>
        [JsiiProperty(name: "targets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Targets
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ResourceShare`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshare
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IResourceShareProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ResourceShareProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IResourceShareProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property resourceShareName: The name of the resource share.</summary>
            /// <remarks>
            /// The name must be 1 to 50 characters in length.
            /// It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "resourceShareName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceShareName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property allowExternalTargets: Whether to allow sharing to accounts outside the resource directory.</summary>
            /// <remarks>
            /// Value:
            /// false (default): Only allow sharing within the resource directory.
            /// true: Allow sharing to any account.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowExternalTargets", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllowExternalTargets
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property permissionNames: Sharing permission name.</summary>
            /// <remarks>
            /// When empty, the system automatically binds the default permissions associated with the resource type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "permissionNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PermissionNames
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resources:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosResourceShare.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Resources
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property targets: The shared target.</summary>
            /// <remarks>
            /// A shared target shares the resources of resource owners. You can share your resources
            /// only with the member accounts in your resource directory. A shared target is indicated
            /// by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Targets
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
