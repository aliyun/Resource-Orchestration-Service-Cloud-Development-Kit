using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ApiGateway::Apis`.</summary>
    [JsiiInterface(nativeType: typeof(IApisProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.datasource.ApisProps")]
    public interface IApisProps
    {
        /// <summary>Property apiId: ID of the specified API.</summary>
        [JsiiProperty(name: "apiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApiId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property apiName: API name (fuzzy matching).</summary>
        [JsiiProperty(name: "apiName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApiName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property catalogId: Catalog number.</summary>
        [JsiiProperty(name: "catalogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CatalogId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableTagAuth: Enable label validation.</summary>
        [JsiiProperty(name: "enableTagAuth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableTagAuth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property groupId: ID of the specified group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property visibility: Whether the API is public.</summary>
        [JsiiProperty(name: "visibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Visibility
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::ApiGateway::Apis`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IApisProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.datasource.ApisProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.Datasource.IApisProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property apiId: ID of the specified API.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "apiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApiId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property apiName: API name (fuzzy matching).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "apiName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApiName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property catalogId: Catalog number.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "catalogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CatalogId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableTagAuth: Enable label validation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableTagAuth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableTagAuth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property groupId: ID of the specified group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property visibility: Whether the API is public.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "visibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Visibility
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
