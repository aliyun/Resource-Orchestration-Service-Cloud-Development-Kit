using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ResourceShareAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IResourceShareAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ResourceShareAssociationProps")]
    public interface IResourceShareAssociationProps
    {
        /// <summary>Property resourceShareId: The ID of the resource share.</summary>
        [JsiiProperty(name: "resourceShareId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceShareId
        {
            get;
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
        [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosResourceShareAssociation.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
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

        /// <summary>Properties for defining a `ResourceShareAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IResourceShareAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ResourceShareAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IResourceShareAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property resourceShareId: The ID of the resource share.</summary>
            [JsiiProperty(name: "resourceShareId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceShareId
            {
                get => GetInstanceProperty<object>()!;
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
            [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosResourceShareAssociation.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
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
