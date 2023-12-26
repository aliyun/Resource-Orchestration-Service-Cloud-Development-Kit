using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `RosResourceShareAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosResourceShareAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosResourceShareAssociationProps")]
    public interface IRosResourceShareAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: resourceShareId: The ID of the resource share.
        /// </remarks>
        [JsiiProperty(name: "resourceShareId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceShareId
        {
            get;
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
        [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosResourceShareAssociation.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
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

        /// <summary>Properties for defining a `RosResourceShareAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosResourceShareAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosResourceShareAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosResourceShareAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceShareId: The ID of the resource share.
            /// </remarks>
            [JsiiProperty(name: "resourceShareId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceShareId
            {
                get => GetInstanceProperty<object>()!;
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
            [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosResourceShareAssociation.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
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
