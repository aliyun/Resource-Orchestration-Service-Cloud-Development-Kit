using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway.Datasource
{
    /// <summary>Properties for defining a `RosApis`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apis
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosApisProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.datasource.RosApisProps")]
    public interface IRosApisProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiId: ID of the specified API.
        /// </remarks>
        [JsiiProperty(name: "apiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApiId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: apiName: API name (fuzzy matching).
        /// </remarks>
        [JsiiProperty(name: "apiName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApiName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: catalogId: Catalog number.
        /// </remarks>
        [JsiiProperty(name: "catalogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CatalogId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableTagAuth: Enable label validation.
        /// </remarks>
        [JsiiProperty(name: "enableTagAuth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableTagAuth
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: ID of the specified group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: visibility: Whether the API is public.
        /// </remarks>
        [JsiiProperty(name: "visibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Visibility
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosApis`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apis
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosApisProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.datasource.RosApisProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.Datasource.IRosApisProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: apiId: ID of the specified API.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "apiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApiId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: apiName: API name (fuzzy matching).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "apiName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApiName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: catalogId: Catalog number.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "catalogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CatalogId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableTagAuth: Enable label validation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableTagAuth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableTagAuth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: ID of the specified group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: visibility: Whether the API is public.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "visibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Visibility
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
