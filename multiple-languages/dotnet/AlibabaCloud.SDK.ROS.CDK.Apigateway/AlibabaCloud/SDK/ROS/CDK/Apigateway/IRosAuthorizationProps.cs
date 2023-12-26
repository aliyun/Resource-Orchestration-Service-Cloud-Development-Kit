using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `RosAuthorization`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-authorization
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAuthorizationProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosAuthorizationProps")]
    public interface IRosAuthorizationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiIds: APIs to authorize.
        /// </remarks>
        [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApiIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: appIds: APPs are authorized to APIs.
        /// </remarks>
        [JsiiProperty(name: "appIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The id of the group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: stageName: Authorize in this stage.
        /// </remarks>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StageName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: authValidTime: The time (UTC) when the authorization expires. If this parameter is empty, the authorization does not expire.
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

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the authorization, less than 180 characters.
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

        /// <summary>Properties for defining a `RosAuthorization`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-authorization
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAuthorizationProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosAuthorizationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosAuthorizationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: apiIds: APIs to authorize.
            /// </remarks>
            [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApiIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: appIds: APPs are authorized to APIs.
            /// </remarks>
            [JsiiProperty(name: "appIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: The id of the group.
            /// </remarks>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: stageName: Authorize in this stage.
            /// </remarks>
            [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: authValidTime: The time (UTC) when the authorization expires. If this parameter is empty, the authorization does not expire.
            /// Pattern: YYYY-MM-DDThh:mm:ssZ
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "authValidTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthValidTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the authorization, less than 180 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
