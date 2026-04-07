using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Servicecatalog
{
    /// <summary>Properties for defining a `ProductVersion`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IProductVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.ProductVersionProps")]
    public interface IProductVersionProps
    {
        /// <summary>Property productId: The ID of the product to which the product version belongs.</summary>
        [JsiiProperty(name: "productId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProductId
        {
            get;
        }

        /// <summary>Property productVersionName: The name of the product version.</summary>
        [JsiiProperty(name: "productVersionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProductVersionName
        {
            get;
        }

        /// <summary>Property templateType: The type of the product template.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).</description>
        /// <description>RosStandardTemplate: the standard ROS template.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "templateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TemplateType
        {
            get;
        }

        /// <summary>Property templateUrl: The URL of the template.</summary>
        [JsiiProperty(name: "templateUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TemplateUrl
        {
            get;
        }

        /// <summary>Property active: Specifies whether the product version is active.</summary>
        [JsiiProperty(name: "active", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Active
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the product version.</summary>
        /// <remarks>
        /// The value must be 1 to 128 characters in length.
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

        /// <summary>Property guidance: The recommendation information.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Default: No recommendation information is provided. This is the default value.</description>
        /// <description>Recommended: the recommendation version.</description>
        /// <description>Latest: the latest version.</description>
        /// <description>Deprecated: the version that is about to be discontinued.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "guidance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Guidance
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ProductVersion`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IProductVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.ProductVersionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Servicecatalog.IProductVersionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property productId: The ID of the product to which the product version belongs.</summary>
            [JsiiProperty(name: "productId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProductId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property productVersionName: The name of the product version.</summary>
            [JsiiProperty(name: "productVersionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProductVersionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property templateType: The type of the product template.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).</description>
            /// <description>RosStandardTemplate: the standard ROS template.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "templateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TemplateType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property templateUrl: The URL of the template.</summary>
            [JsiiProperty(name: "templateUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TemplateUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property active: Specifies whether the product version is active.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "active", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Active
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the product version.</summary>
            /// <remarks>
            /// The value must be 1 to 128 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property guidance: The recommendation information.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Default: No recommendation information is provided. This is the default value.</description>
            /// <description>Recommended: the recommendation version.</description>
            /// <description>Latest: the latest version.</description>
            /// <description>Deprecated: the version that is about to be discontinued.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "guidance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Guidance
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
