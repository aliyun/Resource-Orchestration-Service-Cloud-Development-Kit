using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `Authorization`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-authorization
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAuthorizationProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.AuthorizationProps")]
    public interface IAuthorizationProps
    {
        /// <summary>Property apiIds: APIs to authorize.</summary>
        [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApiIds
        {
            get;
        }

        /// <summary>Property appIds: APPs are authorized to APIs.</summary>
        [JsiiProperty(name: "appIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppIds
        {
            get;
        }

        /// <summary>Property groupId: The id of the group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <summary>Property stageName: Authorize in this stage.</summary>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StageName
        {
            get;
        }

        /// <summary>Property authValidTime: The time (UTC) when the authorization expires.</summary>
        /// <remarks>
        /// If this parameter is empty, the authorization does not expire.
        /// Pattern: YYYY-MM-DDThh:mm:ssZ
        /// </remarks>
        [JsiiProperty(name: "authValidTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthValidTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Description of the authorization, less than 180 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Authorization`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-authorization
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAuthorizationProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.AuthorizationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IAuthorizationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property apiIds: APIs to authorize.</summary>
            [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApiIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property appIds: APPs are authorized to APIs.</summary>
            [JsiiProperty(name: "appIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property groupId: The id of the group.</summary>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property stageName: Authorize in this stage.</summary>
            [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property authValidTime: The time (UTC) when the authorization expires.</summary>
            /// <remarks>
            /// If this parameter is empty, the authorization does not expire.
            /// Pattern: YYYY-MM-DDThh:mm:ssZ
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "authValidTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthValidTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Description of the authorization, less than 180 characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
