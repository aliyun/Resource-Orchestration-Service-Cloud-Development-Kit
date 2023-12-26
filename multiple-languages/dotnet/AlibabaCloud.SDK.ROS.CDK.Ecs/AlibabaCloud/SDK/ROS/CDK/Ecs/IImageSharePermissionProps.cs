using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ImageSharePermission`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagesharepermission
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IImageSharePermissionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ImageSharePermissionProps")]
    public interface IImageSharePermissionProps
    {
        /// <summary>Property imageId: The shared custom image ID.</summary>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ImageId
        {
            get;
        }

        /// <summary>Property accounts: Alibaba Cloud account IDs authorized to share the image.</summary>
        [JsiiProperty(name: "accounts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Accounts
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isPublic: Whether to publish or remove community mirrors.</summary>
        /// <remarks>
        /// If this property is not set, no changes will be made to the community image
        /// </remarks>
        [JsiiProperty(name: "isPublic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsPublic
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keepPermission: Whether to keep the original sharing permissions when resource is deleted, default is true.If set to false, Accounts will be removed if Accounts is set and IsPublic will be changed if IsPublic is set.</summary>
        [JsiiProperty(name: "keepPermission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeepPermission
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ImageSharePermission`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagesharepermission
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IImageSharePermissionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ImageSharePermissionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IImageSharePermissionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property imageId: The shared custom image ID.</summary>
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accounts: Alibaba Cloud account IDs authorized to share the image.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accounts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Accounts
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isPublic: Whether to publish or remove community mirrors.</summary>
            /// <remarks>
            /// If this property is not set, no changes will be made to the community image
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isPublic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsPublic
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property keepPermission: Whether to keep the original sharing permissions when resource is deleted, default is true.If set to false, Accounts will be removed if Accounts is set and IsPublic will be changed if IsPublic is set.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "keepPermission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeepPermission
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
