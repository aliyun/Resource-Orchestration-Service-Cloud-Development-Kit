using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ALIYUN::ResourceManager::ResourceShare`.</summary>
    [JsiiInterface(nativeType: typeof(IRosResourceShareProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosResourceShareProps")]
    public interface IRosResourceShareProps
    {
        /// <remarks>
        /// <strong>Property</strong>: resourceShareName: The name of the resource share.
        /// The name must be 1 to 50 characters in length.
        /// It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "resourceShareName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceShareName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: allowExternalTargets: Whether to allow sharing to accounts outside the resource directory. Value:
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

        /// <remarks>
        /// <strong>Property</strong>: permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
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

        /// <remarks>
        /// <strong>Property</strong>: resources:
        /// </remarks>
        [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosResourceShare.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Resources
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: targets: The shared target.
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

        /// <summary>Properties for defining a `ALIYUN::ResourceManager::ResourceShare`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosResourceShareProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosResourceShareProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosResourceShareProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceShareName: The name of the resource share.
            /// The name must be 1 to 50 characters in length.
            /// It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "resourceShareName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceShareName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: allowExternalTargets: Whether to allow sharing to accounts outside the resource directory. Value:
            /// false (default): Only allow sharing within the resource directory.
            /// true: Allow sharing to any account.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowExternalTargets", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllowExternalTargets
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "permissionNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PermissionNames
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resources:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosResourceShare.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Resources
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: targets: The shared target.
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
