using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Servicecatalog
{
    /// <summary>Properties for defining a `RosProductVersion`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosProductVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.RosProductVersionProps")]
    public interface IRosProductVersionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: productId: The ID of the product to which the product version belongs.
        /// </remarks>
        [JsiiProperty(name: "productId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProductId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: productVersionName: The name of the product version.
        /// </remarks>
        [JsiiProperty(name: "productVersionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProductVersionName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: templateType: The type of the product template. Valid values:
        /// * RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).
        /// * RosStandardTemplate: the standard ROS template.
        /// </remarks>
        [JsiiProperty(name: "templateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TemplateType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: templateUrl: The URL of the template.
        /// </remarks>
        [JsiiProperty(name: "templateUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TemplateUrl
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: active: Specifies whether the product version is active.
        /// </remarks>
        [JsiiProperty(name: "active", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Active
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the product version. The value must be 1 to 128 characters in length.
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

        /// <remarks>
        /// <strong>Property</strong>: guidance: The recommendation information. Valid values:
        /// * Default: No recommendation information is provided. This is the default value.
        /// * Recommended: the recommendation version.
        /// * Latest: the latest version.
        /// * Deprecated: the version that is about to be discontinued.
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

        /// <summary>Properties for defining a `RosProductVersion`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosProductVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.RosProductVersionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Servicecatalog.IRosProductVersionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: productId: The ID of the product to which the product version belongs.
            /// </remarks>
            [JsiiProperty(name: "productId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProductId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: productVersionName: The name of the product version.
            /// </remarks>
            [JsiiProperty(name: "productVersionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProductVersionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: templateType: The type of the product template. Valid values:
            /// * RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).
            /// * RosStandardTemplate: the standard ROS template.
            /// </remarks>
            [JsiiProperty(name: "templateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TemplateType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: templateUrl: The URL of the template.
            /// </remarks>
            [JsiiProperty(name: "templateUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TemplateUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: active: Specifies whether the product version is active.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "active", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Active
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the product version. The value must be 1 to 128 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: guidance: The recommendation information. Valid values:
            /// * Default: No recommendation information is provided. This is the default value.
            /// * Recommended: the recommendation version.
            /// * Latest: the latest version.
            /// * Deprecated: the version that is about to be discontinued.
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
