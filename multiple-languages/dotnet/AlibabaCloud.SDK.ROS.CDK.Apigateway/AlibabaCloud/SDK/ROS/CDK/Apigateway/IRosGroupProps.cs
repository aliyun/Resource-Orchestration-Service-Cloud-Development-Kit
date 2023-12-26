using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `RosGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-group
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosGroupProps")]
    public interface IRosGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese\/English character.
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: basePath: The base path of API.
        /// </remarks>
        [JsiiProperty(name: "basePath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BasePath
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the Group, less than 180 characters.
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
        /// <strong>Property</strong>: instanceId: API gateway instance ID. For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: internetEnable: Enable or disable internet subdomain. True for enable.
        /// </remarks>
        [JsiiProperty(name: "internetEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetEnable
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: passthroughHeaders: Pass through headers setting. values:
        /// host: pass through host headers
        /// </remarks>
        [JsiiProperty(name: "passthroughHeaders", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PassthroughHeaders
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to group. Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Apigateway.RosGroup.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcIntranetEnable: Enable or disable VPC intranet subdomain. True for enable.
        /// </remarks>
        [JsiiProperty(name: "vpcIntranetEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcIntranetEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-group
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese\/English character.
            /// </remarks>
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: basePath: The base path of API.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "basePath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BasePath
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the Group, less than 180 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: API gateway instance ID. For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: internetEnable: Enable or disable internet subdomain. True for enable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: passthroughHeaders: Pass through headers setting. values:
            /// host: pass through host headers
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "passthroughHeaders", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PassthroughHeaders
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to group. Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Apigateway.RosGroup.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apigateway.RosGroup.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcIntranetEnable: Enable or disable VPC intranet subdomain. True for enable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcIntranetEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcIntranetEnable
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
